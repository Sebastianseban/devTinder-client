import { useMutation } from "@tanstack/react-query";
import useUserStore from "../store/userStore";
import { profileApi } from "../api/profileApi";
import { useNavigate } from "react-router";

export const useCompleteProfile = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: profileApi.completeProfile,
    onSuccess: (user) => {
      setUser(user);
      navigate("/feed");
    },
    onError: (error) => {
      // Handle error: show toast, console.error, etc.
      console.error("Profile completion failed:", error);
    },
  });
};
