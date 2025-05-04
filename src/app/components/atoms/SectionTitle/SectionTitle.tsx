import React from 'react';

interface SectionTitleProps {
  mainText: string;
  highlightedText: string;
  subtitle: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  mainText, 
  highlightedText, 
  subtitle 
}) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-[40px] uppercase">
        <span className="text-gray-400">{mainText}</span>{" "}
        <span className="text-[#CB684D]">{highlightedText}</span>
        <span className="text-gray-800"></span>{" "}
        <span className="text-2xl md:text-[40px] text-gray-800 uppercase leading-relaxed">
        {subtitle}
      </span>
      </h1>
     
    </div>
  );
};