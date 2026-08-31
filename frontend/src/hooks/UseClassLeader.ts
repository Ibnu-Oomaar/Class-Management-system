import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createClassLeader,
  deleteClassLeader,
  getClassLeaderById,
  getClassLeaders,
  restoreClassLeader,
} from "../api/ClassLeader.api";

export const useClassLeaders = (page = 1, limit = 10) =>
  useQuery({
    queryKey: ["class-leaders", page, limit],
    queryFn: () => getClassLeaders(page, limit),
  });

export const useClassLeaderById = (id: number) =>
  useQuery({
    queryKey: ["class-leader", id],
    queryFn: () => getClassLeaderById(id),
    enabled: Number.isFinite(id) && id > 0,
  });

export const useCreateClassLeader = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createClassLeader,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["class-leaders"] });
    },
  });
};

export const useDeleteClassLeader = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteClassLeader,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["class-leaders"] });
    },
  });
};

export const useRestoreClassLeader = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreClassLeader,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["class-leaders"] });
    },
  });
};
