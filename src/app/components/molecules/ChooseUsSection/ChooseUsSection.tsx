import React from 'react';
import ChooseUsCard from '../ChooseUsCard/ChooseUsCard';
import QualityCraftsmanship from '../../../assets/QualityCraftsmanship.svg';
import InnovativeDesign from '../../../assets/InnovativeDesign.svg';
import PrimeLocations from '../../../assets/PrimeLocations.svg';

const chooseUsData = [
  {
    number: '01',
    title: 'QUALITY & CRAFTSMANSHIP',
    description: 'We use only the best materials and construction techniques to ensure durability and elegance.',
    imageSrc: QualityCraftsmanship,
  },
  {
    number: '02',
    title: 'INNOVATIVE DESIGN',
    description: 'Our projects combine modern architecture with practical layouts for maximum comfort.',
    imageSrc: InnovativeDesign,
  },
  {
    number: '03',
    title: 'PRIME LOCATIONS',
    description: 'We select strategic locations that offer convenience, accessibility, and investment potential.',
    imageSrc: PrimeLocations,
  },
];

const ChooseUsSection: React.FC = () => {
  return (
    <div className="w-full py-[168px]">
      <div className="container mx-auto px-4 lg:px-[108px]">
        <div className="flex lg:flex-row flex-col pb-[72px] lg:text-start text-center ">
          <h2 className="lg:text-[48px] text-[24px] font-normal leading-[130%] lg:pr-[136px] pr-[0px]">
            <span className="text-[#ABABAB]">WHY</span>
            <span className="text-[#1C1C1E]"> YOU SHOULD</span>
            <span className="text-[#CB684D]"> CHOOSE US?</span>
          </h2>
          <p className="font-normal lg:text-[16px] text-[14px] text-[#3D3D3D] leading-[150%] lg:w-[95%] lg:pt-[0px] pt-[24px]">
            Choosing us means partnering with a company dedicated to delivering exceptional value, quality, and customer satisfaction. We are driven by a passion for excellence and a commitment to creating modern, sustainable, and innovative spaces that enhance the lives of our residents and investors alike. From initial concept to final construction, we carefully manage every detail to ensure outstanding results. Here’s what sets us apart:
          </p>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-[24px]">
          {chooseUsData.map((item, index) => (
            <ChooseUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;