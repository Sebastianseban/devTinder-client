import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const ChatPage = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[#0A0A0F]">
      <div className="w-[800px]">
        <div className="mt-6 px-2">
          <h1 className="text-3xl text-white font-medium flex items-center gap-2">
            <IoMdMail />
            Messages
          </h1>
          <p className="text-sm text-amber-50">3 unread messages</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-colors duration-300 backdrop-blur-sm"
              />
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300">
              Unread
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300">
              Starred
            </button>
          </div>

          {/* Conversation List - Minimal Flat Style */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <FaUser className="text-white/60 bg-[#181823] rounded-full p-1" size={36} />
              <div>
                <h1 className="text-base text-white font-semibold">Sarah Chen</h1>
                <p className="text-xs text-white/50">Full Stack Developer</p>
                <p className="text-sm text-white/80 mt-1">That sounds amazing! When you want start?</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <FaUser className="text-white/60 bg-[#181823] rounded-full p-1" size={36} />
              <div>
                <h1 className="text-base text-white font-semibold">Sarah Chen</h1>
                <p className="text-xs text-white/50">Full Stack Developer</p>
                <p className="text-sm text-white/80 mt-1">That sounds amazing! When you want start?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
