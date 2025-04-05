"use client";
import React, { useState } from "react";

type FlatsAvailable = Record<number, number>;

const MobileChoose: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);

  const flatsAvailable: FlatsAvailable = {
    4: 3,
  };

  const handleSelectFloor = (floor: number): void => {
    setSelectedFloor(floor);
  };

  const handleSelect = (): void => {
    console.log(`Selected floor: ${selectedFloor}`);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative inline-flex flex xl:hidden">
        <button className="relative w-[102px] h-[102px] rounded-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group">
          <div
            className="absolute inset-0 bg-white/30 backdrop-blur-[4px] z-0"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          ></div>

          <div
            className="absolute inset-0 rounded-full border border-dashed border-white/80 z-10"
            style={{ borderWidth: "1px" }}
          ></div>

          <div className="z-20 text-white text-center ">
            <div className="text-[14px]">Select</div>
            <div className="text-[14px]">Flat</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MobileChoose;
