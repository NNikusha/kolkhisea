import React from 'react';
import Image from 'next/image';
import DiagonalArrow from '@/app/assets/DiagonalArrow';
import MyImage from "@/app/assets/Main-Apartment.svg"

const LuxuryCard = () => {
  return (
    <div className="flex flex-col h-[704px]  overflow-hidden">
      <div className="flex flex-col md:flex-row h-[40%]">
        <div className="flex flex-col justify-center w-full md:w-1/2 py-6 ">
          <div className="inline-flex bg-[#285260] px-4 py-2 rounded-full  font-medium text-sm mb-6 w-fit">
            Our Project
          </div>
          <h2 className="text-4xl md:text-[48px] font-light text-[#D8D8D8] mb-2">
            SIGNATURE PROJECT:
          </h2>
          <h1 className="text-4xl md:text-[48px] font-medium text-[#1C1C1E] mb-6">
            LUXURY LIVING BY THE SEA
          </h1>
        </div>
        
        <div className="flex flex-col justify-center w-full md:w-1/2 py-6 md:pl-8">
          <p className="text-[#3D3D3D]  mb-8">
            Experience the perfect blend of elegance and comfort with 
            our premium seaside apartment hotel. Designed for those who
            seek breathtaking views and modern living, this 10-story
            masterpiece offers unparalleled oceanfront luxury.
          </p>
          
          <div className="flex justify-start">
            <button className="bg-[#CB684D]  py-4 px-6 rounded-xl flex items-center gap-2 rounded-[16px]">
              See the project
              <div className='flex w-[15px] h-[15px]'>
            <DiagonalArrow/>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative h-[60%] mt-4">
        <div className="h-full bg-gray-700 w-full overflow-hidden rounded-[48px] relative">
          <Image 
            src={MyImage}
            alt="Luxury oceanfront"
            layout="fill"
            objectFit="cover"
            priority
          />
          
          <div className="absolute bottom-8 left-8 bg-black bg-opacity-30 text-white px-5 py-3 rounded-full">
            10 steps from the sea
          </div>
          
          <div className="absolute bottom-8 right-8 bg-black bg-opacity-30 text-white p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCard;