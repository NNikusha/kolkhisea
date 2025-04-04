"use client"
import ArrowDownApartment from '@/app/assets/ArrowDownApartment';
import ArrowUpApartment from '@/app/assets/ArrowUpApartment';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface VerticalPaginationProps {
  onFloorChange?: (floor: number) => void;
  initialFloor?: number;
}

const VerticalPagination: React.FC<VerticalPaginationProps> = ({ 
  onFloorChange,
  initialFloor = 4
}) => {
  const [selectedFloor, setSelectedFloor] = useState<number>(initialFloor);
  const allFloors = useMemo(() => [3, 4, 5, 6, 7, 8, 9, 10], []);
  const [visibleFloors, setVisibleFloors] = useState<number[]>([]);
  
  const updateVisibleFloors = useCallback((centerFloor: number) => {
    const floorIndex = allFloors.indexOf(centerFloor);
    if (floorIndex === -1) return;
    
    let startIdx = Math.max(0, floorIndex - 1);
    const endIdx = Math.min(allFloors.length - 1, startIdx + 3);
    
    if (endIdx - startIdx < 3 && startIdx > 0) {
      startIdx = Math.max(0, endIdx - 3);
    }
    
    setVisibleFloors(allFloors.slice(startIdx, endIdx + 1));
  }, [allFloors]);

  useEffect(() => {
    updateVisibleFloors(initialFloor);
  }, [initialFloor, updateVisibleFloors]);
  
  const handleFloorClick = (floor: number) => {
    setSelectedFloor(floor);
    updateVisibleFloors(floor);
    if (onFloorChange) {
      onFloorChange(floor);
    }
  };

  const handleUpClick = () => {
    const currentIndex = allFloors.indexOf(selectedFloor);
    if (currentIndex < allFloors.length - 1) {
      const newFloor = allFloors[currentIndex + 1];
      setSelectedFloor(newFloor);
      updateVisibleFloors(newFloor);
      if (onFloorChange) {
        onFloorChange(newFloor);
      }
    }
  };

  const handleDownClick = () => {
    const currentIndex = allFloors.indexOf(selectedFloor);
    if (currentIndex > 0) {
      const newFloor = allFloors[currentIndex - 1];
      setSelectedFloor(newFloor);
      updateVisibleFloors(newFloor);
      if (onFloorChange) {
        onFloorChange(newFloor);
      }
    }
  };

  const canGoUp = selectedFloor < Math.max(...allFloors);
  const canGoDown = selectedFloor > Math.min(...allFloors);

  return (
    <div className="flex flex-col items-center gap-[24px]">
      {/* Up arrow */}
      <button 
        className={`w-[56px] h-[56px] flex items-center justify-center rounded-[8px] ${
          canGoUp ? 'bg-[#F8F8F8] cursor-pointer' : 'bg-[#F8F8F8] opacity-50 cursor-not-allowed'
        }`}
        onClick={handleUpClick}
        disabled={!canGoUp}
      >
       <ArrowUpApartment />

      </button>
      
      <div className="flex flex-col gap-[24px]">
        {visibleFloors.map((floor) => (
          <button
            key={floor}
            className={`w-[56px] h-[56px] flex items-center justify-center rounded-[8px] ${
              selectedFloor === floor
                ? 'bg-[#CB684D] text-white'
                : 'bg-[#F7F7F7] text-[#1C1C1E]'
            }`}
            onClick={() => handleFloorClick(floor)}
          >
            {floor}
          </button>
        ))}
      </div>
      
      {/* Down arrow */}
      <button 
        className={`w-[56px] h-[56px] flex items-center justify-center rounded-[8px] ${
          canGoDown ? 'bg-[#F8F8F8] cursor-pointer' : 'bg-[#F8F8F8] opacity-50 cursor-not-allowed'
        }`}
        onClick={handleDownClick}
        disabled={!canGoDown}
      >
       <ArrowDownApartment />

      </button>
    </div>
  );
};

export default VerticalPagination;