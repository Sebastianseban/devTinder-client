// import React, { useState, useRef } from 'react';
// import {
//   MapPin,
//   Briefcase,
//   Heart,
//   X,
//   Star,
//   Code,
//   ExternalLink,
//   ChevronLeft,
//   ChevronRight,
//   Github,
//   Linkedin,
//   Globe
// } from 'lucide-react';

// const FeedCard = ({
//   dev,
//   onSwipe,
//   currentIndex,
//   totalCards
// }) => {
//   const [startX, setStartX] = useState(0);
//   const [currentX, setCurrentX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const cardRef = useRef();

//   // Swipe handlers
//   const handleTouchStart = (e) => {
//     setStartX(e.touches[0].clientX);
//     setIsDragging(true);
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const currentX = e.touches[0].clientX;
//     setCurrentX(currentX - startX);
//   };

//   const handleTouchEnd = () => {
//     if (!isDragging) return;

//     const swipeDistance = currentX;
//     const swipeThreshold = 50;

//     if (Math.abs(swipeDistance) > swipeThreshold) {
//       onSwipe(swipeDistance > 0 ? 'right' : 'left');
//     }

//     setCurrentX(0);
//     setIsDragging(false);
//   };

//   const handleSwipe = (direction) => {
//     onSwipe(direction);
//   };

//   // Photo navigation
//   const nextPhoto = (e) => {
//     e.stopPropagation();
//     if (dev.photos && currentPhotoIndex < dev.photos.length - 1) {
//       setCurrentPhotoIndex(prev => prev + 1);
//     }
//   };

//   const prevPhoto = (e) => {
//     e.stopPropagation();
//     if (currentPhotoIndex > 0) {
//       setCurrentPhotoIndex(prev => prev - 1);
//     }
//   };

//   // Swipe animation styles
//   const getSwipeStyle = () => {
//     if (!isDragging) return {};

//     const rotate = currentX * 0.1;
//     const opacity = 1 - Math.abs(currentX) / 300;

//     return {
//       transform: `translateX(${currentX}px) rotate(${rotate}deg)`,
//       opacity: Math.max(opacity, 0.7),
//       transition: 'none',
//     };
//   };

//   // Swipe indicator
//   const getSwipeIndicator = () => {
//     if (!isDragging || Math.abs(currentX) < 30) return null;

//     const isLike = currentX > 0;
//     const opacity = Math.min(Math.abs(currentX) / 150, 1);

//     return (
//       <div
//         className={`absolute top-1/2 transform -translate-y-1/2 z-20 pointer-events-none ${
//           isLike ? 'left-5 text-green-400' : 'right-5 text-red-400'
//         }`}
//         style={{ opacity }}
//       >
//         <div className="flex flex-col items-center gap-2 font-bold text-sm">
//           {isLike ? <Heart className="w-8 h-8" fill="currentColor" /> : <X className="w-8 h-8" />}
//           <span>{isLike ? 'LIKE' : 'PASS'}</span>
//         </div>
//       </div>
//     );
//   };

//   const currentPhoto = dev.photos?.[currentPhotoIndex] || dev.photoUrl;

//   // Social icon mapping
//   const getSocialIcon = (platform) => {
//     const icons = {
//       github: Github,
//       linkedin: Linkedin,
//       portfolio: Globe,
//       twitter: ExternalLink
//     };
//     const IconComponent = icons[platform] || ExternalLink;
//     return <IconComponent className="w-3 h-3" />;
//   };

//   return (
//     <div className="relative w-full max-w-sm h-[600px] mx-auto">
//       {/* Card Counter */}
//       <div className="absolute -top-10 left-0 right-0 text-center z-10">
//         <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
//           {currentIndex + 1} / {totalCards}
//         </span>
//       </div>

//       {/* Main Card */}
//       <div
//         ref={cardRef}
//         className="relative w-full h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing transition-all duration-300"
//         style={getSwipeStyle()}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {getSwipeIndicator()}

