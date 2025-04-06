"use client";

import React, { useState } from "react";
import DraggableModal from "../../molecules/DraggableModal/DraggableModal";

const FLOORS: number[] = [3, 4, 5, 6, 7, 8, 9, 10];

interface FlatsAvailable {
  [key: number]: number;
}

const MobileChoose: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);

  const flatsAvailable: FlatsAvailable = {
    4: 3,
  };

  const handleSelectFloor = (floor: number): void => {
    setSelectedFloor(floor);
  };

  const handleSelect = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative inline-flex flex xl:hidden">
        <button
          className="relative w-[102px] h-[102px] rounded-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
          onClick={() => setIsOpen(true)}
        >
          <div
            className="absolute inset-0 bg-white/30 backdrop-blur-[4px] z-0"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          />
          <div
            className="absolute inset-0 rounded-full border border-dashed border-white/80 z-10"
            style={{ borderWidth: "1px" }}
          />
          <div className="z-20 text-white text-center text-[14px]">
            <div>Select</div>
            <div>Flat</div>
          </div>
        </button>
      </div>

      <DraggableModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <h2 className="text-2xl text-black font-semibold mb-6">SELECT THE FLOOR</h2>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {FLOORS.map((floor) => (
              <button
                key={floor}
                className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-xl ${
                  selectedFloor === floor
                    ? "bg-[#CB684D] text-white"
                    : "bg-[#F3F6FB] text-[#1C1C1E]"
                }`}
                onClick={() => handleSelectFloor(floor)}
              >
                {floor}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-200 py-4 flex justify-between items-center">
            <div>
              {selectedFloor ? (
                <span className="text-xl text-black font-medium uppercase">
                  {selectedFloor}TH FLOOR
                </span>
              ) : (
                <span className="text-gray-500 uppercase">NO FLOOR CHOSEN</span>
              )}
            </div>
            {selectedFloor && flatsAvailable[selectedFloor] && (
              <div className="text-green-500 font-medium">
                {flatsAvailable[selectedFloor]} flats are available
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              className={`h-[56px] rounded-lg text-center font-medium ${
                selectedFloor
                  ? "bg-[#CB684D] text-white"
                  : "bg-[#F8EDE8] text-[#CB684D]"
              }`}
              onClick={handleSelect}
              disabled={!selectedFloor}
            >
              Select
            </button>
            <button
              className="h-[56px] rounded-lg bg-[#E8E8E8] text-[#1C1C1E] font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </DraggableModal>
    </div>
  );
};

export default MobileChoose;
