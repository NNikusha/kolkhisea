import ArrowDownSmall from "@/app/assets/ArrowDownSmall";
import React from "react";

interface ChangeLangProp {
  lang: string;
  fillColor: string;
  isLangModalOpen?: boolean;
}

export default function ChangeLangHeader({ lang, fillColor, isLangModalOpen }: ChangeLangProp) {
  return (
    <div className="flex gap-[15px] cursor-pointer">
      <h3>{lang}</h3>
      <div className={`flex items-center justify-center ${isLangModalOpen ? "rotate-180" : ""}`}>
        <ArrowDownSmall fill={fillColor} />
      </div>
    </div>
  );
}
