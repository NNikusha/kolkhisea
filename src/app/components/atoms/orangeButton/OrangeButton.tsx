import React from "react";

interface OrangeButtonInterface {
  text: string;
}

export default function OrangeButton({ text }: OrangeButtonInterface) {
  return (
    <button className="relative cursor-pointer bg-[#CB684D] text-white font-medium py-[14px] px-5 flex  rounded-[16px] overflow-hidden transition-transform duration-300 xl:py-4 xl:px-8  group">
      <span className="relative z-10 text-[12px] xl:text-[16px]">{text}</span>
      <div className="absolute inset-0 bg-[radial-gradient(30%_50%_at_50%_90%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </button>
  );
}
