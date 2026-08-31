import { NextFunction, Request, Response } from "express";

export const security = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Block suspicious empty authorization header
  const authorization = req.headers.authorization;

  if (authorization !== undefined && !authorization.trim()) {
    return res.status(401).json({
      success: false,
      message: "Invalid authorization header",
    });
  }

  // Allow only expected HTTP methods
  const allowedMethods = [
    "GET",
    "POST",
    "PATCH",
    "PUT",
    "DELETE",
  ];

  if (!allowedMethods.includes(req.method)) {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  next();
};
