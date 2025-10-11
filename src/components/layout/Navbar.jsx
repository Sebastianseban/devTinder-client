
import React from "react";
import { FaCode, FaRocket, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useUserStore from "../../store/userStore";
import { useLogout } from "../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const logoutMutation = useLogout();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      navigate("/auth/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still navigate to signin even if API call fails
      // since clearUser() was already called in authApi
      navigate("/auth/signin");
    }
  };

  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 relative bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] border-b border-white/10 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#7B68EE]/10 to-[#FF6B95]/10"></div>

      {/* Logo */}
      <Link to={user ? "/feed" : "/"} className="flex items-center gap-3 z-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#7B68EE] flex items-center justify-center shadow-lg">
          <FaCode className="text-white text-lg" />
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight bg-gradient-to-r from-white via-[#00D4FF] to-[#7B68EE] bg-clip-text text-transparent">
          devMatch
        </h1>
      </Link>

      {/* Navigation Links */}
      {!user && (
        <div className="hidden md:flex items-center gap-8 z-10">
          <Link
            to="/features"
            className="text-white/70 hover:text-white transition-colors duration-200 font-medium text-sm"
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            className="text-white/70 hover:text-white transition-colors duration-200 font-medium text-sm"
          >
            How It Works
          </Link>
          <Link
            to="/success-stories"
            className="text-white/70 hover:text-white transition-colors duration-200 font-medium text-sm"
          >
            Success Stories
          </Link>
          <Link
            to="/pricing"
            className="text-white/70 hover:text-white transition-colors duration-200 font-medium text-sm"
          >
            Pricing
          </Link>
        </div>
      )}

      {/* Auth or Profile Section */}
      <div className="flex items-center gap-3 z-10">
        {user ? (
          // ✅ Logged-in state
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
            >
              <FaUserCircle className="text-2xl" />
              <span className="hidden md:inline text-sm font-medium">
                {user?.firstName || user?.name || "Profile"}
              </span>
            </Link>

            <button
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-white/90 bg-white/5 border border-white/15 hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaSignOutAlt />
              <span className="hidden md:inline text-sm font-medium">
                {logoutMutation.isPending ? "Logging out..." : "Logout"}
              </span>
            </button>
          </div>
        ) : (
          // 🚪 Logged-out state
          <>
            <Link
              to="/auth/signin"
              className="group px-6 py-2.5 rounded-xl text-white/90 hover:text-white 
                bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25
                transition-all duration-300 backdrop-blur-xl font-medium text-sm
                hover:shadow-lg flex items-center gap-2"
            >
              <span>Sign In</span>
            </Link>

            <Link
              to="/auth/signup"
              className="group px-6 py-2.5 rounded-xl font-semibold text-black 
                bg-gradient-to-r from-[#00D4FF] via-[#7B68EE] to-[#FF6B95] 
                hover:from-[#00C4EB] hover:via-[#6A5BCD] hover:to-[#E55A85]
                transition-all duration-300 shadow-lg hover:shadow-xl 
                transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FaRocket className="text-sm" />
              <span>Get Started</span>
            </Link>
          </>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent opacity-30"></div>
    </nav>
  );
};

export default Navbar;