"use client"

import React from 'react'
import { FeatureCard } from '../FeatureCard/FeatureCard'
import HighlightLine from "@/app/assets/HighLightLine.svg";
import HighlightLine2 from "@/app/assets/HighLightLine1.svg";
import HighlightLine3 from "@/app/assets/HighLightLine2.svg";

const FlatDetailPageFeatureCards = () => {
  return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 lg:px-[108px] mb-[72px] md:mb-[168px]">
                <FeatureCard 
                    bgColor="bg-white"
                    textColor="text-gray-800"
                    title="LAYOUT"
                    number="01"
                    description="Convenient ergonomic layouts with spacious kitchen-living areas."
                    highlightSvg={HighlightLine}
                    borderColor="border-[#E3E3E3]"
                />
                
                <FeatureCard 
                    bgColor="bg-[#CB684D]"
                    title="FINISHING"
                    number="02"
                    description="Apartments with high-quality finishing and optional designer packages."
                    highlightSvg={HighlightLine2}
                    borderColor="border-white border-opacity-30"
                />
                
                <FeatureCard 
                    bgColor="bg-[#285260]"
                    title="SECURITY"
                    number="03"
                    description="Gated community with video surveillance and concierge service."
                    highlightSvg={HighlightLine3} 
                    borderColor="border-white border-opacity-30"
                    svgOpacity="mt-[27px]"
                />
            </div>

  )
}

export default FlatDetailPageFeatureCards