'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  patternSrcMobile: StaticImageData;
  patternSrcDesktop: StaticImageData;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
  imageSrc,
  patternSrcMobile,
  patternSrcDesktop,
  index
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row md:min-h-[352px] items-center bg-white rounded-[32px] p-[24px]  shadow-md md:w-full mx-auto overflow-hidden transition-all duration-500 ${
        index === 0 ? 'z-0' : 'z-10'
      }`}
      style={{ top: '0px' }}
    >
      {/* Pattern Image - Mobile Only */}
      <div className="absolute left-0 bottom-0 md:w-[88px] w-[82px]  h-full z-0 sm:block hidden">
        <Image
          src={patternSrcMobile}
          alt="Desktop Pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Pattern Image - Desktop Only */}
      <div className="absolute left-0 right-0 bottom-0 w-[400px] h-[65px] z-0 sm:hidden block">
        <Image
          src={patternSrcDesktop}
          alt="Mobile Pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Large number - background */}
      <div className="xl:text-[160px] sm:hidden lg:text-[100px] text-[100px] top-[-45px] right-[0px] font-bold text-[#2852601A] md:pr-6 absolute z-10 lg:left-[40px] lg:top-[-20px] 2xl:left-[40px] 2xl:top-[20px]">
        {number}
      </div>

      {/* Text content */}
      <div className="flex-1 relative z-20 sm:pl-[128px]">
        <h3 className="text-[#1C1C1E] font-extrabold leading-[130%] text-[32px] pb-4 md:block hidden">
          {number}
        </h3>
        <h3 className="text-[16px] lg:text-[24px] xl:text-[32px] font-normal text-[#1C1C1E] ">
          {title}
        </h3>
        <p className="text-[#7E7E7E] font-normal text-[14px] xl:text-[16px] pt-[16px] 2xl:pt-[24px] lg:w-[90%] ">
          {description}
        </p>
      </div>

      {/* Feature image */}
      <div className="mt-[24px] md:mt-0 w-[295px] h-[162px] xl:w-[329px] xl:h-[205px] 2xl:w-[384px] 2xl:h-[256px] relative z-20 sm:mb-[0px] mb-[50px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-[32px] object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureCard;