import React from 'react';
import ShareSvg from '@/app/assets/ShareSvg';
import { useLocale, useTranslations } from 'next-intl';
import { Locale } from '@/app/types/type';
import Image from 'next/image';
import Calendar from '@/app/assets/Calendar.svg';
import Location2 from '@/app/assets/Location2.svg';
import Timecircle from '@/app/assets/TimeCircle.svg';
import Compas from '@/app/assets/Compas';

interface Building {
  name?: Record<Locale, string>;
  location?: Record<Locale, string>;
  status?: string;
  completion_date?: string;
}

interface ProjectInfoSectionProps {
  building?: Building;
}

const ProjectInfoSection: React.FC<ProjectInfoSectionProps> = ({ building }) => {
  const locale = useLocale() as Locale;
  const t = useTranslations('Language');
  
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  };

  return (
    <div className="w-full relative z-10">
      <div
        className="w-full h-[100px] p-0 m-0"
        style={{
          background: 'linear-gradient(to top, #1C1C1E, rgba(28, 28, 30, 0))',
        }}
      ></div>
      <div className="relative">
        <div className="bg-[#1C1C1E] text-white min-h-[197px] md:h-[197px]">
          <div className="container mx-auto px-4 lg:px-[108px] h-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full gap-4 xl:gap-8 2xl:gap-[40px]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <div className="bg-[#FFFFFF0D] px-[16px] py-[14px] flex items-center justify-center rounded-full text-[12px] mb-[12px]">
                    {t('ProjectName')}
                  </div>
                  <h2 className="text-[24px] lg:text-[40px] font-medium tracking-wide uppercase">
                    {building?.name?.[locale] || 'PROJECT NAME'}
                  </h2>
                </div>
                <div className="flex md:hidden bg-[#FFFFFF1A] text-white p-2 rounded-full">
                  <ShareSvg />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[12px] md:gap-0 pt-[24px] md:pt-0 w-full xl:w-[50%] gap-4 justify-between" >
                <div className="flex md:flex-col">
                  <div className='flex w-[40px] h-[40px] items-center justify-center rounded-full bg-[#FFFFFF1A] mb-1 mr-[16px] md:mr-0'>
                    <Image 
                      src={Location2}
                      alt="Location"
                      width={24}
                      height={24} 
                    />
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">{t('Location')}</span>
                    <span className="text-[#BFBFBF] text-[12px] md:text-base">
                      {building?.location?.[locale] || t('DefaultLocation')}
                    </span>
                  </div>
                </div>

                <div className="flex md:flex-col">
                  <div className='flex w-[40px] h-[40px] items-center justify-center rounded-full bg-[#FFFFFF1A] mb-1 mr-[16px] md:mr-0'>
                    <Image 
                      src={Timecircle}
                      alt="TimeCircle"
                      width={24}
                      height={24} 
                    />
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">{t('Status')}</span>
                    <span className="text-[#BFBFBF] text-[12px] md:text-base">
                      {building?.status || t('UnderConstruction')}
                    </span>
                  </div>
                </div>

                <div className="flex md:flex-col">
                  <div className='flex w-[40px] h-[40px] items-center justify-center rounded-full bg-[#FFFFFF1A] mb-1 mr-[16px] md:mr-0'>
                    <Image 
                      src={Calendar}
                      alt="Calendar"
                      width={24}
                      height={24} 
                    />
                  </div> 
                  <div className='flex flex-col'>
                    <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">{t('CompletionDate')}</span>
                    <span className="text-[#BFBFBF] text-[12px] md:text-base">
                      {building?.completion_date ? formatDate(building.completion_date) : '10.01.2025'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex ml-4">
                {/* <div className="bg-[#FFFFFF1A] text-white p-3 rounded-full">
                  <ShareSvg />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="xl:absolute top-[-230px] right-[18%] z-99 hidden xl:block"> 
          <Compas />
        </div>
      </div>
      <div className="w-full h-[47px] bg-[#1C1C1E]">
        <div className="w-full h-[48px] rounded-t-[56px] bg-[#F3F6FB]"></div>
      </div>
    </div>
  );
};

export default ProjectInfoSection;