"use client";
import React, { useState, useEffect, useMemo } from "react";
import DraggableModal from "../../molecules/DraggableModal/DraggableModal";
import ApartmentTypeSection from "../../molecules/ApartmentTypeSection/ApartmentTypeSection";
import FilterItem from "../../molecules/FilterItem/FilterItem";
import ApartmentCardSection from "../../molecules/ApartmentCardSection/ApartmentCardSection";
import ApartmentTypeBackground from "../../atoms/ApartmentTypeBackground/ApartmentTypeBackground";
import { fetchApartmentTypes } from "@/app/hooks/axios";
import { Apartment } from "@/app/types/type";
import { useLocale, useTranslations } from "next-intl";

const ApartmentTypes = () => {
  const t = useTranslations("Language");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apartments, setApartments] = useState<Apartment[]>([]);

  const [appliedRoom, setAppliedRoom] = useState<string>("All");
  const [appliedArea, setAppliedArea] = useState<string>("All");
  const [appliedDelivery, setAppliedDelivery] = useState<string>("Any");

  const [tempRoom, setTempRoom] = useState<string>("All");
  const [tempArea, setTempArea] = useState<string>("All");
  const [tempDelivery, setTempDelivery] = useState<string>("Any");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const locale = useLocale();

  useEffect(() => {
    const FetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchApartmentTypes();
        setApartments(data);
      } catch (error) {
        console.error("Failed to load apartments:", error);
      } finally {
        setIsLoading(false);
      }
    };
    FetchData();
  }, []);

  const ResetFilters = () => {
    setTempRoom("All");
    setTempArea("All");
    setTempDelivery("Any");

    setAppliedRoom("All");
    setAppliedArea("All");
    setAppliedDelivery("Any");
  };

  const ResetTempFilters = () => {
    setTempRoom("All");
    setTempArea("All");
    setTempDelivery("Any");
  };

  const handleOpenModal = () => {
    setTempRoom(appliedRoom);
    setTempArea(appliedArea);
    setTempDelivery(appliedDelivery);
    setIsOpen(true);
  };

  const handleApplyFilters = () => {
    setAppliedRoom(tempRoom);
    setAppliedArea(tempArea);
    setAppliedDelivery(tempDelivery);
    setIsOpen(false);
  };

  const filteredApartments = useMemo(() => {
    let filtered = [...apartments];

    if (appliedRoom !== "All") {
      filtered = filtered.filter((apartment) => {
        const roomType =
          typeof apartment.type === "object"
            ? apartment.type[locale] || apartment.type.en
            : apartment.type;

        const roomTypeMapping: { [key: string]: string[] } = {
          Studio: ["Studio", "studio", "სტუდიო"],
          "1BR": ["1 Room", "1 room", "1 ოთახიანი"],
          "2BR": ["2 Room", "2 room", "2 ოთახიანი"],
        };

        const mappedRoomTypes = roomTypeMapping[appliedRoom] || [];
        return mappedRoomTypes.some((type) =>
          roomType?.toLowerCase().includes(type.toLowerCase())
        );
      });
    }

    if (appliedArea !== "All") {
      filtered = filtered.filter((apartment) => {
        const totalArea = parseFloat(apartment.total_area);

        switch (appliedArea) {
          case "30-40":
            return totalArea >= 30 && totalArea <= 40;
          case "50-70":
            return totalArea >= 50 && totalArea <= 70;
          case "100+":
            return totalArea >= 100;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [apartments, appliedRoom, appliedArea, locale]);

  const roomOptions = [
    { value: "All", label: t("All") },
    { value: "Studio", label: t("Studio") },
    { value: "1BR", label: t("OneBedroom") },
    { value: "2BR", label: t("TwoBedroom") },
  ];

  const areaOptions = [
    { value: "All", label: t("All") },
    { value: "30-40", label: t("Area30To40") },
    { value: "50-70", label: t("Area50To70") },
    { value: "100+", label: t("Area100Plus") },
  ];

  return (
    <div className="flex flex-col w-full select-none">
      <ApartmentTypeBackground />
      <ApartmentTypeSection
        ResetFilters={ResetFilters}
        handleOpenModal={handleOpenModal}
        room={appliedRoom}
        setRoom={setAppliedRoom}
        area={appliedArea}
        setArea={setAppliedArea}
        delivery={appliedDelivery}
        setDelivery={setAppliedDelivery}
      />
      <DraggableModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        height="58vh"
      >
        <div className="px-4 flex flex-col gap-8">
          <h2 className="text-[20px] text-black">{t("FilterTitle")}</h2>

          <div className="flex flex-col gap-6 w-full">
            <FilterItem
              label={t("NumberOfRooms")}
              options={roomOptions}
              activeOption={tempRoom}
              onSelect={setTempRoom}
            />
            <FilterItem
              label={t("SpecifyArea")}
              options={areaOptions}
              activeOption={tempArea}
              onSelect={setTempArea}
            />
          </div>

          <div className="flex gap-2 w-full pt-4">
            <button
              className="h-14 rounded-[16px] bg-[#CB684D] text-white font-medium text-center flex-1"
              onClick={handleApplyFilters}
            >
              {t("FilterButton")}
            </button>
            <button
              className="h-14 rounded-[16px] bg-[#E8E8E8] text-[#1C1C1E] font-medium text-center flex-1"
              onClick={ResetTempFilters}
            >
              {t("ClearFilterButton")}
            </button>
          </div>
        </div>
      </DraggableModal>

      {isLoading ? (
        <div className="flex justify-center items-center h-[250px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
        </div>
      ) : (
        <ApartmentCardSection apartments={filteredApartments} lang={locale} />
      )}
    </div>
  );
};

export default ApartmentTypes;
