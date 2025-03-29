import React from 'react';

interface GrayBlueButtonProps {
  text: string;
  className?: string;
}

const GrayBlueButton: React.FC<GrayBlueButtonProps> = ({ text, className = '' }) => {
  return (
    <div className={`px-4 py-[14px] md:text-[16px] text-[12px] rounded-full font-medium text-sm w-fit text-[#285260] bg-[#285260]/5 ${className}`}>
      <h3 className="text-center">
        {text}
      </h3>
    </div>
  );
};

export default GrayBlueButton;