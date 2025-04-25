import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import CleanFilterBtn from "../../atoms/CleanFilterBtn/CleanFilterBtn";
import MobileResetFilterBtn from "../../atoms/MobileResetFilterBtn/MobileResetFilterBtn";
// import FilterDropdown from "../../atoms/FilterDropDown/FilterDropDown";
import { ApartmentTypeSectionProps } from "@/app/types/type";

const ApartmentTypeSection: React.FC<ApartmentTypeSectionProps> = ({
  ResetFilters,
  handleOpenModal,
  room,
  setRoom,
  area,
  setArea,
  // delivery,
  // setDelivery,
}) => {
  return (
    <section className="relative h-full w-full container mx-auto px-4 mt-20 md:px-2 lg:px-27 pt-2 md:pt-8 pb-8 md:pb-14">
      <div className="h-full w-full flex flex-col gap-8 md:gap-14 mt-[30px] md:mt-[20px]">
        <div className="flex gap-2 md:gap-4 text-[12px] sm:text-[14px] lg:text-[16px] items-center">
          <p>Main Page</p>
          <div className="rounded-full h-[8px] w-[8px] bg-white"></div>
          <p>About Page</p>
          <div className="rounded-full h-[8px] w-[8px] bg-white"></div>
          <p>Apartment Types</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-between">
            <p className="text-[24px] md:text-[40px] lg:text-[48px] font-normal uppercase">
              Apartment types
            </p>
            <MobileResetFilterBtn onClick={handleOpenModal} />
          </div>
          <div className="hidden md:flex justify-between items-end">
            <div className="flex justify-between w-[65%] gap-2 xl:gap-4">
              <FilterItem
                label="The number of rooms"
                options={["All", "Studio", "1BR"]}
                activeOption={room}
                onSelect={setRoom}
              />
              <FilterItem
                label="Specify the area, m²"
                options={["30", "40", "50", "60"]}
                activeOption={area}
                onSelect={setArea}
              />
            </div>
            <CleanFilterBtn ResetFilters={ResetFilters} />
            {/* <FilterDropdown
              title="Date of delivery"
              value={delivery}
              onChange={setDelivery}
              options={[
                "1st quarter 2026",
                "2nd quarter 2026",
                "3rd quarter 2026",
              ]}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypeSection;
