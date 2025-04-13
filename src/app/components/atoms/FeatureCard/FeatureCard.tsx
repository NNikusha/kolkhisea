import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FeatureCardProps {
  bgColor: string;
  textColor?: string;
  title: string;
  number: string;
  description: string;
  highlightSvg: StaticImageData;
  svgOpacity?: string;
  borderColor: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  bgColor, 
  textColor = "text-white", 
  title, 
  number, 
  description, 
  highlightSvg,
  svgOpacity = "",
  borderColor 
}) => {
  return (
    <div className={`${bgColor} rounded-[24px] p-8 shadow-sm relative flex flex-col w-full md:w-[444px] h-[296px] overflow-hidden`}>
      <div className="absolute inset-0">
        <Image 
          src={highlightSvg}
          alt="Background pattern"
          fill
          priority
          className={`${svgOpacity} object-center`}
        />
      </div>
      
      <div className="flex justify-between items-center relative z-10">
        <h3 className={`text-xl uppercase ${textColor}`}>{title}</h3>
        <div className="bg-[#FFFFFF] rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-sm">
          <span className="text-gray-800">{number}</span>
        </div>
      </div>

      <div className="flex-grow flex items-start py-8 relative z-10">
        <p className={`${bgColor === "bg-white" ? "text-[#7E7E7E]" : ""} font-light`}>
          {description}
        </p>
      </div>

      <div className={`border-t-[4px] ${borderColor} pt-4 w-full relative z-10`}></div>
    </div>
  );
};