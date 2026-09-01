import { Request, Response } from "express";

import { prisma } from "../helpers/prisma";

import {
  StudentStatus,
  Role,
} from "@prisma/client";

import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../helpers/jwt.helpers";

// ============================================================
// TYPES
// ============================================================

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    role: Role;
  };
}

// ============================================================
// HELPERS
// ============================================================

const getFullName = (
  firstName: string,
  middleName: string,
  lastName: string
): string => {
  return `${firstName} ${middleName} ${lastName}`.trim();
};

const isValidId = (id: number): boolean => {
  return Number.isInteger(id) && id > 0;
};

const isValidRole = (role: unknown): role is Role => {
  return (
    Object.values(Role).includes(role as Role) &&
    role !== Role.student
  );
};

const isValidStudentStatus = (
  status: unknown
): status is StudentStatus => {
  return Object.values(StudentStatus).includes(
    status as StudentStatus
  );
};

// ============================================================
// AUTHORIZATION
// ============================================================

/**
 * Student:
 * - Read only
 * - Own information only
 *
 * Other roles:
 * - Can view student records
 */
const canViewStudent = (
  req: AuthenticatedRequest,
  studentId: number
): boolean => {
  if (!req.user) {
    return false;
  }

  if (req.user.role === Role.student) {
    return req.user.id === studentId;
  }

  return true;
};

/**
 * Student cannot perform management actions.
 *
 * Other roles can manage students.
 *
 * Route-level authorization middleware should still
 * be used as the primary authorization layer.
 */
const canManageStudents = (
  req: AuthenticatedRequest
): boolean => {
  if (!req.user) {
    return false;
  }

  return req.user.role === Role.main_monitor;
};

// ============================================================
// CREATE STUDENT
// POST /students
// ============================================================

/**
 * IMPORTANT:
 *
 * This endpoint is intentionally NOT protected by
 * authentication.
 *
 * Reason:
 * The system initially contains students only.
 * There may be no main_monitor yet.
 *
 * Every newly registered student starts with:
 *
 * role   = student
 * status = active
 *
 * A student can later be promoted by an authenticated
 * management user through PATCH /students/:id/role
 */
export const createStudent = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      student_code,
      first_name,
      middle_name,
      last_name,
      phone,
    } = req.body;

    // ----------------------------------------------------------
    // REQUIRED FIELDS
    // ----------------------------------------------------------

    if (
      student_code === undefined ||
      first_name === undefined ||
      middle_name === undefined ||
      last_name === undefined ||
      phone === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const studentCode = String(student_code).trim();
    const firstName = String(first_name).trim();
    const middleName = String(middle_name).trim();
    const lastName = String(last_name).trim();
    const phoneNumber = String(phone).trim();

    if (
      !studentCode ||
      !firstName ||
      !middleName ||
      !lastName ||
      !phoneNumber
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    // ----------------------------------------------------------
    // DUPLICATE STUDENT CODE
    // ----------------------------------------------------------

    const existingStudent =
      await prisma.student.findFirst({
        where: {
          student_code: studentCode,
          deleted_at: null,
        },
      });

    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: "Student code already exists",
      });
    }

    // ----------------------------------------------------------
    // DUPLICATE PHONE
    // ----------------------------------------------------------

    const existingPhone =
      await prisma.student.findFirst({
        where: {
          phone: phoneNumber,
          deleted_at: null,
        },
      });

    if (existingPhone) {
      return res.status(409).json({
        success: false,
        message: "Phone number already exists",
      });
    }

    // ----------------------------------------------------------
    // CREATE STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.create({
        data: {
          student_code: studentCode,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          phone: phoneNumber,

          // New account always starts as normal student.
          role: Role.student,
          status: StudentStatus.active,
        },
      });

    return res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: {
        id: student.id,
        student_code: student.student_code,
        first_name: student.first_name,
        middle_name: student.middle_name,
        last_name: student.last_name,
        fullname: getFullName(
          student.first_name,
          student.middle_name,
          student.last_name
        ),
        phone: student.phone,
        role: student.role,
        status: student.status,
        created_at: student.created_at,
      },
    });
  } catch (error) {
    console.error("Create student error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to register student",
    });
  }
};

// ============================================================
// GET ALL STUDENTS
// GET /students?page=1&limit=10
// ============================================================

export const getStudents = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    // ----------------------------------------------------------
    // AUTHENTICATION
    // ----------------------------------------------------------

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    // ----------------------------------------------------------
    // STUDENT = OWN DATA ONLY
    // ----------------------------------------------------------

    if (req.user.role === Role.student) {
      const student =
        await prisma.student.findFirst({
          where: {
            id: req.user.id,
            deleted_at: null,
          },
          include: {
            class_leaders: true,
          },
        });

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      return res.status(200).json({
        success: true,
        count: 1,
        data: [
          {
            ...student,
            fullname: getFullName(
              student.first_name,
              student.middle_name,
              student.last_name
            ),
          },
        ],
        pagination: {
          page: 1,
          limit: 1,
          total: 1,
          totalPages: 1,
          hasNextPage: false,
          hasPreviousPage: false,
        },
      });
    }

    // ----------------------------------------------------------
    // MANAGEMENT ROLES = ALL STUDENTS
    // ----------------------------------------------------------

    const rawPage = Number(req.query.page);
    const rawLimit = Number(req.query.limit);

    const page =
      Number.isFinite(rawPage) && rawPage > 0
        ? Math.floor(rawPage)
        : 1;

    const limit =
      Number.isFinite(rawLimit) && rawLimit > 0
        ? Math.min(Math.floor(rawLimit), 100)
        : 10;

    const skip = (page - 1) * limit;

    // ----------------------------------------------------------
    // QUERY
    // ----------------------------------------------------------

    const [students, total] =
      await prisma.$transaction([
        prisma.student.findMany({
          where: {
            deleted_at: null,
          },
          include: {
            class_leaders: true,
          },
          orderBy: {
            created_at: "desc",
          },
          skip,
          take: limit,
        }),

        prisma.student.count({
          where: {
            deleted_at: null,
          },
        }),
      ]);

    // ----------------------------------------------------------
    // FORMAT
    // ----------------------------------------------------------

    const data = students.map((student) => ({
      ...student,
      fullname: getFullName(
        student.first_name,
        student.middle_name,
        student.last_name
      ),
    }));

    const totalPages =
      total === 0
        ? 0
        : Math.ceil(total / limit);

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage:
          totalPages > 0 &&
          page < totalPages,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Get students error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch students",
    });
  }
};

// ============================================================
// GET STUDENT BY ID
// GET /students/:id
// ============================================================

export const getStudentById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (!canViewStudent(req, id)) {
      return res.status(403).json({
        success: false,
        message:
          "You can only view your own information",
      });
    }

    // ----------------------------------------------------------
    // GET STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          id,
          deleted_at: null,
        },
        include: {
          class_leaders: true,

          achievements: {
            where: {
              deleted_at: null,
            },
            orderBy: {
              achieved_at: "desc",
            },
          },

          discipline_cases: {
            where: {
              deleted_at: null,
            },
            orderBy: {
              incident_date: "desc",
            },
          },

          class_impacts: {
            where: {
              deleted_at: null,
            },
            orderBy: {
              impact_date: "desc",
            },
          },

          competitions: {
            where: {
              deleted_at: null,
            },
            include: {
              competition: true,
            },
            orderBy: {
              joined_at: "desc",
            },
          },
        },
      });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        ...student,
        fullname: getFullName(
          student.first_name,
          student.middle_name,
          student.last_name
        ),
      },
    });
  } catch (error) {
    console.error(
      "Get student by ID error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to fetch student",
    });
  }
};

// ============================================================
// GET STUDENT BY CODE
// GET /students/code/:student_code
// ============================================================

