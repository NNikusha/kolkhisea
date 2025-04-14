"use client";
import React from 'react';
import ChooseUsCard from '../ChooseUsCard/ChooseUsCard';
import { Locale, LocalizedContent } from '@/app/types/type';

interface ChooseUsItem {
  title: LocalizedContent;
  why_choose_us: LocalizedContent;
  image_url: string;
}

interface ChooseUsSectionProps {
  whyChooseUs?: ChooseUsItem[];
  whyChooseUsText?: LocalizedContent;
  lang?: Locale;
}

const ChooseUsSection: React.FC<ChooseUsSectionProps> = ({ 
  whyChooseUs,
  whyChooseUsText,
  lang = 'en'
}) => {
  if (!whyChooseUs || whyChooseUs.length === 0) {
    return null;
  }

  const transformedData = whyChooseUs.map((item, index) => ({
    number: `0${index + 1}`,
    title: item.title[lang] || '',
    description: item.why_choose_us[lang] || '',
    imageSrc: item.image_url
  }));

  return (
    <div className="w-full pt-[168px] pb-[72px] md:pb-[100px]">
      <div className="container mx-auto px-4 xl:px-[108px]">
        <div className="flex xl:flex-row flex-col pb-[72px] xl:text-start text-center">
          <h2 className="2xl:text-[48px] xl:text-[36px] text-[24px] font-normal leading-[130%] xl:pr-[106px] pr-[0px]">
            <span className="text-[#ABABAB]">WHY</span>
            <span className="text-[#1C1C1E]"> YOU SHOULD</span>
            <span className="text-[#CB684D]"> CHOOSE US?</span>
          </h2>
          
          {whyChooseUsText && whyChooseUsText[lang] ? (
            <p className="font-normal xl:text-[16px] text-[14px] text-[#3D3D3D] leading-[150%] xl:w-[95%] xl:pt-[0px] pt-[24px]">
              {whyChooseUsText[lang]}
            </p>
          ) : null}
        </div>
        
        <div className="flex lg:flex-row flex-col items-center justify-between 2xl:gap-[24px] xl:gap-[26px] gap-[24px]">
          {transformedData.map((item, index) => (
            <ChooseUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;