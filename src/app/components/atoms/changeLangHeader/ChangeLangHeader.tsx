import ArrowDownSmall from "@/app/assets/ArrowDownSmall";
import React from "react";

interface ChangeLangProp {
  lang: string;
  fillColor: string;
}

export default function ChangeLangHeader({ lang, fillColor }: ChangeLangProp) {
  return (
    <div className="flex gap-[15px]">
      <h3>{lang}</h3>
      <div className="flex items-center justify-center">
        <ArrowDownSmall fill={fillColor} />
      </div> 
    </div>
  );
}