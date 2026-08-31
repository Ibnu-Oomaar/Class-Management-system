import api from "../helpers/api";

import type {
  Student,
  StudentRole,
  StudentStatus,
} from "../Stores/StudentStores";

// ============================================================
// TYPES
// ============================================================

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface StudentListResponse {
  success: boolean;
  count: number;
  data: Student[];
  pagination?: Pagination;
}

export interface StudentResponse {
  success: boolean;
  message?: string;
  data: Student;
}

export interface LoginResponse {
  success: boolean;
  message: string;

  data: {
    student: Student;
    access_token: string;
    refresh_token: string;
  };
}

export interface RefreshResponse {
  success: boolean;
  message: string;

  data: {
    access_token: string;
  };
}

export interface DeleteResponse {
  success: boolean;
  message: string;
}

export interface CreateStudentPayload {
  student_code: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone: string;
}

export interface UpdateStudentPayload {
  student_code?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  phone?: string;
}

export interface UpdateStudentStatusPayload {
  status: StudentStatus;
}

export interface UpdateStudentRolePayload {
  role: Exclude<StudentRole, "student">;
}

// ============================================================
// LOGIN
// POST /students/login
// ============================================================

export const loginStudent = async (
  student_code: string
): Promise<LoginResponse> => {
  const response =
    await api.post<LoginResponse>(
      "/students/login",
      {
        student_code,
      }
    );

  return response.data;
};

// ============================================================
// REFRESH TOKEN
// POST /students/refresh
// ============================================================

export const refreshStudentToken = async (
  refresh_token: string
): Promise<RefreshResponse> => {
  const response =
    await api.post<RefreshResponse>(
      "/students/refresh",
      {
        refresh_token,
      }
    );

  return response.data;
};

// ============================================================
// LOGOUT
// POST /students/logout
// ============================================================

export const logoutStudent = async (): Promise<
  DeleteResponse
> => {
  const response =
    await api.post<DeleteResponse>(
      "/students/logout"
    );

  return response.data;
};

// ============================================================
// GET ALL STUDENTS
// GET /students?page=1&limit=10
// ============================================================

export const getStudents = async (
  page = 1,
  limit = 10
): Promise<StudentListResponse> => {
  const response =
    await api.get<StudentListResponse>(
      "/students",
      {
        params: {
          page,
          limit,
        },
      }
    );

  return response.data;
};

// ============================================================
// GET STUDENT BY ID
// GET /students/:id
// ============================================================

export const getStudentById = async (
  id: number
): Promise<StudentResponse> => {
  const response =
    await api.get<StudentResponse>(
      `/students/${id}`
    );

  return response.data;
};

// ============================================================
// GET STUDENT BY CODE
// GET /students/code/:student_code
// ============================================================

export const getStudentByCode = async (
  studentCode: string
): Promise<StudentResponse> => {
  const response =
    await api.get<StudentResponse>(
      `/students/code/${encodeURIComponent(
        studentCode
      )}`
    );

  return response.data;
};

// ============================================================
// CREATE STUDENT
// POST /students
// ============================================================

export const createStudent = async (
  payload: CreateStudentPayload
): Promise<StudentResponse> => {
  const response =
    await api.post<StudentResponse>(
      "/students",
      payload
    );

  return response.data;
};

// ============================================================
// UPDATE STUDENT
// PATCH /students/:id
// ============================================================

export const updateStudent = async (
  id: number,
  payload: UpdateStudentPayload
): Promise<StudentResponse> => {
  const response =
    await api.patch<StudentResponse>(
      `/students/${id}`,
      payload
    );

  return response.data;
};

// ============================================================
// UPDATE STUDENT STATUS
// PATCH /students/:id/status
// ============================================================

export const updateStudentStatus = async (
  id: number,
  payload: UpdateStudentStatusPayload
): Promise<StudentResponse> => {
  const response =
    await api.patch<StudentResponse>(
      `/students/${id}/status`,
      payload
    );

  return response.data;
};

// ============================================================
// UPDATE STUDENT ROLE
// PATCH /students/:id/role
// ============================================================

export const updateStudentRole = async (
  id: number,
  payload: UpdateStudentRolePayload
): Promise<StudentResponse> => {
  const response =
    await api.patch<StudentResponse>(
      `/students/${id}/role`,
      payload
    );

  return response.data;
};

// ============================================================
// DELETE STUDENT
// DELETE /students/:id
// ============================================================

export const deleteStudent = async (
  id: number
): Promise<DeleteResponse> => {
  const response =
    await api.delete<DeleteResponse>(
      `/students/${id}`
    );

  return response.data;
};

// ============================================================
// RESTORE STUDENT
// PATCH /students/:id/restore
// ============================================================

export const restoreStudent = async (
  id: number
): Promise<StudentResponse> => {
  const response =
    await api.patch<StudentResponse>(
      `/students/${id}/restore`
    );

  return response.data;
};

// ============================================================
// GET RECYCLE BIN
// GET /students/recycle-bin
// ============================================================

export const getDeletedStudents =
  async (): Promise<StudentListResponse> => {
    const response =
      await api.get<StudentListResponse>(
        "/students/recycle-bin"
      );

    return response.data;
  };