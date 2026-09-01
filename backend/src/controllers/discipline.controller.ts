import { Response } from "express";
import { prisma } from "../helpers/prisma";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";
import {
  DisciplineAction,
  DisciplineSeverity,
  Role,
} from "@prisma/client";

const isValidId = (id: number): boolean =>
  Number.isInteger(id) && id > 0;

const isValidDisciplineSeverity = (
  value: unknown
): value is DisciplineSeverity =>
  Object.values(DisciplineSeverity).includes(
    value as DisciplineSeverity
  );

const isValidDisciplineAction = (
  value: unknown
): value is DisciplineAction =>
  Object.values(DisciplineAction).includes(
    value as DisciplineAction
  );

const getFullName = (
  firstName: string,
  middleName: string,
  lastName: string
): string =>
  `${firstName} ${middleName} ${lastName}`.trim();

const canViewDisciplineCase = (
  req: AuthenticatedRequest,
  studentId: number
): boolean => {
  if (!req.user) return false;

  if (req.user.role === Role.student) {
    return req.user.id === studentId;
  }

  return true;
};

const canManageDisciplineCases = (
  req: AuthenticatedRequest
): boolean => {
  if (!req.user) return false;

  return (
    req.user.role === Role.main_monitor ||
    req.user.role === Role.assistant_monitor ||
    req.user.role === Role.discipline_leader
  );
};

const ensureClassLeader = async (
  req: AuthenticatedRequest
): Promise<number> => {
  if (!req.user) {
    throw new Error("Authentication required");
  }

  const leader = await prisma.classLeader.upsert({
    where: {
      student_id: req.user.id,
    },
    create: {
      student_id: req.user.id,
    },
    update: {},
  });

  return leader.id;
};

const formatDisciplineCase = (record: any) => ({
  ...record,
  student: record.student
    ? {
        ...record.student,
        fullname: getFullName(
          record.student.first_name,
          record.student.middle_name,
          record.student.last_name
        ),
      }
    : null,
  registered_by: record.registered_by
    ? {
        ...record.registered_by,
        student: record.registered_by.student
          ? {
              ...record.registered_by.student,
              fullname: getFullName(
                record.registered_by.student.first_name,
                record.registered_by.student.middle_name,
                record.registered_by.student.last_name
              ),
            }
          : null,
      }
    : null,
});

export const getDisciplineCases = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (req.user.role === Role.student) {
      const records = await prisma.disciplineCase.findMany({
        where: {
          student_id: req.user.id,
          deleted_at: null,
        },
        include: {
          student: true,
          registered_by: {
            include: {
              student: true,
            },
          },
        },
        orderBy: {
          incident_date: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        count: records.length,
        data: records.map(formatDisciplineCase),
      });
    }

    const records = await prisma.disciplineCase.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        student: true,
        registered_by: {
          include: {
            student: true,
          },
        },
      },
      orderBy: {
        incident_date: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: records.length,
      data: records.map(formatDisciplineCase),
    });
  } catch (error) {
    console.error("Get discipline cases error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch discipline cases",
    });
  }
};

export const getDisciplineCaseById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid discipline case ID",
      });
    }

    const record = await prisma.disciplineCase.findFirst({
      where: {
        id,
        deleted_at: null,
      },
      include: {
        student: true,
        registered_by: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Discipline case not found",
      });
    }

    if (!canViewDisciplineCase(req, record.student_id)) {
      return res.status(403).json({
        success: false,
        message: "You can only view your own discipline records",
      });
    }

    return res.status(200).json({
      success: true,
      data: formatDisciplineCase(record),
    });
  } catch (error) {
    console.error("Get discipline case by ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch discipline case",
    });
  }
};

