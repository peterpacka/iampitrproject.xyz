"use client";
import React from "react";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <main className="h-screen gap-10 flex flex-col justify-center items-center select-none">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="font-black text-4xl md:text-6xl"
      >
        404 Not Found?{" "}
      </motion.h1>
      <img alt="cat picture" draggable={false} src="/kitten-wet.gif" />
    </main>
  );
};

export default NotFound;
