"use client";
import React from "react";
import ApartmentCard from "../../molecules/ApartmentCard/ApartmentCard";
import House from "../../../assets/ModernHouseRender.svg";
import Image from "next/image";
import FilterTimes from "../../../assets/filter-times.svg";
import { useState } from "react";
import FilterItem from "../../molecules/FilterItem/FilterItem";
import FilterDropdown from "../../atoms/FilterDropDown/FilterDropDown";

const ApartmentTypes = () => {
  const apartments = [
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
    {
      type: "Studio",
      size: 48,
      isRenovated: true,
      availableFlats: 458,
    },
  ];

  const [room, setRoom] = useState<string>("All");
  const [area, setArea] = useState<string>("30");
  const [delivery, setDelivery] = useState<string>("Any");

  const ResetFilters = () => {
    setRoom("All");
    setArea("30");
    setDelivery("Any");
  };

  return (
    <div className="flex flex-col w-full select-none">
      <div className="absolute inset-0 -z-10 h-[70%] blur-[1px]">
        <Image
          src={House}
          alt="House Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
      <section className="relative h-full w-full container mx-auto px-4 lg:px-27 pt-[32px] pb-[56px]">
        <div className="h-full w-full flex flex-col gap-14">
          <div className="flex gap-4 items-center">
            <p>Main Page</p>
            <div className="rounded-full h-[8px] w-[8px] bg-white"></div>
            <p>About Page</p>
            <div className="rounded-full h-[8px] w-[8px] bg-white"></div>
            <p> Apartment Types</p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex justify-between">
              <p className="text-[48px] font-normal uppercase">
                Apartment types
              </p>
              <button
                className="underline bg-white text-black rounded-[16px] hover:bg-[#ECF0F8] duration-300 p-6 cursor-pointer flex gap-1"
                onClick={ResetFilters}
              >
                <Image src={FilterTimes} alt="filterTimesIcon" />
                Clean Filter
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-between w-[65%] gap-2">
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
          </div>
        </div>
      </section>
      <section className="w-full bg-white rounded-t-[56px] py-[32px] lg:py-[45px] 2xl:py-[80px]">
        <div className="container px-[20px] lg:px-[100px] mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apartments.map((apartment, index) => (
              <div key={index} className="flex justify-center">
                <ApartmentCard
                  type={apartment.type}
                  size={apartment.size}
                  isRenovated={apartment.isRenovated}
                  availableFlats={apartment.availableFlats}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApartmentTypes;
