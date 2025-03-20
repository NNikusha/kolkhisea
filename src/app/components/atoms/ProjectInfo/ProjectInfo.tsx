import React from 'react';
import Badge from '../Badge/Badge';

const ProjectInfo = () => (
  <div className="flex flex-col justify-center w-full md:w-1/2 py-6 px-4 md:px-0 text-center md:text-left">
    <div className="mb-6 mx-auto md:mx-0">
      <Badge text="Our Project" />
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-[48px] font-light text-[#D8D8D8] mb-2">
      SIGNATURE PROJECT:
    </h2>
    <h1 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1C1C1E] mb-6">
      LUXURY LIVING
      <span className="md:hidden"><br /></span>
      BY THE SEA
    </h1>
  </div>
);

export default ProjectInfo;