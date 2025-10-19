
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