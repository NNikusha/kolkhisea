"use client";
import React, { useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { ApartmentType } from "@/app/types/type";
import DesktopGrid from "../../molecules/DesktopGrid/DesktopGrid";
import MobileSwiper from "../../molecules/MobileSwiper/MobileSwiper";
import SectionHeader from "../SectionHeader/SectionHeader";
import { fetchApartmentTypes } from "@/app/hooks/axios";
import { useLocale } from "next-intl";

interface ExtendedApartmentType extends ApartmentType {
  is_favourite?: number;
}

const ApartmentTypesIntegrated: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [apartmentTypes, setApartmentTypes] = useState<ApartmentType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  
  const locale = useLocale();
  
  useEffect(() => {
    const checkIsMobile = (): void => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  
  useEffect(() => {
    if (swiper) {
      swiper.navigation.update();
    }
  }, [swiper]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApartmentTypes();
        setApartmentTypes(data);
      } catch (error) {
        console.error("Error fetching apartment types:", error);
      }
    };
    
    fetchData();
  }, []);

  // Filter apartments based on selected filter
  const filteredApartments = apartmentTypes.filter((apartment) => {
    // If "All" is selected, show only favorite apartments (original behavior)
    if (selectedFilter === "All") {
      return (apartment as ExtendedApartmentType).is_favourite === 1;
    }
    
    // If a specific filter is selected, show all apartments of that type
    const apartmentType = apartment.type?.[locale] || apartment.type?.en || "";
    
    switch (selectedFilter) {
      case "Studio":
        return apartmentType.toLowerCase().includes("studio") || 
               apartmentType.toLowerCase().includes("სტუდიო");
      case "1BR":
        return apartmentType.toLowerCase().includes("1 room") || 
               apartmentType.toLowerCase().includes("1 ოთახიანი");
      case "2BR":
        return apartmentType.toLowerCase().includes("2 room") || 
               apartmentType.toLowerCase().includes("2 ოთახიანი");
      default:
        return true;
    }
  });

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };
  
  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-[108px] relative">
        <SectionHeader 
          isMobile={isMobile} 
          swiper={swiper} 
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        
        <DesktopGrid
          isMobile={isMobile}
          apartmentTypes={filteredApartments}
          lang={locale}
        />
        <MobileSwiper
          isMobile={isMobile}
          apartmentTypes={filteredApartments}
          setSwiper={setSwiper}
          lang={locale}
        />
      </div>
    </section>
  );
};

export default ApartmentTypesIntegrated;