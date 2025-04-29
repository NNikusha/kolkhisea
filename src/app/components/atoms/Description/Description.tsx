import React from 'react';
import Button from '../Button/Button';
import { DescriptionProps } from '@/app/types/type';
import { useTranslations } from 'next-intl';


const Description: React.FC<DescriptionProps> = ({ 
  title,
  lang = 'en'
}) => {

  const t = useTranslations('Language');

  const defaultDescription = "Experience the perfect blend of elegance and comfort with our premium seaside apartment hotel. Designed for those who seek breathtaking views and modern living, this 10-story masterpiece offers unparalleled oceanfront luxury.";

  return (
    <div className="flex flex-col justify-center w-full md:w-1/2 py-6 px-4 md:px-0 md:pl-8 text-center md:text-left">
      <p className="text-[#3D3D3D] text-sm md:text-base mb-8">
        {title && title[lang] ? title[lang] : defaultDescription}
      </p>
      <div className="hidden md:flex justify-start">
        <Button 
          text={t('SeeTheGallery')}
          href="/about-project"
        />
      </div>
    </div>
  );
};

export default Description;
