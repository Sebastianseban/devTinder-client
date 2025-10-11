// import { useMutation } from "@tanstack/react-query";
// import useUserStore from "../store/userStore";
// import { authApi } from "../api/authApi";

// export const useRegister = () => {
//   const setUser = useUserStore((state) => state.setUser);

//   return useMutation({
//     mutationFn: authApi.register,
//     onSuccess: (user) => setUser(user),
//   });
// };

// export const useLogin = () => {
//   const setUser = useUserStore((state) => state.setUser); 

//   return useMutation({
//     mutationFn: authApi.login,
//     onSuccess: (user) => setUser(user),
//   });
// };

// export const useGoogleAuth = () => {
//   const setUser = useUserStore((state) => state.setUser);
//   return useMutation({
//     mutationFn: authApi.googleAuth,
//     onSuccess: (user) => setUser(user),
//   });
// };
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/authApi";

export const useRegister = () => {
  return useMutation({
    mutationFn: authApi.register,
    // No need for onSuccess - authApi already handles store updates
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,
    // No need for onSuccess - authApi already handles store updates
  });
};

export const useGoogleAuth = () => {
  return useMutation({
    mutationFn: authApi.googleAuth,
    // No need for onSuccess - authApi already handles store updates
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: authApi.logout,
    // No need for onSuccess - authApi already handles store clearing
  });
};