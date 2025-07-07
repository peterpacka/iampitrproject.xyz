"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type socialProp = {
  icon_src: string;
  label: {
    text: string;
    color: string;
    background: string;
  };
  href: string;
};

const Social = (social: socialProp) => {
  const [showLabel, setShowLabel] = useState<boolean>(false);

  return (
    <Link target="_blank" href={social.href} className="group relative">
      <img
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        className="size-8 group-hover:scale-[1.06] transition-all"
        src={social.icon_src}
      />
      <AnimatePresence>
        {showLabel && (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-sm px-1 py-0.5 font-medium rounded-lg absolute top-10 left-1/2 -translate-x-1/2"
            style={{
              color: social.label.color,
              background: social.label.background,
            }}
          >
            {social.label.text}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default Social;
