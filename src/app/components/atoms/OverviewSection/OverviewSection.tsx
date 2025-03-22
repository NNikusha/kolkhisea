import React from 'react';
import Image from 'next/image';
import MainPhoto from "@/app/assets/aboutproject.svg";


const OverviewSection = () => {
  return (
    <div className="w-full bg-white rounded-t-[30px] mt-[-20px] relative z-10 py-16">
      <div className="container mx-auto pt-[112px] px-4 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-12">
          <div className="lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="text-3xl text-[48px] text-[#1C1C1E]">OVERVIEW</h2>
          </div>
          
          <div className="lg:w-3/4">
            <p className="text-[#3D3D3D]">
              Located in the heart of [City], [Project Name] is a premium 10-story apartment 
              hotel designed for modern living. With stunning sea views, high-end 
              amenities, and a prime location, it offers the perfect blend of comfort 
              and luxury.
            </p>
          </div>
        </div>
        
        {/* Apartment Gallery Section */}
        <div className="w-full mt-10">
          <div className="rounded-3xl h-[200px] md:h-[528px] overflow-hidden">
            <Image 
              src={MainPhoto} 
              alt="Apartment Hallway"
              width={900}
              height={400}
              layout="responsive"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;