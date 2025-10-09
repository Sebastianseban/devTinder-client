import axiosInstance, { setAccessToken } from "./axios";

export const authApi = {
  register: async (userData) => {
    const res = await axiosInstance.post("/auth/signup", userData);
    const { accessToken } = res.data.data;
    if (accessToken) setAccessToken(accessToken);
    return res.data.data.user;
  },
  login: async (userData) => {
    const res = await axiosInstance.post("/auth/signin", userData);
    const { accessToken } = res.data.data.user;
    if (accessToken) setAccessToken(accessToken);
    return res.data.data.user;
  },

 googleAuth: async (code) => {
    const res = await axiosInstance.post("/auth/google-auth", { code });
    const { accessToken, user } = res.data.data;
    if (accessToken) setAccessToken(accessToken);
    return user;
  },
};
