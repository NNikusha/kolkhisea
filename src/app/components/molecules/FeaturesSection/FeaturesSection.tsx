"use client";

import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import { Locale, LocalizedContent } from '@/app/types/type';

interface FeaturesSectionProps {
  features: Array<{
    title?: LocalizedContent;
    description?: LocalizedContent;
    image_url?: string;
  }>;
  lang?: Locale;
}

const FeaturesSection = ({ features, lang = 'en' }: FeaturesSectionProps) => {
  const displayFeatures = features.map((feature, index) => ({
    number: `0${index + 1}`,
    title: feature.title?.[lang] || '',
    description: feature.description?.[lang] || '',
    imageSrc: feature.image_url || '',
  }));

  return (
    <div className="w-full xl:pt-[138px] h-fit mb-[72px] md:mb-[168px]">
      <div className="container mx-auto px-4 lg:px-[108px]">
        <div className="text-center md:text-start">
          <span className="text-[12px] lg:text-[16px] font-normal text-[#285260] bg-[#2852600D] inline-block rounded-[200px] p-4">
            Key Features
          </span>
        </div>

        <div className="text-center md:text-start pt-4">
          <h2 className="text-[24px] lg:text-[32px] xl:text-[48px] font-normal text-[#B4B4B4]">
            MODERN CONVENIENCES
          </h2>
        </div>

        <div className="text-center md:text-start">
          <h2 className="text-[24px] lg:text-[32px] xl:text-[48px] font-normal text-[#1C1C1E]">
            & PREMIUM FACILITIES
          </h2>
        </div>

        <div className="pt-[40px] flex flex-col gap-4">
          {displayFeatures.map((feature, index) => (
            <FeatureCard key={feature.number} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
