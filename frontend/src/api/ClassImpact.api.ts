import api from "../helpers/api";

import type { Student } from "../Stores/StudentStores";

export type ImpactType = "positive" | "negative";

export interface ClassImpactStudentSummary extends Student {
  fullname: string;
}

export interface ClassImpactLeaderSummary {
  id: number;
  student_id: number;
  deleted_at: string | null;
  created_at?: string;
  updated_at?: string;
  student?: ClassImpactStudentSummary;
}

export interface ClassImpact {
  id: number;
  title: string;
  description: string | null;
  type: ImpactType;
  points: number;
  impact_date: string;
  student_id: number;
  registered_by_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  student?: ClassImpactStudentSummary;
  registered_by?: ClassImpactLeaderSummary;
}

export interface ClassImpactListResponse {
  success: boolean;
  count: number;
  data: ClassImpact[];
}

export interface ClassImpactResponse {
  success: boolean;
  message?: string;
  data: ClassImpact;
}

export interface DeleteClassImpactResponse {
  success: boolean;
  message: string;
}

export interface CreateClassImpactPayload {
  student_id: number;
  title: string;
  description?: string | null;
  type: ImpactType;
  points?: number;
  impact_date?: string;
}

export interface UpdateClassImpactPayload {
  student_id?: number;
  title?: string;
  description?: string | null;
  type?: ImpactType;
  points?: number;
  impact_date?: string;
}

export const getClassImpacts = async (
  page = 1,
  limit = 10
): Promise<ClassImpactListResponse> => {
  const response = await api.get<ClassImpactListResponse>("/class-impacts", {
    params: { page, limit },
  });

  return response.data;
};

export const getClassImpactById = async (
  id: number
): Promise<ClassImpactResponse> => {
  const response = await api.get<ClassImpactResponse>(`/class-impacts/${id}`);
  return response.data;
};

export const createClassImpact = async (
  payload: CreateClassImpactPayload
): Promise<ClassImpactResponse> => {
  const response = await api.post<ClassImpactResponse>("/class-impacts", payload);
  return response.data;
};

export const updateClassImpact = async (
  id: number,
  payload: UpdateClassImpactPayload
): Promise<ClassImpactResponse> => {
  const response = await api.patch<ClassImpactResponse>(`/class-impacts/${id}`, payload);
  return response.data;
};

export const deleteClassImpact = async (
  id: number
): Promise<DeleteClassImpactResponse> => {
  const response = await api.delete<DeleteClassImpactResponse>(`/class-impacts/${id}`);
  return response.data;
};

export const restoreClassImpact = async (
  id: number
): Promise<ClassImpactResponse> => {
  const response = await api.patch<ClassImpactResponse>(`/class-impacts/${id}/restore`);
  return response.data;
};
