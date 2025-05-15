"use client";

import React from 'react';
import Image from 'next/image';
import MainPhoto from "@/app/assets/aboutproject.svg";
import { Locale } from '@/app/types/type';
import { useTranslations } from 'next-intl';

interface OverviewSectionProps {
  overviewText?: {
    ka?: string;
    en?: string;
    ru?: string;
  };
  overviewImage?: string;
  lang?: Locale;
}

const OverviewSection = ({ overviewText, overviewImage, lang = 'en' }: OverviewSectionProps) => {

  const t = useTranslations('Language');

  return (
    <div className="w-full rounded-t-[30px] relative z-10 pt-[600px] pb-[72px] md:py-16 mt-[calc(600px-90vh)] md:mt-[calc(1140px-90vh)] xl:mt-[calc(340px+(55vw-120vh))]">
      <div className="container mx-auto pt-[50px] md:pt-[52px] px-4 lg:px-[108px]">
        <div className="flex flex-col lg:justify-between items-center lg:flex-row lg:items-start lg:space-x-12 mb-12">
          <div className="text-center lg:w-1/4 mb-6 lg:mb-0">
            <div className="text-[24px] lg:text-[48px] text-[#1C1C1E] uppercase text-start relative">
              {t('ProjectOverview')}
              <div className="bg-[#B4D7D8]/50 w-[167px] h-[24px] lg:w-[200px] lg:h-[40px] absolute z-[-10] bottom-[-7px] left-[calc(50%-83px)] lg:left-[70px]"></div>
            </div>

          </div>
          
          <div className="lg:max-w-[648px] pl-8">
            <p className="text-[14px] md:text-[16px] max-w-[648px] text-center md:text-start text-[#3D3D3D]">
              {overviewText && overviewText[lang] 
                ? overviewText[lang]
                : "Located in the heart of [City], [Project Name] is a premium 10-story apartment hotel designed for modern living. With stunning sea views, high-end amenities, and a prime location, it offers the perfect blend of comfort and luxury."}
            </p>
          </div>
        </div>
        
        <div className="w-full mt-10">
          <div className="rounded-3xl h-[200px] md:h-[528px] overflow-hidden">
            <Image
              src={overviewImage || MainPhoto}
              alt="Apartment Overview"
              width={900}
              height={400}
              className="w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;