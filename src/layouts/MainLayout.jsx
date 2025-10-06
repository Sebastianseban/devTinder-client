
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar";
import useUserStore from "../store/userStore";
import axiosInstance, { setAccessToken } from "../api/axios";


const MainLayout = () => {

   const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

    useEffect(() => {
    // Only try to refresh if we have a user in storage
    // (meaning they were logged in before refresh)
    if (user) {
      const refreshToken = async () => {
        try {
          const res = await axiosInstance.get('/auth/refresh-token');
          setAccessToken(res.data.data.accessToken);
          
          // Optionally update user data
          const userRes = await axiosInstance.get('/auth/me');
          setUser(userRes.data.data);
        } catch (error) {
          console.error('Failed to refresh on mount:', error);
          clearUser();
          setAccessToken(null);
        }
      };

      refreshToken();
    }
  }, []);

 
  return (
    <div className="w-full h-full overflow-scroll">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
