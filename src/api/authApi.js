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
};
