"use client";
import React, { useState, useEffect } from "react";
import DraggableModal from "../../molecules/DraggableModal/DraggableModal";
import ApartmentTypeSection from "../../molecules/ApartmentTypeSection/ApartmentTypeSection";
import FilterDropdown from "../../atoms/FilterDropDown/FilterDropDown";
import FilterItem from "../../molecules/FilterItem/FilterItem";
import ApartmentCardSection from "../../molecules/ApartmentCardSection/ApartmentCardSection";
import ApartmentTypeBackground from "../../atoms/ApartmentTypeBackground/ApartmentTypeBackground";
import { fetchApartmentTypes } from "@/app/hooks/axios";
import { Apartment } from "@/app/types/type";

const ApartmentTypes = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [room, setRoom] = useState<string>("All");
  const [area, setArea] = useState<string>("30");
  const [delivery, setDelivery] = useState<string>("Any");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const data = await fetchApartmentTypes();
        setApartments(data);
      } catch (error) {
        console.error("Failed to load apartments:", error);
      }
    };
    FetchData();
  }, []);

  const ResetFilters = () => {
    setRoom("All");
    setArea("30");
    setDelivery("Any");
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-full select-none">
      <ApartmentTypeBackground />
      <ApartmentTypeSection
        ResetFilters={ResetFilters}
        handleOpenModal={handleOpenModal}
        room={room}
        setRoom={setRoom}
        area={area}
        setArea={setArea}
        delivery={delivery}
        setDelivery={setDelivery}
      />
      <DraggableModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        height="78vh"
      >
        <div className="px-4 flex flex-col gap-8">
          <h2 className="text-[20px] text-black">FILTER</h2>

          <div className="flex flex-col gap-6 w-full">
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
            <FilterDropdown
              title="Date of delivery"
              value={delivery}
              onChange={setDelivery}
              options={[
                "1st quarter 2026",
                "2nd quarter 2026",
                "3rd quarter 2026",
              ]}
            />
          </div>

          <div className="flex gap-2 w-full pt-4">
            <button
              className="h-14 rounded-[16px] bg-[#CB684D] text-white font-medium text-center flex-1"
              onClick={() => setIsOpen(false)}
            >
              Filter
            </button>
            <button
              className="h-14 rounded-[16px] bg-[#E8E8E8] text-[#1C1C1E] font-medium text-center flex-1"
              onClick={ResetFilters}
            >
              Clear Filter
            </button>
          </div>
        </div>
      </DraggableModal>
      <ApartmentCardSection apartments={apartments} />
    </div>
  );
};

export default ApartmentTypes;
