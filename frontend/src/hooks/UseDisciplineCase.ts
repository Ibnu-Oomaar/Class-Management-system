import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createDisciplineCase,
  deleteDisciplineCase,
  getDisciplineCaseById,
  getDisciplineCases,
  restoreDisciplineCase,
  updateDisciplineCase,
} from "../api/DisciplineCase.api";

export const useDisciplineCases = (page = 1, limit = 10) =>
  useQuery({
    queryKey: ["discipline-cases", page, limit],
    queryFn: () => getDisciplineCases(page, limit),
  });

export const useDisciplineCaseById = (id: number) =>
  useQuery({
    queryKey: ["discipline-case", id],
    queryFn: () => getDisciplineCaseById(id),
    enabled: Number.isFinite(id) && id > 0,
  });

export const useCreateDisciplineCase = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDisciplineCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discipline-cases"] });
    },
  });
};

export const useUpdateDisciplineCase = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateDisciplineCase>[1] }) =>
      updateDisciplineCase(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discipline-cases"] });
      queryClient.invalidateQueries({ queryKey: ["discipline-case"] });
    },
  });
};

export const useDeleteDisciplineCase = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDisciplineCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discipline-cases"] });
    },
  });
};

export const useRestoreDisciplineCase = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreDisciplineCase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discipline-cases"] });
    },
  });
};
