import { create } from "zustand";

const useFeedStore = create((set) => ({
  developers: [],
  pagination: null,
  setFeed: (developers, pagination) => set({ developers, pagination }),
  clearFeed: () => set({ developers: [], pagination: null }),
}));

export default useFeedStore;
