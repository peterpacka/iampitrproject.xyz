"use client";
import { motion } from "motion/react";

const Title = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="font-black text-4xl md:text-6xl"
    >
      About me{" "}
      <motion.img
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="inline h-10"
        draggable={false}
        src="/kitten-whaaaaaaaaaaaaaaaaaaaaaatttttt.gif"
      />
    </motion.h1>
  );
};

export default Title;
