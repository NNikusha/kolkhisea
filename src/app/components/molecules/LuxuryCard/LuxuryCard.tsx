import React from 'react';
import Button from '../../atoms/Button/Button';
import Description from '../../atoms/Description/Description';
import ProjectImage from '../../atoms/ProjectImage/ProjectImage';
import ProjectInfo from '../../atoms/ProjectInfo/ProjectInfo';


const LuxuryCard = () => {
  return (
    <div className="flex flex-col h-auto md:h-[704px] overflow-hidden md:bg-transparent rounded-[32px] md:rounded-none">
      <div className="flex flex-col md:flex-row h-auto md:h-[40%]">
        <ProjectInfo />
        <Description />
      </div>
      <ProjectImage />
      <div className="md:hidden px-4 py-6">
        <Button text="See the project" />
      </div>
    </div>
  );
};

export default LuxuryCard;