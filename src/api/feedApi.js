import axiosInstance from "./axios";

export const feedApi = {
  fetchFeed: async (filters = {}) => {
       const params = new URLSearchParams(filters).toString();
    const response = await axiosInstance.get(`/users/feed?${params}`);
      return response.data?.data?.data || [];
  },
};
