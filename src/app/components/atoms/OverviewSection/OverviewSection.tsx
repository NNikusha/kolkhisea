import React from 'react';
import Image from 'next/image';
import MainPhoto from "@/app/assets/aboutproject.svg";


const OverviewSection = () => {
  return (
    <div className="w-full bg-white rounded-t-[30px]  relative z-10 pt-[20px] pb-[72px] md:py-16">
      <div className="container mx-auto pt-[50px] md:pt-[52px] px-4 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-12">
          <div className=" text-center lg:w-1/4 mb-6 lg:mb-0">
            <h2 className=" text-[24px] md:text-[48px] text-[#1C1C1E]">OVERVIEW</h2>
          </div>
          
          <div className="lg:w-3/4">
            <p className=" text-[14px] md:text-[16px] text-center md:text-start text-[#3D3D3D]">
              Located in the heart of [City], [Project Name] is a premium 10-story apartment 
              hotel designed for modern living. With stunning sea views, high-end 
              amenities, and a prime location, it offers the perfect blend of comfort 
              and luxury.
            </p>
          </div>
        </div>
        
        {/* Apartment Gallery Section */}
        <div className="w-full mt-10">
          <div className=" rounded-3xl h-[200px] md:h-[528px] overflow-hidden">
            <Image 
              src={MainPhoto} 
              alt="Apartment Hallway"
              width={900}
              height={400}
              layout="responsive"
              className="w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;