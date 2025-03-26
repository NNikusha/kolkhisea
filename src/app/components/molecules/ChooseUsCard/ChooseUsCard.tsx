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
    <div className="flex flex-col items-center text-start lg:w-[424px] w-[343px] lg:h-[520px] h-[304px] bg-white rounded-[32px] shadow-md">
      <div className="relative w-full lg:h-[373px] h-[186px] rounded-t-[32px] overflow-hidden">
        <Image src={imageSrc} alt={title} fill className="object-cover" />

        <div className="absolute bottom-0 left-0 w-full h-[92px] bg-gradient-to-t from-white to-transparent"></div>

        <div className="absolute top-[24px] right-[24px] bg-[#F4EDE633] text-[#FFFFFF] lg:text-[16px] text-[14px] font-normal lg:px-[16px] lg:py-[14px] px-[11px] py-[9px] rounded-full backdrop-blur-[8px]">
          {number}
        </div>
      </div>

      <div className="lg:px-[24px] px-[16px] lg:pb-[40px] pb-[30px] flex flex-col flex-grow">
        <h3 className="lg:text-[24px] text-[18px] font-normal text-[#1C1C1E]">{title}</h3>
        <p className="lg:text-[16px] text-[14px] font-normal leading-[150%] text-[#7E7E7E] pt-[24px]">{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;