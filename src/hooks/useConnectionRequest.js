import { useMutation } from "@tanstack/react-query";
import { connectionRequestApi } from "../api/connectionRequestApi";


export const useSendConnection = () => {
  return useMutation({
    mutationFn: connectionRequestApi.sendConnection,
  });
};
