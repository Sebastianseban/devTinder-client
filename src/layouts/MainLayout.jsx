import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { FaUsers, FaBolt, FaHandshake, FaArrowRight, FaStar, FaRocket } from "react-icons/fa";

import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
   const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);
  return (
    <div className="w-full h-full overflow-scroll">
       <div
        className="pointer-events-none fixed top-0 left-0 w-16 h-16 rounded-full opacity-40 blur-2xl transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${pos.x - 32}px, ${pos.y - 32}px)`,
          background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)",
          boxShadow: "0 0 40px 20px rgba(255,255,255,0.2)",
        }}
      ></div>
        <Navbar/>

      <Outlet />
    </div>
  );
};

export default MainLayout;
