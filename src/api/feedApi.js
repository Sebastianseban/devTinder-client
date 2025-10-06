import axiosInstance from "./axios";

export const feedApi = {
  fetchFeed: async () => {
    const response = await axiosInstance.get("/users/feed");
      return response.data?.data?.data || [];
  },
};
