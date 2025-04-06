import React from "react";
import MobileFilter from "../../../assets/mobileFilter.svg";
import Image from "next/image";
import { MobileFilterBtnProps } from "@/app/types/type";

const MobileResetFilterBtn = ({ onClick }: MobileFilterBtnProps) => {
  return (
    <button
      className="bg-white p-2 rounded-full flex md:hidden"
      onClick={onClick}
    >
      <Image src={MobileFilter} alt="Mobile Filter icon" />
    </button>
  );
};

export default MobileResetFilterBtn;
