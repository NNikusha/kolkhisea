"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ApartmentInformationCard from '../../atoms/ApartmentInformationCard/ApartmentInformationCard';
import Image from 'next/image';
import PrintIcon from '@/app/assets/print.svg';
import ShareIcon from '@/app/assets/share.svg';
import Icon2D from '@/app/assets/Icon2D';
import Icon3D from '@/app/assets/Icon3D';
import CompassIcon from '@/app/assets/CompassIcon.svg';
import ArrowLeft from '@/app/assets/arrow-left.svg';
import CompassMobile from '@/app/assets/CompassMobile.svg';
import { fetchFlatById } from '@/app/hooks/axios';
import { useTranslations } from 'next-intl';

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
  };
}

const ApartmentInformation = () => {
  const t = useTranslations('Language');
  const [activeButton, setActiveButton] = useState<'2D' | '3D'>('3D');
  const [flatData, setFlatData] = useState<Flat | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  const params = useParams();
  const router = useRouter();
  const flatId = params?.id as string;
  const locale = (params?.locale as string) || 'en';
  
  useEffect(() => {
    const loadFlatData = async () => {
      if (!flatId) return;
      
      try {
        setLoading(true);
        const data = await fetchFlatById(flatId);
        setFlatData(data);
      } catch  {
        router.push(`/${locale}?error=apartment_not_found`);
      } finally {
        setLoading(false);
      }
    };
    
    loadFlatData();
  }, [flatId, locale, router]);
  
  const getActiveImage = () => {
    if (!flatData) return null;
    
    if (activeButton === '2D') {
      return flatData.flat_image_2d || flatData.floorplan_image;
    } else {
      return flatData.flat_image_3d || flatData.flat_image_2d || flatData.floorplan_image;
    }
  };
  
  const handleGoBack = () => {
    router.back();
  };
  
  const getImageSrc = () => {
    const image = getActiveImage();
    return image || '';
  };

  return (
    <div className="container relative mx-auto min-h-[500px] px-4 lg:px-[108px] flex flex-col mt-[110px] lg:mt-[136px]">
      <div className='flex items-center gap-[16px] mb-[68px] hidden lg:flex'>
        <div 
          className='flex justify-center items-center text-[#B4B4B4] cursor-pointer hover:text-[#8A8A8A] transition duration-300 ease-in-out'
          onClick={() => router.push(`/${locale}`)}
        >
          {t('MainPage')}
        </div>
        <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
        <div 
          className='flex justify-center items-center text-[#B4B4B4] cursor-pointer hover:text-[#8A8A8A] transition duration-300 ease-in-out'
          onClick={() => router.push(`/${locale}/about-project`)}
        >
          {t('AboutProject')}
        </div>
        <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
        <div 
          className='flex justify-center items-center text-[#B4B4B4] cursor-pointer hover:text-[#8A8A8A] transition duration-300 ease-in-out'
          onClick={() => router.push(`/${locale}/apartment-choose`)}
        >
          {t('FloorPlan')}
        </div>
        <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
        <div className='flex justify-center items-center text-[#1C1C1E] cursor-pointer'>
          {loading ? t('Loading') : `${t('Apartment')} ${flatData?.number || ''}`}
        </div>
      </div>
      
      <div className="flex justify-center lg:justify-between items-center gap-[32px]">
        <div className='flex flex-col xl:flex xl:flex-row items-center w-full xl:w-auto mt-[32px] xl:mt-0'>
          <div className='flex xl:flex-col justify-between xl:justify-center items-center gap-[24px] w-full xl:w-auto'>
            <div 
              className='flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white xl:hidden cursor-pointer'
              onClick={handleGoBack}
            >
              <Image 
                src={ArrowLeft}
                alt={t('GoBack')}
                width={19}
                height={19} 
              />
            </div>
            <div className='flex xl:flex-col justify-center items-center gap-[24px]'>
              <button className='flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white'>
                <Image 
                  src={PrintIcon}
                  alt={t('Print')}
                  width={19}
                  height={19}
                />
              </button>
              <button className='flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white'>
                <Image 
                  src={ShareIcon}
                  alt={t('Share')}
                  width={19}
                  height={19} 
                />
              </button>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full lg:w-auto'>
            {loading ? (
            <div className="relative md:w-[536px] md:h-[448px] h-[283px]">
              {/* Spinner centered in the space where image would go */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
              </div>
              {/* Invisible placeholder div to maintain layout */}
              <div className="w-full h-full invisible"></div>
            </div>
          ) : (
            <Image 
              src={getImageSrc()}
              alt={`${t('Apartment')} ${flatData?.number || ''}`}
              className="md:w-[536px] md:h-[448px] h-[283px]  object-cover"
              width={536}
              height={448}
              priority
            />
          )}
            <div className='flex xl:hidden w-full items-start'>
              <Image 
                src={CompassMobile}
                alt={t('CompassIcon')}
                width={72}
                height={72} 
              />
            </div>
            <div className="flex justify-between lg:justify-center items-center w-full lg:w-[230px] h-[56px] gap-[4px] lg:p-[8px] bg-[#F3F6FB] lg:bg-[#ECF0F8] rounded-[40px] mt-[16px] lg:mt-[33px] w-full lg:w-auto">
              <button 
                className={`flex gap-[10px] justify-center items-center w-[169px] lg:w-[105px] h-[40px] rounded-[20px] transition duration-300 ease-in-out cursor-pointer ${activeButton === '2D' ? 'bg-white' : 'bg-[#ECF0F8] lg:bg-transparent hover:bg-white/50 active:border-[1px] active:border-[#E0EAFE] lg:border-none'}`} 
                onClick={() => setActiveButton('2D')}
              >
                <Icon2D fill={activeButton === '2D' ? '#CB684D' : '#7E7E7E'} />
                <p className={`transition duration-300 ease-in-out ${activeButton === '2D' ? 'text-[#CB684D]' : 'text-[#7E7E7E]'}`}>2D</p>
              </button>

              <button 
                className={`flex gap-[10px] justify-center items-center w-[169px] lg:w-[105px] h-[40px] rounded-[20px] transition duration-300 ease-in-out cursor-pointer ${activeButton === '3D' ? 'bg-white' : 'bg-[#ECF0F8] lg:bg-transparent hover:bg-white/50 active:border-[1px] active:border-[#E0EAFE] lg:border-none'}`} 
                onClick={() => setActiveButton('3D')}
              >
                <Icon3D fill={activeButton === '3D' ? '#CB684D' : '#7E7E7E'} stroke={activeButton === '3D' ? '#CB684D' : '#7E7E7E'} />
                <p className={`transition duration-300 ease-in-out ${activeButton === '3D' ? 'text-[#CB684D]' : 'text-[#7E7E7E]'}`}>3D</p>
              </button>
            </div>
          </div>
          <div className='hidden xl:flex'>
            <Image 
              src={CompassIcon}
              alt={t('CompassIcon')}
              width={72}
              height={72} 
            />
          </div>
        </div>
        <div className='hidden lg:flex w-full max-w-[536px]'> 
          <ApartmentInformationCard flatData={flatData} /> 
        </div>
      </div>
    </div>
  );
};

export default ApartmentInformation;