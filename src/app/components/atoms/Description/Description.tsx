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
    <div className="flex flex-col justify-between w-full lg:w-1/2 px-4 lg:px-0 lg:pl-8 text-center lg:text-left">
      <p className="text-[#3D3D3D] text-sm lg:text-base mb-8">
        {title && title[lang] ? title[lang] : defaultDescription}
      </p>
      <div className="hidden lg:flex justify-start">
        <Button 
          text={t('SeeTheGallery')}
          href="/gallery"
        />
      </div>
    </div>
  );
};

export default Description;
