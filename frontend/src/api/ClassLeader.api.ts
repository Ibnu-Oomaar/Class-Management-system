import api from "../helpers/api";

import type { Student } from "../Stores/StudentStores";

export interface ClassLeaderStudentSummary extends Student {
  fullname: string;
}

export interface ClassLeader {
  id: number;
  student_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  student?: ClassLeaderStudentSummary;
}

export interface ClassLeaderListResponse {
  success: boolean;
  count: number;
  data: ClassLeader[];
}

export interface ClassLeaderResponse {
  success: boolean;
  message?: string;
  data: ClassLeader;
}

export interface DeleteClassLeaderResponse {
  success: boolean;
  message: string;
}

export interface CreateClassLeaderPayload {
  student_id: number;
}

export const getClassLeaders = async (
  page = 1,
  limit = 10
): Promise<ClassLeaderListResponse> => {
  const response = await api.get<ClassLeaderListResponse>("/class-leaders", {
    params: { page, limit },
  });

  return response.data;
};

export const getClassLeaderById = async (
  id: number
): Promise<ClassLeaderResponse> => {
  const response = await api.get<ClassLeaderResponse>(`/class-leaders/${id}`);
  return response.data;
};

export const createClassLeader = async (
  payload: CreateClassLeaderPayload
): Promise<ClassLeaderResponse> => {
  const response = await api.post<ClassLeaderResponse>("/class-leaders", payload);
  return response.data;
};

export const deleteClassLeader = async (
  id: number
): Promise<DeleteClassLeaderResponse> => {
  const response = await api.delete<DeleteClassLeaderResponse>(`/class-leaders/${id}`);
  return response.data;
};

export const restoreClassLeader = async (
  id: number
): Promise<ClassLeaderResponse> => {
  const response = await api.patch<ClassLeaderResponse>(`/class-leaders/${id}/restore`);
  return response.data;
};
