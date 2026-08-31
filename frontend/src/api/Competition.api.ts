import api from "../helpers/api";

import type { Student } from "../Stores/StudentStores";

export type CompetitionType = "football" | "quiz" | "academic";

export interface CompetitionParticipantSummary {
  id: number;
  student_id: number;
  competition_id: number;
  position: string | null;
  points: number;
  joined_at: string;
  deleted_at: string | null;
  student?: Student & { fullname: string };
}

export interface Competition {
  id: number;
  name: string;
  description: string | null;
  type: CompetitionType;
  start_date: string;
  end_date: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  participants?: CompetitionParticipantSummary[];
}

export interface CompetitionListResponse {
  success: boolean;
  count: number;
  data: Competition[];
}

export interface CompetitionResponse {
  success: boolean;
  message?: string;
  data: Competition;
}

export interface DeleteCompetitionResponse {
  success: boolean;
  message: string;
}

export interface CreateCompetitionPayload {
  name: string;
  description?: string | null;
  type: CompetitionType;
  start_date: string;
  end_date?: string | null;
}

export interface UpdateCompetitionPayload {
  name?: string;
  description?: string | null;
  type?: CompetitionType;
  start_date?: string;
  end_date?: string | null;
}

export const getCompetitions = async (
  page = 1,
  limit = 10
): Promise<CompetitionListResponse> => {
  const response = await api.get<CompetitionListResponse>("/competitions", {
    params: { page, limit },
  });

  return response.data;
};

export const getCompetitionById = async (
  id: number
): Promise<CompetitionResponse> => {
  const response = await api.get<CompetitionResponse>(`/competitions/${id}`);
  return response.data;
};

export const createCompetition = async (
  payload: CreateCompetitionPayload
): Promise<CompetitionResponse> => {
  const response = await api.post<CompetitionResponse>("/competitions", payload);
  return response.data;
};

export const updateCompetition = async (
  id: number,
  payload: UpdateCompetitionPayload
): Promise<CompetitionResponse> => {
  const response = await api.patch<CompetitionResponse>(`/competitions/${id}`, payload);
  return response.data;
};

export const deleteCompetition = async (
  id: number
): Promise<DeleteCompetitionResponse> => {
  const response = await api.delete<DeleteCompetitionResponse>(`/competitions/${id}`);
  return response.data;
};

export const restoreCompetition = async (
  id: number
): Promise<CompetitionResponse> => {
  const response = await api.patch<CompetitionResponse>(`/competitions/${id}/restore`);
  return response.data;
};
