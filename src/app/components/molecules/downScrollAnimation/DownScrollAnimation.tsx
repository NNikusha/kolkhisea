"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface DownScrollAnimationProp {
  DownScroll: string;
  DownScrollArrow: string;
}

export default function DownScrollAnimation({
  DownScroll,
  DownScrollArrow,
}: DownScrollAnimationProp) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 45);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[740px] sm:top-[880px] md:top-[880px] lg:top-[740px] xl:top-[860px]">
      <div className="flex flex-col items-center relative">
        <motion.div
          className="flex items-center justify-center w-[109px] h-[109px] xl:w-[109px] xl:h-[109px]"
          style={{ transformOrigin: "center", willChange: "transform" }}
          animate={{ rotate: rotation }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            alt="Downscroll to see new content"
            src={DownScroll}
            className="bg-white/15 shadow-inner backdrop-blur-[3px] rounded-[50%] w-[79px] h-[79px] xl:w-[109px] xl:h-[109px]"
          />
        </motion.div>

        <Image
          alt="InsideView"
          className="absolute top-[60%] xl:w-[10] xl:h-[64]"
          src={DownScrollArrow}
        />
      </div>
    </div>
  );
}
