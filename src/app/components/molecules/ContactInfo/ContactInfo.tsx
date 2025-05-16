import React from 'react';
import { useTranslations } from 'next-intl';

const ContactInfo = () => {
  const t = useTranslations('Language');
  
  return (
    <div className="text-white space-y-[8px] font-normal">
      <p>{t('ContactInformation')}</p>
      <p>{t('Address')}</p>
      <p>{t('Phone')}</p>
      <p>{t('Email')}</p>
    </div>
  );
};

export default ContactInfo;