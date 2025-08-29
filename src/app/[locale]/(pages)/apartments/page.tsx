"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { fetchFlats } from "@/app/hooks/axios";
import ApartmentCard from "@/app/components/molecules/ApartmentCard/ApartmentCard";
import FilterButton from "@/app/components/atoms/FilterButton/FilterButton";
import CleanFilterBtn from "@/app/components/atoms/CleanFilterBtn/CleanFilterBtn";
import ApartmentTypeBackground from "@/app/components/atoms/ApartmentTypeBackground/ApartmentTypeBackground";
import { DualRangeSlider } from "@/app/components/atoms/DualRangeSlider";
import MobileResetFilterBtn from "@/app/components/atoms/MobileResetFilterBtn/MobileResetFilterBtn";
import DraggableModal from "@/app/components/molecules/DraggableModal/DraggableModal";
import { useRouter } from "next/navigation";
import { Flat } from "@/app/types/type";

const resolveImageUrl = (rawImagePath?: string | null) => {
  if (!rawImagePath) return undefined;
  const trimmed = String(rawImagePath).trim();
  if (
    !trimmed ||
    trimmed.toLowerCase() === "null" ||
    trimmed.toLowerCase() === "undefined"
  ) {
    return undefined;
  }
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://admin.kolkhisea.ge/api";
  const baseApiUrl = apiUrl.endsWith("/api") ? apiUrl.slice(0, -4) : apiUrl;
  const normalizedPath = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${baseApiUrl}${normalizedPath}`;
};

const Apartments: React.FC = () => {
  const t = useTranslations("Language");
  const locale = useLocale();
  const router = useRouter();

  const [flats, setFlats] = useState<Flat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Bounds
  const [minFloor, setMinFloor] = useState<number>(0);
  ``;
  const [maxFloor, setMaxFloor] = useState<number>(0);
  const [minAreaBound, setMinAreaBound] = useState<number>(30);
  const [maxAreaBound, setMaxAreaBound] = useState<number>(0);

  // Dual-range selections
  const [floorRange, setFloorRange] = useState<[number, number]>([0, 0]);
  const [areaRange, setAreaRange] = useState<[number, number]>([30, 30]);

  // Other filters
  const [selectedBedroom, setSelectedBedroom] = useState<string>("All");

  // Mobile modal state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const loadFlats = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFlats();
        if (Array.isArray(data)) {
          setFlats(data as Flat[]);
        } else {
          setFlats([]);
        }
      } catch (err) {
        console.error("Failed to load flats:", err);
        setFlats([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadFlats();
  }, []);

  // Build dynamic options from API
  const {
    bedroomOptions,
    computedMinArea,
    computedMaxArea,
    minFloorFromData,
    maxFloorFromData,
  } = useMemo(() => {
    const floors = new Set<number>();
    const bedroomCounts = new Set<string>();
    let areaMax = 0;
    let areaMin = Number.POSITIVE_INFINITY;
    for (const flat of flats) {
      if (typeof flat.floor === "number") floors.add(flat.floor);

      const count = Array.isArray(flat.bedroom) ? flat.bedroom.length : 0;
      bedroomCounts.add(count === 0 ? "Studio" : String(count));

      const areaNum =
        typeof flat.total_area === "string"
          ? parseFloat(flat.total_area)
          : Number(flat.total_area || 0);
      if (!Number.isNaN(areaNum)) {
        areaMax = Math.max(areaMax, areaNum);
        areaMin = Math.min(areaMin, areaNum);
      }
    }
    const floorArray = Array.from(floors);
    const bedroomOpts = [
      "All",
      ...Array.from(bedroomCounts).sort((a, b) => {
        if (a === "Studio") return -1;
        if (b === "Studio") return 1;
        return Number(a) - Number(b);
      }),
    ];
    const minF = floorArray.length ? Math.min(...floorArray) : 0;
    const maxF = floorArray.length ? Math.max(...floorArray) : 0;
    return {
      bedroomOptions: bedroomOpts,
      computedMinArea: isFinite(areaMin)
        ? Math.max(30, Math.floor(areaMin))
        : 30,
      computedMaxArea: areaMax,
      minFloorFromData: minF,
      maxFloorFromData: maxF,
    };
  }, [flats]);

  useEffect(() => {
    if (minFloorFromData !== undefined && maxFloorFromData !== undefined) {
      setMinFloor(minFloorFromData);
      setMaxFloor(maxFloorFromData);
      setFloorRange([minFloorFromData, maxFloorFromData]);
    }
    if (computedMinArea !== undefined && computedMaxArea !== undefined) {
      const min = computedMinArea;
      const max = Math.ceil(computedMaxArea);
      setMinAreaBound(min);
      setMaxAreaBound(max);
      setAreaRange([min, max]);
    }
  }, [computedMaxArea, minFloorFromData, maxFloorFromData, computedMinArea]);

  const filteredFlats = useMemo(() => {
    return flats.filter((flat) => {
      if (typeof flat.floor === "number") {
        if (flat.floor < floorRange[0] || flat.floor > floorRange[1])
          return false;
      }
      if (selectedBedroom !== "All") {
        const count = Array.isArray(flat.bedroom) ? flat.bedroom.length : 0;
        const label = count === 0 ? "Studio" : String(count);
        if (label !== selectedBedroom) return false;
      }
      const areaNum =
        typeof flat.total_area === "string"
          ? parseFloat(flat.total_area)
          : Number(flat.total_area || 0);
      if (areaNum < areaRange[0] || areaNum > areaRange[1]) return false;
      return true;
    });
  }, [flats, floorRange, selectedBedroom, areaRange]);

  const handleClearFilters = () => {
    setSelectedBedroom("All");
    setFloorRange([minFloor, maxFloor]);
    setAreaRange([minAreaBound, maxAreaBound]);
  };

  const renderType = (flat: Flat): string => {
    const count = Array.isArray(flat.bedroom) ? flat.bedroom.length : 0;
    if (count === 0) return t("StudioApartment");
    if (count === 1) return t("OneBedroomApartment");
    return t("BedroomsPlural", { count });
  };

  const handleApartmentClick = (apartment: Flat) => {
    try {
      const targetUrl = `/flat-detail-page/${apartment.id}`;
      router.push(targetUrl);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="flex flex-col w-full select-none pt-[120px] lg:pt-[136px]">
      <ApartmentTypeBackground fullHeight={true} />
      <div className="container px-[16px] lg:px-[108px] mx-auto z-[10] py-3 md:py-0">
        <div className="rounded-[24px] px-4 py-5 lg:px-8 lg:py-6 gap-2 flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-[24px] md:text-[40px] lg:text-[48px] font-normal uppercase">
              {t("ApartmentTypes")}
            </p>
            {/* Mobile filter button */}
            <div className="md:hidden">
              <MobileResetFilterBtn onClick={() => setIsOpen(true)} />
            </div>
          </div>

          {/* Desktop filters */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 lg:items-end gap-6">
            {/* Number of Rooms */}
            <div className="flex flex-col gap-3 lg:col-span-5">
              <label className="text-white uppercase tracking-wide text-sm">
                {t("NumberOfRooms")}
              </label>
              <div className="flex flex-wrap gap-2">
                {bedroomOptions.map((opt) => (
                  <FilterButton
                    key={opt}
                    active={selectedBedroom === opt}
                    onClick={() => setSelectedBedroom(opt)}
                    padding="large"
                  >
                    {opt === "Studio"
                      ? t("Studio")
                      : opt === "All"
                      ? t("All")
                      : `${opt} ${t("Bedroom")}`}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Area filter */}
            <div className="flex flex-col gap-5 lg:col-span-4">
              <label className="text-white uppercase tracking-wide text-sm">
                {t("SpecifyArea")}
              </label>
              <div className="flex items-center gap-3">
                <span className="px-3 h-8 rounded-full bg-[#F0F0F0] text-[#1C1C1E] flex items-center justify-center text-sm">
                  {minAreaBound}
                </span>
                <div className="relative w-full max-w-[360px]">
                  <DualRangeSlider
                    label={(value: number) => <span>{value}</span>}
                    value={areaRange}
                    onValueChange={(vals: [number, number]) =>
                      setAreaRange(vals)
                    }
                    min={minAreaBound}
                    max={maxAreaBound}
                    step={1}
                  />
                </div>
                <span className="px-3 h-8 rounded-full bg-[#F0F0F0] text-[#1C1C1E] flex items-center justify-center text-sm">
                  {maxAreaBound}
                </span>
              </div>
            </div>

            {/* Reset Button */}
            <div className="flex items-end lg:justify-end lg:col-span-3">
              <CleanFilterBtn ResetFilters={handleClearFilters} />
            </div>
          </div>

          {/* Floor filter (desktop) */}
          <div className="mt-6 hidden md:grid grid-cols-12 items-center gap-4">
            <div className="col-span-12">
              <label className="text-white uppercase tracking-wide text-sm">
                {t("Floor")}
              </label>
            </div>
            <div className="col-span-12 flex items-center gap-3">
              <span className="px-3 h-8 rounded-full bg-[#F0F0F0] text-[#1C1C1E] flex items-center justify-center text-sm">
                {minFloor}
              </span>
              <div className="relative w-full">
                <DualRangeSlider
                  label={(value: number) => <span>{value}</span>}
                  value={floorRange}
                  onValueChange={(vals: [number, number]) =>
                    setFloorRange(vals)
                  }
                  min={minFloor}
                  max={maxFloor}
                  step={1}
                />
              </div>
              <span className="px-3 h-8 rounded-full bg-[#F0F0F0] text-[#1C1C1E] flex items-center justify-center text-sm">
                {maxFloor}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <DraggableModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        height="70vh"
      >
        <div className="px-4 flex flex-col gap-8">
          <h2 className="text-[20px] text-black">{t("FilterTitle")}</h2>

          {/* Number of rooms */}
          <div className="flex flex-col gap-3">
            <label className="uppercase text-sm text-black">
              {t("NumberOfRooms")}
            </label>
            <div className="flex flex-wrap gap-2">
              {bedroomOptions.map((opt) => (
                <FilterButton
                  key={opt}
                  active={selectedBedroom === opt}
                  onClick={() => setSelectedBedroom(opt)}
                >
                  {opt === "Studio"
                    ? t("Studio")
                    : opt === "All"
                    ? t("All")
                    : `${opt} ${t("Bedroom")}`}
                </FilterButton>
              ))}
            </div>
          </div>

          {/* Area filter */}
          <div className="flex flex-col gap-6 px-2">
            <label className="uppercase text-sm text-black">
              {t("SpecifyArea")}
            </label>
            <DualRangeSlider
              label={(value: number) => <span>{value}</span>}
              value={areaRange}
              onValueChange={(vals: [number, number]) => setAreaRange(vals)}
              min={minAreaBound}
              max={maxAreaBound}
              step={1}
            />
          </div>

          {/* Floor filter */}
          <div className="flex flex-col gap-6 px-2">
            <label className="uppercase text-sm text-black">{t("Floor")}</label>
            <DualRangeSlider
              label={(value: number) => <span>{value}</span>}
              value={floorRange}
              onValueChange={(vals: [number, number]) => setFloorRange(vals)}
              min={minFloor}
              max={maxFloor}
              step={1}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 w-full pt-4">
            <button
              className="h-12 flex-1 bg-[#CB684D] text-white rounded-[16px]"
              onClick={() => setIsOpen(false)}
            >
              {t("FilterButton")}
            </button>
            <button
              className="h-12 flex-1 bg-[#E8E8E8] text-[#1C1C1E] rounded-[16px]"
              onClick={handleClearFilters}
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
        <section className="w-full bg-white rounded-t-[56px] py-[32px] lg:py-[45px] 2xl:py-[80px]">
          <div className="container px-[20px] lg:px-[100px] mx-auto text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFlats.map((flat) => {
                const status = flat.flat_conditions?.[locale] || "";
                const image = resolveImageUrl(
                  flat.flat_image_3d || flat.floorplan_image || undefined
                );
                const type = renderType(flat);
                const area =
                  typeof flat.total_area === "string"
                    ? flat.total_area
                    : String(flat.total_area ?? "");
                return (
                  <div key={flat.id} className="flex justify-center">
                    <ApartmentCard
                      type={type}
                      total_area={area}
                      status={status}
                      availableFlats={0}
                      image={image}
                      showAvailableLabel={false}
                      onClick={() => handleApartmentClick(flat)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Apartments;
