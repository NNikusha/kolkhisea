"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";

interface AnimatedHeightProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  trigger?: unknown;
}

const AnimatedHeight: React.FC<AnimatedHeightProps> = ({
  children,
  duration = 500,
  className = "",
  trigger,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateHeight = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const startHeight = container.offsetHeight;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const endHeight = content.offsetHeight;

        if (startHeight === endHeight) return;

        setIsAnimating(true);
        container.style.transition = "none";
        container.style.height = `${startHeight}px`;
        void container.offsetHeight;

        container.style.transition = `height ${duration}ms ease`;
        container.style.height = `${endHeight}px`;

        timeoutRef.current = setTimeout(() => {
          container.style.height = "auto";
          container.style.transition = "";
          setIsAnimating(false);
        }, duration);
      });
    });
  }, [duration]);

  useEffect(() => {
    animateHeight();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [children, trigger, animateHeight]);

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden`}
      style={{ height: isAnimating ? undefined : "auto" }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default AnimatedHeight;