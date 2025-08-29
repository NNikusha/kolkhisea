"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

export interface DualRangeSliderProps {
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  min: number;
  max: number;
  step?: number;
  label?: (value: number) => React.ReactNode;
  className?: string;
}

export const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  value,
  onValueChange,
  min,
  max,
  step = 1,
  label,
  className,
}) => {
  const [minVal, maxVal] = value;
  const range = Math.max(1, max - min);
  const leftPct = ((minVal - min) / range) * 100;
  const rightPct = ((maxVal - min) / range) * 100;

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      {/* labels above thumbs */}
      {label && (
        <>
          <div
            className="absolute -top-6 -translate-x-1/2 whitespace-nowrap rounded bg-[#CB684D] px-2 py-1 text-xs text-white"
            style={{ left: `${leftPct}%` }}
          >
            {label(minVal)}
          </div>
          <div
            className="absolute -top-6 -translate-x-1/2 whitespace-nowrap rounded bg-[#CB684D] px-2 py-1 text-xs text-white"
            style={{ left: `${rightPct}%` }}
          >
            {label(maxVal)}
          </div>
        </>
      )}

      <SliderPrimitive.Root
        value={[minVal, maxVal]}
        onValueChange={(vals: number[]) =>
          onValueChange([vals[0] ?? min, vals[1] ?? max])
        }
        min={min}
        max={max}
        step={step}
        className="relative flex h-5 w-full touch-none select-none items-center"
        aria-label="Dual range slider"
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-200">
          <SliderPrimitive.Range className="absolute h-full bg-[#CB684D]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-neutral-300 bg-white shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#CB684D]" />
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-neutral-300 bg-white shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#CB684D]" />
      </SliderPrimitive.Root>
    </div>
  );
};
