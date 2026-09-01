import jwt, { SignOptions } from "jsonwebtoken";
import type { StringValue } from "ms";

import { Role } from "@prisma/client";

// ============================================================
// ENV
// ============================================================

const ACCESS_SECRET: string =
  process.env.JWT_ACCESS_SECRET?.trim() ||
  "fallback_class_3c_jwt_access_secret_2026_key_super_secret";

const REFRESH_SECRET: string =
  process.env.JWT_REFRESH_SECRET?.trim() ||
  "fallback_class_3c_jwt_refresh_secret_2026_key_super_secret";

// ============================================================
// JWT EXPIRATION
// ============================================================

const ACCESS_EXPIRES_IN: StringValue =
  (process.env.JWT_ACCESS_EXPIRES_IN ??
    "15m") as StringValue;

const REFRESH_EXPIRES_IN: StringValue =
  (process.env.JWT_REFRESH_EXPIRES_IN ??
    "7d") as StringValue;

// ============================================================
// TYPES
// ============================================================

export interface AccessTokenPayload {
  id: number;
  role: Role;
  type: "access";
}

export interface RefreshTokenPayload {
  id: number;
  role: Role;
  type: "refresh";
}

// ============================================================
// CREATE ACCESS TOKEN
// ============================================================

export const createAccessToken = (
  payload: Omit<AccessTokenPayload, "type">
): string => {
  const options: SignOptions = {
    expiresIn: ACCESS_EXPIRES_IN,
  };

  return jwt.sign(
    {
      ...payload,
      type: "access",
    },
    ACCESS_SECRET,
    options
  );
};

// ============================================================
// CREATE REFRESH TOKEN
// ============================================================

export const createRefreshToken = (
  payload: Omit<RefreshTokenPayload, "type">
): string => {
  const options: SignOptions = {
    expiresIn: REFRESH_EXPIRES_IN,
  };

  return jwt.sign(
    {
      ...payload,
      type: "refresh",
    },
    REFRESH_SECRET,
    options
  );
};

// ============================================================
// VERIFY ACCESS TOKEN
// ============================================================

export const verifyAccessToken = (
  token: string
): AccessTokenPayload => {
  const decoded = jwt.verify(
    token,
    ACCESS_SECRET
  ) as AccessTokenPayload;

  if (decoded.type !== "access") {
    throw new Error(
      "Invalid access token type"
    );
  }

  return decoded;
};

// ============================================================
// VERIFY REFRESH TOKEN
// ============================================================

export const verifyRefreshToken = (
  token: string
): RefreshTokenPayload => {
  const decoded = jwt.verify(
    token,
    REFRESH_SECRET
  ) as RefreshTokenPayload;

  if (decoded.type !== "refresh") {
    throw new Error(
      "Invalid refresh token type"
    );
  }

  return decoded;
};
