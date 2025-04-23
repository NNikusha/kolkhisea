import { ApartmentType } from "@/app/types/type";
import React from "react";
import ApartmentCard from "../ApartmentCard/ApartmentCard";

interface DesktopGridProps {
  apartmentTypes: ApartmentType[];
  isMobile: boolean;
  lang: string; 
}

const DesktopGrid: React.FC<DesktopGridProps> = ({
  apartmentTypes,
  isMobile,
  lang,
}) => {
  const favoriteApartments = apartmentTypes.filter(
    (apartment) => apartment.is_favourite === 1
  );

  return (
    <div className={`${isMobile ? "hidden" : "block"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 sm:max-w-2xl lg:max-w-4xl 2xl:max-w-none mx-auto">
        {favoriteApartments.map((apartment, index) => (
          <div
            key={apartment.id}
            className={index === 3 ? "hidden 2xl:block" : ""}
          >
            <ApartmentCard
              type={apartment.type?.[lang]}
              total_area={apartment.total_area}
              status={apartment.status?.[lang]}
              availableFlats={apartment.available_flats}
              image={apartment.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopGrid;
