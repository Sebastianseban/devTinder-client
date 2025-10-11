import React from "react";
import { Link } from "react-router";
import { FaHome, FaCompass } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] px-6 py-20">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#7B68EE]/10 to-[#FF6B95]/10 blur-2xl opacity-30"></div>

      {/* 404 Code */}
      <h1 className="text-[7rem] md:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#7B68EE] to-[#FF6B95] drop-shadow-lg z-10">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 z-10">
        Oops! Page Not Found
      </h2>
      <p className="text-white/70 max-w-lg mb-8 z-10">
        The page you’re looking for doesn’t exist or might have been moved.
        Let’s get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-[#00D4FF] via-[#7B68EE] to-[#FF6B95] hover:from-[#00C4EB] hover:via-[#6A5BCD] hover:to-[#E55A85] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <FaHome />
          Back to Home
        </Link>

        <Link
          to="/feed"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-white/5 border border-white/15 hover:bg-white/10 transition-all duration-300 font-medium"
        >
          <FaCompass />
          Explore Developers
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
