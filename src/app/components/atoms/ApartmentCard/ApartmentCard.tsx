import React from 'react';
import Image from 'next/image';

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
}) => {
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
            APARTMENT: {apartmentNumber}
          </p>
          <span className="px-[16px] py-[8px] bg-[#F0F0F0] text-[#1C1C1E] text-[12px] rounded-[200px]">
            {status}
          </span>
        </div>
        <p className="text-[#636363] text-[14px] font-normal pt-[12px]">{size}</p>
        <p className="text-[#636363] text-[14px] font-normal pt-[9px] pb-4">Block: {block}</p>
      </div>
    </div>
  );
};

export default ApartmentCard;