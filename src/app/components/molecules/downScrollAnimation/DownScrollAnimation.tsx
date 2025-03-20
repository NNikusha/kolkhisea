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
    <div className="absolute left-1/2 -translate-x-1/2  top-[860px]">
      <div className="flex flex-col items-center relative">
        <motion.div
          className=""
          animate={{ rotate: rotation }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            alt="Downscroll to see new content"
            src={DownScroll}
            className="bg-white/15 shadow-inner backdrop-blur-[3px] rounded-[50%]"
            width={109}
            height={109}
          />
        </motion.div>

        <Image
          alt="InsideView"
          className="absolute top-[60%]"
          src={DownScrollArrow}
          width={10}
          height={64}
        />
      </div>
    </div>
  );
}
