import { useMutation } from "@tanstack/react-query";
import useUserStore from "../store/userStore";
import { authApi } from "../api/authApi";

export const useRegister = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (user) => setUser(user),
  });
};

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser); // Fix: get setUser here too

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (user) => setUser(user), // Fix: pass the returned user
  });
};

export const useGoogleAuth = () => {
  const setUser = useUserStore((state) => state.setUser);
  return useMutation({
    mutationFn: authApi.googleAuth,
    onSuccess: (user) => setUser(user),
  });
};