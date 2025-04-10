import Image from "next/image";
import infoApartment from "@/app/assets/BlurredInfoModal.png";
import React from "react";
import ModalHeadline from "../../atoms/modalHeadline/ModalHeadline";
import ModalParagraph from "../../atoms/modalParagraph/ModalParagraph";
import { ModalInfoProps } from "@/app/types/type";


export default function ModalInfo({
  cloudText,
  cloudTextSecondary,
  lang = 'en'
}: ModalInfoProps) {
  return (
    <div className="hidden xl:flex absolute 2xl:right-[10%] right-[17.9%] top-[480px]">
      <div className="relative">
        <Image alt="InsideView" src={infoApartment} width={379} height={238} />
        {cloudText && cloudText[lang] && (
          <ModalHeadline firstText={cloudText[lang]} />
        )}
        {cloudTextSecondary && cloudTextSecondary[lang] && (
          <ModalParagraph paragraph={cloudTextSecondary[lang]} />
        )}
      </div>
    </div>
  );
}