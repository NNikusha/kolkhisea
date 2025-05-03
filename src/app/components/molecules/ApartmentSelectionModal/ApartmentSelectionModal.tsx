"use client";
import CloseIcon from "@/app/assets/CloseIcon";
import Compas from "@/app/assets/Compas";
import React, { useState, useEffect, useRef } from "react";
import VerticalPagination from "../VerticalPagination/VerticalPagination";
import Image from "next/image";
import PdfIcon from "@/app/assets/PdfIcon.svg";
import ArrowRightApartment from "@/app/assets/ArrowRightApartment";
import SelectApartmentSeaLogo from "@/app/assets/SelectApartmentSeaLogo";
import { fetchFloorPlans } from "@/app/hooks/axios";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface ApartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFloor?: number;
}

interface Flat {
  id: number;
  number: number;
  total_area: number;
  living_space: number;
  price_total: number;
  balcony: { area: string }[];
  bedroom: { area: string }[];
  bathroom: { area: string }[];
  floor: number;
  status: string;
  flat_conditions: string;
  per_square_price: string;
  lang_status: {
    en: string;
    ka: string;
  };
}

interface ShapeData {
  points: number[][];
  shapeNumber: number;
  flat: Flat;
}

interface Building {
  id: number;
  name: string;
  description?: string;
}

interface FloorPlan {
  id: number;
  image: string;
  floor: number;
  building: Building;
  shape_data: ShapeData[];
}

const FullscreenApartmentModal: React.FC<ApartmentModalProps> = ({
  isOpen,
  onClose,
  initialFloor = 10,
}) => {
  const [currentFloor, setCurrentFloor] = useState<number>(initialFloor);
  const [floorPlans, setFloorPlans] = useState<FloorPlan[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hoveredApartment, setHoveredApartment] = useState<ShapeData | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (initialFloor) {
      setCurrentFloor(initialFloor);
    }
  }, [initialFloor]);

  useEffect(() => {
    if (isOpen) {
      loadFloorPlanForFloor(currentFloor);
      setHoveredApartment(null);
      setImageLoaded(false);
    }
  }, [isOpen, currentFloor]);

  const loadFloorPlanForFloor = async (floor: number) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchFloorPlans(floor);

      if (response && Array.isArray(response)) {
        setFloorPlans(response);
      } else {
        setError("Invalid response format");
      }
    } catch (error) {
      console.error("Failed to load floor plan:", error);
      setError(`Failed to load floor plan for floor ${floor}`);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentFloorPlan = () => {
    if (!floorPlans || floorPlans.length === 0) return null;
    return floorPlans.find((plan) => plan.floor === currentFloor);
  };

  const handleFloorChange = (floor: number) => {
    setCurrentFloor(floor);
  };

  const handleApartmentClick = (apartment: ShapeData) => {
    try {
      handleClose();
      const targetUrl = `/flat-detail-page/${apartment.flat.id}`;
      router.push(targetUrl);
    } catch (error) {
      console.error("Navigation error:", error);
      handleClose();
    }
  };

  const createPolygonPoints = (points: number[][]) => {
    return points.map((point) => `${point[0]},${point[1]}`).join(" ");
  };

  const calculatePolygonCenter = (points: number[][]) => {
    if (!points || points.length === 0) return { x: 0, y: 0 };

    let sumX = 0;
    let sumY = 0;

    for (const point of points) {
      sumX += point[0];
      sumY += point[1];
    }

    return {
      x: sumX / points.length,
      y: sumY / points.length,
    };
  };

  const isApartmentAvailable = (apartment: ShapeData) => {
    return apartment.flat.status === "1";
  };

  const handleMouseEnter = (apartment: ShapeData) => {
    setHoveredApartment(apartment);
  };

  const handleMouseLeave = () => {
    setHoveredApartment(null);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = (): void => {
    onClose();
  };

  if (!isOpen) return null;

  const currentPlan = getCurrentFloorPlan();

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={handleClose}
      />

      <div
        ref={modalRef}
        className="absolute top-[5vh] rounded-t-[56px] left-0 right-0 bottom-0 bg-white"
      >
        <div className="flex items-center justify-center h-[90%] w-full rounded-t-[56px] container mx-auto px-4 lg:px-[108px]">
          <div className="flex flex-col justify-between h-full w-full mt-[40px] font-bold text-gray-800">
            <div className="w-full flex items-center justify-between">
              <div className="uppercase text-[32px] font-normal text-black">
                Select apartment
              </div>
              <div
                className="bg-[#2852600D] px-[12px] py-[12px] rounded-full cursor-pointer"
                onClick={handleClose}
              >
                <CloseIcon />
              </div>
            </div>

            <div className="flex w-full justify-between items-center">
              <div className="border border-[#E7E7E7] rounded-[32px] px-[24px] w-[35%]">
                <motion.div
                  className="w-full"
                  layout
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <AnimatePresence mode="wait">
                    {hoveredApartment ? (
                      isApartmentAvailable(hoveredApartment) ? (
                        <motion.div
                          key="available"
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="flex items-center justify-between w-full overflow-hidden"
                        >
                          <motion.div
                            className="text-[#1C1C1E] leading-[150%] font-normal flex-1 pr-6 py-[32px]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <motion.h3
                              className="text-[#6A6A6A] font-normal pb-4"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.1 }}
                            >
                              Apartment
                            </motion.h3>
                            <motion.h1
                              className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.15 }}
                            >
                              {hoveredApartment.flat.number}
                            </motion.h1>
                            <motion.h3
                              className="text-[#6A6A6A] font-normal pb-4"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.2 }}
                            >
                              Apartment area, m²
                            </motion.h3>
                            <motion.h1
                              className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.25 }}
                            >
                              {hoveredApartment.flat.total_area}
                            </motion.h1>
                            <motion.h3
                              className="text-[#6A6A6A] font-normal pb-4"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.3 }}
                            >
                              Price: $
                            </motion.h3>
                            <motion.h1
                              className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.35 }}
                            >
                              {hoveredApartment.flat.price_total}
                            </motion.h1>
                            <motion.h3
                              className="text-[#6A6A6A] font-normal pb-4"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.4 }}
                            >
                              Status
                            </motion.h3>
                            <motion.h1
                              className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.45 }}
                            >
                              {hoveredApartment.flat.lang_status.en}
                            </motion.h1>
                          </motion.div>
                          <motion.div
                            className="min-w-[20px]"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <ArrowRightApartment />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sold"
                          initial={{ height: 168 }}
                          animate={{ height: 168 }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="flex items-center justify-between w-full overflow-hidden"
                        >
                          <motion.div
                            className="text-[#6A6A6A] leading-[150%] font-normal text-[20px] py-[72px]"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            Sold
                          </motion.div>
                          <motion.div
                            className="py-[72px]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <ArrowRightApartment />
                          </motion.div>
                        </motion.div>
                      )
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ height: 152 }}
                        animate={{ height: 152 }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="flex items-center justify-between w-full overflow-hidden"
                      >
                        <motion.div
                          className="text-[#6A6A6A] leading-[150%] font-normal py-[60px]"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          Select an apartment from the plan on the right
                        </motion.div>
                        <motion.div
                          className="py-[60px]"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <ArrowRightApartment />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              <div className="flex w-full justify-between items-center pt-[50px] relative">
                <div className="flex flex-col items-center justify-center">
                  {loading ? (
                    <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
                    </div>
                  ) : error ? (
                    <div className="text-red-500">{error}</div>
                  ) : currentPlan ? (
                    <>
                      <div className="relative w-full">
                        <Image
                          src={currentPlan.image}
                          width={872}
                          height={500}
                          alt={`Floor ${currentPlan.floor} Plan`}
                          className="block"
                          onLoad={handleImageLoad}
                          unoptimized={currentPlan.image.startsWith("data:")}
                        />

                        {imageLoaded && (
                          <>
                            <svg
                              ref={svgRef}
                              className="absolute top-0 left-0 w-full h-full pointer-events-none"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                            >
                              {currentPlan.shape_data.map((shape) => {
                                const isHovered =
                                  hoveredApartment?.shapeNumber ===
                                  shape.shapeNumber;
                                return (
                                  <polygon
                                    key={shape.shapeNumber}
                                    points={createPolygonPoints(shape.points)}
                                    fill={
                                      isHovered ? "#FFFFFF66 " : "transparent"
                                    }
                                    className="pointer-events-auto transition-all duration-600"
                                    onMouseEnter={() => handleMouseEnter(shape)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleApartmentClick(shape)}
                                    style={{ cursor: "pointer" }}
                                  />
                                );
                              })}
                            </svg>

                            {currentPlan.shape_data.map((shape) => {
                              const center = calculatePolygonCenter(
                                shape.points
                              );
                              const isAvailable = isApartmentAvailable(shape);
                              const bgColor = isAvailable
                                ? "bg-[#CB684D]"
                                : "bg-[#5B5B5B]";

                              return (
                                <div
                                  key={`badge-${shape.shapeNumber}`}
                                  className={`absolute flex items-center justify-center ${bgColor} text-white font-normal rounded-[8px] transition-all duration-500`}
                                  style={{
                                    left: `calc(${center.x}% - 0px)`,
                                    top: `calc(${center.y}% - -10px)`,
                                    transform: "translate(-50%, -50%)",
                                    width: hoveredApartment?.shapeNumber === shape.shapeNumber ? "24px" : "40px",
                                    height: hoveredApartment?.shapeNumber === shape.shapeNumber ? "24px" : "40px",
                                    padding: hoveredApartment?.shapeNumber === shape.shapeNumber ? "0" : "10px",
                                    fontSize: hoveredApartment?.shapeNumber === shape.shapeNumber ? "0" : "12px",
                                    cursor: "pointer",
                                    lineHeight: "1",
                                    textAlign: "center"
                                  }}
                                  onMouseEnter={() => handleMouseEnter(shape)}
                                  onMouseLeave={handleMouseLeave}
                                  onClick={() => handleApartmentClick(shape)}
                                >
                                  {hoveredApartment?.shapeNumber === shape.shapeNumber ? "" : shape.flat.number}
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>

                      <div className="flex justify-center items-center gap-[8px] mt-4">
                        <SelectApartmentSeaLogo />
                        <h3 className="font-normal text-[#1C1C1E]">Sea</h3>
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      No floor plan available for floor {currentFloor}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 flex justify-end">
                <VerticalPagination
                  onFloorChange={handleFloorChange}
                  initialFloor={currentFloor}
                  key={`pagination-${currentFloor}`}
                />
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <div className="text-[#9F9F9F] w-[170px] leading-[130%] font-normal">
                © 2025 KOLKHISEA. All Rights Reserved.
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={PdfIcon}
                  width={20}
                  height={24}
                  alt="PDF icon"
                  className="fill-black"
                />
                <span className="font-normal underline pr-[24px]">
                  Download PDF plan
                </span>
                <Compas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullscreenApartmentModal;
