"use client";
import React, { useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { ApartmentType } from "@/app/types/type";
import DesktopGrid from "../../molecules/DesktopGrid/DesktopGrid";
import MobileSwiper from "../../molecules/MobileSwiper/MobileSwiper";
import SectionHeader from "../SectionHeader/SectionHeader";
import { fetchApartmentTypes } from "@/app/hooks/axios";
import { useLocale } from "next-intl";

const ApartmentTypesIntegrated: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [apartmentTypes, setApartmentTypes] = useState<ApartmentType[]>([]);
  
  const locale = useLocale();  // Get the current locale (language)
  
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
  
  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-[108px] relative">
        <SectionHeader isMobile={isMobile} swiper={swiper} />
        
        <DesktopGrid
          isMobile={isMobile}
          apartmentTypes={apartmentTypes}
          lang={locale}
        />
        <MobileSwiper
          isMobile={isMobile}
          apartmentTypes={apartmentTypes}
          setSwiper={setSwiper}
          lang={locale}
        />
      </div>
    </section>
  );
};

export default ApartmentTypesIntegrated;