export const getStudentByCode = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const studentCode =
      String(
        req.params.student_code
      ).trim();

    if (!studentCode) {
      return res.status(400).json({
        success: false,
        message: "Student code is required",
      });
    }

    // ----------------------------------------------------------
    // FIND STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          student_code: studentCode,
          deleted_at: null,
        },
        include: {
          class_leaders: true,
        },
      });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student code not found",
      });
    }

    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (
      !canViewStudent(
        req,
        student.id
      )
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You can only view your own information",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        ...student,
        fullname: getFullName(
          student.first_name,
          student.middle_name,
          student.last_name
        ),
      },
    });
  } catch (error) {
    console.error(
      "Get student by code error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to find student",
    });
  }
};

// ============================================================
// LOGIN
// POST /students/login
// ============================================================

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const { student_code } = req.body;

    // ----------------------------------------------------------
    // VALIDATION
    // ----------------------------------------------------------

    if (student_code === undefined) {
      return res.status(400).json({
        success: false,
        message: "Student code is required",
      });
    }

    const studentCode =
      String(student_code).trim();

    if (!studentCode) {
      return res.status(400).json({
        success: false,
        message: "Student code is required",
      });
    }

    // ----------------------------------------------------------
    // FIND STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          student_code: studentCode,
          deleted_at: null,
        },
        include: {
          class_leaders: true,
        },
      });

    if (!student) {
      return res.status(401).json({
        success: false,
        message: "Invalid student code",
      });
    }

    // ----------------------------------------------------------
    // STATUS
    // ----------------------------------------------------------

    if (
      student.status !==
      StudentStatus.active
    ) {
      return res.status(403).json({
        success: false,
        message:
          `Account is ${student.status}`,
      });
    }

    // ----------------------------------------------------------
    // TOKENS
    // ----------------------------------------------------------

    const accessToken =
      createAccessToken({
        id: student.id,
        role: student.role,
      });

    const refreshToken =
      createRefreshToken({
        id: student.id,
        role: student.role,
      });

    // ----------------------------------------------------------
    // RESPONSE
    // ----------------------------------------------------------

    return res.status(200).json({
      success: true,
      message: "Login successful",

      data: {
        student: {
          id: student.id,
          student_code:
            student.student_code,

          fullname: getFullName(
            student.first_name,
            student.middle_name,
            student.last_name
          ),

          phone: student.phone,
          role: student.role,
          status: student.status,

          class_leader:
            student.class_leaders,
        },

        access_token: accessToken,
        refresh_token: refreshToken,
      },
    });
  } catch (error) {
    console.error(
      "Student login error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to login",
    });
  }
};

// ============================================================
// REFRESH ACCESS TOKEN
// POST /students/refresh
// ============================================================

export const refreshToken = async (
  req: Request,
  res: Response
) => {
  try {
    const { refresh_token } = req.body;

    // ----------------------------------------------------------
    // VALIDATION
    // ----------------------------------------------------------

    if (
      refresh_token === undefined ||
      !String(refresh_token).trim()
    ) {
      return res.status(401).json({
        success: false,
        message:
          "Refresh token is required",
      });
    }

    // ----------------------------------------------------------
    // VERIFY TOKEN
    // ----------------------------------------------------------

    const decoded =
      verifyRefreshToken(
        String(refresh_token).trim()
      );

    // ----------------------------------------------------------
    // FIND STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          id: decoded.id,
          deleted_at: null,
        },
        select: {
          id: true,
          role: true,
          status: true,
        },
      });

    if (!student) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    // ----------------------------------------------------------
    // STATUS
    // ----------------------------------------------------------

    if (
      student.status !==
      StudentStatus.active
    ) {
      return res.status(403).json({
        success: false,
        message:
          `Account is ${student.status}`,
      });
    }

    // ----------------------------------------------------------
    // ROLE
    // ----------------------------------------------------------

    if (
      student.role !==
      decoded.role
    ) {
      return res.status(401).json({
        success: false,
        message:
          "Refresh token is no longer valid",
      });
    }

    // ----------------------------------------------------------
    // NEW ACCESS TOKEN
    // ----------------------------------------------------------

    const accessToken =
      createAccessToken({
        id: student.id,
        role: student.role,
      });

    return res.status(200).json({
      success: true,
      message:
        "Access token refreshed",

      data: {
        access_token: accessToken,
      },
    });
  } catch (error) {
    console.error(
      "Refresh token error:",
      error
    );

    return res.status(401).json({
      success: false,
      message:
        "Invalid or expired refresh token",
    });
  }
};

