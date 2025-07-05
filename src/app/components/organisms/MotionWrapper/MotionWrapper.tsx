"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MotionWrapper = ({
  children,
  className = "",
  delay = 0,
}: MotionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
