import { Phase } from '@/app/types/type';
import PhaseItem from '../../atoms/PhaseItem/PhaseItem';
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
            <PhaseItem key={index} phase={phase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFuture;
