import React from "react";
import Image from "next/image";
import ApartmentCard from "../../molecules/ApartmentCard/ApartmentCard";
import SeeMoreApartment from "@/app/assets/MoreApartment.svg";
import { ApartmentType } from "@/app/types/type";
import Link from "next/link";

interface ApartmentGridProps {
  apartments: ApartmentType[];
  isTablet: boolean;
}

const ApartmentGrid: React.FC<ApartmentGridProps> = ({
  apartments,
  isTablet,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 sm:max-w-2xl lg:max-w-4xl 2xl:max-w-none mx-auto">
      {apartments.map((apartment, index) => (
        <div
          key={apartment.id}
          className={`${index >= (isTablet ? 2 : 3) ? "hidden" : "block"}`}
        >
          <ApartmentCard
              type={apartment.type}
              total_area={apartment.total_area}
              status={apartment.status}
              availableFlats={apartment.available_flats}
              image={apartment.image}
          />
        </div>
      ))}

      <div
        className="bg-[#FFFFFF] rounded-[32px] overflow-hidden w-full max-w-[295px] h-[468px] flex flex-col mx-auto"
        style={{ boxShadow: "0px 4px 18.8px 0px #0000001A" }}
      >
        <div className="p-[32px] pt-[48px] flex flex-col justify-between h-full">
          <Image
            src={SeeMoreApartment}
            alt="See More Apartments"
            className="w-full h-auto"
          />
          <div className="mt-[32px] text-center">
            <h3 className="text-[24px] text-black leading-[1.3] uppercase">
              See more apartments
            </h3>
            <p className="text-[#7E7E7E] text-[16px] leading-[1.5] mt-[8px]">
              Save to favorites
              <br />
              for easy comparison
            </p>
          </div>
          <Link href="/apartment-types">
            <div className="bg-[#285260] flex items-center justify-center text-[#F2F2F2] rounded-[16px] h-[56px] mt-[18px]">
              View similar
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentGrid;
