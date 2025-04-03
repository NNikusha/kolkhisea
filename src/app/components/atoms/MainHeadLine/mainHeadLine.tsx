import React from "react";

interface MainHeadLineProp {
  firstText: string;
  secondText: string;
  className?: string;
  fullWidth?: boolean;
  width?: string;
  centered?: boolean;
  firstTextColor?: string;
  secondTextColor?: string;
  showTestSpan?: boolean;
}

export default function MainHeadLine({
  firstText,
  secondText,
  className = "",
  fullWidth = false,
  width,
  centered = false,
  firstTextColor = "",
  secondTextColor = "",
  showTestSpan = true,
}: MainHeadLineProp) {
  let widthClass = fullWidth ? 'w-full' : 'xl:w-[70.5%]';
  
  if (width) {
    widthClass = width;
  }
  
  return (
    <div className={`relative ${centered ? 'flex justify-center w-full' : ''}`}>
      <h1
        className={`uppercase text-[28px] sm:min-w-[350px] font-medium xl:leading-[87px] ${widthClass} xl:text-[48px] ${className}`}
      >
        <span style={{ color: firstTextColor || 'inherit' }}>{firstText}</span>{" "}
        {showTestSpan && <span className="test"></span>}{" "}
        <span style={{ color: secondTextColor || 'inherit' }}>{secondText}</span>
      </h1>
    </div>
  );
}