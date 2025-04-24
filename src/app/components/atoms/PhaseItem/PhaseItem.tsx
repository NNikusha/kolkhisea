import { Phase } from '@/app/types/type';
import Image from 'next/image';
import StatusBadge from '../StatusBadge/StatusBadge';
import TaskItem from '../TaskItem/TaskItem';

const PhaseItem = ({ phase }: { phase: Phase }) => {
  const imageSource = phase.image ;
  
  return (
    <div className="flex justify-between items-center">
      <div className='w-[32px] h-[522px] lg:w-[32px] lg:h-[330px] 2xl:w-[112px] 2xl:h-[336px] flex items-center justify-center pl-[7px] pr-[13px] 2xl:pl-0 2xl:pr-0'>
        <div className='w-[1px] h-[522px] lg:h-[370px] 2xl:h-[330px] bg-[#E3EDFF] relative'>
          <div className='w-[16px] h-[16px] bg-[#285260] rounded-full absolute left-[-8px] top-[3px] lg:left-[-8px] lg:top-[11px] 2xl:top-[19px] 2xl:left-[-7px]'></div>
        </div>
      </div>
      <div className='flex max-lg:flex-col lg:mb-[40px] 2xl:mb-0'>
        <div className='2xl:pb-10 pb-[4px] pr-[30px]'>
          <p className="text-[14px] lg:text-[16px] 2xl:text-[24px] text-[#CB684D] mb-[8px] 2xl:mb-4 uppercase">{phase.dateRange}</p>
          <div className="flex flex-row max-2xl:flex-col 2xl:items-center mb-[16px] 2xl:mb-4 gap-[8px] 2xl:gap-4">
            <h2 className="text-black text-[16px] 2xl:text-[24px] uppercase">{phase.phase}</h2>
            <StatusBadge status={phase.status} />
          </div>
          <ul className="list-decimal pl-5 mb-4 lg:mb-0 lg:max-w-[438px] 2xl:max-w-[648px] text-[14px] 2xl:text-[16px]">
            {phase.tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
        <div className="relative w-[315px] lg:w-[470px] 2xl:w-[536px] rounded-[16px] overflow-hidden">
          <div className="relative w-full h-auto aspect-[536/256]">
            <Image 
              src={imageSource} 
              alt={phase.phase} 
              className="object-cover w-full h-full"
              width={536}
              height={256}
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none rounded-[16px]"></div>
          </div>
          <div className="inline-block lg:px-[24px] px-[16px] lg:py-[12px] py-[7px] bg-[#F4EDE6]/40 backdrop-blur-[10px] rounded-[200px] absolute top-[16px] left-[16px] 2xl:top-[24px] 2xl:left-[24px] z-20">
            <p className="text-white text-[12px] lg:text-[16px]">{phase.progress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseItem;