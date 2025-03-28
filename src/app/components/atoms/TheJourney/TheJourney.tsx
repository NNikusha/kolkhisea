import React from 'react';
import Image from 'next/image';
interface TheJourneyProps {
  title: string;
  imageBg: string;
  about: string;
  titleSpan?:string;
  text?:string;
}

const TheJourney: React.FC<TheJourneyProps> = ({ title, text, titleSpan, imageBg, about }) => {
  return (
    <div className="flex flex-col items-center text-start bg-[#F3F6FB] xl:w-full lg:w-[424px] w-[343px] lg:h-[591px] h-[497px] rounded-[32px]">
        <div className="relative w-full 2xl:h-[350px] lg:h-[315px] h-[232px] rounded-t-[32px] overflow-hidden">
            <Image src={imageBg} alt={title} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 w-full h-[92px] bg-gradient-to-t from-[#F3F6FB] to-transparent"></div>
                <div className="absolute bottom-[0px] left-[24px] rounded-full ">
                <p className='inline rounded-[200px] px-[16px] py-[10px] lg:py-[16.5px] bg-white text-[#285260]'>{about}</p>
                <h3 className="mt-[16px] lg:text-[24px] text-[18px] font-normal text-[#1C1C1E]">
                    {title}
                    <span className='text-[#cb684d]'>
                        {titleSpan}
                    </span>
                </h3>
            </div>
        </div>
        <div className="lg:px-[24px] px-[16px] lg:pb-[40px] pb-[30px] flex flex-col">
            <p className="lg:text-[16px] text-[14px] font-normal leading-[150%] text-[#3D3D3D] pt-[24px] min-h-[100px]">{text}</p>
        </div>
    </div>
  );
};

export default TheJourney;