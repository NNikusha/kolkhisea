"use client";

import { Phase, Locale, LocalizedContent } from '@/app/types/type';
import PhaseItem from '../../atoms/PhaseItem/PhaseItem';

interface OurFutureProps {
  timelineTitle?: LocalizedContent;
  timelineDescription?: LocalizedContent;
  timelinePhases?: Array<{
    phase_name: LocalizedContent;
    date_range: string;
    status: string;
    sales_progress: string;
    tasks: Array<{
      task: LocalizedContent;
    }>;
    image_url: string;
  }>;
  lang?: Locale;
}

const OurFuture = ({
  timelineTitle,
  timelineDescription,
  timelinePhases,
  lang = 'en'
}: OurFutureProps) => {
  // const t = useTranslations('Language');
  
  const transformedPhases: Phase[] = timelinePhases?.map(item => ({
    dateRange: item.date_range,
    phase: item.phase_name?.[lang] || "PLANNING PHASE",
    status: item.status,
    tasks: item.tasks.map((taskItem, index) => ({
      id: (index + 1).toString(),
      name: `Task ${index + 1}`,
      description: taskItem.task?.[lang] || "",
    })),
    progress: item.sales_progress,
    image: item.image_url,
  })) || [];
  
  return (
    <div className="w-full bg-white rounded-t-[56px] py-[32px] lg:py-[45px] 2xl:py-[80px] mt-[72px] 2xl:mt-[168px]">
      <div className="2xl:max-w-[1320px] mx-auto max-w-[343px] lg:max-w-[964px]">
        {/* <div className="px-4 py-[10px] lg:py-3 mb-4 flex justify-center items-center bg-[#285260]/5 inline-block rounded-4xl">
          <h3 className="text-[var(--grayMixGreen)] text-center text-[12px] lg:text-[16px]">History</h3>
        </div> */}
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <h1 className="text-[24px] lg:text-[32px] 2xl:text-[40px] font-medium text-[#1C1C1E] mb-6 uppercase leading-[1.3] inline-block">
            {timelineTitle?.[lang] || "building our future:<br />step by step"}
          </h1>
          <p className="text-[#3D3D3D] text-[14px] lg:text-[16px] mb-6 leading-[1.5] lg:max-w-[470px] 2xl:max-w-[536px]">
            {timelineDescription?.[lang] || "Structural work is in progress! The framework is nearly complete, and our team is working on the finishing touches to bring this vision to life."}
          </p>
        </div>
         
        <div className="mt-10">
          {transformedPhases.map((phase, index) => (
            <PhaseItem 
              key={index} 
              phase={phase} 
              isFirst={index === 0}
              isLast={index === transformedPhases.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFuture;