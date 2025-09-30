
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full h-full overflow-scroll">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
