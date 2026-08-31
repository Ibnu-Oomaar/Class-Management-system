import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createCompetitionParticipant,
  deleteCompetitionParticipant,
  getCompetitionParticipantById,
  getCompetitionParticipants,
  restoreCompetitionParticipant,
  updateCompetitionParticipant,
} from "../api/CompetitionParticipant.api";

export const useCompetitionParticipants = (page = 1, limit = 10) =>
  useQuery({
    queryKey: ["competition-participants", page, limit],
    queryFn: () => getCompetitionParticipants(page, limit),
  });

export const useCompetitionParticipantById = (id: number) =>
  useQuery({
    queryKey: ["competition-participant", id],
    queryFn: () => getCompetitionParticipantById(id),
    enabled: Number.isFinite(id) && id > 0,
  });

export const useCreateCompetitionParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCompetitionParticipant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competition-participants"] });
    },
  });
};

export const useUpdateCompetitionParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateCompetitionParticipant>[1] }) =>
      updateCompetitionParticipant(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competition-participants"] });
      queryClient.invalidateQueries({ queryKey: ["competition-participant"] });
    },
  });
};

export const useDeleteCompetitionParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCompetitionParticipant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competition-participants"] });
    },
  });
};

export const useRestoreCompetitionParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreCompetitionParticipant,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competition-participants"] });
    },
  });
};
