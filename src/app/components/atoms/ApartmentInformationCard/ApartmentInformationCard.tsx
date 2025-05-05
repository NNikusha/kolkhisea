"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import FloorIcon from '@/app/assets/FloorIcon.svg';
import ApartmentIcon from '@/app/assets/ApartmentIcon.svg';
import TypeIcon from '@/app/assets/TypeIcon.svg';
import LivingRoomIcon from '@/app/assets/LivingRoomIcon.svg';
import BedroomIcon from '@/app/assets/BedRoomIcon.svg';
import BathroomIcon from '@/app/assets/BathRoomIcon.svg';
import BalconyIcon from '@/app/assets/BalconyIcon.svg';
import DownloadIcon from '@/app/assets/DownloadIcon.svg';
import { fetchFlatById } from '@/app/hooks/axios';
import PopupModal from '../PopupModal/PopupModal';
import ModalContent from '../ModalContent/ModalContent';
import GetInTouchSuccess from '../../molecules/GetInTouchSuccess/GetInTouchSuccess';

interface Flat {
  id: number;
  number: number;
  total_area: number;
  living_space: number;
  price_total: string;
  per_square_price: string;
  status: {
    en: string;
    ka: string;
    ru?: string;
  };
  floor: number;
  floorplan_image: string | null;
  flat_image_2d: string | null;
  flat_image_3d: string | null;
  building: {
    id: number;
    name: {
      en: string;
      ka: string;
      ru: string;
    };
    location: {
      en: string;
      ka: string;
      ru: string;
    };
  };
  bedroom?: Array<{ area: string }>;
  balcony?: Array<{ area: string }>;
  bathroom?: Array<{ area: string }> | null;
  flat_conditions?: {
    en: string;
    ka: string;
    ru?: string;
  };
}

interface ApartmentInformationCardProps {
  flatData?: Flat | null;
}

