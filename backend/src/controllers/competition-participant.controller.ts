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

const canViewParticipant = (
  req: AuthenticatedRequest,
  studentId: number
): boolean => {
  if (!req.user) return false;

  if (req.user.role === Role.student) {
    return req.user.id === studentId;
  }

  return true;
};

const canManageParticipants = (
  req: AuthenticatedRequest
): boolean => {
  if (!req.user) return false;

  return (
    req.user.role === Role.main_monitor ||
    req.user.role === Role.sports_leader
  );
};

const formatParticipant = (record: any) => ({
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
  competition: record.competition || null,
});

export const getCompetitionParticipants = async (
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
      const data = await prisma.competitionParticipant.findMany({
        where: {
          student_id: req.user.id,
          deleted_at: null,
        },
        include: {
          student: true,
          competition: true,
        },
        orderBy: {
          joined_at: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        count: data.length,
        data: data.map(formatParticipant),
      });
    }

    const data = await prisma.competitionParticipant.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        student: true,
        competition: true,
      },
      orderBy: {
        joined_at: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: data.length,
      data: data.map(formatParticipant),
    });
  } catch (error) {
    console.error("Get competition participants error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch competition participants",
    });
  }
};

export const getCompetitionParticipantById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition participant ID",
      });
    }

    const record = await prisma.competitionParticipant.findFirst({
      where: {
        id,
        deleted_at: null,
      },
      include: {
        student: true,
        competition: true,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Competition participant not found",
      });
    }

    if (!canViewParticipant(req, record.student_id)) {
      return res.status(403).json({
        success: false,
        message: "You can only view your own competition participation",
      });
    }

    return res.status(200).json({
      success: true,
      data: formatParticipant(record),
    });
  } catch (error) {
    console.error("Get competition participant by ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch competition participant",
    });
  }
};

export const createCompetitionParticipant = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageParticipants(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to manage competition participants",
      });
    }

    const { competition_id, student_id, position, points } = req.body;

    if (competition_id === undefined || student_id === undefined) {
      return res.status(400).json({
        success: false,
        message: "competition_id and student_id are required",
      });
    }

    const competitionId = Number(competition_id);
    const studentId = Number(student_id);

    if (!isValidId(competitionId) || !isValidId(studentId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition or student ID",
      });
    }

    const competition = await prisma.competition.findFirst({
      where: {
        id: competitionId,
        deleted_at: null,
      },
    });

    if (!competition) {
      return res.status(404).json({
        success: false,
        message: "Competition not found",
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

    const duplicate = await prisma.competitionParticipant.findFirst({
      where: {
        competition_id: competitionId,
        student_id: studentId,
      },
    });

    if (duplicate) {
      if (duplicate.deleted_at === null) {
        return res.status(409).json({
          success: false,
          message: "Student is already registered for this competition",
        });
      }

      const restored = await prisma.competitionParticipant.update({
        where: { id: duplicate.id },
        data: {
          deleted_at: null,
        },
        include: {
          student: true,
          competition: true,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Competition participation restored successfully",
        data: formatParticipant(restored),
      });
    }

    const pointsValue = Number(points ?? 0);
    if (!Number.isFinite(pointsValue) || pointsValue < 0) {
      return res.status(400).json({
        success: false,
        message: "Points must be a non-negative number",
      });
    }

    const record = await prisma.competitionParticipant.create({
      data: {
        competition_id: competitionId,
        student_id: studentId,
        position:
          position === undefined
            ? null
            : String(position).trim() || null,
        points: pointsValue,
      },
      include: {
        student: true,
        competition: true,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Competition participant created successfully",
      data: formatParticipant(record),
    });
  } catch (error) {
    console.error("Create competition participant error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create competition participant",
    });
  }
};

export const updateCompetitionParticipant = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageParticipants(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update competition participants",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition participant ID",
      });
    }

    const existing = await prisma.competitionParticipant.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Competition participant not found",
      });
    }

    const { competition_id, student_id, position, points } = req.body;
    const updateData: Record<string, any> = {};

    if (competition_id !== undefined) {
      const competitionId = Number(competition_id);
      if (!isValidId(competitionId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid competition ID",
        });
      }

      const competition = await prisma.competition.findFirst({
        where: {
          id: competitionId,
          deleted_at: null,
        },
      });

      if (!competition) {
        return res.status(404).json({
          success: false,
          message: "Competition not found",
        });
      }

      updateData.competition_id = competitionId;
    }

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

    if (position !== undefined) {
      updateData.position = String(position).trim() || null;
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

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided for update",
      });
    }

    const updated = await prisma.competitionParticipant.update({
      where: { id },
      data: updateData,
      include: {
        student: true,
        competition: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Competition participant updated successfully",
      data: formatParticipant(updated),
    });
  } catch (error) {
    console.error("Update competition participant error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update competition participant",
    });
  }
};

export const deleteCompetitionParticipant = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageParticipants(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete competition participants",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition participant ID",
      });
    }

    const record = await prisma.competitionParticipant.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Competition participant not found",
      });
    }

    await prisma.competitionParticipant.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Competition participant deleted successfully",
    });
  } catch (error) {
    console.error("Delete competition participant error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete competition participant",
    });
  }
};

export const restoreCompetitionParticipant = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageParticipants(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to restore competition participants",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition participant ID",
      });
    }

    const record = await prisma.competitionParticipant.findFirst({
      where: { id },
      include: {
        student: true,
        competition: true,
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Competition participant not found",
      });
    }

    if (record.deleted_at === null) {
      return res.status(400).json({
        success: false,
        message: "Competition participant is already active",
      });
    }

    const restored = await prisma.competitionParticipant.update({
      where: { id },
      data: {
        deleted_at: null,
      },
      include: {
        student: true,
        competition: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Competition participant restored successfully",
      data: formatParticipant(restored),
    });
  } catch (error) {
    console.error("Restore competition participant error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to restore competition participant",
    });
  }
};
