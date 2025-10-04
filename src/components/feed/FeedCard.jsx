// export default function FeedCard() {
//   const dev = {
//     photoUrl:
//       "https://res.cloudinary.com/dgestxvna/image/upload/v1759299530/devTinder/guku51cqz8q8goyn46ue.png",
//     name: "dasdas adasd",
//     age: 18,
//     role: "Frontend Developer",
//     location: "Kerala, India",
//     studio: "Creative Studio",
//     username: "@dasdsad",
//     projects: 7,
//     bio: "Student developer with a passion for accessible, beautiful web experiences. Enjoys modern frameworks and design systems.",
//     skills: ["JavaScript", "Python", "React", "Tailwind"],
//     isPremium: false,
//   };

//   return (
//     <div className="max-w-md  mx-auto h-[600px] rounded-3xl overflow-hidden shadow-lg shadow-purple-600/20 bg-gradient-to-tr from-[#232949] to-[#2b315c] transform transition-transform hover:scale-[1.02] hover:shadow-2xl">
//       {/* Image with overlay */}
//       <div className="relative h-64">
//         <img
//           src={dev.photoUrl}
//           alt={dev.name}
//           className="w-full h-full object-cover border-4 border-purple-600 rounded-b-none rounded-t-3xl drop-shadow-lg"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end px-8 pb-8">
//           <h2 className="text-white text-3xl font-extrabold tracking-tight leading-snug">
//             {dev.name}, {dev.age}
//           </h2>
//           <p className="text-white text-xl font-semibold tracking-wide mt-1">
//             {dev.role}
//           </p>
//           <p className="flex items-center text-white text-base gap-2 mt-2 font-light">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-5 h-5 inline-block"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z" />
//             </svg>
//             {dev.location}
//           </p>
//           {dev.isPremium && (
//             <span className="absolute top-5 right-5 bg-yellow-400 px-3 py-1 rounded-full font-bold text-gray-900 text-sm shadow-lg select-none">
//               PRO
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Info Section */}
//       <div className="bg-gradient-to-tr from-[#2b315c] to-[#1a1f3d] px-8 py-6 rounded-b-3xl">
//         <div className="flex flex-wrap gap-x-6 gap-y-2 items-center text-white font-medium text-base mb-4">
//         <div className="space-x-6">  <div className="flex  items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-purple-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path d="M9 19V6h11M4 9v10h3m1 0h10a1 1 0 001-1v-1H6v2zm-4-4V7a1 1 0 011-1h3M9 6v-1a1 1 0 011-1h4a1 1 0 011 1v1" />
//             </svg>
//             {dev.studio}
//           </div>
//           <div className="flex items-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 text-purple-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm6 1.5a6 6 0 11-12 0v.75a6 6 0 0112 0v-.75z" />
//             </svg>
//             {dev.username}
//           </div></div>
//           <span className="ml-auto bg-purple-600/60 hover:bg-purple-700 transition rounded-full px-4 py-1 text-sm font-semibold select-none shadow-sm cursor-default">
//             {dev.projects} projects
//           </span>
//         </div>
//         <p className="text-white/80 leading-relaxed text-sm mb-6 font-light tracking-wide">
//           {dev.bio}
//         </p>
//         <div>
//           <h3 className="text-white font-bold mb-2 text-lg tracking-wide">
//             Tech Stack
//           </h3>
//           <div className="flex flex-wrap gap-3">
//             {dev.skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="bg-gradient-to-br from-purple-300 to-purple-500 text-purple-900 px-4 py-2 rounded-2xl text-xs font-semibold shadow-md select-none"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
 // react-icons fa (font awesome)
// OR, for lucide, use: import { Heart, X } from "lucide-react";

export default function FeedCard() {
  const dev = {
    photoUrl: "https://res.cloudinary.com/dgestxvna/image/upload/v1759299530/devTinder/guku51cqz8q8goyn46ue.png",
    name: "dasdas adasd",
    age: 18,
    role: "Frontend Developer",
    location: "Kerala, India",
    studio: "Creative Studio",
    username: "@dasdsad",
    projects: 7,
    bio: "Student developer with a passion for accessible, beautiful web experiences. Enjoys modern frameworks and design systems.",
    skills: ["JavaScript", "Python", "React", "Tailwind"],
    isPremium: false,
  };

  return (
    <div className="relative max-w-md mx-auto  rounded-[2.2rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-[#232949] via-[#282f57] to-[#2b315c] hover:scale-[1.025] transition group">
      {/* Image Section */}
      <div className="relative h-60">
        <img
          src={dev.photoUrl}
          alt={dev.name}
          className="w-full h-full object-cover border-b-4 border-purple-700 rounded-t-[2.2rem] group-hover:brightness-95 transition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end px-8 pb-8">
          <h2 className="text-white text-3xl font-bold">
            {dev.name}, {dev.age}
          </h2>
          <p className="text-purple-300 text-lg font-semibold mt-1">{dev.role}</p>
          <p className="flex items-center text-white text-base gap-2 mt-2 font-light">
            <span>📍</span> {/* or replace with location icon from react-icons/fi */}
            {dev.location}
          </p>
          {dev.isPremium && (
            <span className="absolute top-5 right-5 bg-yellow-400 px-3 py-1 rounded-full font-extrabold text-gray-900 text-xs shadow-lg">
              PRO
            </span>
          )}
        </div>
      </div>
      {/* Info Section */}
      <div className="relative bg-gradient-to-tr from-[#272c4b] to-[#191c32] px-8 py-7 rounded-b-[2.2rem]">
        <div className="flex items-center gap-6 text-white font-medium text-base mb-4">
          <div className="flex items-center gap-2">
            <span>🏢</span> {/* replace with an office icon */}
            {dev.studio}
          </div>
          <div className="flex items-center gap-2">
            <span>@</span> {/* replace with user icon */}
            {dev.username}
          </div>
          <span className="ml-auto bg-purple-600/70 hover:bg-purple-700 transition text-white rounded-full px-4 py-1 text-xs font-semibold select-none shadow">
            {dev.projects} projects
          </span>
        </div>
        <p className="text-white/80 leading-relaxed text-[15px] mb-6 font-light tracking-wide min-h-[52px]">{dev.bio}</p>
        <div>
          <h3 className="text-white font-bold mb-2 text-lg tracking-wide">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 mb-2">
            {dev.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-br from-purple-200 to-purple-500 text-purple-900 px-4 py-2 rounded-2xl text-xs font-semibold shadow hover:shadow-md transition select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* ACTION BUTTONS */}
 
      </div>
    </div>
  );
}
