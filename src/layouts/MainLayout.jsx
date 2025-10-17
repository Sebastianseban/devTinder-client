
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar";
import useUserStore from "../store/userStore";
import axiosInstance from "../api/axios";
import SideBar from "../components/feed/SideBar";

const MainLayout = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    // Only try to refresh if we have a user in storage
    // (meaning they were logged in before page refresh)
    if (user) {
      const refreshToken = async () => {
        try {
          const res = await axiosInstance.get("/auth/refresh-token");
          const newAccessToken = res.data.data.accessToken;
          
          // Update token in store
          setAccessToken(newAccessToken);

          // Optionally fetch and update user data
          const userRes = await axiosInstance.get("/auth/me");
          setUser(userRes.data.data);
        } catch (error) {
          console.error("Failed to refresh on mount:", error);
          // Clear user and token if refresh fails
          clearUser();
        }
      };

      refreshToken();
    }
  }, []); // Empty dependency array - only run on mount

  return (
    <div className="w-full h-full overflow-scroll ">
      <Navbar />
    
      <Outlet />
     
    </div>
    
  );
};

export default MainLayout;