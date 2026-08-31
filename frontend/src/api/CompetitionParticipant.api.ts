import api from "../helpers/api";

import type { Student } from "../Stores/StudentStores";

export interface CompetitionParticipantStudentSummary extends Student {
  fullname: string;
}

export interface CompetitionParticipantCompetitionSummary {
  id: number;
  name: string;
  description: string | null;
  type: string;
  start_date: string;
  end_date: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface CompetitionParticipant {
  id: number;
  competition_id: number;
  student_id: number;
  position: string | null;
  points: number;
  joined_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  student?: CompetitionParticipantStudentSummary;
  competition?: CompetitionParticipantCompetitionSummary;
}

export interface CompetitionParticipantListResponse {
  success: boolean;
  count: number;
  data: CompetitionParticipant[];
}

export interface CompetitionParticipantResponse {
  success: boolean;
  message?: string;
  data: CompetitionParticipant;
}

export interface DeleteCompetitionParticipantResponse {
  success: boolean;
  message: string;
}

export interface CreateCompetitionParticipantPayload {
  competition_id: number;
  student_id: number;
  position?: string | null;
  points?: number;
}

export interface UpdateCompetitionParticipantPayload {
  competition_id?: number;
  student_id?: number;
  position?: string | null;
  points?: number;
}

export const getCompetitionParticipants = async (
  page = 1,
  limit = 10
): Promise<CompetitionParticipantListResponse> => {
  const response = await api.get<CompetitionParticipantListResponse>("/competition-participants", {
    params: { page, limit },
  });

  return response.data;
};

export const getCompetitionParticipantById = async (
  id: number
): Promise<CompetitionParticipantResponse> => {
  const response = await api.get<CompetitionParticipantResponse>(`/competition-participants/${id}`);
  return response.data;
};

export const createCompetitionParticipant = async (
  payload: CreateCompetitionParticipantPayload
): Promise<CompetitionParticipantResponse> => {
  const response = await api.post<CompetitionParticipantResponse>("/competition-participants", payload);
  return response.data;
};

export const updateCompetitionParticipant = async (
  id: number,
  payload: UpdateCompetitionParticipantPayload
): Promise<CompetitionParticipantResponse> => {
  const response = await api.patch<CompetitionParticipantResponse>(`/competition-participants/${id}`, payload);
  return response.data;
};

export const deleteCompetitionParticipant = async (
  id: number
): Promise<DeleteCompetitionParticipantResponse> => {
  const response = await api.delete<DeleteCompetitionParticipantResponse>(`/competition-participants/${id}`);
  return response.data;
};

export const restoreCompetitionParticipant = async (
  id: number
): Promise<CompetitionParticipantResponse> => {
  const response = await api.patch<CompetitionParticipantResponse>(`/competition-participants/${id}/restore`);
  return response.data;
};
