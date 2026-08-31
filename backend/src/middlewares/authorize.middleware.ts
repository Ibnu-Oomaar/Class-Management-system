import { NextFunction, Response } from "express";
import { Role } from "../../generated/prisma/enums";
import { AuthenticatedRequest } from "./auth.middleware";

export const authorize = (
  ...allowedRoles: Role[]
) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    next();
  };
};