// ============================================================
// LOGOUT
// POST /students/logout
// ============================================================

export const logout = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    /**
     * Current schema does not contain:
     *
     * RefreshToken
     * Session
     *
     * Therefore the backend cannot revoke the
     * refresh token yet.
     *
     * Frontend should remove:
     *
     * access_token
     * refresh_token
     */

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error(
      "Logout error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to logout",
    });
  }
};

// ============================================================
// UPDATE STUDENT
// PATCH /students/:id
// ============================================================

export const updateStudent = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (!canManageStudents(req)) {
      return res.status(403).json({
        success: false,
        message:
          "Students have read-only access",
      });
    }

    const id = Number(req.params.id);

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    const {
      student_code,
      first_name,
      middle_name,
      last_name,
      phone,
    } = req.body;

    // ----------------------------------------------------------
    // FIND STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          id,
          deleted_at: null,
        },
      });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // ----------------------------------------------------------
    // UPDATE DATA
    // ----------------------------------------------------------

    const updateData: {
      student_code?: string;
      first_name?: string;
      middle_name?: string;
      last_name?: string;
      phone?: string;
    } = {};

    // ----------------------------------------------------------
    // STUDENT CODE
    // ----------------------------------------------------------

    if (student_code !== undefined) {
      const value =
        String(student_code).trim();

      if (!value) {
        return res.status(400).json({
          success: false,
          message:
            "Student code cannot be empty",
        });
      }

      if (
        value !==
        student.student_code
      ) {
        const exists =
          await prisma.student.findFirst({
            where: {
              student_code: value,
              deleted_at: null,
              NOT: {
                id,
              },
            },
          });

        if (exists) {
          return res.status(409).json({
            success: false,
            message:
              "Student code already exists",
          });
        }
      }

      updateData.student_code = value;
    }

    // ----------------------------------------------------------
    // FIRST NAME
    // ----------------------------------------------------------

    if (first_name !== undefined) {
      const value =
        String(first_name).trim();

      if (!value) {
        return res.status(400).json({
          success: false,
          message:
            "First name cannot be empty",
        });
      }

      updateData.first_name = value;
    }

    // ----------------------------------------------------------
    // MIDDLE NAME
    // ----------------------------------------------------------

    if (middle_name !== undefined) {
      const value =
        String(middle_name).trim();

      if (!value) {
        return res.status(400).json({
          success: false,
          message:
            "Middle name cannot be empty",
        });
      }

      updateData.middle_name = value;
    }

    // ----------------------------------------------------------
    // LAST NAME
    // ----------------------------------------------------------

    if (last_name !== undefined) {
      const value =
        String(last_name).trim();

      if (!value) {
        return res.status(400).json({
          success: false,
          message:
            "Last name cannot be empty",
        });
      }

      updateData.last_name = value;
    }

    // ----------------------------------------------------------
    // PHONE
    // ----------------------------------------------------------

    if (phone !== undefined) {
      const value =
        String(phone).trim();

      if (!value) {
        return res.status(400).json({
          success: false,
          message:
            "Phone number cannot be empty",
        });
      }

      if (value !== student.phone) {
        const exists =
          await prisma.student.findFirst({
            where: {
              phone: value,
              deleted_at: null,
              NOT: {
                id,
              },
            },
          });

        if (exists) {
          return res.status(409).json({
            success: false,
            message:
              "Phone number already exists",
          });
        }
      }

      updateData.phone = value;
    }

    // ----------------------------------------------------------
    // NO FIELDS
    // ----------------------------------------------------------

    if (
      Object.keys(updateData).length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "No fields provided for update",
      });
    }

    // ----------------------------------------------------------
    // UPDATE
    // ----------------------------------------------------------

    const updatedStudent =
      await prisma.student.update({
        where: {
          id,
        },
        data: updateData,
        include: {
          class_leaders: true,
        },
      });

    return res.status(200).json({
      success: true,
      message:
        "Student updated successfully",

      data: {
        ...updatedStudent,
        fullname: getFullName(
          updatedStudent.first_name,
          updatedStudent.middle_name,
          updatedStudent.last_name
        ),
      },
    });
  } catch (error) {
    console.error(
      "Update student error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update student",
    });
  }
};

