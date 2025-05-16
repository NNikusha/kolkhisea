"use client";
import React, { useState, useEffect } from "react";
import { ApartmentType } from "@/app/types/type";
import ApartmentGrid from "../../molecules/ApartmentGrid/ApartmentGrid";
import ApartmentSwiper from "../../molecules/ApartmentSwiper/ApartmentSwiper";
import { fetchApartmentTypes } from "@/app/hooks/axios";
import { useLocale, useTranslations } from "next-intl";

const SuggestApartment: React.FC = () => {
  const t = useTranslations('Language');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [apartmentTypes, setApartmentTypes] = useState<ApartmentType[]>([]);
  
  const lang = useLocale(); 

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 1024);
      setIsTablet(window.innerWidth >= 1024 && window.innerWidth < 1536);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section className="w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-[108px] relative">
        <div className="md:text-start pb-[14px] md:pb-0 ">
          {/* <GrayBlueButton text="Apartment Options" /> */}
          <h2 className="text-[24px] md:text-[32px] lg:text-[48px] md:pb-0 md:pt-[16px] font-bold text-[#1C1C1E] uppercase lg:mb-[54px] mt-[16px]">
            {t('Apartments')} <span className="text-[#CB684D]">{t('YouMayLike')}</span>
          </h2>
        </div>

        {isMobile ? (
          <ApartmentSwiper apartments={apartmentTypes} lang={lang} />
        ) : (
          <ApartmentGrid apartments={apartmentTypes} isTablet={isTablet} lang={lang} /> 
        )}
      </div>
    </section>
  );
};

export default SuggestApartment;