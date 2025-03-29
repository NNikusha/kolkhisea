"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import { ApartmentType } from "@/app/types/type";
import ApartmentCard from "../../molecules/ApartmentCard/ApartmentCard";
import GrayBlueButton from "../GrayBlueButton/GrayBlueButton";
import SeeMoreApartment from "@/app/assets/MoreApartment.svg";
import LeftArrow from "@/app/assets/LeftArrow";
import RightArrow from "@/app/assets/RightArrow";

const SuggestApartment = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsTablet(window.innerWidth >= 1024 && window.innerWidth < 1536);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!swiper) return;

    const updateNavigationState = (): void => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("init", updateNavigationState);
    swiper.on("slideChange", updateNavigationState);

    if (swiper.isBeginning || swiper.isEnd) {
      updateNavigationState();
    }

    return () => {
      swiper.off("init", updateNavigationState);
      swiper.off("slideChange", updateNavigationState);
    };
  }, [swiper]);

  const apartmentTypes: ApartmentType[] = [
    { id: 1, type: "Studio", size: 40, isRenovated: true, availableFlats: 450 },
    { id: 2, type: "One Bedroom", size: 60, isRenovated: true, availableFlats: 120 },
    { id: 3, type: "Two Bedroom", size: 80, isRenovated: true, availableFlats: 80 },
    { id: 4, type: "Three Bedroom", size: 100, isRenovated: true, availableFlats: 50 },
  ];

  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-[108px] relative">
        <div className="md:text-start">
          <GrayBlueButton text="Apartment Options" />
          <h2 className="text-[24px] md:text-[32px] lg:text-[48px] md:pb-0 md:pt-[16px] font-bold text-[#1C1C1E] uppercase lg:mb-[54px] mt-[16px]">
            Apartments <br /> <span className="text-[#CB684D]">you may like</span>
          </h2>
          <div className="flex lg:hidden mt-[14px] justify-between w-full items-center mb-[32px]">
            <div className="flex items-center space-x-8 block">
              <div className="relative">
                <button className="font-[800] text-[#CB684D] text-[16px] pb-1">All</button>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CB684D]"></div>
              </div>
              <button className="font-medium text-[#1C1C1E] opacity-60 text-[16px] pb-1">1BR</button>
              <button className="font-medium text-[#1C1C1E] opacity-60 text-[16px] pb-1">Studio</button>
            </div>
            <div className="flex gap-4">
              <button
                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center z-10 transition duration-300 ${
                  isBeginning ? "bg-gray-300" : "bg-[#1C1C1E]"
                }`}
                aria-label="Previous slide"
                onClick={() => swiper?.slidePrev()}
                disabled={isBeginning}
              >
                <LeftArrow fill="white" />
              </button>
              <button
                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center z-10 transition duration-300 ${
                  isEnd ? "bg-gray-300" : "bg-[#1C1C1E]"
                }`}
                aria-label="Next slide"
                onClick={() => swiper?.slideNext()}
                disabled={isEnd}
              >
                <RightArrow fill="white" BgFill="none"/>
              </button>
            </div>
          </div>
        </div>

        {/* Show Swiper for Mobile */}
        {isMobile ? (
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1.4}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              onSwiper={setSwiper}
              className="apartment-swiper"
            >
              {apartmentTypes.map((apartment) => (
                <SwiperSlide key={apartment.id} className="py-2">
                  <ApartmentCard
                    type={apartment.type}
                    size={apartment.size}
                    isRenovated={apartment.isRenovated}
                    availableFlats={apartment.availableFlats}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/*"View similar" button*/}
            <div className="mt-6 text-center w-full">
              <button className="bg-[#285260] text-[#F2F2F2] rounded-[16px] h-[58px] px-8 w-full">
                View similar
              </button>
            </div>
          </div>
        ) : (
            
          //Grid for Desktop and Tablet
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 sm:max-w-2xl lg:max-w-4xl 2xl:max-w-none mx-auto">
            {apartmentTypes.map((apartment, index) => (
              <div
                key={apartment.id}
                className={`${
                  index >= (isTablet ? 2 : 3) ? "hidden" : "block"
                }`}
              >
                <ApartmentCard
                  type={apartment.type}
                  size={apartment.size}
                  isRenovated={apartment.isRenovated}
                  availableFlats={apartment.availableFlats}
                />
              </div>
            ))}

            {/* Custom Card */}
            <div
              className="bg-[#FFFFFF] rounded-[32px] overflow-hidden w-full max-w-[295px] h-[468px] flex flex-col mx-auto"
              style={{ boxShadow: "0px 4px 18.8px 0px #0000001A" }}
            >
              <div className="p-[32px] pt-[48px] flex flex-col justify-between h-full">
                <Image src={SeeMoreApartment} alt="See More Apartments" className="w-full h-auto" />
                <div className="mt-[32px] text-center">
                  <h3 className="text-[24px] text-black leading-[1.3] uppercase">See more apartments</h3>
                  <p className="text-[#7E7E7E] text-[16px] leading-[1.5] mt-[8px]">
                    Save to favorites<br />for easy comparison
                  </p>
                </div>
                <button className="bg-[#285260] text-[#F2F2F2] rounded-[16px] h-[56px] mt-[18px]">
                  View similar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuggestApartment;