// import React, { useState } from "react";
// import FeedCard from "../../components/feed/FeedCard";
// import { FaHeart, FaTimes } from "react-icons/fa";
// import { useFeed } from "../../hooks/useFeed";
// import { useSendConnection } from "../../hooks/useConnectionRequest";

// const FeedPage = () => {
//   const { data: developers = [], isLoading, isError } = useFeed();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { mutate: sendConnection, isPending } = useSendConnection();

//   if (isLoading) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center text-white text-lg">
//         Loading developers...
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center text-red-400 text-lg">
//         Failed to load feed. Please try again later.
//       </div>
//     );
//   }

//   // If feed is empty or all profiles are swiped
//   if (developers.length === 0 || currentIndex >= developers.length) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center text-white text-lg">
//         No more developers to show 🚀
//       </div>
//     );
//   }

//   const currentDev = developers[currentIndex];
//   const handleAction = (status) => {
   
//     sendConnection(
//       { toUserId: currentDev._id, status },
//       {
//         onSuccess: () => {
//           console.log(`Connection ${status} sent successfully!`);
//           setCurrentIndex((prev) => prev + 1); 
//         },
//         onError: (err) => {
//           console.error("Failed to send connection:", err);
//           setCurrentIndex((prev) => prev + 1); 
//         },
//       }
//     );
//   };
//   return (
//     <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] py-10">
//       <h1 className="text-3xl font-bold text-purple-200 mb-8 tracking-wide drop-shadow">
//         Developer Feed
//       </h1>

//       <div className="flex flex-col gap-10 w-full max-w-xl">
//         <FeedCard key={currentDev._id} dev={currentDev} />
//       </div>

//       <div className="flex mt-6 gap-6">
//         <button
//           className="p-5 bg-white/90 hover:bg-purple-100 shadow-xl rounded-full border-4 border-white hover:scale-110 transition"
//           aria-label="Dislike"
//           onClick={() => handleAction("ignored")}
//             disabled={isPending}
//         >
//           <FaTimes className="w-7 h-7 text-purple-600" />
          
//         </button>

//         <button
//           className="p-5 bg-white/90 hover:bg-red-100 shadow-xl rounded-full border-4 border-white hover:scale-110 transition"
//           aria-label="Love"
//           onClick={() => handleAction("interested")}
//              disabled={isPending}
//         >
//           <FaHeart className="w-7 h-7 text-red-500" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeedPage;
import React, { useState } from "react";
import SwipeCard from "../../components/feed/SwipeCard";
import { useFeed } from "../../hooks/useFeed";
import { useSendConnection } from "../../hooks/useConnectionRequest";

const FeedPage = () => {
  const { data: developers = [], isLoading, isError } = useFeed();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mutate: sendConnection, isPending } = useSendConnection();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading developers...
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-400">
        Failed to load feed.
      </div>
    );

  if (!developers.length || currentIndex >= developers.length)
    return (
      <div className="flex justify-center items-center h-screen text-white">
        No more developers to show 🚀
      </div>
    );

  const currentDev = developers[currentIndex];

  const handleSwipe = (status) => {
    sendConnection(
      { toUserId: currentDev._id, status },
      {
        onSuccess: () => setCurrentIndex((prev) => prev + 1),
        onError: () => setCurrentIndex((prev) => prev + 1),
      }
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] py-10">
      <h1 className="text-3xl font-bold text-purple-200 mb-8">
        Developer Feed
      </h1>

      <div className="relative w-full max-w-md h-[600px] flex items-center justify-center">
        <SwipeCard key={currentDev._id} dev={currentDev} onSwipe={handleSwipe} />
      </div>
    </div>
  );
};

export default FeedPage;
