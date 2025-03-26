import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import SpaciousApartments from '../../../assets/SpaciousApartments.svg';
import ModernDesign from '../../../assets/ModernDesign.svg';
import HighQuality from '../../../assets/HighQuality.svg';

const features = [
  {
    number: '01',
    title: 'SPACIOUS APARTMENTS WITH PANORAMIC VIEWS',
    description: 'Enjoy breathtaking views of the sea and city skyline from your private balcony. Each apartment is designed to provide an open, airy feel, offering ample space for comfortable living.',
    imageSrc: SpaciousApartments,
  },
  {
    number: '02',
    title: 'MODERN ARCHITECTURE & DESIGN',
    description: 'Our project blends contemporary aesthetics with functional layouts, ensuring a sophisticated living experience. Every detail is crafted to maximize space, natural light, and seamless integration with the surroundings.',
    imageSrc: ModernDesign,
  },
  {
    number: '03',
    title: 'HIGH-QUALITY MATERIALS & FINISHES',
    description: 'From premium flooring to elegant fixtures, we use only top-tier materials to ensure durability and timeless elegance. Expect superior craftsmanship in every corner of your home.',
    imageSrc: HighQuality,
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="w-full  md:pt-[168px] mt-[72px] h-fit mb-[72px]  md:mb-[168px]">
      <div className="container mx-auto px-4 lg:px-[108px]">
        
        <div className="text-center md:text-start">
          <span className="text-[12px] md:text-[16px] font-normal text-[#285260] bg-[#2852600D] inline-block rounded-[200px] p-4">
            Key Features
          </span>
        </div>

        <div className="text-center md:text-start pt-4">
          <h2 className="text-[24px] md:text-[48px] font-normal text-[#B4B4B4]">
            MODERN COVENIENCES
          </h2>
        </div>

        <div className="text-center md:text-start">
          <h2 className="text-[24px] md:text-[48px] font-normal text-[#1C1C1E]">
            & PREMIUM FACILITIES
          </h2>
        </div>

        <div className="pt-[40px] flex flex-col gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} {...feature} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeaturesSection;