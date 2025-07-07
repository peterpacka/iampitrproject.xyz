"use client";

import { motion } from "motion/react";

const Cat = () => {
  return (
    <motion.img
      alt="picture of cat"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [0, -5, 5, -5, 5, 0],
        x: [0, -2, 2, -2, 2, 0],
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        rotate: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        x: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      draggable={false}
      className="h-[70%] max-h-[600px] aspect-9/16 w-fit shadow-blue-800 shadow-lg"
      src="/kitten-dance.gif"
    />
  );
};

export default Cat;
