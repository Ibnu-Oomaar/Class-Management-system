import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createClassImpact,
  deleteClassImpact,
  getClassImpactById,
  getClassImpacts,
  restoreClassImpact,
  updateClassImpact,
} from "../api/ClassImpact.api";

export const useClassImpacts = (page = 1, limit = 10) =>
  useQuery({
    queryKey: ["class-impacts", page, limit],
    queryFn: () => getClassImpacts(page, limit),
  });

export const useClassImpactById = (id: number) =>
  useQuery({
    queryKey: ["class-impact", id],
    queryFn: () => getClassImpactById(id),
    enabled: Number.isFinite(id) && id > 0,
  });

export const useCreateClassImpact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createClassImpact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["class-impacts"] });
    },
  });
};

export const useUpdateClassImpact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateClassImpact>[1] }) =>
      updateClassImpact(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["class-impacts"] });
      queryClient.invalidateQueries({ queryKey: ["class-impact"] });
    },
  });
};

export const useDeleteClassImpact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteClassImpact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["class-impacts"] });
    },
  });
};

export const useRestoreClassImpact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreClassImpact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["class-impacts"] });
    },
  });
};
