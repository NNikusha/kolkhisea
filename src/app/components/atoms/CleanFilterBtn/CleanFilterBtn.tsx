import React from "react";
import Image from "next/image";
import FilterTimes from "../../../assets/filter-times.svg";
import { useTranslations } from "next-intl";

interface CleanFilterBtnProps {
  ResetFilters?: () => void;
}

const CleanFilterBtn: React.FC<CleanFilterBtnProps> = ({ ResetFilters }) => {
  const t = useTranslations('Language');
  
  return (
    <button
      className="hidden md:flex underline bg-white text-black rounded-full md:rounded-[16px] hover:bg-[#ECF0F8] duration-300 px-4.5 py-5 xl:p-6 cursor-pointer flex items-center gap-1"
      onClick={ResetFilters}
    >
      <Image src={FilterTimes} alt="filterTimesIcon" />
      <p>{t('CleanFilter')}</p>
    </button>
  );
};

export default CleanFilterBtn;