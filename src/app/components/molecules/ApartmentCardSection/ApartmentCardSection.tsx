import React from "react";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import { ApartmentCardSectionProps } from "@/app/types/type";

const ApartmentCardSection: React.FC<ApartmentCardSectionProps> = ({
  apartments = [],
}) => {
  return (
    <section className="w-full bg-white rounded-t-[56px] py-[32px] lg:py-[45px] 2xl:py-[80px]">
      <div className="container px-[20px] lg:px-[100px] mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apartments.map((apartment, index) => (
            <div key={index} className="flex justify-center">
              <ApartmentCard
                type={apartment.type}
                total_area={apartment.total_area}
                status={apartment.status}
                availableFlats={apartment.available_flats}
                image={apartment.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentCardSection;
