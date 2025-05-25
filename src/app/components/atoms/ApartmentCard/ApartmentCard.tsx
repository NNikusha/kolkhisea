import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface ApartmentCardProps {
  apartmentNumber: string;
  size: string;
  type?: string;
  block?: string;
  status: string;
  imageSrc: string;
  onClick?: () => void;
}


const ApartmentCard: React.FC<ApartmentCardProps> = ({
  apartmentNumber,
  size,
  block,
  status,
  imageSrc,
  type
}) => {
  const t = useTranslations('Language');

  const typeKeyMap: Record<string, string> = {

  "Studio": "studio",
  "1 Bedroom": "1_room",
  "2 Bedroom": "2_room",
  "Bedroom": "Bedroom",


  "სტუდიო": "studio",
  "1 ოთახიანი": "1_room",
  "1 საძინებელი": "1_room",
  "2 ოთახიანი": "2_room",
  "საძინებელი": "Bedroom",

  "Студия": "studio",
  "1-комнатная": "1_room",
  "1 спальня": "1_room",
  "2-комнатная": "2_room",
  "Спальня": "Bedroom",
  "Квартира:": "ApartmentWithColon",
  "Тип:": "BlockWithColon"
};

  return (
    <div className="bg-white rounded-[32px] p-4 shadow-md w-full">
      <div className="flex justify-center">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt={`Apartment ${apartmentNumber}`}
          className="w-full object-cover rounded-lg h-[168px]"
        />
      </div>
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <p className="text-[#1C1C1E] font-normal text-[18px]">
            {t('ApartmentWithColon')} {apartmentNumber}
          </p>
          <span className="px-[16px] py-[8px] bg-[#F0F0F0] text-[#1C1C1E] text-[12px] rounded-[200px]">
            {status}
          </span>
        </div>
        <p className="text-[#636363] text-[14px] font-normal pt-[9px] pb-4">
          {t('Type')}: {type ? t(typeKeyMap[type] || type) : ''}
        </p>
        <p className="text-[#636363] text-[14px] font-normal pt-[12px]">{size}</p>      
        </div>
    </div>
  );
};

export default ApartmentCard;