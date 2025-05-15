'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const ProjectInfo = () => {
  const t = useTranslations('Language');

  return (
    <div className="flex lg:gap-4 gap-0 flex-col lg:flex-row justify-left w-full lg:w-2/3 md:px-0 text-center lg:text-left">
      {/* <div className="mb-6 mx-auto md:mx-0">
        <Badge text={t('OurConcept')} />
      </div> */}
      <div className="text-[32px] lg:text-[48px] font-light text-[#D8D8D8] uppercase">
        {t('HeritageRedefined')}
      </div>
      <div className="text-[32px] lg:text-[48px]  font-medium text-[#1C1C1E] mb-6 uppercase relative">
        {t('ForModernLiving')}
        {/* <span className="md:hidden"><br /></span> */}
        {/* BY THE SEA */}
        <div className="bg-[#B4D7D8]/50 w-[167px] h-[24px] lg:w-[312px] lg:h-[40px] absolute top-[25px] lg:top-[35px] left-[calc(50%-83px)] lg:left-0  z-[-10]"></div>
      </div>
    </div>
  );
};

export default ProjectInfo;