export const createDisciplineCase = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageDisciplineCases(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to create discipline cases",
      });
    }

    const {
      student_id,
      title,
      description,
      severity,
      action,
      incident_date,
    } = req.body;

    if (
      student_id === undefined ||
      title === undefined ||
      description === undefined ||
      severity === undefined ||
      action === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "student_id, title, description, severity, and action are required",
      });
    }

    const studentId = Number(student_id);
    if (!isValidId(studentId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    if (!isValidDisciplineSeverity(severity)) {
      return res.status(400).json({
        success: false,
        message: "Invalid discipline severity",
      });
    }

    if (!isValidDisciplineAction(action)) {
      return res.status(400).json({
        success: false,
        message: "Invalid discipline action",
      });
    }

    const student = await prisma.student.findFirst({
      where: {
        id: studentId,
        deleted_at: null,
      },
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const titleValue = String(title).trim();
    if (!titleValue) {
      return res.status(400).json({
        success: false,
        message: "Title cannot be empty",
      });
    }

    const descriptionValue = String(description).trim();
    if (!descriptionValue) {
      return res.status(400).json({
        success: false,
        message: "Description cannot be empty",
      });
    }

    const registeredById = await ensureClassLeader(req);

    const record = await prisma.disciplineCase.create({
      data: {
        title: titleValue,
        description: descriptionValue,
        severity,
        action,
        incident_date:
          incident_date === undefined
            ? new Date()
            : new Date(incident_date),
        student_id: studentId,
        registered_by_id: registeredById,
      },
      include: {
        student: true,
        registered_by: {
          include: {
            student: true,
          },
        },
      },
    });

    return res.status(201).json({
      success: true,
      message: "Discipline case created successfully",
      data: formatDisciplineCase(record),
    });
  } catch (error) {
    console.error("Create discipline case error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create discipline case",
    });
  }
};

export const updateDisciplineCase = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageDisciplineCases(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update discipline cases",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid discipline case ID",
      });
    }

    const existing = await prisma.disciplineCase.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Discipline case not found",
      });
    }

    const {
      student_id,
      title,
      description,
      severity,
      action,
      incident_date,
    } = req.body;

    const updateData: Record<string, any> = {};

    if (student_id !== undefined) {
      const studentId = Number(student_id);
      if (!isValidId(studentId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid student ID",
        });
      }

      const student = await prisma.student.findFirst({
        where: {
          id: studentId,
          deleted_at: null,
        },
      });

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      updateData.student_id = studentId;
    }

    if (title !== undefined) {
      const value = String(title).trim();
      if (!value) {
        return res.status(400).json({
          success: false,
          message: "Title cannot be empty",
        });
      }
      updateData.title = value;
    }

    if (description !== undefined) {
      const value = String(description).trim();
      if (!value) {
        return res.status(400).json({
          success: false,
          message: "Description cannot be empty",
        });
      }
      updateData.description = value;
    }

    if (severity !== undefined) {
      if (!isValidDisciplineSeverity(severity)) {
        return res.status(400).json({
          success: false,
          message: "Invalid discipline severity",
        });
      }
      updateData.severity = severity;
    }

    if (action !== undefined) {
      if (!isValidDisciplineAction(action)) {
        return res.status(400).json({
          success: false,
          message: "Invalid discipline action",
        });
      }
      updateData.action = action;
    }

    if (incident_date !== undefined) {
      updateData.incident_date = new Date(incident_date);
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided for update",
      });
    }

    const record = await prisma.disciplineCase.update({
      where: { id },
      data: updateData,
      include: {
        student: true,
        registered_by: {
          include: {
            student: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Discipline case updated successfully",
      data: formatDisciplineCase(record),
    });
  } catch (error) {
    console.error("Update discipline case error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update discipline case",
    });
  }
};

export const deleteDisciplineCase = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageDisciplineCases(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete discipline cases",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid discipline case ID",
      });
    }

    const exists = await prisma.disciplineCase.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!exists) {
      return res.status(404).json({
        success: false,
        message: "Discipline case not found",
      });
    }

    await prisma.disciplineCase.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Discipline case deleted successfully",
    });
  } catch (error) {
    console.error("Delete discipline case error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete discipline case",
    });
  }
};

export const restoreDisciplineCase = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageDisciplineCases(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to restore discipline cases",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid discipline case ID",
      });
    }

    const record = await prisma.disciplineCase.findFirst({
      where: { id },
      include: {
        student: true,
        registered_by: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Discipline case not found",
      });
    }

    if (record.deleted_at === null) {
      return res.status(400).json({
        success: false,
        message: "Discipline case is already active",
      });
    }

    const restored = await prisma.disciplineCase.update({
      where: { id },
      data: {
        deleted_at: null,
      },
      include: {
        student: true,
        registered_by: {
          include: {
            student: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Discipline case restored successfully",
      data: formatDisciplineCase(restored),
    });
  } catch (error) {
    console.error("Restore discipline case error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to restore discipline case",
    });
  }
};
