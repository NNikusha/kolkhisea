'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const ProjectInfo = () => {
  const t = useTranslations('Language');

  return (
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-3 justify-center lg:justify-start lg:w-2/3 lg:px-0 mb-6 lg:mb:-0 text-center lg:text-left">
      {/* <div className="mb-6 mx-auto md:mx-0">
        <Badge text={t('OurConcept')} />
      </div> */}
      <h2 className="text-[32px]  lg:text-[48px] font-light text-[#D8D8D8] uppercase">
        {t('HeritageRedefined')}
      </h2>
      <div className='relative inlineblock'>
      <h1 className="text-[32px] lg:text-[48px]  font-medium text-[#1C1C1E] uppercase">
        {t('ForModernLiving')}
        {/* <span className="md:hidden"><br /></span> */}
        {/* BY THE SEA */}
      </h1>
      <div className="absolute hidden lg:flex bg-[#B4D7D8]/50 h-[40px] w-[312px] left-[-3px] top-[38px] z-[-1]"></div>
      <div className="absolute flex lg:hidden bg-[#B4D7D8]/50 h-[24px] w-[167px] left-[calc(50%-84px)] top-[25px] z-[-1]"></div>
      </div>
    </div>
  );
};

export default ProjectInfo;