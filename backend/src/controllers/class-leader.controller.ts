import { Response } from "express";
import { prisma } from "../helpers/prisma";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";
import { Role } from "../../generated/prisma/enums";

const isValidId = (id: number): boolean =>
  Number.isInteger(id) && id > 0;

const getFullName = (
  firstName: string,
  middleName: string,
  lastName: string
): string =>
  `${firstName} ${middleName} ${lastName}`.trim();

const canViewClassLeader = (
  req: AuthenticatedRequest,
  studentId: number
): boolean => {
  if (!req.user) return false;

  if (req.user.role === Role.student) {
    return req.user.id === studentId;
  }

  return true;
};

const canManageClassLeaders = (
  req: AuthenticatedRequest
): boolean => {
  if (!req.user) return false;

  return (
    req.user.role === Role.main_monitor ||
    req.user.role === Role.assistant_monitor
  );
};

const formatClassLeader = (record: any) => ({
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
});

export const getClassLeaders = async (
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
      const data = await prisma.classLeader.findMany({
        where: {
          student_id: req.user.id,
          deleted_at: null,
        },
        include: {
          student: true,
        },
        orderBy: {
          created_at: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        count: data.length,
        data: data.map(formatClassLeader),
      });
    }

    const data = await prisma.classLeader.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        student: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: data.length,
      data: data.map(formatClassLeader),
    });
  } catch (error) {
    console.error("Get class leaders error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch class leaders",
    });
  }
};

export const getClassLeaderById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class leader ID",
      });
    }

    const record = await prisma.classLeader.findFirst({
      where: {
        id,
        deleted_at: null,
      },
      include: {
        student: true,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Class leader not found",
      });
    }

    if (!canViewClassLeader(req, record.student_id)) {
      return res.status(403).json({
        success: false,
        message: "You can only view your own class leader record",
      });
    }

    return res.status(200).json({
      success: true,
      data: formatClassLeader(record),
    });
  } catch (error) {
    console.error("Get class leader by ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch class leader",
    });
  }
};

export const createClassLeader = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassLeaders(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to create class leaders",
      });
    }

    const { student_id } = req.body;

    if (student_id === undefined) {
      return res.status(400).json({
        success: false,
        message: "student_id is required",
      });
    }

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

    const existing = await prisma.classLeader.findFirst({
      where: {
        student_id: studentId,
      },
    });

    if (existing) {
      if (existing.deleted_at === null) {
        return res.status(409).json({
          success: false,
          message: "This student is already a class leader",
        });
      }

      const restored = await prisma.classLeader.update({
        where: { id: existing.id },
        data: {
          deleted_at: null,
        },
        include: {
          student: true,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Class leader restored successfully",
        data: formatClassLeader(restored),
      });
    }

    const record = await prisma.classLeader.create({
      data: {
        student_id: studentId,
      },
      include: {
        student: true,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Class leader created successfully",
      data: formatClassLeader(record),
    });
  } catch (error) {
    console.error("Create class leader error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create class leader",
    });
  }
};

export const updateClassLeader = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassLeaders(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update class leaders",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class leader ID",
      });
    }

    const { student_id } = req.body;
    if (student_id === undefined) {
      return res.status(400).json({
        success: false,
        message: "student_id is required",
      });
    }

    const studentId = Number(student_id);
    if (!isValidId(studentId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid student ID",
      });
    }

    const record = await prisma.classLeader.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Class leader not found",
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

    const duplicate = await prisma.classLeader.findFirst({
      where: {
        student_id: studentId,
        NOT: {
          id,
        },
      },
    });

    if (duplicate) {
      return res.status(409).json({
        success: false,
        message: "This student already has a class leader record",
      });
    }

    const updated = await prisma.classLeader.update({
      where: { id },
      data: {
        student_id: studentId,
      },
      include: {
        student: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Class leader updated successfully",
      data: formatClassLeader(updated),
    });
  } catch (error) {
    console.error("Update class leader error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update class leader",
    });
  }
};

export const deleteClassLeader = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassLeaders(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete class leaders",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class leader ID",
      });
    }

    const record = await prisma.classLeader.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Class leader not found",
      });
    }

    await prisma.classLeader.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Class leader deleted successfully",
    });
  } catch (error) {
    console.error("Delete class leader error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete class leader",
    });
  }
};

export const restoreClassLeader = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageClassLeaders(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to restore class leaders",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid class leader ID",
      });
    }

    const record = await prisma.classLeader.findFirst({
      where: { id },
      include: { student: true },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Class leader not found",
      });
    }

    if (record.deleted_at === null) {
      return res.status(400).json({
        success: false,
        message: "Class leader is already active",
      });
    }

    const restored = await prisma.classLeader.update({
      where: { id },
      data: {
        deleted_at: null,
      },
      include: {
        student: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Class leader restored successfully",
      data: formatClassLeader(restored),
    });
  } catch (error) {
    console.error("Restore class leader error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to restore class leader",
    });
  }
};
