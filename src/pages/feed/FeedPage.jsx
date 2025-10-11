import React, { useState } from "react";
import SwipeCard from "../../components/feed/SwipeCard";
import { useFeed } from "../../hooks/useFeed";
import { useSendConnection } from "../../hooks/useConnectionRequest";

const FeedPage = () => {
  const { data: developers = [], isLoading, isError } = useFeed();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mutate: sendConnection } = useSendConnection();

  if (isLoading) return <div>Loading developers...</div>;
  if (isError) return <div>Failed to load feed.</div>;
  if (!developers.length || currentIndex >= developers.length)
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen
   bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]
    py-20 px-6"
      >
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6">
            No more developers
          </h1>
          <p className="text-xl text-[#c4b5fd] mb-8 font-medium">
            Building smarter teams—with automation & AI.
          </p>
          <button
            className="mt-2 px-8 py-3 bg-[#8043c9] text-white rounded-xl
      text-lg font-semibold shadow-lg hover:bg-[#6d3baf] transition"
          >
            Learn More
          </button>
        </div>
      </div>
    );

  const handleSwipe = (status) => {
    const currentDev = developers[currentIndex];
    sendConnection(
      { toUserId: currentDev._id, status },
      {
        onSuccess: () => setCurrentIndex((prev) => prev + 1),
        onError: () => setCurrentIndex((prev) => prev + 1),
      }
    );
  };

  // Take top 3 cards to display as a stack
  const topCards = developers.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] py-10">
      <div className="relative w-full max-w-md h-[600px] flex items-center justify-center">
        {
          topCards
            .map((dev, i) => (
              <SwipeCard
                key={dev._id}
                dev={dev}
                onSwipe={handleSwipe}
                style={{
                  zIndex: 10 - i,
                  scale: 1 - i * 0.05,
                  y: i * 20,
                }}
              />
            ))
            .reverse() /* Reverse so top card is on top */
        }
      </div>
    </div>
  );
};

export default FeedPage;
