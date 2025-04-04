"use client"
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
    <div className="flex flex-col items-center gap-3">
      {/* Up arrow */}
      <button 
        className={`w-10 h-10 flex items-center justify-center rounded-lg ${
          canGoUp ? 'bg-[#F8F8F8] cursor-pointer' : 'bg-[#F8F8F8] opacity-50 cursor-not-allowed'
        }`}
        onClick={handleUpClick}
        disabled={!canGoUp}
      >
       <svg  className='rotate-180' width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0098 14.9898L0.409763 2.38976C0.136764 2.11676 -0.000392991 1.7584 -0.000392975 1.4C-0.000392959 1.0416 0.136764 0.683244 0.409763 0.410244C0.957165 -0.137156 1.84205 -0.137156 2.38945 0.410244L13.9996 12.0204L25.6098 0.410245C26.1572 -0.137155 27.0421 -0.137155 27.5894 0.410245C28.1368 0.957645 28.1368 1.84236 27.5894 2.38976L14.9894 14.9898C14.442 15.5372 13.5572 15.5372 13.0098 14.9898Z" fill="#1C1C1E"/>
</svg>

      </button>
      
      <div className="flex flex-col gap-3">
        {visibleFloors.map((floor) => (
          <button
            key={floor}
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              selectedFloor === floor
                ? 'bg-[#CB684D] text-white'
                : 'bg-[#F8F8F8] text-[#1C1C1E]'
            }`}
            onClick={() => handleFloorClick(floor)}
          >
            {floor}
          </button>
        ))}
      </div>
      
      {/* Down arrow */}
      <button 
        className={`w-10 h-10 flex items-center justify-center rounded-lg ${
          canGoDown ? 'bg-[#F8F8F8] cursor-pointer' : 'bg-[#F8F8F8] opacity-50 cursor-not-allowed'
        }`}
        onClick={handleDownClick}
        disabled={!canGoDown}
      >
       <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0098 14.9898L0.409763 2.38976C0.136764 2.11676 -0.000392991 1.7584 -0.000392975 1.4C-0.000392959 1.0416 0.136764 0.683244 0.409763 0.410244C0.957165 -0.137156 1.84205 -0.137156 2.38945 0.410244L13.9996 12.0204L25.6098 0.410245C26.1572 -0.137155 27.0421 -0.137155 27.5894 0.410245C28.1368 0.957645 28.1368 1.84236 27.5894 2.38976L14.9894 14.9898C14.442 15.5372 13.5572 15.5372 13.0098 14.9898Z" fill="#1C1C1E"/>
</svg>

      </button>
    </div>
  );
};

export default VerticalPagination;