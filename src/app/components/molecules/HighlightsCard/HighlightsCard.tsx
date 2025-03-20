import React from 'react';
import HighlightLine from "@/app/assets/HighLightLine.svg";
import HighlightLine2 from "@/app/assets/HighLightLine1.svg";
import HighlightLine3 from "@/app/assets/HighLightLine2.svg";
import { FeatureCard } from '../../atoms/FeatureCard/FeatureCard';
import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle';

export const HighlightsCard: React.FC = () => {
  return (
    <section className="bg-[#F3F6FB] py-24 flex flex-col items-center justify-center ">
      <div className="w-full">
        <SectionTitle 
          mainText="COMPREHENSIVE"
          highlightedText="INSIGHTS AND HIGHLIGHTS"
          subtitle="A DETAILED EXAMINATION OF THE REAL ESTATE LANDSCAPE"
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-7">
          <FeatureCard 
            bgColor="bg-white"
            textColor="text-gray-800"
            title="YEARS OF EXPERTISE"
            number="01"
            description="Delivering high-quality construction projects with precision and reliability."
            highlightSvg={HighlightLine}
            borderColor="border-[#E3E3E3]"
          />
          
          <FeatureCard 
            bgColor="bg-[#CB684D]"
            title="SEASIDE SPECIALISTS"
            number="02"
            description="Experts in premium coastal developments with breathtaking views."
            highlightSvg={HighlightLine2}
            borderColor="border-white border-opacity-30"
          />
          
          <FeatureCard 
            bgColor="bg-[#285260]"
            title="HIGH-QUALITY STANDARDS"
            number="03"
            description="Experts in premium coastal developments with breathtaking views."
            highlightSvg={HighlightLine3}

            borderColor="border-white border-opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightsCard;