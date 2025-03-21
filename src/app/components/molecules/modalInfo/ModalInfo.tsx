import Image from "next/image";
import infoApartment from "@/app/assets/BlurredInfoModal.png";
import React from "react";
import ModalHeadline from "../../atoms/modalHeadline/ModalHeadline";
import ModalParagraph from "../../atoms/modalParagraph/ModalParagraph";

export default function ModalInfo() {
  return (
    <div className="hidden xl:flex absolute  right-[17.9%] top-[480px]">
      <div className="relative">
        <Image alt="InsideView" src={infoApartment} width={379} height={238} />
        <ModalHeadline firstText="SUSTAINABLE, ECO-FRIENDLY materials" />
        <ModalParagraph
          paragraph="Hotel are built using the finest sustainable, eco-friendly
                  materials, ensuring both elegance and responsibility."
        />
      </div>
    </div>
  );
}
