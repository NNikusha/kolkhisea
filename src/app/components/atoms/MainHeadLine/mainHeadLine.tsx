import React from "react";

interface MainHeadLineProp {
  firstText: string;
  secondText: string;
}

export default function MainHeadLine({
  firstText,
  secondText,
}: MainHeadLineProp) {
  return (
    <div className="relative">
      <h1 className="uppercase text-[64px] font-medium leading-[87px] w-[70.5%]">
        {firstText} <span className="test"></span> {secondText}
      </h1>
    </div>
  );
}
