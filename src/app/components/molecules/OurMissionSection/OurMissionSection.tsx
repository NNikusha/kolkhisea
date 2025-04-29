"use client";
import React from 'react';
import MissionImage from '../../atoms/MissionImage/MissionImage';
import GrayBlueButton from '../../atoms/GrayBlueButton/GrayBlueButton';
import { Locale, LocalizedContent } from '@/app/types/type';
import { useTranslations } from 'next-intl';

interface OurMissionSectionProps {
  ourMissionTitle?: LocalizedContent;
  ourMissionImage?: string;
  ourMissionImageSecondary?: string;
  lang?: Locale;
}

const OurMissionSection: React.FC<OurMissionSectionProps> = ({
  ourMissionTitle,
  ourMissionImage,
  ourMissionImageSecondary,
  lang = 'en'
}) => {

  const t = useTranslations('Language');

  return (
    <div className="w-full md:pt-[80px] md:pb-[200px] mt-[80px] bg-[#FFFFFF] z-[2]">
      <div className="container mx-auto px-4 lg:px-[108px] z-[2]">
        <div className="flex flex-col-reverse 2xl:flex-row 2xl:gap-[136px] gap-[32px]">
          {ourMissionImage && (
            <MissionImage 
              src={ourMissionImage} 
              alt="Luxury space" 
              heightClass="md:h-[280px] h-[184px]" 
            />
          )}
          
          <div className="flex flex-col items-start pr-[100px] w-full lg:w-auto">
            <GrayBlueButton text={t('OurVision')} />
            <h2 className="md:text-[48px] text-[24px] pt-4 font-normal leading-[130%]">
              <span className="text-[#1C1C1E] pr-[10px] uppercase">{t('Our')}</span>
              <span className="text-[#B4B4B4] pr-[10px] uppercase">{t('Story')}</span>
              {/* <span className="text-[#1C1C1E] block md:inline">RESPONSIBILITY</span> */}
            </h2>
            <p className="font-normal md:text-[16px] text-[14px] text-[#7E7E7E] leading-[150%] lg:w-[105%] md:w-[115%] w-[120%] pt-[24px]">
              {ourMissionTitle && ourMissionTitle[lang]}
            </p>
          </div>
        </div>
        
        <div className="md:pt-[40px] pt-[24px] pb-[72px]">
          {ourMissionImageSecondary && (
            <MissionImage 
              src={ourMissionImageSecondary} 
              alt="Reception area" 
              heightClass="xl:h-[544px] h-[248px]" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;