import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description, imageSrc, index }) => {
  return (
    <div
      className={`flex flex-col 2xl:flex-row items-center bg-white rounded-[32px] p-[24px] md:py-[48px] shadow-md md:w-full mx-auto position: sticky overflow-hidden transition-all duration-500 ${
        index === 0 ? 'z-0' : 'z-10'
      }`}
      style={{
        top: `0px`, 
      }}
    >
      <div
        className="md:text-[160px] text-[100px] top-[-45px] overhidden-none right-[0px] font-none font-bold text-[#2852601A] md:pr-6 absolute z-10 md:left-[40px] md:top-[20px]"
      >
        {number}
      </div>

      <div className="flex-1 relative z-20 absolute left-[0px] top-[0px] md:pt-[0px] pt-[32px] 2xl:left-[165px] 2xl:top-[45px]">
        <h3 className="text-[16px] md:text-[32px] font-normal text-[#1C1C1E] w-[62%] md:w-[80%]">{title}</h3>
        <p className="text-[#7E7E7E] font-normal text-[14px] md:text-[16px] pt-[16px] md:pt-[24px] w-[90%] md:w-[80%]">{description}</p>
      </div>

      <div className="mt-[24px] md:mt-0 w-[295px] h-[162px] md:w-[384px] md:h-[256px] relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-[32px]"
        />
      </div>
    </div>
  );
};

export default FeatureCard;