"use client";
import React from "react";
import Image from "next/image";
import HighlightLine from "../../../assets/gold Rectangle.svg";
import HighlightLine2 from "../../../assets/blue Rectangle.svg";
import HighlightLine3 from "../../../assets/black Rectangle.svg";
import { FeatureCardProps } from "@/app/types/type";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index = 0,
  locale = "en",
  title,
  number,
  description,
  isFromHighlitsPage = false,
}) => {
  const colors = [
    "bg-[#FFFFFF]",
    "bg-[#285260]",
    "bg-[#CB684D]",
    "bg-[#F3F6FB]",
  ];
  const svgs = [HighlightLine, HighlightLine3, HighlightLine2];
  const bgColor = colors[index % colors.length];
  const textColor =
    bgColor === "bg-[#FFFFFF]" || bgColor === "bg-[#F3F6FB]"
      ? "text-[#1C1C1E]"
      : "text-white";
  const pattern = svgs[(index + 1) % svgs.length];
  const displayNumber = number || `0${index + 1}`;
  const displayTitle = title || feature?.title?.[locale] || "";
  const displayDescription = description || feature?.text?.[locale] || "";

  return (
    <div
      className={`${bgColor} flex flex-col flex-1 w-[100%] md:w-[312px] rounded-[24px] border border-[#E4E4E4] shadow-sm pb-[20px] h-[208px] ${
        isFromHighlitsPage
          ? "md:h-[420px] xl:h-[350px] text-[13px] sm:text-[16px]"
          : "md:min-h-[297px]"
      } relative overflow-hidden`}
    >
      <div className="flex justify-between w-full items-center relative z-10 p-6 md:p-8">
        <h3 className={`uppercase ${textColor}`}>{displayTitle}</h3>
        <div className="bg-[#FFFFFF] rounded-full py-2.5 px-3 flex items-center justify-center shadow-sm">
          <span className="text-gray-800">{displayNumber}</span>
        </div>
      </div>

      <div className="flex-grow flex items-start px-8 pb-[69px] relative z-10">
        <p
          className={`${
            bgColor === "bg-[#FFFFFF]" || bgColor === "bg-[#F3F6FB]"
              ? "text-[#1C1C1E]"
              : "text-white"
          } font-light`}
        >
          {displayDescription}
        </p>
      </div>

      {pattern && (
        <div className="absolute bottom-0 left-0 right-0 h-[25%] z-10">
          <Image
            src={pattern}
            alt="Card bottom pattern"
            fill
            className="object-cover rounded-b-[24px]"
          />
        </div>
      )}
    </div>
  );
};
