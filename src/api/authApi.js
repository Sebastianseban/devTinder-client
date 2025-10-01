import axiosInstance, { setAccessToken } from "./axios";

export const authApi = {
  register: async (userData) => {
    const res = await axiosInstance.post("/auth/signup", userData);
    const { accessToken } = res.data.data.user;
    if (accessToken) setAccessToken(accessToken);
    return res.data.data.user;
  },
};
