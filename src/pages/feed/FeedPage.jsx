
import React from "react";
import FeedCard from "../../components/feed/FeedCard";
import { FaHeart, FaTimes } from "react-icons/fa";



const FeedPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] py-10">
      <h1 className="text-3xl font-bold text-purple-200 mb-8 tracking-wide drop-shadow">

      </h1>
      <div className="flex flex-col gap-10 w-full max-w-xl">
     
          <FeedCard />
      
      </div>
       <div className="flex mt-6 gap-6">
          <button className="p-5 bg-white/90 hover:bg-purple-100 shadow-xl rounded-full border-4 border-white hover:scale-110 transition" aria-label="Dislike">
            <FaTimes className="w-7 h-7 text-purple-600" />
            {/* Lucide: <X className="w-7 h-7 text-purple-600" /> */}
          </button>
          <button className="p-5 bg-white/90 hover:bg-red-100 shadow-xl rounded-full border-4 border-white hover:scale-110 transition" aria-label="Love">
            <FaHeart className="w-7 h-7 text-red-500" />
            {/* Lucide: <Heart className="w-7 h-7 text-red-500" /> */}
          </button>
       </div>

            
       
        </div>
   
  );
};

export default FeedPage;
