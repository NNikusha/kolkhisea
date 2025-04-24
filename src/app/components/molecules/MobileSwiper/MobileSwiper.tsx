import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ApartmentType } from "@/app/types/type";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import Button from "../../atoms/Button/Button";

interface ExtendedApartmentType extends ApartmentType {
  is_favourite?: number;
}

interface MobileSwiperProps {
  apartmentTypes: ApartmentType[];
  isMobile: boolean;
  setSwiper: (swiper: SwiperType) => void;
  lang: string;
}

const MobileSwiper: React.FC<MobileSwiperProps> = ({
  apartmentTypes,
  isMobile,
  setSwiper,
  lang,
}) => {
  const favoriteApartments = (apartmentTypes as ExtendedApartmentType[]).filter(
    (apartment) => apartment.is_favourite === 1
  );

  return (
    <div className={`${isMobile ? "block" : "hidden"}`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1.4}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        onSwiper={setSwiper}
        className="apartment-swiper mt-6"
      >
        {favoriteApartments.map((apartment, index) => (
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

      <div className="mt-10">
        <Button
          className="w-full text-center items-center justify-center"
          text="See All Suggestions"
          href="/apartment-types"
        />
      </div>
    </div>
  );
};

export default MobileSwiper;