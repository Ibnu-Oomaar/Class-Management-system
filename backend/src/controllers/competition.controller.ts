import { Response } from "express";
import { prisma } from "../helpers/prisma";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";
import { CompetitionType, Role } from "../../generated/prisma/enums";

const isValidId = (id: number): boolean =>
  Number.isInteger(id) && id > 0;

const isValidCompetitionType = (
  value: unknown
): value is CompetitionType =>
  Object.values(CompetitionType).includes(
    value as CompetitionType
  );

const getFullName = (
  firstName: string,
  middleName: string,
  lastName: string
): string =>
  `${firstName} ${middleName} ${lastName}`.trim();

const canViewCompetition = (
  req: AuthenticatedRequest,
  studentId: number
): boolean => {
  if (!req.user) return false;

  if (req.user.role === Role.student) {
    return req.user.id === studentId;
  }

  return true;
};

const canManageCompetitions = (
  req: AuthenticatedRequest
): boolean => {
  if (!req.user) return false;

  return (
    req.user.role === Role.main_monitor ||
    req.user.role === Role.sports_leader
  );
};

const formatCompetition = (record: any) => ({
  ...record,
  participants: Array.isArray(record.participants)
    ? record.participants.map((participant: any) => ({
        ...participant,
        student: participant.student
          ? {
              ...participant.student,
              fullname: getFullName(
                participant.student.first_name,
                participant.student.middle_name,
                participant.student.last_name
              ),
            }
          : null,
      }))
    : [],
});

export const getCompetitions = async (
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
      const records = await prisma.competition.findMany({
        where: {
          deleted_at: null,
          participants: {
            some: {
              student_id: req.user.id,
              deleted_at: null,
            },
          },
        },
        include: {
          participants: {
            where: {
              deleted_at: null,
            },
            include: {
              student: true,
            },
          },
        },
        orderBy: {
          start_date: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        count: records.length,
        data: records.map(formatCompetition),
      });
    }

    const records = await prisma.competition.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        participants: {
          where: {
            deleted_at: null,
          },
          include: {
            student: true,
          },
        },
      },
      orderBy: {
        start_date: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      count: records.length,
      data: records.map(formatCompetition),
    });
  } catch (error) {
    console.error("Get competitions error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch competitions",
    });
  }
};

export const getCompetitionById = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition ID",
      });
    }

    const record = await prisma.competition.findFirst({
      where: {
        id,
        deleted_at: null,
      },
      include: {
        participants: {
          where: {
            deleted_at: null,
          },
          include: {
            student: true,
          },
        },
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Competition not found",
      });
    }

    const canView =
      req.user &&
      req.user.role !== Role.student
        ? true
        : record.participants.some(
            (participant) => participant.student_id === req.user?.id
          );

    if (!canView) {
      return res.status(403).json({
        success: false,
        message: "You can only view your own competition records",
      });
    }

    return res.status(200).json({
      success: true,
      data: formatCompetition(record),
    });
  } catch (error) {
    console.error("Get competition by ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch competition",
    });
  }
};

export const createCompetition = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageCompetitions(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to create competitions",
      });
    }

    const {
      name,
      description,
      type,
      start_date,
      end_date,
    } = req.body;

    if (
      name === undefined ||
      type === undefined ||
      start_date === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "name, type, and start_date are required",
      });
    }

    const nameValue = String(name).trim();
    if (!nameValue) {
      return res.status(400).json({
        success: false,
        message: "Competition name cannot be empty",
      });
    }

    if (!isValidCompetitionType(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition type",
      });
    }

    const record = await prisma.competition.create({
      data: {
        name: nameValue,
        description:
          description === undefined
            ? null
            : String(description).trim(),
        type,
        start_date: new Date(start_date),
        end_date:
          end_date === undefined
            ? null
            : new Date(end_date),
      },
      include: {
        participants: {
          where: {
            deleted_at: null,
          },
          include: {
            student: true,
          },
        },
      },
    });

    return res.status(201).json({
      success: true,
      message: "Competition created successfully",
      data: formatCompetition(record),
    });
  } catch (error) {
    console.error("Create competition error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create competition",
    });
  }
};

export const updateCompetition = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageCompetitions(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to update competitions",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition ID",
      });
    }

    const existing = await prisma.competition.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Competition not found",
      });
    }

    const { name, description, type, start_date, end_date } = req.body;
    const updateData: Record<string, any> = {};

    if (name !== undefined) {
      const value = String(name).trim();
      if (!value) {
        return res.status(400).json({
          success: false,
          message: "Competition name cannot be empty",
        });
      }
      updateData.name = value;
    }

    if (description !== undefined) {
      updateData.description = String(description).trim() || null;
    }

    if (type !== undefined) {
      if (!isValidCompetitionType(type)) {
        return res.status(400).json({
          success: false,
          message: "Invalid competition type",
        });
      }
      updateData.type = type;
    }

    if (start_date !== undefined) {
      updateData.start_date = new Date(start_date);
    }

    if (end_date !== undefined) {
      updateData.end_date = end_date ? new Date(end_date) : null;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields provided for update",
      });
    }

    const record = await prisma.competition.update({
      where: { id },
      data: updateData,
      include: {
        participants: {
          where: {
            deleted_at: null,
          },
          include: {
            student: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Competition updated successfully",
      data: formatCompetition(record),
    });
  } catch (error) {
    console.error("Update competition error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update competition",
    });
  }
};

export const deleteCompetition = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageCompetitions(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to delete competitions",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition ID",
      });
    }

    const exists = await prisma.competition.findFirst({
      where: {
        id,
        deleted_at: null,
      },
    });

    if (!exists) {
      return res.status(404).json({
        success: false,
        message: "Competition not found",
      });
    }

    await prisma.competition.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Competition deleted successfully",
    });
  } catch (error) {
    console.error("Delete competition error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete competition",
    });
  }
};

export const restoreCompetition = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    if (!canManageCompetitions(req)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to restore competitions",
      });
    }

    const id = Number(req.params.id);
    if (!isValidId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid competition ID",
      });
    }

    const record = await prisma.competition.findFirst({
      where: { id },
      include: {
        participants: {
          where: {
            deleted_at: null,
          },
          include: {
            student: true,
          },
        },
      },
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "Competition not found",
      });
    }

    if (record.deleted_at === null) {
      return res.status(400).json({
        success: false,
        message: "Competition is already active",
      });
    }

    const restored = await prisma.competition.update({
      where: { id },
      data: {
        deleted_at: null,
      },
      include: {
        participants: {
          where: {
            deleted_at: null,
          },
          include: {
            student: true,
          },
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Competition restored successfully",
      data: formatCompetition(restored),
    });
  } catch (error) {
    console.error("Restore competition error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to restore competition",
    });
  }
};
