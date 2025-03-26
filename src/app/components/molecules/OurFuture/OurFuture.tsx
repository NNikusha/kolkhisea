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
    <div className="w-full bg-white rounded-t-[56px] py-[80px]">
      <div className="container mx-auto px-4 lg:px-[108px]">
        <div className="px-4 py-3 md:py-4 mb-4 flex justify-center items-center bg-[#285260]/5 inline-block rounded-4xl">
          <h3 className="text-[var(--grayMixGreen)] text-center">History</h3>
        </div>
        <div className="w-full flex justify-between items-start">
          <div>
            <h1 className="text-3xl text-[40px] font-medium text-[#1C1C1E] mb-6 uppercase leading-[1.3]">
              building our future:<br />step by step
            </h1>
          </div>
          <div className="max-w-[536px]">
            <p className="text-[#3D3D3D] text-sm md:text-base mb-6 leading-[1.5]">
              Structural work is in progress! The framework is nearly complete, and our team is working on the finishing touches to bring this vision to life.
            </p>
          </div>
        </div>

        <div className="mt-10">
          {phases.map((phase, index) => (
            <div key={index} className="mb-10 flex justify-between items-center mb-[48px]">
              <div className=''>
                <p className="text-[24px] text-[#CB684D] mb-4 uppercase">{phase.dateRange}</p>
                <div className="flex items-center mb-4 gap-4">
                  <h2 className="text-black text-[24px] uppercase">{phase.phase}</h2>
                  <div
                    className={`px-[16px] py-[12.5px] rounded-full bg-opacity-10 ${
                      phase.status === "Completed"
                        ? "bg-[#01A43D1A] text-[#01A43D]"
                        : "bg-[#E6FF001A] text-[#A6A100]"
                    }`}
                  >
                    <p>{phase.status}</p>
                  </div>
                </div>
                <ul className="list-decimal pl-5 mb-4 max-w-[648px] text-[16px]">
                  {phase.tasks.map((task: Task) => (
                    <li key={task.id} className="text-[#3D3D3D] leading-[1.5] text-[16px]">
                      <div className="text-[#3D3D3D] leading-[1.5] text-[16px]">
                        <span>{task.title}:</span> {task.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative w-[536px] h-[256px]">
                <Image src={phase.image} alt={phase.phase} className="rounded-lg" />
                <div className='inline-block px-[24px] py-[16.5px] bg-[#F4EDE666] bg-opacity-40 bg-blur-[10px] rounded-[200px] absolute top-[24px] left-[24px]'>
                  <p className='text-white'>{phase.progress}</p>
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
