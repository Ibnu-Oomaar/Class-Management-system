import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createStudent,
  deleteStudent,
  getDeletedStudents,
  getStudentByCode,
  getStudentById,
  getStudents,
  loginStudent,
  refreshStudentToken,
  restoreStudent,
  updateStudent,
  updateStudentRole,
  updateStudentStatus,
} from "../api/Student.api";

export const useStudents = (page = 1, limit = 10) =>
  useQuery({
    queryKey: ["students", page, limit],
    queryFn: () => getStudents(page, limit),
  });

export const useStudentById = (id: number) =>
  useQuery({
    queryKey: ["student", id],
    queryFn: () => getStudentById(id),
    enabled: Number.isFinite(id) && id > 0,
  });

export const useStudentByCode = (studentCode: string) =>
  useQuery({
    queryKey: ["student-by-code", studentCode],
    queryFn: () => getStudentByCode(studentCode),
    enabled: Boolean(studentCode?.trim()),
  });

export const useDeletedStudents = (enabled = true) =>
  useQuery({
    queryKey: ["students-deleted"],
    queryFn: getDeletedStudents,
    enabled,
  });

export const useLoginStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (studentCode: string) => loginStudent(studentCode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
};

export const useRefreshStudentToken = () =>
  useMutation({
    mutationFn: refreshStudentToken,
  });

export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateStudent>[1] }) =>
      updateStudent(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });
};

export const useUpdateStudentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateStudentStatus>[1] }) =>
      updateStudentStatus(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });
};

export const useUpdateStudentRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: Parameters<typeof updateStudentRole>[1] }) =>
      updateStudentRole(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["student"] });
    },
  });
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["students-deleted"] });
    },
  });
};

export const useRestoreStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["students-deleted"] });
    },
  });
};
 