// src/components/feed/FeedCard.jsx
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

export default function FeedCard({ dev }) {

  return (
    <div className="relative max-w-md mx-auto rounded-[2.2rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-[#232949] via-[#282f57] to-[#2b315c] hover:scale-[1.025] transition group">
      {/* Image Section */}
      <div className="relative h-60">
        <img
          src={dev.photoUrl}
          alt={`${dev.firstName} ${dev.lastName}`}
          className="w-full h-full object-cover border-b-4 border-purple-700 rounded-t-[2.2rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end px-8 pb-8">
          <h2 className="text-white text-3xl font-bold">
            {dev.firstName} {dev.lastName}, {dev.age}
          </h2>
          <p className="text-purple-300 text-lg font-semibold mt-1 capitalize">
            {dev.experienceLevel} Developer
          </p>
          <p className="flex items-center text-white text-base gap-2 mt-2 font-light">
            <IoLocationSharp/> {dev.location}
          </p>
          {dev.isPremium && (
            <span className="absolute top-5 right-5 bg-yellow-400 px-3 py-1 rounded-full font-extrabold text-gray-900 text-xs shadow-lg">
              PRO
            </span>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-tr from-[#272c4b] to-[#191c32] px-8 py-7 rounded-b-[2.2rem]">
        <p className="text-white/80 leading-relaxed text-[15px] mb-6 font-light tracking-wide">
          {dev.bio}
        </p>

        <h3 className="text-white font-bold mb-2 text-lg tracking-wide">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {dev.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-br from-purple-200 to-purple-500 text-purple-900 px-4 py-2 rounded-2xl text-xs font-semibold shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
