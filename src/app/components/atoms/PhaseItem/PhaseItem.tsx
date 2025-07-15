import { Phase } from '@/app/types/type';
import Image from 'next/image';
import StatusBadge from '../StatusBadge/StatusBadge';
import TaskItem from '../TaskItem/TaskItem';

const PhaseItem = ({ phase }: { phase: Phase }) => {
  const imageSource = phase.image;

  return (
    <div className="flex items-start gap-0">
      {/* Timeline - Clean left start */}
      <div className="flex flex-col items-center w-8 2xl:w-16 flex-shrink-0">
        {/* Timeline dot */}
        <div className="w-4 h-4 bg-[#285260] rounded-full z-10 mt-6 lg:mt-8 2xl:mt-10"></div>
        {/* Timeline vertical line */}
        <div className="w-px bg-[#E3EDFF] flex-1 min-h-[400px] lg:min-h-[300px] 2xl:min-h-[320px]"></div>
      </div>

      {/* Content - Symmetrical layout */}
      <div className="flex-1 pl-6 2xl:pl-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8 2xl:gap-12">
          
          {/* Left content */}
          <div className="flex-1 lg:max-w-md 2xl:max-w-2xl">
            <p className="text-sm lg:text-base 2xl:text-2xl text-[#1C1C1E] mb-2 2xl:mb-4 uppercase font-medium">
              {phase.dateRange}
            </p>
            
            <ul className="list-decimal pl-5 space-y-1 text-sm 2xl:text-base leading-relaxed">
              {phase.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </ul>
          </div>

          {/* Right content - Image with progress overlay */}
          <div className="flex-shrink-0">
            <div className="relative w-[315px] lg:w-[470px] 2xl:w-[536px] rounded-2xl overflow-hidden">
              <div className="relative w-full aspect-[536/256]">
                <Image
                  src={imageSource}
                  alt={phase.phase}
                  className="object-cover w-full h-full"
                  width={536}
                  height={256}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
              </div>
              
              {/* Progress badge */}
              <div className="absolute top-4 left-4 2xl:top-6 2xl:left-6 z-20">
                <div className="px-4 lg:px-6 py-2 lg:py-3 bg-[#F4EDE6]/40 backdrop-blur-[10px] rounded-full">
                  <p className="text-white text-xs lg:text-base font-medium">
                    {phase.progress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseItem;