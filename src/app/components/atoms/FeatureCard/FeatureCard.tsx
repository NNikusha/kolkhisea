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
  bottomPattern: StaticImageData;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  bgColor,
  textColor = "text-white",
  title,
  number,
  description,
  highlightSvg,
  svgOpacity = "",
  bottomPattern
}) => {
  return (
    <div className={`${bgColor} flex flex-col flex-1 rounded-[24px] shadow-sm 2xl:min-h-[296px] pb-[20px] xl:h-[336px] lg:h-[386px] relative overflow-hidden`}>
      <div className="absolute inset-0">
        <Image
          src={highlightSvg}
          alt="Background pattern"
          fill
          priority
          className={`${svgOpacity} object-center`}
        />
      </div>

      <div className="flex justify-between items-center relative z-10 p-8">
        <h3 className={`text-xl uppercase ${textColor}`}>{title}</h3>
        <div className="bg-[#FFFFFF] rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-sm">
          <span className="text-gray-800">{number}</span>
        </div>
      </div>

      <div className="flex-grow flex items-start px-8 pb-[69px] relative z-10">
        <p className={`${bgColor === "bg-white" ? "text-[#7E7E7E]" : ""} font-light`}>
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[69px] z-10">
        <Image
          src={bottomPattern}
          alt="Card bottom pattern"
          fill
          className="object-cover rounded-b-[24px]"
        />
      </div>
    </div>
  );
};