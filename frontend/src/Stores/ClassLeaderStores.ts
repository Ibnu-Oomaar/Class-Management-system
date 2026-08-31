import { create } from "zustand";

import type { ClassLeader } from "../api/ClassLeader.api";

interface ClassLeaderStore {
  items: ClassLeader[];
  selectedId: number | null;
  isLoading: boolean;
  error: string | null;

  setItems: (items: ClassLeader[]) => void;
  setSelectedId: (id: number | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  addItem: (item: ClassLeader) => void;
  updateItem: (id: number, item: ClassLeader) => void;
  removeItem: (id: number) => void;
  clear: () => void;
}

export const useClassLeaderStore = create<ClassLeaderStore>((set) => ({
  items: [],
  selectedId: null,
  isLoading: false,
  error: null,

  setItems: (items) => set({ items }),
  setSelectedId: (selectedId) => set({ selectedId }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  addItem: (item) =>
    set((state) => ({
      items: [item, ...state.items],
    })),
  updateItem: (id, item) =>
    set((state) => ({
      items: state.items.map((record) => (record.id === id ? item : record)),
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((record) => record.id !== id),
      selectedId: state.selectedId === id ? null : state.selectedId,
    })),
  clear: () =>
    set({
      items: [],
      selectedId: null,
      isLoading: false,
      error: null,
    }),
}));

export default useClassLeaderStore;
