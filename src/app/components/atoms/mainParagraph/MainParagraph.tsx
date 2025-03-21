import React from "react";

interface MainParagraphProp {
  paragraph: string;
}

export default function MainParagraph({ paragraph }: MainParagraphProp) {
  return (
    <div>
      <p className="leading-[150%] xl:w-[35%] uppercase mt-10">{paragraph}</p>
    </div>
  );
}
