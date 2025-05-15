import React from "react";
import Image from "next/image";
import ApartmentCard from "../../molecules/ApartmentCard/ApartmentCard";
import SeeMoreApartment from "@/app/assets/MoreApartment.svg";
import { ApartmentType } from "@/app/types/type";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ApartmentGridProps {
  apartments: ApartmentType[];
  isTablet: boolean;
  lang: string;
}

const ApartmentGrid: React.FC<ApartmentGridProps> = ({
  apartments,
  isTablet,
  lang,
}) => {
  const t = useTranslations('Language');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 sm:max-w-2xl lg:max-w-4xl 2xl:max-w-none mx-auto">
      {apartments.map((apartment, index) => (
        <div
          key={index}
          className={`${index >= (isTablet ? 2 : 3) ? "hidden" : "block"}`}
        >
          <ApartmentCard
            type={apartment.type?.[lang] || t('Unknown')}
            total_area={apartment.total_area?.toString()}
            status={apartment.status?.[lang] || t('Unknown')}
            availableFlats={apartment.available_flats}
            image={apartment.image}
          />
        </div>
      ))}

      <div
        className="bg-[#FFFFFF] rounded-[32px] overflow-hidden w-full max-w-[295px] h-[468px] flex flex-col mx-auto"
        style={{ boxShadow: "0px 4px 18.8px 0px #0000001A" }}
      >
        <div className="p-[32px] pt-[48px] flex flex-col justify-between h-full">
          <Image
            src={SeeMoreApartment}
            alt={t('SeeMoreApartmentsAlt')}
            className="w-full h-auto"
          />
          <div className="mt-[32px] text-center">
            <h3 className="text-[24px] text-black leading-[1.3] uppercase">
              {t('SeeMoreApartments')}
            </h3>
            <p className="text-[#7E7E7E] text-[16px] leading-[1.5] mt-[8px]">
              {t('SaveToFavorites')}
              <br />
              {t('ForEasyComparison')}
            </p>
          </div>
          <Link href="/apartment-types">
            <div className="bg-[#285260] flex items-center justify-center text-[#F2F2F2] rounded-[16px] h-[56px] mt-[18px]">
              {t('ViewSimilar')}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentGrid;