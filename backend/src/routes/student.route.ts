import { Router } from "express";

import {
  createStudent,
  getStudents,
  getStudentById,
  getStudentByCode,
  login,
  refreshToken,
  logout,
  updateStudent,
  updateStudentStatus,
  updateStudentRole,
  deleteStudent,
  restoreStudent,
  getDeletedStudents,
} from "../controllers/student.controller";

import { Role } from "../../generated/prisma";

import { authenticate } from "../middlewares/auth.middleware";
import { security } from "../middlewares/security.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

// ============================================================
// PUBLIC AUTHENTICATION
// ============================================================

// POST /students/login
router.post("/login", security, login);

// POST /students/refresh
router.post("/refresh", security, refreshToken);

// ============================================================
// AUTHENTICATED ROUTES
// ============================================================

// All routes below require:
// 1. Security middleware
// 2. Valid access token
router.use(security, authenticate);

// ============================================================
// READ STUDENTS
// ============================================================

// GET /students
//
// Student:
//   - Can see ONLY his/her own student record
//
// Leadership roles:
//   - Can see all active students
router.get("/", getStudents);

// ============================================================
// RECYCLE BIN
// IMPORTANT: Must come BEFORE /:id
// ============================================================

// GET /students/recycle-bin
//
// Only leadership roles can access deleted students.
router.get(
  "/recycle-bin",
  authorize(Role.main_monitor),
  getDeletedStudents
);

// ============================================================
// GET STUDENT BY CODE
// IMPORTANT: Must come BEFORE /:id
// ============================================================

// GET /students/code/:student_code
//
// Student:
//   - Can only access his/her own code
//
// Leadership:
//   - Can search any active student
router.get(
  "/code/:student_code",
  getStudentByCode
);

// ============================================================
// GET STUDENT BY ID
// ============================================================

// GET /students/:id
//
// Student:
//   - Own record only
//
// Leadership:
//   - Any active student
router.get(
  "/:id",
  getStudentById
);

// ============================================================
// STUDENT MANAGEMENT
// ============================================================
//
// Students CANNOT perform any of the following actions:
//
// - Create
// - Update
// - Change status
// - Change role
// - Restore
// - Delete
//
// Only leadership roles are allowed.

// ============================================================
// CREATE STUDENT
// ============================================================

// POST /students
router.post(
  "/",
  authorize(Role.main_monitor),
  createStudent
);

// ============================================================
// UPDATE STUDENT
// ============================================================

// PATCH /students/:id
router.patch(
  "/:id",
  authorize(Role.main_monitor),
  updateStudent
);

// ============================================================
// UPDATE STUDENT STATUS
// ============================================================

// PATCH /students/:id/status
router.patch(
  "/:id/status",
  authorize(Role.main_monitor),
  updateStudentStatus
);

// ============================================================
// UPDATE STUDENT ROLE
// ============================================================

// PATCH /students/:id/role
router.patch(
  "/:id/role",
  authorize(Role.main_monitor),
  updateStudentRole
);

// ============================================================
// RESTORE STUDENT
// ============================================================

// PATCH /students/:id/restore
router.patch(
  "/:id/restore",
  authorize(Role.main_monitor),
  restoreStudent
);

// ============================================================
// DELETE STUDENT
// ============================================================

// DELETE /students/:id
router.delete(
  "/:id",
  authorize(Role.main_monitor),
  deleteStudent
);

// ============================================================
// LOGOUT
// ============================================================

// POST /students/logout
//
// Any authenticated user can logout.
router.post("/logout", logout);

// ============================================================
// EXPORT
// ============================================================

export default router;

