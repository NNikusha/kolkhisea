import Image from 'next/image';
import React from 'react';
import FloorIcon from '@/app/assets/FloorIcon.svg';
import ApartmentIcon from '@/app/assets/ApartmentIcon.svg';
import TypeIcon from '@/app/assets/TypeIcon.svg';
import LivingRoomIcon from '@/app/assets/LivingRoomIcon.svg';
import BedroomIcon from '@/app/assets/BedRoomIcon.svg';
import BathroomIcon from '@/app/assets/BathRoomIcon.svg';
import BalconyIcon from '@/app/assets/BalconyIcon.svg';
import DownloadIcon from '@/app/assets/DownloadIcon.svg';

const flatData = [
  { key: "title", value: "Flat 75 m2" },
  { key: "block", value: "B" },
  { key: "status", value: "Renovated" },
  { key: "floor", value: 4 },
  { key: "apartment", value: 52 },
  { key: "type", value: "Studio" },
  { key: "livingSpace", value: "43 m²" },
  { key: "bedroom", value: "20 m²" },
  { key: "bathroom", value: "15 m²" },
  { key: "balcony", value: "10 m²" },
];

const ApartmentInformationCard = () => {
  return (
    <div className="flex w-full lg:max-w-[536px] flex-col justify-center items-start bg-white rounded-[56px] px-4 lg:px-[32px] py-[48px] text-black mb-[72px] lg:mb-0">
      <div className="flex justify-between items-center w-full pb-[32px] border-b border-[#D3D3D3] border-b-[1px]">
        <div>
          <h1 className="text-[32px]">{flatData.find((item) => item.key === "title")?.value}</h1>
          <p className="text-[#7E7E7E]">Block: {flatData.find((item) => item.key === "block")?.value}</p>
        </div>
        <div className="p-[16px] bg-[#2852600D] rounded-[25px] text-[#285260]">
          {flatData.find((item) => item.key === "status")?.value}
        </div>
      </div>

        <div className="flex flex-col gap-[24px] w-full pb-[32px] border-b border-[#D3D3D3] border-b-[1px] mt-[32px]">
            {/* FLOOR */}
            <div className="flex gap-[8px] items-center justify-between lg:justify-start">
                <div className="flex gap-[8px]">
                    <Image src={FloorIcon} alt="Floor Icon" width={24} height={24} />
                    FLOOR:
                </div>
                <div>{flatData.find((item) => item.key === "floor")?.value}</div>
            </div>

            {/* APARTMENT */}
            <div className="flex gap-[8px] items-center justify-between lg:justify-start">
                <div className="flex gap-[8px]">
                    <Image src={ApartmentIcon} alt="Apartment Icon" width={24} height={24} />
                    APARTMENT:
                </div>
                <div>{flatData.find((item) => item.key === "apartment")?.value}</div>
            </div>

            {/* TYPE */}
            <div className="flex gap-[8px] items-center justify-between lg:justify-start">
                <div className="flex gap-[8px]">
                    <Image src={TypeIcon} alt="Type Icon" width={24} height={24} />
                    TYPE:
                </div>
                <div>{flatData.find((item) => item.key === "type")?.value}</div>
            </div>
        </div>

        <div className="flex flex-col gap-[24px] w-full pb-[32px] border-b border-[#D3D3D3] border-b-[1px] mt-[32px]">
            {/* LIVING SPACE */}
            <div className="flex gap-[8px] items-center justify-between lg:justify-start">
                <div className="flex gap-[8px]">
                    <Image src={LivingRoomIcon} alt="Living Space Icon" width={24} height={24} />
                    LIVINGSPACE:
                </div>
                <div>{flatData.find((item) => item.key === "livingSpace")?.value}</div>
            </div>

            {/* BEDROOM */}
            <div className="flex gap-[8px] items-center justify-between lg:justify-start">
                <div className="flex gap-[8px]">
                    <Image src={BedroomIcon} alt="Bedroom Icon" width={24} height={24} />
                    BEDROOM:
                </div>
                <div>{flatData.find((item) => item.key === "bedroom")?.value}</div>
            </div>

            {/* BATHROOM */}
            <div className="flex gap-[8px] items-center justify-between lg:justify-start">
                <div className="flex gap-[8px]">
                    <Image src={BathroomIcon} alt="Bathroom Icon" width={24} height={24} />
                    BATHROOM:
                </div>
                <div>{flatData.find((item) => item.key === "bathroom")?.value}</div>
            </div>

            {/* BALCONY */}
            <div className="flex gap-[8px] items-center justify-between lg:justify-start">
                <div className="flex gap-[8px]">
                    <Image src={BalconyIcon} alt="Balcony Icon" width={24} height={24} />
                    BALCONY:
                </div>
                <div>{flatData.find((item) => item.key === "balcony")?.value}</div>
            </div>
        </div>

      <button className="flex gap-[16px] items-center mt-[32px] mb-[40px] cursor-pointer">
        <Image src={DownloadIcon} alt="Download Icon" width={24} height={24} />
        <p className="underline">Download PDF</p>
      </button>
      <button className="relative w-full flex justify-center bg-[#CB684D] rounded-[16px] py-[20px] text-[#F2F2F2] cursor-pointer overflow-hidden group">
        <span className="relative z-10">Consultation</span>
        <div className="absolute inset-0 bg-[radial-gradient(25%_50%_at_50%_90%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </button>
    </div>
  );
};

export default ApartmentInformationCard;