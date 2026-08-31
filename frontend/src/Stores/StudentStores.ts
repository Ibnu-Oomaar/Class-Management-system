import { create } from "zustand";

import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
  clearAuthStorage,
  setTokens,
} from "../helpers/api";

// ============================================================
// TYPES
// ============================================================

export type StudentRole =
  | "main_monitor"
  | "assistant_monitor"
  | "secretary"
  | "discipline_leader"
  | "sports_leader"
  | "education_leader"
  | "student";

export type StudentStatus =
  | "active"
  | "suspended"
  | "rejected"
  | "transferred";

export interface ClassLeader {
  id: number;
  student_id: number;
  deleted_at: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface Student {
  id: number;
  student_code: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  fullname: string;
  phone: string;

  role: StudentRole;
  status: StudentStatus;

  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;

  class_leaders?: ClassLeader | null;

  achievements?: unknown[];
  discipline_cases?: unknown[];
  class_impacts?: unknown[];
  competitions?: unknown[];
}

// ============================================================
// STORE STATE
// ============================================================

interface StudentStore {
  user: Student | null;

  isAuthenticated: boolean;

  accessToken: string | null;

  refreshToken: string | null;

  setUser: (user: Student | null) => void;

  setAccessToken: (
    token: string | null
  ) => void;

  setSession: (
    user: Student,
    accessToken: string,
    refreshToken?: string
  ) => void;

  logout: () => void;

  hydrate: () => void;
}

// ============================================================
// INITIAL STATE
// ============================================================

const storedAccessToken =
  localStorage.getItem(ACCESS_TOKEN_KEY);

const storedRefreshToken =
  localStorage.getItem(REFRESH_TOKEN_KEY);

const storedUser =
  localStorage.getItem(USER_KEY);

let initialUser: Student | null = null;

try {
  initialUser = storedUser
    ? JSON.parse(storedUser)
    : null;
} catch {
  initialUser = null;
}

// ============================================================
// STORE
// ============================================================

export const useStudentStore =
  create<StudentStore>((set) => ({
    user: initialUser,

    isAuthenticated:
      Boolean(storedAccessToken),

    accessToken:
      storedAccessToken,

    refreshToken:
      storedRefreshToken,

    // ----------------------------------------------------------
    // SET USER
    // ----------------------------------------------------------

    setUser: (user) => {
      if (user) {
        localStorage.setItem(
          USER_KEY,
          JSON.stringify(user)
        );
      } else {
        localStorage.removeItem(USER_KEY);
      }

      set({
        user,
      });
    },

    // ----------------------------------------------------------
    // SET ACCESS TOKEN
    // ----------------------------------------------------------

    setAccessToken: (token) => {
      if (token) {
        localStorage.setItem(
          ACCESS_TOKEN_KEY,
          token
        );
      } else {
        localStorage.removeItem(
          ACCESS_TOKEN_KEY
        );
      }

      set({
        accessToken: token,
        isAuthenticated: Boolean(token),
      });
    },

    // ----------------------------------------------------------
    // SET SESSION
    // ----------------------------------------------------------

    setSession: (
      user,
      accessToken,
      refreshToken
    ) => {
      setTokens(
        accessToken,
        refreshToken
      );

      localStorage.setItem(
        USER_KEY,
        JSON.stringify(user)
      );

      set({
        user,
        accessToken,
        refreshToken:
          refreshToken ??
          localStorage.getItem(
            REFRESH_TOKEN_KEY
          ),
        isAuthenticated: true,
      });
    },

    // ----------------------------------------------------------
    // LOGOUT
    // ----------------------------------------------------------

    logout: () => {
      clearAuthStorage();

      set({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
      });
    },

    // ----------------------------------------------------------
    // HYDRATE
    // ----------------------------------------------------------

    hydrate: () => {
      const accessToken =
        localStorage.getItem(
          ACCESS_TOKEN_KEY
        );

      const refreshToken =
        localStorage.getItem(
          REFRESH_TOKEN_KEY
        );

      const userData =
        localStorage.getItem(USER_KEY);

      const user = (() => {
        try {
          return userData
            ? (JSON.parse(userData) as Student)
            : null;
        } catch {
          return null;
        }
      })();

      set({
        user,
        accessToken,
        refreshToken,
        isAuthenticated:
          Boolean(accessToken),
      });
    },
  }));

export default useStudentStore;
