
import axios from "axios";
import useUserStore from "../store/userStore";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

// Request interceptor - get token from store
axiosInstance.interceptors.request.use((config) => {
  const accessToken = useUserStore.getState().accessToken;
  
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  
  return config;
});

// Response interceptor - handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const refreshInstance = axios.create({
          baseURL: "http://localhost:3000/api/v1",
          withCredentials: true,
        });

        const res = await refreshInstance.get("/auth/refresh-token");
        const newAccessToken = res.data.data.accessToken;

        // Save new token in store
        useUserStore.getState().setAccessToken(newAccessToken);

        // Retry the original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);

        // Clear user state
        useUserStore.getState().clearUser();

        // Optional: redirect to login
        // window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;