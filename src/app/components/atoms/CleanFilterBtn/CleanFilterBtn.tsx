import React from "react";
import Image from "next/image";
import FilterTimes from "../../../assets/filter-times.svg";
import MobileFilter from "../../../assets/mobileFilter.svg";

interface CleanFilterBtnProps {
  ResetFilters: () => void;
}

const CleanFilterBtn: React.FC<CleanFilterBtnProps> = ({ ResetFilters }) => {
  return (
    <button
      className="underline bg-white text-black rounded-full md:rounded-[16px] hover:bg-[#ECF0F8] duration-300 p-4 md:px-6 md:py-4 lg:py-5 cursor-pointer flex items-center gap-1"
      onClick={ResetFilters}
    >
      <Image
        src={MobileFilter}
        alt="mobileFilterIcon"
        className="block md:hidden "
      />
      <Image
        src={FilterTimes}
        alt="filterTimesIcon"
        className="hidden md:block"
      />
      <p className="md:flex hidden">Clean Filter</p>
    </button>
  );
};

export default CleanFilterBtn;