// ============================================================
// UPDATE STUDENT STATUS
// PATCH /students/:id/status
// ============================================================

export const updateStudentStatus = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (!canManageStudents(req)) {
      return res.status(403).json({
        success: false,
        message:
          "Students cannot change student status",
      });
    }

    const id = Number(req.params.id);
    const { status } = req.body;

    // ----------------------------------------------------------
    // ID
    // ----------------------------------------------------------

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    // ----------------------------------------------------------
    // STATUS
    // ----------------------------------------------------------

    if (!isValidStudentStatus(status)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid student status",
      });
    }

    // ----------------------------------------------------------
    // FIND STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          id,
          deleted_at: null,
        },
      });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // ----------------------------------------------------------
    // UPDATE
    // ----------------------------------------------------------

    const updatedStudent =
      await prisma.student.update({
        where: {
          id,
        },
        data: {
          status,
        },
      });

    return res.status(200).json({
      success: true,
      message:
        "Student status updated successfully",

      data: {
        ...updatedStudent,
        fullname: getFullName(
          updatedStudent.first_name,
          updatedStudent.middle_name,
          updatedStudent.last_name
        ),
      },
    });
  } catch (error) {
    console.error(
      "Update student status error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update student status",
    });
  }
};

// ============================================================
// UPDATE STUDENT ROLE
// PATCH /students/:id/role
// ============================================================

export const updateStudentRole = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (!canManageStudents(req)) {
      return res.status(403).json({
        success: false,
        message:
          "Students cannot change student roles",
      });
    }

    const id = Number(req.params.id);
    const { role } = req.body;

    // ----------------------------------------------------------
    // ID
    // ----------------------------------------------------------

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    // ----------------------------------------------------------
    // ROLE
    // ----------------------------------------------------------

    if (!isValidRole(role)) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid student role",
      });
    }

    // ----------------------------------------------------------
    // FIND STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          id,
          deleted_at: null,
        },
        include: {
          class_leaders: true,
        },
      });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // ----------------------------------------------------------
    // SAME ROLE
    // ----------------------------------------------------------

    if (student.role === role) {
      return res.status(200).json({
        success: true,
        message:
          "Student already has this role",

        data: {
          ...student,
          fullname: getFullName(
            student.first_name,
            student.middle_name,
            student.last_name
          ),
        },
      });
    }

    // ----------------------------------------------------------
    // UPDATE ROLE + CLASS LEADER
    // ----------------------------------------------------------

    const result =
      await prisma.$transaction(
        async (tx) => {
          // ----------------------------------------------
          // UPDATE STUDENT ROLE
          // ----------------------------------------------

          const updatedStudent =
            await tx.student.update({
              where: {
                id,
              },
              data: {
                role,
              },
            });

          // ----------------------------------------------
          // LEADER ROLE
          // ----------------------------------------------

          if (role !== Role.student) {
            if (!student.class_leaders) {
              await tx.classLeader.create({
                data: {
                  student_id: student.id,
                },
              });
            } else {
              await tx.classLeader.update({
                where: {
                  student_id: student.id,
                },
                data: {
                  deleted_at: null,
                },
              });
            }
          }

          // ----------------------------------------------
          // BACK TO NORMAL STUDENT
          // ----------------------------------------------

          if (
            role === Role.student &&
            student.class_leaders
          ) {
            await tx.classLeader.update({
              where: {
                student_id: student.id,
              },
              data: {
                deleted_at: new Date(),
              },
            });
          }

          return updatedStudent;
        }
      );

    return res.status(200).json({
      success: true,
      message:
        "Student role updated successfully",

      data: {
        ...result,
        fullname: getFullName(
          result.first_name,
          result.middle_name,
          result.last_name
        ),
      },
    });
  } catch (error) {
    console.error(
      "Update student role error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update student role",
    });
  }
};

