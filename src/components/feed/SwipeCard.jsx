import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import FeedCard from "./FeedCard";

const SwipeCard = ({ dev, onSwipe }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const handleDragEnd = (_, info) => {
    // Swipe right = interested, Swipe left = ignored
    if (info.offset.x > 150) {
      onSwipe("interested");
    } else if (info.offset.x < -150) {
      onSwipe("ignored");
    } else {
      // Return to center
      animate(x, 0, { type: "spring", stiffness: 300 });
    }
  };

  useEffect(() => {
    if (!dev) x.set(0);
  }, [dev, x]);

  return (
    <motion.div
      drag="x"
      style={{ x, rotate, opacity }}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      className="absolute w-full max-w-md touch-none"
    >
      <FeedCard dev={dev} />
    </motion.div>
  );
};

export default SwipeCard;
