import axiosInstance from "./axios"



export const connectionRequestApi = {
    sendConnection: async ({toUserId, status}) => {
        const res = await axiosInstance.post("/connections/send",{status,toUserId})
        return res.data
    }
} 