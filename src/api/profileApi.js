import axiosInstance from "./axios";

export const profileApi = {
  completeProfile: async (formData) => {
    const res = await axiosInstance.post("/profile/complete", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.data.user;
  },
};
