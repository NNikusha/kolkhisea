import React from 'react';
import HighlightLine from "@/app/assets/HighLightLine.svg";
import HighlightLine2 from "@/app/assets/HighLightLine1.svg";
import HighlightLine3 from "@/app/assets/HighLightLine2.svg";
import { FeatureCard } from '../../atoms/FeatureCard/FeatureCard';
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';
import { HighlightsCardProps, Insight } from '@/app/types/type';

const highlightSvgs = [HighlightLine, HighlightLine2, HighlightLine3];
const bgColors = ["bg-white", "bg-[#CB684D]", "bg-[#285260]"];
const borderColors = ["border-[#E3E3E3]", "border-white border-opacity-30", "border-white border-opacity-30"];
const textColors = ["text-gray-800", "", ""];

export const HighlightsCard: React.FC<HighlightsCardProps> = ({ insights = [], lang = 'en' }) => {
  return (
    <div className="bg-[#F3F6FB] py-16 flex flex-col items-center justify-center rounded-[48px]">
      <div className="w-full">
        <SectionTitle 
          mainText="COMPREHENSIVE"
          highlightedText="INSIGHTS AND HIGHLIGHTS"
          subtitle="A DETAILED EXAMINATION OF THE REAL ESTATE LANDSCAPE"
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12">
          {insights.slice(0, 3).map((item: Insight, index: number) => (
            <FeatureCard 
              key={index}
              bgColor={bgColors[index]}
              textColor={textColors[index]}
              title={item.title?.[lang] ?? ''}
              number={`0${index + 1}`}
              description={item.insight?.[lang] ?? ''}
              highlightSvg={highlightSvgs[index]}
              borderColor={borderColors[index]}
              svgOpacity={index === 2 ? "mt-[27px]" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightsCard;
