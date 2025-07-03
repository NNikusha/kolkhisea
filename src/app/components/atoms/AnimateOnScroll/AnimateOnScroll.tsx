"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  from?: "up" | "down";
};

export default function AnimateOnScroll({
  children,
  delay = 0.2,
  duration = 0.8,
  from = "up",
}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      controls.start("visible");
      hasAnimated.current = true;
    }
  }, [controls, inView]);

  const getInitialY = () => {
    switch (from) {
      case "up":
        return 50;
      case "down":
        return -50;
      default:
        return 0;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: getInitialY() },
      }}
    >
      {children}
    </motion.div>
  );
}