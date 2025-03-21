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
      <h1 className="uppercase text-[28px] sm:min-w-[350px]  font-medium xl:leading-[87px] xl:w-[70.5%] xl:text-[64px] ">
        {firstText} <span className="test"></span> {secondText}
      </h1>
    </div>
  );
}
