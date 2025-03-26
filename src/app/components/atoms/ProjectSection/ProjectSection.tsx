import React from 'react';
import ShareSvg from '@/app/assets/ShareSvg';

const ProjectInfoSection = () => {
    return (
        <div className="w-full">
            <div className="relative">
                <div className="bg-[#1C1C1E] text-white rounded-t-[30px] h-[283px] md:h-[197px] mb-[-25px] relative">
                    <div className="container mx-auto px-4 lg:px-[108px] h-full">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between p-[18px] h-full">

                            <div className="flex items-center justify-between">
                                <h2 className="text-[24px] md:text-[40px] font-medium tracking-wide">PROJECT NAME</h2>

                                <div className="flex md:hidden bg-[#F4EDE666] bg-opacity-[40%] text-white p-2 rounded-full">
                                    <ShareSvg />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-[12px] md:gap-0 pt-[24px] md:pt-0 md:space-x-16">
                                <div className="flex flex-col">
                                    <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">LOCATION</span>
                                    <span className="text-[#BFBFBF] text-[12px] md:text-base">Kobuleti, Georgia</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">STATUS</span>
                                    <span className="text-[#BFBFBF] text-[12px] md:text-base">Under Construction</span>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[#FFFFFF] text-[12px] md:text-base uppercase mb-1">COMPLETION DATE</span>
                                    <span className="text-[#BFBFBF] text-[12px] md:text-base">10.01.2025</span>
                                </div>
                            </div>

                            <div className="hidden md:flex ml-4">
                                <div className="bg-[#F4EDE666] bg-opacity-[40%] text-white p-3 rounded-full">
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