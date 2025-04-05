import React from "react";
import MobileFilter from "../../../assets/mobileFilter.svg";
import Image from "next/image";

const MobileResetFilterBtn = () => {
  return (
    <button className="bg-white p-2 rounded-full flex md:hidden ">
      <Image src={MobileFilter} alt="Mobile Filter icon" />
    </button>
  );
};

export default MobileResetFilterBtn;
