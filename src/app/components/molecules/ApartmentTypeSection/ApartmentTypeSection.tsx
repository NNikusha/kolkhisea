import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import CleanFilterBtn from "../../atoms/CleanFilterBtn/CleanFilterBtn";
import MobileResetFilterBtn from "../../atoms/MobileResetFilterBtn/MobileResetFilterBtn";
import { ApartmentTypeSectionProps } from "@/app/types/type";
import { useTranslations } from "next-intl";

const ApartmentTypeSection: React.FC<ApartmentTypeSectionProps> = ({
  ResetFilters,
  handleOpenModal,
  room,
  setRoom,
  area,
  setArea,
}) => {
  const t = useTranslations('Language');
  
  const roomOptions = [
    { value: "All", label: t('All') },
    { value: "Studio", label: t('Studio') },
    { value: "1BR", label: t('OneBedroom') },
    { value: "2BR", label: t('TwoBedroom') }
  ];
  
  const areaOptions = [
    { value: "30-40", label: t('Area30To40') },
    { value: "50-70", label: t('Area50To70') },
    { value: "100+", label: t('Area100Plus') }
  ];
  
  return (
    <section className="relative h-full w-full container mx-auto px-4 mt-20 md:px-2 lg:px-27 pt-2 md:pt-8 pb-8 md:pb-14">
      <div className="h-full w-full flex flex-col gap-8 md:gap-14 mt-[30px] md:mt-[20px]">
        <div className="flex gap-2 md:gap-4 text-[12px] sm:text-[14px] lg:text-[16px] items-center">
          <p>{t('MainPage')}</p>
          <div className="rounded-full h-[8px] w-[8px] bg-white"></div>
          <p>{t('AboutProject')}</p>
          <div className="rounded-full h-[8px] w-[8px] bg-white"></div>
          <p>{t('ApartmentTypes')}</p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex items-center justify-between">
            <p className="text-[24px] md:text-[40px] lg:text-[48px] font-normal uppercase">
              {t('ApartmentTypes')}
            </p>
            <MobileResetFilterBtn onClick={handleOpenModal} />
          </div>
          <div className="hidden md:flex justify-between items-end">
            <div className="flex justify-between md:w-[80%] 2xl:w-[75%] gap-2 xl:gap-4">
              <FilterItem
                label={t('NumberOfRooms')}
                options={roomOptions}
                activeOption={room}
                onSelect={setRoom}
              />
              <FilterItem
                label={t('SpecifyArea')}
                options={areaOptions}
                activeOption={area}
                onSelect={setArea}
              />
            </div>
            <CleanFilterBtn ResetFilters={ResetFilters} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypeSection;