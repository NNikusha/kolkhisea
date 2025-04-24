import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";
import ApartmentCard from "../../molecules/ApartmentCard/ApartmentCard";
import NavigationButton from "../../atoms/NavigationButton/NavigationButton";
import { ApartmentType } from "@/app/types/type";
import Link from "next/link";

interface ApartmentSwiperProps {
  apartments: ApartmentType[];
  lang: string;
}

const ApartmentSwiper: React.FC<ApartmentSwiperProps> = ({ apartments, lang }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const updateNavigationState = () => {
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

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .apartment-swiper {
        overflow: visible !important;
      }
      .apartment-swiper .swiper-wrapper {
        overflow: visible !important;
      }
      .apartment-swiper .swiper-slide {
        overflow: visible !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between w-full items-center mb-[32px]">
        <div className="flex items-center space-x-8 block">
          <div className="relative">
            <button className="font-[800] text-[#CB684D] text-[16px] pb-1">
              All
            </button>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CB684D]"></div>
          </div>
          <button className="font-medium text-[#1C1C1E] opacity-60 text-[16px] pb-1">
            1BR
          </button>
          <button className="font-medium text-[#1C1C1E] opacity-60 text-[16px] pb-1">
            Studio
          </button>
        </div>
        <div className="flex gap-4">
          <NavigationButton
            direction="prev"
            onClick={() => swiper?.slidePrev()}
            isDisabled={isBeginning}
          />
          <NavigationButton
            direction="next"
            onClick={() => swiper?.slideNext()}
            isDisabled={isEnd}
          />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={36}
        slidesPerView={1.4}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 36 },
          1024: { slidesPerView: 3, spaceBetween: 36 },
        }}
        onSwiper={setSwiper}
        className="apartment-swiper"
      >
        {apartments.slice(0, 4).map((apartment, index) => (
          <SwiperSlide key={index} className="py-2">
            <ApartmentCard
              type={apartment.type?.[lang] || "Unknown"}
              total_area={apartment.total_area?.toString()}
              status={apartment.status?.[lang] || "Unknown"}
              availableFlats={apartment.available_flats}
              image={apartment.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 text-center w-full">
        <Link href="/apartment-types">
          <button className="bg-[#285260] text-[#F2F2F2] rounded-[16px] h-[58px] px-8 w-full">
            View similar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ApartmentSwiper;