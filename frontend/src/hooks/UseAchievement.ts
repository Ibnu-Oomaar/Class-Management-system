import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createAchievement,
  deleteAchievement,
  getAchievementById,
  getAchievements,
  restoreAchievement,
  updateAchievement,
} from "../api/Achievement.api";

export const useAchievements = (page = 1, limit = 10) =>
  useQuery({
    queryKey: ["achievements", page, limit],
    queryFn: () => getAchievements(page, limit),
  });

export const useAchievementById = (id: number) =>
  useQuery({
    queryKey: ["achievement", id],
    queryFn: () => getAchievementById(id),
    enabled: Number.isFinite(id) && id > 0,
  });

export const useCreateAchievement = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAchievement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["achievements"] });
    },
  });
};

export const useUpdateAchievement = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateAchievement>[1] }) =>
      updateAchievement(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["achievements"] });
      queryClient.invalidateQueries({ queryKey: ["achievement"] });
    },
  });
};

export const useDeleteAchievement = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAchievement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["achievements"] });
    },
  });
};

export const useRestoreAchievement = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreAchievement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["achievements"] });
    },
  });
};
