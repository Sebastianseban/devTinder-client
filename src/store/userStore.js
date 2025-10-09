
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useUserStore = create(
//   persist(
//     (set) => ({
//       user: null, // logged-in user

//       setUser: (userData) => set({ user: userData }),
//       clearUser: () => set({ user: null }),
//     }),
//     {
//       name: "user-storage", // localStorage key
//     }
//   )
// );

// export default useUserStore;
// store/userStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,

      setUser: (userData) => set({ user: userData }),
      setUserToken: (token) => set({ accessToken: token }),
      clearUser: () => set({ user: null, accessToken: null }),
    }),
    { name: "user-storage" }
  )
);

export default useUserStore;
