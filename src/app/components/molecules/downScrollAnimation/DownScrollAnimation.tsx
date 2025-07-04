"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface DownScrollAnimationProp {
  DownScroll: string;
  DownScrollArrow: string;
}

export default function DownScrollAnimation({
  DownScroll,
  DownScrollArrow,
}: DownScrollAnimationProp) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 top-[740px] sm:top-[880px] md:top-[880px] lg:top-[740px] xl:top-[830px]"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      style={{ cursor: "pointer" }}
    >
      <div className="flex flex-col items-center relative">
        {/* Pulsing outer circle */}
        <motion.div
          className="absolute z-0 w-[109px] h-[109px] xl:w-[109px] xl:h-[109px] rounded-full bg-[#ffffff3a] opacity-30"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Rotating circle */}
        <motion.div
          className="flex items-center justify-center w-[109px] h-[109px] xl:w-[109px] xl:h-[109px] z-10"
          style={{ transformOrigin: "center", willChange: "transform" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        >
          <Image
            alt="Downscroll to see new content"
            src={DownScroll}
            className="bg-white/15 shadow-inner backdrop-blur-[3px] rounded-[50%] w-[79px] h-[79px] xl:w-[109px] xl:h-[109px]"
          />
        </motion.div>
        {/* Bouncing arrow */}
        <motion.div
          className="absolute top-[60%] z-20"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            alt="InsideView"
            className="xl:w-[10] xl:h-[64]"
            src={DownScrollArrow}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