//         {/* Profile Image with Navigation */}
//         <div className="relative h-80 bg-gray-800">
//           <img
//             src={currentPhoto}
//             alt={dev.name}
//             className="w-full h-full object-cover"
//           />

//           {/* Photo Navigation */}
//           {dev.photos && dev.photos.length > 1 && (
//             <>
//               {currentPhotoIndex > 0 && (
//                 <button
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-black/70 hover:scale-110"
//                   onClick={prevPhoto}
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>
//               )}
//               {currentPhotoIndex < dev.photos.length - 1 && (
//                 <button
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-black/70 hover:scale-110"
//                   onClick={nextPhoto}
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               )}

//               {/* Photo Indicators */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
//                 {dev.photos.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//                       index === currentPhotoIndex
//                         ? 'w-6 bg-white'
//                         : 'bg-white/40'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}

//           {/* Gradient Overlay */}
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
//             {/* Premium Badge */}
//             {dev.isPremium && (
//               <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm">
//                 <Star className="w-3 h-3" fill="currentColor" />
//                 <span>PRO</span>
//               </div>
//             )}

//             {/* Location & Basic Info */}
//             <div className="text-white">
//               <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 {dev.name}, {dev.age}
//               </h2>
//               <p className="text-gray-200 text-lg">{dev.role}</p>
//               <div className="flex items-center gap-1 text-gray-300 text-sm mt-1">
//                 <MapPin className="w-4 h-4" />
//                 <span>{dev.location}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Info Section */}
//         <div className="p-6 flex-1 flex flex-col gap-4">
//           {/* Company & Projects */}
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2 text-gray-300 text-sm">
//               <Briefcase className="w-4 h-4" />
//               <span>{dev.company}</span>
//             </div>
//             <div className="flex items-center gap-1 bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full text-xs font-medium border border-indigo-500/30">
//               <Code className="w-3 h-3" />
//               <span>{dev.projects} projects</span>
//             </div>
//           </div>

//           {/* Bio */}
//           <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
//             {dev.bio}
//           </p>

//           {/* Tech Stack */}
//           <div>
//             <h3 className="text-gray-200 font-semibold text-sm mb-2">Tech Stack</h3>
//             <div className="flex flex-wrap gap-2">
//               {dev.skills.map((skill, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/30"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Experience Level */}
//           {dev.experienceLevel && (
//             <div>
//               <h3 className="text-gray-200 font-semibold text-sm mb-2">Experience</h3>
//               <span className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-medium border border-green-500/30">
//                 {dev.experienceLevel}
//               </span>
//             </div>
//           )}

//           {/* Social Links */}
//           {dev.socialLinks && (
//             <div className="flex flex-wrap gap-2">
//               {Object.entries(dev.socialLinks).map(([platform, url]) => (
//                 url && (
//                   <a
//                     key={platform}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1.5 bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-white/20 hover:text-white"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     {getSocialIcon(platform)}
//                     <span className="capitalize">{platform}</span>
//                   </a>
//                 )
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Swipe Actions */}
//         <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-10 px-6">
//           <button
//             className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
//             onClick={() => handleSwipe('left')}
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <button
//             className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
//             onClick={() => handleSwipe('right')}
//           >
//             <Heart className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedCard;

// import React from "react";

// const FeedCard = ({ dev }) => {
//   return (
//     <div className=" bg-gray-500 h-[600px] flex ju  ">
//       <div className="w-full relative">
//         <img className="w-full object-cover" src={dev.photoUrl} alt="" />

//         <div className="absolute left-4 bottom-48 space-x-2">
//           <h1 className="text-3xl text-white font-bold">{dev.firstName},{dev.age}</h1>
//           <p className="text-white text-2xl font-bold">{dev.headline}</p>
//           <p className="text-white text-2xl">{dev.location}</p>
//         </div>

//         <div>
//             jj
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedCard;
