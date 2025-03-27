import { Task, Phase } from '@/app/types/type';
import Image from 'next/image';
import OurFeatureImage from '@/app/assets/OurFeature.png';


const OurFuture = () => {
  const phases: Phase[] = Array(4).fill({
    dateRange: "NOV - DEC 2024",
    phase: "PLANNING PHASE",
    status: "Completed",
    tasks: [
      {
        id: 1,
        title: "Project Kickoff",
        description: "Define project goals, scope, and stakeholders.",
      },
      {
        id: 2,
        title: "Site Analysis",
        description: "Conduct environmental, soil, and topographical assessments.",
      },
      {
        id: 3,
        title: "Design and Blueprint Development",
        description: "Collaborate with architects, engineers, and designers to draft initial blueprints.",
      },
      {
        id: 4,
        title: "Permit Acquisition",
        description: "Submit and secure required building permits and zoning approvals.",
      },
    ],
    progress: "5-10% of apartments sold",
    image: OurFeatureImage,
  });

  return (
    <div className="w-full bg-white rounded-t-[56px] py-[32px] lg:py-[45px] 2xl:py-[80px] mt-[72px] 2xl:mt-[168px]">
      <div className="2xl:max-w-[1320px] mx-auto max-w-[343px] lg:max-w-[964px]">
        <div className="px-4 py-[10px] lg:py-3 mb-4 flex justify-center items-center bg-[#285260]/5 inline-block rounded-4xl">
          <h3 className="text-[var(--grayMixGreen)] text-center text-[12px] lg:text-[16px]">History</h3>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <h1 className="text-[24px] lg:text[32px] 2xl:text-[40px] font-medium text-[#1C1C1E] mb-6 uppercase leading-[1.3] inline-block">
              building our future:<br />step by step
            </h1>
            <p className="text-[#3D3D3D] text-[14px] lg:text-[16px] mb-6 leading-[1.5] lg:max-w-[470px] 2xl:max-w-[536px]">
              Structural work is in progress! The framework is nearly complete, and our team is working on the finishing touches to bring this vision to life.
            </p>
        </div>

        <div className="mt-10">
          {phases.map((phase, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className='w-[32px] h-[522px] lg:w-[32px] lg:h-[330px] 2xl:w-[112px] 2xl:h-[336px] flex items-center justify-center pl-[7px] pr-[13px] 2xl:pl-0 2xl:pr-0'>
                <div className='w-[1px] h-[522px] lg:h-[370px] 2xl:h-[330px] bg-[#E3EDFF] relative'>
                  <div className='w-[16px] h-[16px] bg-[#285260] rounded-full absolute left-[-8px] top-[3px] lg:left-[-8px] lg:top-[11px] 2xl:top-[19px] 2xl:left-[-7px]'></div>
                </div>
              </div>
              <div className='flex max-lg:flex-col lg:mb-[40px] 2xl:mb-0'>
                <div className='2xl:pb-10  pb-[4px]'>
                  <p className="text-[14px] lg:text-[16px] 2xl:text-[24px] text-[#CB684D] mb-[8px] 2xl:mb-4 uppercase">{phase.dateRange}</p>
                  <div className="flex flex-row max-2xl:flex-col 2xl:items-center mb-[16px] 2xl:mb-4 gap-[8px] 2xl:gap-4">
                    <h2 className="text-black text-[16px] 2xl:text-[24px] uppercase">{phase.phase}</h2>
                    <div
                      className={`text-[12px] 2xl:px-[16px] h-[32px] lg:h-auto flex justify-center items-center py-[10px] lg:py-[10px] 2xl:py-[12px] rounded-full bg-opacity-10 w-[100px] 2xl:w-auto ${
                        phase.status === "Completed"
                          ? "bg-[#01A43D1A] text-[#01A43D]"
                          : "bg-[#E6FF001A] text-[#A6A100]"
                      }`}
                    >
                      <p className='inline-block text-[12px] lg:text-[14px] 2xl:text-[16px]'>{phase.status}</p>
                    </div>
                  </div>
                  <ul className="list-decimal pl-5 mb-4 lg:mb-0 lg:max-w-[438px] 2xl:max-w-[648px] text-[14px] 2xl:text-[16px] ">
                    {phase.tasks.map((task: Task) => (
                      <li key={task.id} className="text-[#3D3D3D] leading-[1.5] text-[14px] 2xl:text-[16px]">
                        <div className="text-[#3D3D3D] leading-[1.5] text-[14px] 2xl:text-[16px]">
                          <span>{task.title}:</span> {task.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative w-[315px] h-auto lg:w-[470px] lg:h-[307px] 2xl:w-[536px] 2xl:h-[256px] 2xl:pl-[5px] rounded-[16px]">
                  <Image src={phase.image} alt={phase.phase} className="rounded-[16px] mb-[32px] lg:mb-0 2xl:mb-10 object-cover w-full h-full" />
                  <div className='inline-block lg:px-[24px] px-[16px] lg:py-[12px] py-[7px] bg-[#F4EDE666] bg-opacity-40 bg-blur-[10px] rounded-[200px] absolute top-[16px] left-[16px] 2xl:top-[24px] 2xl:left-[24px]'>
                    <p className='text-white text-[12px] lg:text-[16px]'>{phase.progress}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFuture;
