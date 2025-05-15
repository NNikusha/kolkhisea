"use client";
import React from "react";
import { useTranslations } from 'next-intl';

const SubscriptionForm = () => {
  const t = useTranslations('Language');

  return (
    <div className="flex flex-col items-start pl-[20px] md:pr-[0px] pr-[16px] lg:w-[44%] lg:ml-auto">
      <h2 className="lg:text-[48px] text-[24px] font-normal pb-[32px]">
        {t('Title')}
      </h2>
      <div className="font-normal space-y-4">
        <h3>{t('Address')}</h3>
        <h3>{t('Phone')}</h3>
        <h3>{t('Email')}</h3>
      </div>
    </div>
  );
};

export default SubscriptionForm;