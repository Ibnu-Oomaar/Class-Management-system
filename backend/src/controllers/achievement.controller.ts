import { Response } from "express";
import { prisma } from "../helpers/prisma";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";
import { AchievementType, Role } from "../../generated/prisma/enums";

const isValidId = (id: number): boolean =>
  Number.isInteger(id) && id > 0;

const isValidAchievementType = (
  value: unknown
): value is AchievementType =>
  Object.values(AchievementType).includes(
    value as AchievementType
  );

const getFullName = (
  firstName: string,
  middleName: string,
  lastName: string
): string =>
  `${firstName} ${middleName} ${lastName}`.trim();

const canViewAchievement = (
  req: AuthenticatedRequest,
  studentId: number
): boolean => {
  if (!req.user) return false;

  if (req.user.role === Role.student) {
    return req.user.id === studentId;
  }

  return true;
};

const canManageAchievements = (
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

const formatAchievement = (record: any) => ({
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

export const getAchievements = async (
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
      const records = await prisma.achievement.findMany({
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
          achieved_at: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        count: records.length,
        data: records.map(formatAchievement),
      });
    }

    const records = await prisma.achievement.findMany({
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
        achieved_at: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: records.length,
      data: records.map(formatAchievement),
    });
  } catch (error) {
    console.error("Get achievements error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch achievements",
    });
  }
};

export const getAchievementById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid achievement ID",
      });
    }

    const record = await prisma.achievement.findFirst({
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
        message: "Achievement not found",
      });
    }

    if (!canViewAchievement(req, record.student_id)) {
      return res.status(403).json({
        success: false,
        message: "You can only view your own achievements",
      });
    }

    return res.status(200).json({
      success: true,
      data: formatAchievement(record),
    });
  } catch (error) {
    console.error("Get achievement by ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch achievement",
    });
  }
};

export const createAchievement = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageAchievements(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to create achievements",
      });
    }

    const {
      student_id,
      title,
      description,
      type,
      points,
      achieved_at,
    } = req.body;

    if (
      student_id === undefined ||
      title === undefined ||
      type === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "student_id, title, and type are required",
      });
    }

    const studentId = Number(student_id);

    if (!isValidId(studentId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    if (!isValidAchievementType(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid achievement type",
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

    const pointsValue = Number(points ?? 0);
    if (!Number.isFinite(pointsValue) || pointsValue < 0) {
      return res.status(400).json({
        success: false,
        message: "Points must be a non-negative number",
      });
    }

    const registeredById = await ensureClassLeader(req);

    const record = await prisma.achievement.create({
      data: {
        title: titleValue,
        description:
          description === undefined
            ? null
            : String(description).trim(),
        type,
        points: pointsValue,
        achieved_at:
          achieved_at === undefined
            ? new Date()
            : new Date(achieved_at),
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
      message: "Achievement created successfully",
      data: formatAchievement(record),
    });
  } catch (error) {
    console.error("Create achievement error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create achievement",
    });
  }
};

export const updateAchievement = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageAchievements(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update achievements",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid achievement ID",
      });
    }

    const existing = await prisma.achievement.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      });
    }

    const {
      student_id,
      title,
      description,
      type,
      points,
      achieved_at,
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
      updateData.description = value || null;
    }

    if (type !== undefined) {
      if (!isValidAchievementType(type)) {
        return res.status(400).json({
          success: false,
          message: "Invalid achievement type",
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

    if (achieved_at !== undefined) {
      updateData.achieved_at = new Date(achieved_at);
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided for update",
      });
    }

    const record = await prisma.achievement.update({
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
      message: "Achievement updated successfully",
      data: formatAchievement(record),
    });
  } catch (error) {
    console.error("Update achievement error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update achievement",
    });
  }
};

export const deleteAchievement = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageAchievements(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete achievements",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid achievement ID",
      });
    }

    const exists = await prisma.achievement.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!exists) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      });
    }

    await prisma.achievement.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Achievement deleted successfully",
    });
  } catch (error) {
    console.error("Delete achievement error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete achievement",
    });
  }
};

export const restoreAchievement = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageAchievements(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to restore achievements",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid achievement ID",
      });
    }

    const record = await prisma.achievement.findFirst({
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
        message: "Achievement not found",
      });
    }

    if (record.deleted_at === null) {
      return res.status(400).json({
        success: false,
        message: "Achievement is already active",
      });
    }

    const restored = await prisma.achievement.update({
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
      message: "Achievement restored successfully",
      data: formatAchievement(restored),
    });
  } catch (error) {
    console.error("Restore achievement error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to restore achievement",
    });
  }
};
