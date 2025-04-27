import React from 'react';
import ShareSvg from '@/app/assets/ShareSvg';
import { useLocale } from 'next-intl';
import { Locale } from '@/app/types/type';

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
  
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  };

  return (
    <div className="w-full relative z-10 -mt-0 sm:-mt-0 md:-mt-0 lg:-mt-0 xl:-mt-[10px] 2xl:-mt-[20px]">
      <div className="relative">
        <div className="bg-[#1C1C1E] text-white min-h-[197px] md:h-[197px]">
          <div className="container mx-auto px-4 lg:px-[108px] h-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-[18px] h-full">
              
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] md:text-[40px] font-medium tracking-wide">
                  {building?.name?.[locale] || 'PROJECT NAME'}
                </h2>
                
                <div className="flex md:hidden bg-[#F4EDE666] bg-opacity-[40%] text-white p-2 rounded-full">
                  <ShareSvg />
                </div>
              </div>
              

              <div className="flex flex-col md:flex-row gap-[12px] md:gap-0 pt-[24px] md:pt-0 md:space-x-16">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">LOCATION</span>
                  <span className="text-[#BFBFBF] text-[12px] md:text-base">
                    {building?.location?.[locale] || 'Kobuleti, Georgia'}
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">STATUS</span>
                  <span className="text-[#BFBFBF] text-[12px] md:text-base">
                    {building?.status || 'Under Construction'}
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">COMPLETION DATE</span>
                  <span className="text-[#BFBFBF] text-[12px] md:text-base">
                    {building?.completion_date ? formatDate(building.completion_date) : '10.01.2025'}
                  </span>
                </div>
              </div>
              
              <div className="hidden md:flex ml-4">
                <div className="bg-[#F4EDE666] bg-opacity-[40%] text-white p-3 rounded-full">
                  <ShareSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoSection;