import api from "../helpers/api";

import type { Student } from "../Stores/StudentStores";

export type DisciplineSeverity = "low" | "medium" | "high" | "critical";
export type DisciplineAction =
  | "warning"
  | "recorded"
  | "referred_to_admin"
  | "class_rejection";

export interface DisciplineCaseStudentSummary extends Student {
  fullname: string;
}

export interface DisciplineCaseLeaderSummary {
  id: number;
  student_id: number;
  deleted_at: string | null;
  created_at?: string;
  updated_at?: string;
  student?: DisciplineCaseStudentSummary;
}

export interface DisciplineCase {
  id: number;
  title: string;
  description: string;
  severity: DisciplineSeverity;
  action: DisciplineAction;
  incident_date: string;
  student_id: number;
  registered_by_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  student?: DisciplineCaseStudentSummary;
  registered_by?: DisciplineCaseLeaderSummary;
}

export interface DisciplineCaseListResponse {
  success: boolean;
  count: number;
  data: DisciplineCase[];
}

export interface DisciplineCaseResponse {
  success: boolean;
  message?: string;
  data: DisciplineCase;
}

export interface DeleteDisciplineCaseResponse {
  success: boolean;
  message: string;
}

export interface CreateDisciplineCasePayload {
  student_id: number;
  title: string;
  description: string;
  severity: DisciplineSeverity;
  action: DisciplineAction;
  incident_date?: string;
}

export interface UpdateDisciplineCasePayload {
  student_id?: number;
  title?: string;
  description?: string;
  severity?: DisciplineSeverity;
  action?: DisciplineAction;
  incident_date?: string;
}

export const getDisciplineCases = async (
  page = 1,
  limit = 10
): Promise<DisciplineCaseListResponse> => {
  const response = await api.get<DisciplineCaseListResponse>("/disciplines", {
    params: { page, limit },
  });

  return response.data;
};

export const getDisciplineCaseById = async (
  id: number
): Promise<DisciplineCaseResponse> => {
  const response = await api.get<DisciplineCaseResponse>(`/disciplines/${id}`);
  return response.data;
};

export const createDisciplineCase = async (
  payload: CreateDisciplineCasePayload
): Promise<DisciplineCaseResponse> => {
  const response = await api.post<DisciplineCaseResponse>("/disciplines", payload);
  return response.data;
};

export const updateDisciplineCase = async (
  id: number,
  payload: UpdateDisciplineCasePayload
): Promise<DisciplineCaseResponse> => {
  const response = await api.patch<DisciplineCaseResponse>(`/disciplines/${id}`, payload);
  return response.data;
};

export const deleteDisciplineCase = async (
  id: number
): Promise<DeleteDisciplineCaseResponse> => {
  const response = await api.delete<DeleteDisciplineCaseResponse>(`/disciplines/${id}`);
  return response.data;
};

export const restoreDisciplineCase = async (
  id: number
): Promise<DisciplineCaseResponse> => {
  const response = await api.patch<DisciplineCaseResponse>(`/disciplines/${id}/restore`);
  return response.data;
};
