import { Response } from "express";
import { prisma } from "../helpers/prisma";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";
import { ImpactType, Role } from "@prisma/client";

const isValidId = (id: number): boolean =>
  Number.isInteger(id) && id > 0;

const isValidImpactType = (
  value: unknown
): value is ImpactType =>
  Object.values(ImpactType).includes(
    value as ImpactType
  );

const getFullName = (
  firstName: string,
  middleName: string,
  lastName: string
): string =>
  `${firstName} ${middleName} ${lastName}`.trim();

const canViewClassImpact = (
  req: AuthenticatedRequest,
  studentId: number
): boolean => {
  if (!req.user) return false;

  if (req.user.role === Role.student) {
    return req.user.id === studentId;
  }

  return true;
};

const canManageClassImpacts = (
  req: AuthenticatedRequest
): boolean => {
  if (!req.user) return false;

  return (
    req.user.role === Role.main_monitor ||
    req.user.role === Role.assistant_monitor
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

const formatClassImpact = (record: any) => ({
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

export const getClassImpacts = async (
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
      const records = await prisma.classImpact.findMany({
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
          impact_date: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        count: records.length,
        data: records.map(formatClassImpact),
      });
    }

    const records = await prisma.classImpact.findMany({
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
        impact_date: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: records.length,
      data: records.map(formatClassImpact),
    });
  } catch (error) {
    console.error("Get class impacts error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch class impacts",
    });
  }
};

export const getClassImpactById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class impact ID",
      });
    }

    const record = await prisma.classImpact.findFirst({
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
        message: "Class impact not found",
      });
    }

    if (!canViewClassImpact(req, record.student_id)) {
      return res.status(403).json({
        success: false,
        message: "You can only view your own class impacts",
      });
    }

    return res.status(200).json({
      success: true,
      data: formatClassImpact(record),
    });
  } catch (error) {
    console.error("Get class impact by ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch class impact",
    });
  }
};

export const createClassImpact = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassImpacts(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to create class impacts",
      });
    }

    const {
      student_id,
      title,
      description,
      type,
      points,
      impact_date,
    } = req.body;

    if (
      student_id === undefined ||
      title === undefined ||
      description === undefined ||
      type === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "student_id, title, description, and type are required",
      });
    }

    const studentId = Number(student_id);
    if (!isValidId(studentId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    if (!isValidImpactType(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid impact type",
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

    const pointsValue = Number(points ?? 0);
    if (!Number.isFinite(pointsValue) || pointsValue < 0) {
      return res.status(400).json({
        success: false,
        message: "Points must be a non-negative number",
      });
    }

    const registeredById = await ensureClassLeader(req);

    const record = await prisma.classImpact.create({
      data: {
        title: titleValue,
        description: descriptionValue,
        type,
        points: pointsValue,
        impact_date:
          impact_date === undefined
            ? new Date()
            : new Date(impact_date),
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
      message: "Class impact created successfully",
      data: formatClassImpact(record),
    });
  } catch (error) {
    console.error("Create class impact error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create class impact",
    });
  }
};

export const updateClassImpact = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassImpacts(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update class impacts",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class impact ID",
      });
    }

    const existing = await prisma.classImpact.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Class impact not found",
      });
    }

    const {
      student_id,
      title,
      description,
      type,
      points,
      impact_date,
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

    if (type !== undefined) {
      if (!isValidImpactType(type)) {
        return res.status(400).json({
          success: false,
          message: "Invalid impact type",
        });
      }
      updateData.type = type;
    }

    if (points !== undefined) {
      const value = Number(points);
      if (!Number.isFinite(value) || value < 0) {
        return res.status(400).json({
          success: false,
          message: "Points must be a non-negative number",
        });
      }
      updateData.points = value;
    }

    if (impact_date !== undefined) {
      updateData.impact_date = new Date(impact_date);
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided for update",
      });
    }

    const record = await prisma.classImpact.update({
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
      message: "Class impact updated successfully",
      data: formatClassImpact(record),
    });
  } catch (error) {
    console.error("Update class impact error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update class impact",
    });
  }
};

export const deleteClassImpact = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassImpacts(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete class impacts",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class impact ID",
      });
    }

    const exists = await prisma.classImpact.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!exists) {
      return res.status(404).json({
        success: false,
        message: "Class impact not found",
      });
    }

    await prisma.classImpact.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Class impact deleted successfully",
    });
  } catch (error) {
    console.error("Delete class impact error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete class impact",
    });
  }
};

export const restoreClassImpact = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassImpacts(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to restore class impacts",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class impact ID",
      });
    }

    const record = await prisma.classImpact.findFirst({
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
        message: "Class impact not found",
      });
    }

    if (record.deleted_at === null) {
      return res.status(400).json({
        success: false,
        message: "Class impact is already active",
      });
    }

    const restored = await prisma.classImpact.update({
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
      message: "Class impact restored successfully",
      data: formatClassImpact(restored),
    });
  } catch (error) {
    console.error("Restore class impact error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to restore class impact",
    });
  }
};
