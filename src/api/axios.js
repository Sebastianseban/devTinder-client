import axios from "axios";
import useUserStore from "../store/userStore";

let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/users/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const refreshInstance = axios.create({
          baseURL: "http://localhost:3000/api/v1",
          withCredentials: true,
        });

        const res = await refreshInstance.get("/auth/refresh-token");

        const newAccessToken = res.data.data.accessToken;

        // Save in memory
        setAccessToken(newAccessToken);

        // Retry the original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);

        // Clear user state
        useUserStore.getState().clearUser();
        setAccessToken(null);

        // Optional: redirect to login
        // window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);



export default axiosInstance;
