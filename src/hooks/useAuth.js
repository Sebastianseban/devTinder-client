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
