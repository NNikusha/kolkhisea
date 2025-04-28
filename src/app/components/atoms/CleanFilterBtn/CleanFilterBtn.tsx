import React from "react";
import Image from "next/image";
import FilterTimes from "../../../assets/filter-times.svg";

interface CleanFilterBtnProps {
  ResetFilters?: () => void;
}

const CleanFilterBtn: React.FC<CleanFilterBtnProps> = ({ ResetFilters }) => {
  return (
    <button
      className="hidden md:flex underline bg-white text-black rounded-full md:rounded-[16px] hover:bg-[#ECF0F8] duration-300 px-4.5 py-5 xl:p-6 cursor-pointer flex items-center gap-1"
      onClick={ResetFilters}
    >
      <Image src={FilterTimes} alt="filterTimesIcon" />
      <p>Clean Filter</p>
    </button>
  );
};

export default CleanFilterBtn;
