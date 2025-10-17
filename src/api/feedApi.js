
import axiosInstance from "./axios";

export const feedApi = {
  fetchFeed: async (filters = {}) => {
    // Prepare params
    const paramsObj = { ...filters };

    // Handle age range
    if (filters.age) {
      paramsObj.minAge = filters.age.min;
      paramsObj.maxAge = filters.age.max;
      delete paramsObj.age;
    }

    // Only include skills if not empty
    if (!paramsObj.skills || paramsObj.skills.length === 0) {
      delete paramsObj.skills;
    }

    // Remove undefined or empty string values
    Object.keys(paramsObj).forEach(
      (key) => (paramsObj[key] === undefined || paramsObj[key] === "") && delete paramsObj[key]
    );

    const params = new URLSearchParams(paramsObj).toString();
    const response = await axiosInstance.get(`/users/feed?${params}`);
    return response.data?.data?.data || [];
  },
};
