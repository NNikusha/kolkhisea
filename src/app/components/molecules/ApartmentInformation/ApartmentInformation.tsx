import React, { useState } from 'react';
import ApartmentInformationCard from '../../atoms/ApartmentInformationCard/ApartmentInformationCard';
import Image from 'next/image';
import ApartmentImg from '@/app/assets/Apartment56.svg';
import PrintIcon from '@/app/assets/print.svg';
import ShareIcon from '@/app/assets/share.svg';
import Icon2D from '@/app/assets/Icon2D';
import Icon3D from '@/app/assets/Icon3D';
import CompassIcon from '@/app/assets/CompassIcon.svg';
import ArrowLeft from '@/app/assets/arrow-left.svg';
import CompassMobile from '@/app/assets/CompassMobile.svg';

const ApartmentInformation = () => {
  const [activeButton, setActiveButton] = useState<'2D' | '3D'>('2D');

  return (
    <div className="container mx-auto min-h-[500px] px-4 lg:px-[108px] flex flex-col">
         <div className='flex items-center gap-[16px] mt-[32px] mb-[68px] hidden lg:flex'>
            <div className='flex justify-center items-center text-[#B4B4B4]'>Main Page</div>
            <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
            <div className='flex justify-center items-center text-[#B4B4B4]'>About Project</div>
            <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
            <div className='flex justify-center items-center text-[#B4B4B4]'>Stare Plan</div>
            <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
            <div className='flex justify-center items-center text-[#1C1C1E]'>Apartment 52</div>
        </div>
      <div className="flex justify-center lg:justify-between items-center gap-[32px]">
        <div className='flex flex-col xl:flex xl:flex-row items-center w-full xl:w-auto mt-[32px] xl:mt-0'>
          <div className='flex xl:flex-col justify-between xl:justify-center items-center gap-[24px] w-full xl:w-auto'>
            <div className='flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white xl:hidden'>
                <Image 
                    src={ArrowLeft}
                    alt="Arrow Left"
                    width={19}
                    height={19} 
                />
            </div>
            <div className='flex xl:flex-col justify-center items-center gap-[24px]'>
                <button className='flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white'>
                    <Image 
                        src={PrintIcon}
                        alt="Print Icon"
                        width={19}
                        height={19}
                    />
                </button>
                <button className='flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white'>
                    <Image 
                        src={ShareIcon}
                        alt="Share Icon"
                        width={19}
                        height={19} 
                    />
                </button>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center w-full lg:w-auto'>
            <Image 
              src={ApartmentImg}
              alt="Apartment 56"
              width={536}
              height={448} 
            />
            <div className='flex xl:hidden w-full items-start'>
                <Image 
                    src={CompassMobile}
                    alt="Compass Icon"
                    width={72}
                    height={72} 
                    />
            </div>
            <div className="flex justify-between lg:justify-center items-center w-full lg:w-[230px] h-[56px] gap-[4px] lg:p-[8px] bg-[#F3F6FB] lg:bg-[#ECF0F8] rounded-[40px] mt-[16px] lg:mt-[33px] w-full lg:w-auto">
                <button className={`flex gap-[10px] justify-center items-center w-[169px] lg:w-[105px] h-[40px] rounded-[20px] transition duration-300 ease-in-out cursor-pointer ${activeButton === '2D' ? 'bg-white' : 'bg-[#ECF0F8] lg:bg-transparent'}`} onClick={() => setActiveButton('2D')}>
                    <Icon2D fill={activeButton === '2D' ? '#CB684D' : '#7E7E7E'} />
                    <p className={`transition duration-300 ease-in-out ${activeButton === '2D' ? 'text-[#CB684D]' : 'text-[#7E7E7E]'}`}>2D</p>
                </button>

                <button className={`flex gap-[10px] justify-center items-center w-[169px] lg:w-[105px] h-[40px] rounded-[20px] transition duration-300 ease-in-out cursor-pointer ${activeButton === '3D' ? 'bg-white' : 'bg-[#ECF0F8] lg:bg-transparent'}`} onClick={() => setActiveButton('3D')}>
                    <Icon3D fill={activeButton === '3D' ? '#CB684D' : '#7E7E7E'} stroke={activeButton === '3D' ? '#CB684D' : '#7E7E7E'} />
                    <p className={`transition duration-300 ease-in-out ${activeButton === '3D' ? 'text-[#CB684D]' : 'text-[#7E7E7E]'}`}>3D</p>
                </button>
            </div>
          </div>
          <div className='hidden xl:flex'>
            <Image 
                src={CompassIcon}
                alt="Compass Icon"
                width={72}
                height={72} 
                />
          </div>
        </div>
        <div className='hidden lg:flex w-full max-w-[536px]'> 
         <ApartmentInformationCard /> 
        </div>
      </div>
    </div>
  );
};

export default ApartmentInformation;