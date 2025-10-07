
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Howl } from "howler";
import FeedCard from "./FeedCard";

const swipeSound = new Howl({
  src: ["/sounds/swipe.mp3"], // Put your swipe sound in public/sounds/
  volume: 0.5,
});

const SwipeCard = ({ dev, onSwipe }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const likeOpacity = useTransform(x, [50, 150], [0, 1]);
  const nopeOpacity = useTransform(x, [-150, -50], [1, 0]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 150) {
      swipeSound.play();
      onSwipe("interested");
    } else if (info.offset.x < -150) {
      swipeSound.play();
      onSwipe("ignored");
    } else {
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
      <motion.div
        style={{ opacity: likeOpacity }}
        className="absolute top-5 left-5 text-green-400 text-4xl font-bold z-10"
      >
        ❤️
      </motion.div>

      <motion.div
        style={{ opacity: nopeOpacity }}
        className="absolute top-5 right-5 text-red-500 text-4xl font-bold z-10"
      >
        ❌
      </motion.div>

      <FeedCard dev={dev} />
    </motion.div>
  );
};

export default SwipeCard;
