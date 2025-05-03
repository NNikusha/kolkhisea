"use client"
import React, { useState, useRef } from 'react';
import FullscreenApartmentModal from '../ApartmentSelectionModal/ApartmentSelectionModal';
import ModalPortal from '../../atoms/ModalPortal/ModalPortal';

interface ShapeData {
  points: number[][];
  shapeNumber: number;
  floor: number;
  building_id: number;
}

interface Flat {
  floor: number;
  status: {
    en: string;
  };
}

interface FloorHoverOverlayProps {
  shapeData: ShapeData[];
  flatsData: Flat[];
}

const FloorHoverOverlay = ({ shapeData, flatsData }: FloorHoverOverlayProps) => {
  const [hoveredShape, setHoveredShape] = useState<ShapeData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFloor, setSelectedFloor] = useState<number>(10);
  const containerRef = useRef<HTMLDivElement>(null);

  const getScaledPoints = (points: number[][]) => points.map(point => [point[0], point[1]]);

  const createPathFromPoints = (points: number[][]) => {
    if (!points.length) return '';
    const scaled = getScaledPoints(points);
    let path = `M ${scaled[0][0]} ${scaled[0][1]}`;
    for (let i = 1; i < scaled.length; i++) {
      path += ` L ${scaled[i][0]} ${scaled[i][1]}`;
    }
    path += ' Z';
    return path;
  };

  const calculateShapeCenter = (points: number[][]) => {
    if (!points.length) return { x: 0, y: 0 };
    const scaled = getScaledPoints(points);
    const x = (Math.min(...scaled.map(p => p[0])) + Math.max(...scaled.map(p => p[0]))) / 2;
    const y = (Math.min(...scaled.map(p => p[1])) + Math.max(...scaled.map(p => p[1]))) / 2;
    return { x, y };
  };

  const getAvailableFlatsCount = (floor: number) => {
    return flatsData.filter(flat => flat.floor === floor && flat.status?.en === "Available").length;
  };

  const handleFloorClick = (shape: ShapeData) => {
    setSelectedFloor(shape.floor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ pointerEvents: "none", zIndex: 20 }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {shapeData.map((shape, index) => (
            <path
              key={`shape-${index}`}
              d={createPathFromPoints(shape.points)}
              fill={hoveredShape?.floor === shape.floor ? "rgba(203, 104, 77, 0.2)" : "transparent"}
              stroke={hoveredShape?.floor === shape.floor ? "#CB684D" : "transparent"}
              strokeWidth="0.2px"
              className="transition-all duration-300 ease-in-out"
            />
          ))}
        </svg>

        {shapeData.map((shape, index) => (
          <div
            key={`floor-${index}`}
            className="absolute hidden md:block"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              clipPath: `polygon(${shape.points.map(p => `${p[0]}% ${p[1]}%`).join(', ')})`,
              pointerEvents: "auto",
              cursor: "pointer",
              zIndex: 30
            }}
            onMouseEnter={() => setHoveredShape(shape)}
            onMouseLeave={() => setHoveredShape(null)}
            onClick={() => handleFloorClick(shape)}
          />
        ))}

        {hoveredShape && (
          <div
            className="absolute bg-white border-2 rounded-2xl px-6 py-4 text-black text-sm shadow-xl"
            style={{
              top: `${calculateShapeCenter(hoveredShape.points).y}%`,
              left: `calc(${calculateShapeCenter(hoveredShape.points).x}% + 23%)`,
              transform: 'translate(0%, -50%)',
              zIndex: 40,
              pointerEvents: 'none',
              borderColor: "#CB684D",
              width: "220px",
            }}
          >
            <div className="font-bold text-lg">
              {hoveredShape.floor}ᵗʰ Floor
            </div>
            <div className="mt-2 font-medium text-gray-600">
              Available: <span style={{ color: "#CB684D" }}>{getAvailableFlatsCount(hoveredShape.floor)} flats</span>
            </div>
          </div>
        )}
      </div>
        <ModalPortal>
          <FullscreenApartmentModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal}
            initialFloor={selectedFloor}
          />
        </ModalPortal>
    </>
  );
};

export default FloorHoverOverlay;