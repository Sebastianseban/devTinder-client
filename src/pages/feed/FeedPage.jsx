
import React, { useState } from "react";
import SwipeCard from "../../components/feed/SwipeCard";
import SideBar from "../../components/feed/SideBar";
import { useFeed } from "../../hooks/useFeed";
import { useSendConnection } from "../../hooks/useConnectionRequest";

const FeedPage = () => {
  const [filters, setFilters] = useState({
    skills: [],
    age: undefined, // don't send age until user applies
  });

  const { data: developers = [], isLoading, isError } = useFeed(filters);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mutate: sendConnection } = useSendConnection();

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      if (category === "clear") return { skills: [], age: undefined };
      if (category === "skills") return { ...prev, skills: value };
      if (category === "age") return { ...prev, age: value };
      return prev;
    });
  };


  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A0A0F]">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (isError) return <div>Failed to load feed.</div>;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]">
      <SideBar filters={filters} onFilterChange={handleFilterChange} />
      <div className="flex-1 flex flex-col items-center py-10">
        <div className="relative w-full max-w-md h-[600px] flex items-center justify-center">
          {developers
            .slice(currentIndex, currentIndex + 3)
            .map((dev, i) => (
              <SwipeCard
                key={dev._id}
                dev={dev}
                onSwipe={(status) => {
                  sendConnection(
                    { toUserId: dev._id, status },
                    { onSuccess: () => setCurrentIndex((p) => p + 1) }
                  );
                }}
                style={{
                  zIndex: 10 - i,
                  scale: 1 - i * 0.05,
                  y: i * 20,
                }}
              />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
