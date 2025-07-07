"use client";
import { motion } from "motion/react";

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="font-black text-4xl md:text-6xl"
      >
        All my links{" "}
        <motion.img
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="inline h-12"
          draggable={false}
          src="/kitten-yippee-cheer.gif"
        />
      </motion.h1>
      <motion.p
        className="self-start opacity-20"
        animate={{
          y: [-5, 5],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            duration: 1,
            type: "tween",
          },
        }}
      >
        Contact me maybe we can be friends :)
      </motion.p>
    </div>
  );
};

export default Title;
