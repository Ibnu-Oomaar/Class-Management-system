import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";

// ============================================================
// API BASE URL
// ============================================================

const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:5030/api";

// ============================================================
// AXIOS INSTANCE
// ============================================================

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ============================================================
// STORAGE KEYS
// ============================================================

export const ACCESS_TOKEN_KEY = "access_token";
export const REFRESH_TOKEN_KEY = "refresh_token";
export const USER_KEY = "student_user";

// ============================================================
// TOKEN HELPERS
// ============================================================

export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setTokens = (
  accessToken: string,
  refreshToken?: string
): void => {
  localStorage.setItem(
    ACCESS_TOKEN_KEY,
    accessToken
  );

  if (refreshToken) {
    localStorage.setItem(
      REFRESH_TOKEN_KEY,
      refreshToken
    );
  }
};

export const clearAuthStorage = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// ============================================================
// REQUEST INTERCEPTOR
// ============================================================

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
);

// ============================================================
// REFRESH CONTROL
// ============================================================

let isRefreshing = false;

let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (
  error: unknown,
  token: string | null = null
) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else if (token) {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

// ============================================================
// RESPONSE INTERCEPTOR
// ============================================================

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError<{ message?: string }>) => {
    const backendMessage = error.response?.data?.message;
    if (typeof backendMessage === "string" && backendMessage.trim()) {
      error.message = backendMessage;
    }

    const originalRequest =
      error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

    // Only handle 401
    if (
      error.response?.status !== 401 ||
      originalRequest?._retry
    ) {
      return Promise.reject(error);
    }

    // Do not refresh login/refresh endpoints
    if (
      originalRequest.url?.includes(
        "/students/login"
      ) ||
      originalRequest.url?.includes(
        "/students/refresh"
      )
    ) {
      return Promise.reject(error);
    }

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      clearAuthStorage();

      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token: string) => {
            originalRequest.headers.Authorization =
              `Bearer ${token}`;

            resolve(api(originalRequest));
          },

          reject,
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const response = await axios.post(
        `${API_URL}/students/refresh`,
        {
          refresh_token: refreshToken,
        }
      );

      const newAccessToken =
        response.data?.data?.access_token;

      if (!newAccessToken) {
        throw new Error(
          "Access token was not returned"
        );
      }

      setTokens(newAccessToken);

      processQueue(null, newAccessToken);

      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);

      clearAuthStorage();

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default api;

