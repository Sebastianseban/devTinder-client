

import axiosInstance from "./axios";
import useUserStore from "../store/userStore";

export const authApi = {
  register: async (userData) => {
    const res = await axiosInstance.post("/auth/signup", userData);
    const { accessToken, user } = res.data.data;
    
    if (accessToken) {
      useUserStore.getState().setAccessToken(accessToken);
    }
    if (user) {
      useUserStore.getState().setUser(user);
    }
    
    return user;
  },

  login: async (userData) => {
    const res = await axiosInstance.post("/auth/signin", userData);
    const { accessToken, user } = res.data.data;
    
    if (accessToken) {
      useUserStore.getState().setAccessToken(accessToken);
    }
    if (user) {
      useUserStore.getState().setUser(user);
    }
    
    return user;
  },

  googleAuth: async (code) => {
    const res = await axiosInstance.post("/auth/google-auth", { code });
    const { accessToken, user } = res.data.data;
    
    if (accessToken) {
      useUserStore.getState().setAccessToken(accessToken);
    }
    if (user) {
      useUserStore.getState().setUser(user);
    }
    
    return user;
  },

    githubAuth: async (code) => {
    const res = await axiosInstance.post("/auth/github", { code });
    const { accessToken, user } = res.data.data;

    if (accessToken) {
      useUserStore.getState().setAccessToken(accessToken);
    }
    if (user) {
      useUserStore.getState().setUser(user);
    }

    return user;
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
    } finally {
      // Clear store even if request fails
      useUserStore.getState().clearUser();
    }
  },
};