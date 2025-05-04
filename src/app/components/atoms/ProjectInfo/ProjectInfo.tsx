'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const ProjectInfo = () => {
  const t = useTranslations('Language');

  return (
    <div className="flex flex-col justify-center w-full md:w-2/3 py-6 px-4 md:px-0 text-center md:text-left">
      {/* <div className="mb-6 mx-auto md:mx-0">
        <Badge text={t('OurConcept')} />
      </div> */}
      <h2 className="text-3xl md:text-4xl lg:text-[80px] font-light text-[#D8D8D8] mb-2 uppercase">
        {t('HeritageRedefined')}
      </h2>
      <h1 className="text-3xl md:text-4xl lg:text-[80px]  font-medium text-[#1C1C1E] mb-6 uppercase">
        {t('ForModernLiving')}
        {/* <span className="md:hidden"><br /></span> */}
        {/* BY THE SEA */}
      </h1>
    </div>
  );
};

export default ProjectInfo;