const ApartmentInformationCard: React.FC<ApartmentInformationCardProps> = ({ flatData: propsFlatData }) => {
  const params = useParams();
  const flatId = params?.id as string;
  const locale = (params?.locale as string)?.toLowerCase() || 'en';

  const [flatData, setFlatData] = useState<Flat | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [isPopupOpen, setPopupOpen] = useState(false)

  
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // If data is passed as prop, use it
    if (propsFlatData) {
      setFlatData(propsFlatData);
      return;
    }

    // Otherwise fetch it
    const loadFlatData = async () => {
      if (!flatId) return;

      try {
        setLoading(true);
        const data = await fetchFlatById(flatId);
        console.log("Fetched flat data:", data);
        setFlatData(data);
      } catch (err) {
        console.error("Error loading flat data:", err);
        setError("Failed to load apartment details");
      } finally {
        setLoading(false);
      }
    };

    loadFlatData();
  }, [flatId, propsFlatData]);

  if (loading) {
    return (
      <div className="flex w-full lg:max-w-[536px] flex-col justify-center items-start bg-white rounded-[56px] px-4 lg:px-[32px] py-[48px] text-black mb-[72px] lg:mb-0">
        <div className="animate-pulse w-full">
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-24 bg-gray-200 rounded w-full mb-6"></div>
          <div className="h-40 bg-gray-200 rounded w-full mb-6"></div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (error || !flatData) {
    return (
      <div className="flex justify-center items-center h-[250px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
            </div>
    );
  }

  const getBedroomArea = () => {
    if (!flatData.bedroom || flatData.bedroom.length === 0) {
      return "N/A";
    }

    // If there are multiple bedrooms, we'll show the total
    let totalArea = 0;
    flatData.bedroom.forEach(bedroom => {
      totalArea += parseFloat(bedroom.area) || 0;
    });

    return `${totalArea} m²`;
  };

  const getBathroomArea = () => {
    if (!flatData.bathroom || flatData.bathroom.length === 0) {
      return "N/A";
    }

    // If there are multiple bathrooms, we'll show the total
    let totalArea = 0;
    flatData.bathroom.forEach(bathroom => {
      totalArea += parseFloat(bathroom.area) || 0;
    });

    return `${totalArea} m²`;
  };

  const getBalconyArea = () => {
    if (!flatData.balcony || flatData.balcony.length === 0) {
      return "N/A";
    }

    // If there are multiple balconies, we'll show the total
    let totalArea = 0;
    flatData.balcony.forEach(balcony => {
      totalArea += parseFloat(balcony.area) || 0;
    });

    return `${totalArea} m²`;
  };

  const getApartmentType = () => {
    if (!flatData.bedroom || flatData.bedroom.length === 0) {
      return "Studio";
    }
    return flatData.bedroom.length === 1
      ? "1 Bedroom"
      : `${flatData.bedroom.length} Bedrooms`;
  };



  const getCondition = () => {
    return flatData.flat_conditions?.[locale as keyof typeof flatData.flat_conditions] ||
      flatData.flat_conditions?.en ||
      "Standard";
  };

  return (
    <div className="flex w-full lg:max-w-[536px] flex-col justify-center items-start bg-white rounded-[56px] px-4 lg:px-[32px] py-[48px] text-black mb-[72px] lg:mb-0 relative">
      <div className="flex justify-between items-center w-full pb-[32px] border-b border-[#D3D3D3] border-b-[1px]">
        <div>
          <h1 className="text-[32px]">Flat {flatData.total_area} m²</h1>
        </div>
        <div className="p-[16px] bg-[#2852600D] rounded-[25px] text-[#285260]">
          {getCondition()}
        </div>
      </div>

      <div className="flex flex-col gap-[24px] w-full pb-[32px] border-b border-[#D3D3D3] border-b-[1px] mt-[32px]">
        {/* FLOOR */}
        <div className="flex gap-[8px] items-center justify-between lg:justify-start">
          <div className="flex gap-[8px]">
            <Image src={FloorIcon} alt="Floor Icon" width={24} height={24} />
            FLOOR:
          </div>
          <div>{flatData.floor}</div>
        </div>

        {/* APARTMENT */}
        <div className="flex gap-[8px] items-center justify-between lg:justify-start">
          <div className="flex gap-[8px]">
            <Image src={ApartmentIcon} alt="Apartment Icon" width={24} height={24} />
            APARTMENT:
          </div>
          <div>{flatData.number}</div>
        </div>

        {/* TYPE */}
        <div className="flex gap-[8px] items-center justify-between lg:justify-start">
          <div className="flex gap-[8px]">
            <Image src={TypeIcon} alt="Type Icon" width={24} height={24} />
            TYPE:
          </div>
          <div>{getApartmentType()}</div>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] w-full pb-[32px] border-b border-[#D3D3D3] border-b-[1px] mt-[32px]">
        {/* LIVING SPACE */}
        <div className="flex gap-[8px] items-center justify-between lg:justify-start">
          <div className="flex gap-[8px]">
            <Image src={LivingRoomIcon} alt="Living Space Icon" width={24} height={24} />
            LIVINGSPACE:
          </div>
          <div>{flatData.living_space} m²</div>
        </div>

        {/* BEDROOM */}
        <div className="flex gap-[8px] items-center justify-between lg:justify-start">
          <div className="flex gap-[8px]">
            <Image src={BedroomIcon} alt="Bedroom Icon" width={24} height={24} />
            BEDROOM:
          </div>
          <div>{getBedroomArea()}</div>
        </div>

        {/* BATHROOM */}
        <div className="flex gap-[8px] items-center justify-between lg:justify-start">
          <div className="flex gap-[8px]">
            <Image src={BathroomIcon} alt="Bathroom Icon" width={24} height={24} />
            BATHROOM:
          </div>
          <div>{getBathroomArea()}</div>
        </div>

        {/* BALCONY */}
        <div className="flex gap-[8px] items-center justify-between lg:justify-start">
          <div className="flex gap-[8px]">
            <Image src={BalconyIcon} alt="Balcony Icon" width={24} height={24} />
            BALCONY:
          </div>
          <div>{getBalconyArea()}</div>
        </div>
      </div>

      <button className="flex gap-[16px] items-center mt-[32px] mb-[40px] cursor-pointer">
        <Image src={DownloadIcon} alt="Download Icon" width={24} height={24} />
        <p className="underline">Download PDF</p>
      </button>
      <button className="relative w-full flex justify-center bg-[#CB684D] rounded-[16px] py-[20px] text-[#F2F2F2] cursor-pointer overflow-hidden group" onClick={() => setPopupOpen(true)}>
        <span className="relative z-10">Consultation</span>
        <div className="absolute inset-0 bg-[radial-gradient(25%_50%_at_50%_90%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </button>
      <PopupModal
        isOpen={isPopupOpen}
        onClose={() => {
          setPopupOpen(false);
        }}
      >
        <ModalContent
          onSuccess={() => {
            setPopupOpen(false); 
            setTimeout(() => {
              setShowSuccessModal(true); 
            }, 300); 
          }}
        />
      </PopupModal>

      {showSuccessModal && (
        <GetInTouchSuccess
          onClose={() => {
            setShowSuccessModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ApartmentInformationCard;