// ============================================================
// SOFT DELETE STUDENT
// DELETE /students/:id
// ============================================================

export const deleteStudent = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (!canManageStudents(req)) {
      return res.status(403).json({
        success: false,
        message:
          "Students cannot delete students",
      });
    }

    const id = Number(req.params.id);

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    // ----------------------------------------------------------
    // FIND STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findFirst({
        where: {
          id,
          deleted_at: null,
        },
      });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // ----------------------------------------------------------
    // SOFT DELETE
    // ----------------------------------------------------------

    const deletedAt = new Date();

    await prisma.$transaction(
      async (tx) => {
        await tx.student.update({
          where: {
            id,
          },
          data: {
            deleted_at: deletedAt,
          },
        });

        await tx.classLeader.updateMany({
          where: {
            student_id: id,
            deleted_at: null,
          },
          data: {
            deleted_at: deletedAt,
          },
        });
      }
    );

    return res.status(200).json({
      success: true,
      message:
        "Student moved to recycle bin",
    });
  } catch (error) {
    console.error(
      "Delete student error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to delete student",
    });
  }
};

// ============================================================
// RESTORE STUDENT
// PATCH /students/:id/restore
// ============================================================

export const restoreStudent = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (!canManageStudents(req)) {
      return res.status(403).json({
        success: false,
        message:
          "Students cannot restore students",
      });
    }

    const id = Number(req.params.id);

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    // ----------------------------------------------------------
    // FIND DELETED STUDENT
    // ----------------------------------------------------------

    const student =
      await prisma.student.findUnique({
        where: {
          id,
        },
        include: {
          class_leaders: true,
        },
      });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    // ----------------------------------------------------------
    // ALREADY ACTIVE
    // ----------------------------------------------------------

    if (student.deleted_at === null) {
      return res.status(400).json({
        success: false,
        message:
          "Student is already active",
      });
    }

    // ----------------------------------------------------------
    // RESTORE
    // ----------------------------------------------------------

    const restoredStudent =
      await prisma.$transaction(
        async (tx) => {
          const restored =
            await tx.student.update({
              where: {
                id,
              },
              data: {
                deleted_at: null,
              },
            });

          // ----------------------------------------------
          // RESTORE LEADER RECORD
          // ----------------------------------------------

          if (
            student.role !== Role.student &&
            student.class_leaders
          ) {
            await tx.classLeader.update({
              where: {
                student_id: id,
              },
              data: {
                deleted_at: null,
              },
            });
          }

          return restored;
        }
      );

    return res.status(200).json({
      success: true,
      message:
        "Student restored successfully",

      data: {
        ...restoredStudent,
        fullname: getFullName(
          restoredStudent.first_name,
          restoredStudent.middle_name,
          restoredStudent.last_name
        ),
      },
    });
  } catch (error) {
    console.error(
      "Restore student error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to restore student",
    });
  }
};

// ============================================================
// GET RECYCLE BIN
// GET /students/recycle-bin
// ============================================================

export const getDeletedStudents = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    // ----------------------------------------------------------
    // AUTHORIZATION
    // ----------------------------------------------------------

    if (!canManageStudents(req)) {
      return res.status(403).json({
        success: false,
        message:
          "Students cannot access recycle bin",
      });
    }

    // ----------------------------------------------------------
    // GET DELETED STUDENTS
    // ----------------------------------------------------------

    const students =
      await prisma.student.findMany({
        where: {
          deleted_at: {
            not: null,
          },
        },
        include: {
          class_leaders: true,
        },
        orderBy: {
          deleted_at: "desc",
        },
      });

    // ----------------------------------------------------------
    // FORMAT
    // ----------------------------------------------------------

    const data = students.map(
      (student) => ({
        ...student,
        fullname: getFullName(
          student.first_name,
          student.middle_name,
          student.last_name
        ),
      })
    );

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.error(
      "Get deleted students error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch recycle bin",
    });
  }
};

