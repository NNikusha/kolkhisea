'use client';

import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import { Locale, LocalizedContent } from '@/app/types/type';
import { useTranslations } from 'next-intl';

// Mobile Patterns
import FeaturesPatternGray from '@/app/assets/FeaturesPatternGray.png';
import FeaturesPatternOrange from '@/app/assets/FeaturesPatternOrange.png';
import FeaturesPatternBlue from '@/app/assets/FeaturesPatternBlue.png';

// Desktop Patterns
import CardPatternGray from '@/app/assets/CardPatternGrayMobile.png';
import CardPatternOrange from '@/app/assets/CardPatternOrangeMobile.png';
import CardPatternBlue from '@/app/assets/CardPatternBlueMobile.png';

interface FeaturesSectionProps {
  features: Array<{
    title?: LocalizedContent;
    description?: LocalizedContent;
    image_url?: string;
  }>;
  lang?: Locale;
}

const FeaturesSection = ({ features, lang = 'en' }: FeaturesSectionProps) => {
  const t = useTranslations('Language');

  const patternImagesMobile = [FeaturesPatternGray, FeaturesPatternOrange, FeaturesPatternBlue];
  const patternImagesDesktop = [CardPatternGray, CardPatternOrange, CardPatternBlue];

  const displayFeatures = features.map((feature, index) => ({
    number: `0${index + 1}`,
    title: feature.title?.[lang] || '',
    description: feature.description?.[lang] || '',
    imageSrc: feature.image_url || '',
    patternSrcMobile: patternImagesMobile[index % patternImagesMobile.length],
    patternSrcDesktop: patternImagesDesktop[index % patternImagesDesktop.length]
  }));

  return (
    <div className="w-full xl:pt-[138px] h-fit mb-[72px] md:mb-[168px]">
      <div className="container mx-auto px-4 lg:px-[108px]">
        <div className="text-center lg:text-start pt-4">
          <h2 className="text-[24px] lg:text-[48px] font-normal text-[#B4B4B4] uppercase">
            {t('ModernConveniences')}
          </h2>
        </div>

        <div className="text-center lg:text-start relative lg:inline-block">
          <h2 className="text-[24px] lg:text-[48px] font-normal text-[#1C1C1E] uppercase">
            {t('PremiumFacilities')}
          </h2>
          <div className="absolute hidden lg:flex bg-[#B4D7D8]/50 h-[40px] w-[312px] right-[-50px] top-[47px] z-[-1]"></div>
          <div className="absolute lg:hidden flex bg-[#B4D7D8]/50 h-[24px] w-[167px] left-[calc(50%-83px)] top-[20px] z-[-1]"></div>

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
