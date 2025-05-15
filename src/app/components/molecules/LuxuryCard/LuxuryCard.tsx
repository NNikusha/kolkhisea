import React from 'react';
import Button from '../../atoms/Button/Button';
import Description from '../../atoms/Description/Description';
import ProjectImage from '../../atoms/ProjectImage/ProjectImage';
import ProjectInfo from '../../atoms/ProjectInfo/ProjectInfo';
import { LuxuryCardProps } from '@/app/types/type';
import { useTranslations } from 'next-intl';


const LuxuryCard: React.FC<LuxuryCardProps> = ({
  title,
  image,
  imageText,
  lang = 'en'
}) => {

  const t = useTranslations('Language');

  return (
    <div className="flex flex-col h-auto xl:h-[790px] lg:h-[860px] overflow-hidden lg:bg-transparent rounded-[32px] lg:rounded-none">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[40%]">
        <ProjectInfo />
        <Description title={title} lang={lang} />
      </div>
      <ProjectImage image={image} imageText={imageText} lang={lang} />
      <div className="lg:hidden py-6">
        <Button
          className="gap-4 text-center flex justify-center w-full items-center"   
          text={t('ForModernLiving')}
          href="/about-project"
        />
      </div>
    </div>
  );
};

export default LuxuryCard;
