import React from 'react';
import Button from '../../atoms/Button/Button';
import Description from '../../atoms/Description/Description';
import ProjectImage from '../../atoms/ProjectImage/ProjectImage';
import ProjectInfo from '../../atoms/ProjectInfo/ProjectInfo';
import { LuxuryCardProps } from '@/app/types/type';


const LuxuryCard: React.FC<LuxuryCardProps> = ({
  title,
  image,
  imageText,
  lang = 'en'
}) => {
  return (
    <div className="flex flex-col h-auto md:h-[704px] overflow-hidden md:bg-transparent rounded-[32px] md:rounded-none">
      <div className="flex flex-col md:flex-row h-auto md:h-[40%]">
        <ProjectInfo />
        <Description title={title} lang={lang} />
      </div>
      <ProjectImage image={image} imageText={imageText} lang={lang} />
      <div className="md:hidden py-6">
        <Button
          className="gap-4 text-center flex justify-center w-full items-center" 
          text="See the project"
          href="/about-project"
        />
      </div>
    </div>
  );
};

export default LuxuryCard;
