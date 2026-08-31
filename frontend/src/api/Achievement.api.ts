import api from "../helpers/api";

import type { Student } from "../Stores/StudentStores";

export type AchievementType =
  | "academic"
  | "leadership"
  | "sports"
  | "discipline"
  | "community";

export interface AchievementStudentSummary extends Student {
  fullname: string;
}

export interface AchievementLeaderSummary {
  id: number;
  student_id: number;
  deleted_at: string | null;
  created_at?: string;
  updated_at?: string;
  student?: AchievementStudentSummary;
}

export interface Achievement {
  id: number;
  title: string;
  description: string | null;
  type: AchievementType;
  points: number;
  achieved_at: string;
  student_id: number;
  registered_by_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  student?: AchievementStudentSummary;
  registered_by?: AchievementLeaderSummary;
}

export interface AchievementListResponse {
  success: boolean;
  count: number;
  data: Achievement[];
}

export interface AchievementResponse {
  success: boolean;
  message?: string;
  data: Achievement;
}

export interface DeleteAchievementResponse {
  success: boolean;
  message: string;
}

export interface CreateAchievementPayload {
  student_id: number;
  title: string;
  description?: string | null;
  type: AchievementType;
  points?: number;
  achieved_at?: string;
}

export interface UpdateAchievementPayload {
  student_id?: number;
  title?: string;
  description?: string | null;
  type?: AchievementType;
  points?: number;
  achieved_at?: string;
}

export const getAchievements = async (
  page = 1,
  limit = 10
): Promise<AchievementListResponse> => {
  const response = await api.get<AchievementListResponse>("/achievements", {
    params: { page, limit },
  });

  return response.data;
};

export const getAchievementById = async (
  id: number
): Promise<AchievementResponse> => {
  const response = await api.get<AchievementResponse>(`/achievements/${id}`);
  return response.data;
};

export const createAchievement = async (
  payload: CreateAchievementPayload
): Promise<AchievementResponse> => {
  const response = await api.post<AchievementResponse>("/achievements", payload);
  return response.data;
};

export const updateAchievement = async (
  id: number,
  payload: UpdateAchievementPayload
): Promise<AchievementResponse> => {
  const response = await api.patch<AchievementResponse>(`/achievements/${id}`, payload);
  return response.data;
};

export const deleteAchievement = async (
  id: number
): Promise<DeleteAchievementResponse> => {
  const response = await api.delete<DeleteAchievementResponse>(`/achievements/${id}`);
  return response.data;
};

export const restoreAchievement = async (
  id: number
): Promise<AchievementResponse> => {
  const response = await api.patch<AchievementResponse>(`/achievements/${id}/restore`);
  return response.data;
};
