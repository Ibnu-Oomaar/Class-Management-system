import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createCompetition,
  deleteCompetition,
  getCompetitionById,
  getCompetitions,
  restoreCompetition,
  updateCompetition,
} from "../api/Competition.api";

export const useCompetitions = (page = 1, limit = 10) =>
  useQuery({
    queryKey: ["competitions", page, limit],
    queryFn: () => getCompetitions(page, limit),
  });

export const useCompetitionById = (id: number) =>
  useQuery({
    queryKey: ["competition", id],
    queryFn: () => getCompetitionById(id),
    enabled: Number.isFinite(id) && id > 0,
  });

export const useCreateCompetition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCompetition,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competitions"] });
    },
  });
};

export const useUpdateCompetition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateCompetition>[1] }) =>
      updateCompetition(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competitions"] });
      queryClient.invalidateQueries({ queryKey: ["competition"] });
    },
  });
};

export const useDeleteCompetition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCompetition,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competitions"] });
    },
  });
};

export const useRestoreCompetition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreCompetition,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["competitions"] });
    },
  });
};
