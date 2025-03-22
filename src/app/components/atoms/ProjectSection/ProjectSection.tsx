import React from 'react';
import ShareSvg from '@/app/assets/ShareSvg';

const ProjectInfoSection = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="bg-[#1C1C1E] text-white rounded-t-[30px] h-[197px] relative">
          <div className="container mx-auto px-4 lg:px-[150px] h-full">
            <div className="flex items-center justify-between h-full">
              <div>
                <h2 className="text-2xl md:text-[40px] font-medium tracking-wide">PROJECT NAME</h2>
              </div>
              
              <div className="flex space-x-8 md:space-x-16">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF]  uppercase mb-1">LOCATION</span>
                  <span className="text-[#BFBFBF]">Kobuleti, Georgia</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF]  uppercase mb-1">STATUS</span>
                  <span className="text-[#BFBFBF] ">Under Construction</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF] uppercase mb-1">COMPLETION DATE</span>
                  <span className="text-[#BFBFBF] ">10.01.2025</span>
                </div>
              </div>
              
              <div className="flex ml-4">
              <div className=" hidden md:flex  bac[#BFBFBF]-blur-[10px] bg-[#F4EDE666] bg-opacity-[40%] text-white p-2 md:p-3 rounded-full">
        <ShareSvg />
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoSection;