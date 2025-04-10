import React from "react";

interface MainParagraphProp {
  paragraph?: string; 
  centered?: boolean;
  className?: string; 
}

export default function MainParagraph({ 
  paragraph = "", 
  centered = false, 
  className = "" 
}: MainParagraphProp) {
  return (
    <div className={`${centered ? "flex w-full justify-center text-center" : ""}`}>
      <p className={`leading-[150%] xl:w-[35%] uppercase mt-10 ${className}`}>
        {paragraph}
      </p>
    </div>
  );
}