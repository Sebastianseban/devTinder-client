import React from "react";
import useUserStore from "../store/userStore";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const user = useUserStore((state) => state.user);
    const accessToken = useUserStore((state) => state.accessToken);
   if (user && accessToken) {
    // Check if profile is complete before redirecting
    if (user.isProfileComplete) {
      return <Navigate to="/feed" replace />;
    } else {
      return <Navigate to="/auth/complete-profile" replace />;
    }
  }

  return children;

};

export default PublicRoute;
