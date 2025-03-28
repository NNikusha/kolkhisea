import React from 'react';
import Image from 'next/image';

interface ChooseUsCardProps {
  title: string;
  description: string;
  imageSrc: string;
  number: string;
}

const ChooseUsCard: React.FC<ChooseUsCardProps> = ({ title, description, imageSrc, number }) => {
  return (
    <div className="flex flex-col items-center text-start 2xl:w-[424px]  w-[343px] 2xl:h-[520px] bg-white rounded-[32px] shadow-md">
      <div className="relative w-full 2xl:h-[373px] xl:h-[204px] h-[186px] rounded-t-[32px] overflow-hidden">
        <Image src={imageSrc} alt={title} fill className="object-cover" />

        <div className="absolute bottom-0 left-0 w-full h-[82px] md:h-[92px]  bg-gradient-to-t from-white to-transparent"></div>

        <div className="absolute top-[24px] right-[24px] bg-[#F4EDE633] text-[#FFFFFF] text-[14px] md:text-[16px] md:w-[56px] md:h-[56px] h-[40px] w-[40px] flex items-center justify-center rounded-full backdrop-blur-[8px]">
          {number}
        </div>
      </div>

      <div className="2xl:px-[24px] px-[16px] 2xl:pb-[40px] xl:pb-[24px] pb-[30px] flex flex-col">
        <h3 className="2xl:text-[24px] xl:text-[16px] text-[18px] font-normal text-[#1C1C1E]">{title}</h3>
        <p className="2xl:text-[16px] text-[14px] font-normal leading-[150%] text-[#7E7E7E] 2xl:pt-[24px] pt-[16px]  2xl:min-h-[100px]">{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;