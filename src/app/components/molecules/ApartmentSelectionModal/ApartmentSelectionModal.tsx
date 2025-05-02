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
import AnimatedHeight from "../../atoms/AnimatedHeight/AnimatedHeight";

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
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [currentFloor, setCurrentFloor] = useState<number>(initialFloor);
  const [floorPlans, setFloorPlans] = useState<FloorPlan[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hoveredApartment, setHoveredApartment] = useState<ShapeData | null>(
    null
  );
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
  const JUMP_DURATION = 500;
  const SETTLE_DELAY = 200;

    useEffect(() => {
    if (isOpen && !isRendered) {
      setIsRendered(true);
      setIsAnimating(true);
  
      setIsJumping(true);
  
      setTimeout(() => {
        setIsJumping(false);
      }, JUMP_DURATION + SETTLE_DELAY);
    } else if (!isOpen) {
      setIsRendered(false);
      setIsAnimating(false);
    }
  }, [isOpen, isRendered]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsClosing(false);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [isJumping, setIsJumping] = useState(false);

  const handleClose = (): void => {
    setIsJumping(true); 
  
    setTimeout(() => {
      setIsJumping(false);
      setIsClosing(true); 
    }, 150); 
  
    setTimeout(() => {
      onClose();
    }, 350 + 600); 
  };

  

  if (!isOpen && !isRendered) return null;

  const currentPlan = getCurrentFloorPlan();

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        style={{ opacity: isClosing ? 0 : isAnimating ? 1 : 0 }}
        onClick={handleClose}
      />

      <div
        ref={modalRef}
        className="absolute top-[5vh] rounded-t-[56px] left-0 right-0 bottom-0 bg-white transition-all duration-700"
        style={{
            transform: isJumping
              ? "translateY(-40px)"
              : isClosing
              ? "translateY(100%)"
              : "translateY(0)",
            transition: `transform ${JUMP_DURATION + SETTLE_DELAY}ms ease-out, opacity 900ms ease`,
            opacity: isClosing ? 0 : 1,
            height: isJumping ? "calc(100% + 40px)" : "100%",
          }}
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
            <AnimatedHeight className="border border-[#E7E7E7] rounded-[32px] px-[24px] w-[35%]" trigger={hoveredApartment}>
                <div className="w-full">
                    {hoveredApartment ? (
                    isApartmentAvailable(hoveredApartment) ? (
                        <div className="flex items-center justify-between w-full py-[32px]">
                        <div className="text-[#1C1C1E] leading-[150%] font-normal flex-1 pr-6">
                            <h3 className="text-[#6A6A6A] font-normal pb-4">Apartment</h3>
                            <h1 className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words">
                            {hoveredApartment.flat.number}
                            </h1>
                            <h3 className="text-[#6A6A6A] font-normal pb-4">Apartment area, m²</h3>
                            <h1 className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words">
                            {hoveredApartment.flat.total_area}
                            </h1>
                            <h3 className="text-[#6A6A6A] font-normal pb-4">Price: $</h3>
                            <h1 className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words">
                            {hoveredApartment.flat.price_total}
                            </h1>
                            <h3 className="text-[#6A6A6A] font-normal pb-4">Status</h3>
                            <h1 className="text-[32px] text-[#1C1C1E] font-normal pb-6 break-words">
                            {hoveredApartment.flat.lang_status.en}
                            </h1>
                        </div>
                        
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex items-center gap-[30px] border border-[#E7E7E7] rounded-[32px] py-[60px] px-[24px] w-[35%]'>
                                {hoveredApartment ? (
                                    <div className='text-[#1C1C1E] leading-[150%] font-normal'>
                                        <h3 className="text-lg font-medium">Apartment {hoveredApartment.flat.number}</h3>
                                        <p>Total area: {hoveredApartment.flat.total_area} m²</p>
                                        <p>Price: ${hoveredApartment.flat.price_total}</p>
                                        <p>Status: {hoveredApartment.flat.lang_status.en}</p>
                                    </div>
                                ) : (
                                    <div className='text-[#6A6A6A] leading-[150%] font-normal'>
                                        Select an apartment from the plan on the right
                                    </div>
                                )}
                                {!hoveredApartment && <ArrowRightApartment />}
                            </div>
                            
                            <div className="flex w-full justify-between items-center pt-[50px]">
                                <div className='flex flex-col items-center justify-center relative'>
                                    {loading ? (
                                        <div className="text-center">Loading floor plan...</div>
                                    ) : error ? (
                                        <div className="text-red-500">{error}</div>
                                    ) : currentPlan ? (
                                        <>
                                            <div className="relative">
                                            {currentPlan?.image && (
                                            <Image
                                                src={currentPlan.image}
                                                width={872}
                                                height={500}
                                                alt={`Floor ${currentPlan.floor} Plan`}
                                                className="fill-black"
                                                onLoad={handleImageLoad}
                                                style={{ display: 'block' }}
                                                unoptimized={currentPlan.image.startsWith('data:')}
                                            />
                                            )}
                                                
                                                {imageLoaded && currentPlan.shape_data && currentPlan.shape_data.length > 0 && (
                                                    <svg
                                                        ref={svgRef}
                                                        className="absolute top-0 left-0"
                                                        width="100%"
                                                        height="100%"
                                                        viewBox="0 0 100 100"
                                                        preserveAspectRatio="none"
                                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                                    >
                                                        {currentPlan.shape_data.map((shape) => {
                                                            const center = calculatePolygonCenter(shape.points);
                                                            const isAvailable = isApartmentAvailable(shape);
                                                            const bgColor = isAvailable ? '#CB684D' : '#5B5B5B';
                                                            const isHovered = hoveredApartment?.shapeNumber === shape.shapeNumber;
                                                            
                                                            return (
                                                                <g 
                                                                    key={shape.shapeNumber}
                                                                    onMouseEnter={() => handleMouseEnter(shape)}
                                                                    onMouseLeave={handleMouseLeave}
                                                                    onClick={() => handleApartmentClick(shape)}
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    <polygon
                                                                        points={createPolygonPoints(shape.points)}
                                                                        className={`${
                                                                            isHovered
                                                                            ? 'fill-[#FFFFFF66]'
                                                                            : 'fill-transparent hover:fill-[#FFFFFF66]'
                                                                        }`}
                                                                        stroke="none"
                                                                    />
                                                                    
                                                                    <g transform={`translate(${center.x - 3.5}, ${center.y - 3.5})`}>
                                                                        <rect
                                                                            width="7"
                                                                            height="7"
                                                                            rx="0.5"
                                                                            fill={bgColor}
                                                                        />
                                                                        <text
                                                                            x="3.5"
                                                                            y="3.5"
                                                                            fill="white"
                                                                            fontSize="2.5"
                                                                            fontWeight="bold"
                                                                            textAnchor="middle"
                                                                            dominantBaseline="middle"
                                                                        >
                                                                            {shape.flat.number}
                                                                        </text>
                                                                    </g>
                                                                </g>
                                                            );
                                                        })}
                                                    </svg>
                                                )}
                                            </div>
                                            
                                            <div className="flex justify-center items-center gap-[8px] mt-4">
                                                <SelectApartmentSeaLogo />
                                                <h3 className="font-normal text-[#1C1C1E]">Sea</h3>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center">No floor plan available for floor {currentFloor}</div>
                                    )}
                                </div>
                            </div>
                            
                            <div className='flex-1 flex justify-end'>
                                <VerticalPagination 
                                    onFloorChange={handleFloorChange}
                                    initialFloor={currentFloor}
                                    key={`pagination-${currentFloor}`}
                                />
                            </div>
                        </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between w-full py-[72px]">
                        <div className="text-[#6A6A6A] leading-[150%] font-normal text-[20px]">
                            Sold
                        </div>
                        <ArrowRightApartment />
                        </div>
                    )
                    ) : (
                    <div className="flex items-center justify-between w-full py-[60px]">
                        <div className="text-[#6A6A6A] leading-[150%] font-normal">
                        Select an apartment from the plan on the right
                        </div>
                        <ArrowRightApartment />
                    </div>
                    )}
                </div>
                </AnimatedHeight>
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
                                  className={`absolute flex items-center justify-center ${bgColor} text-white text-[12px] font-normal rounded-[8px] transition-all duration-900`}
                                  style={{
                                    left: `calc(${center.x}% - 0px)`,
                                    top: `calc(${center.y}% - -10px)`,
                                    transform: "translate(-50%, -50%)",
                                    width:
                                      hoveredApartment?.shapeNumber ===
                                      shape.shapeNumber
                                        ? "24px"
                                        : "auto",
                                    height:
                                      hoveredApartment?.shapeNumber ===
                                      shape.shapeNumber
                                        ? "24px"
                                        : "auto",
                                    padding:
                                      hoveredApartment?.shapeNumber ===
                                      shape.shapeNumber
                                        ? "0"
                                        : "14px 12px",
                                    fontSize:
                                      hoveredApartment?.shapeNumber ===
                                      shape.shapeNumber
                                        ? "0"
                                        : "12px",
                                    cursor: "pointer",
                                  }}
                                  onMouseEnter={() => handleMouseEnter(shape)}
                                  onMouseLeave={handleMouseLeave}
                                  onClick={() => handleApartmentClick(shape)}
                                >
                                  {hoveredApartment?.shapeNumber ===
                                  shape.shapeNumber
                                    ? ""
                                    : shape.flat.number}
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