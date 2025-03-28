import React from 'react';
import Image from 'next/image';
import GrayBlueButton from '../../atoms/GrayBlueButton/GrayBlueButton';
import OurMissionTop from '@/app/assets/our-mission-top.svg';
import OurMissionBottom from '@/app/assets/our-mission-bottom.svg';

const OurMissionSection = () => {
  return (
    <div className="w-full md:mt-[80px] md:pb-[200px]">
        <h2 className="text-[#1C1C1E]">LUXURY</h2>
      <div className="container mx-auto px-4 lg:px-[108px] md:mt-[80px]">
        <div className="flex flex-col-reverse 2xl:flex-row gap-[136px]">
          <div className="w-full h-[280px] relative rounded-[32px] overflow-hidden">
            <Image
              src={OurMissionTop}
              alt="Luxury space"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col items-start pr-[100px] w-full lg:w-auto">
            <GrayBlueButton text="Our Mission" />
            <div className="text-[48px] pt-4 font-normal leading-[130%]">
              <h2 className="text-[#1C1C1E]">LUXURY</h2>
              <h2>
                <span className="text-[#B4B4B4] pr-[20px]">WITH</span>
                <span className="text-[#1C1C1E]">RESPONSIBILITY</span>
              </h2>
            </div>
            <p className="font-normal text-[#7E7E7E] leading-[150%] w-[110%]  pt-[24px]">
              To develop premium, high-quality living and commercial spaces that meet the needs of modern lifestyles while upholding the highest standards of design and construction.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-[108px] pt-[40px]">
        <div className="w-full h-[544px] relative rounded-[32px] overflow-hidden">
          <Image
            src={OurMissionBottom}
            alt="Reception area"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;