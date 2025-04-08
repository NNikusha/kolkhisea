import React from 'react';
import Image from 'next/image'
import SelectApartmentTopView from '@/app/assets/SelectApartmentTopView.svg'
import ApartmentImage from '@/app/assets/ApartmentImage.svg'
import ApartmentCard from '../ApartmentCard/ApartmentCard';

const apartmentData = [
    {
      apartmentNumber: '52',
      size: '75 m²',
      block: 'B',
      status: 'Renovated',
      imageSrc: ApartmentImage,
    },
    {
      apartmentNumber: '52',
      size: '75 m²',
      block: 'B',
      status: 'White layout',
      imageSrc: ApartmentImage,
    },
    {
      apartmentNumber: '52',
      size: '75 m²',
      block: 'B',
      status: 'White layout',
      imageSrc: ApartmentImage,
    },
];

const ApartmentChoose = () => {
  return (
    <div className="h-full w-full bg-white 2xl:hidden">
        <div className='flex items-center gap-[16px] lg:flex pt-[124px] pb-[32px] px-4 bg-white'>
            <div className='flex justify-center items-center text-[#B4B4B4] cursor-pointer '>Main Page</div>
            <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
            <div className='flex justify-center items-center text-[#1C1C1E] cursor-pointer '>4th Floor</div>
        </div>
        <div className='px-4 flex  bg-white justify-center pb-[32px] w-full'>
        <Image
            src={SelectApartmentTopView}
            alt="Picture of the author"
        />
        </div>
        <div className='rounded-t-[32px] bg-[#F3F6FB] pb-[32px] '>
            <div className='px-4 pt-[32px]'>
                <h1 className='text-[20px] font-normal text-[#1C1C1E]'>AVAILABLE APARTMENTS</h1>
                <h3 className='font-normal text-[#7E7E7E] pb-[24px]'>4th floor</h3>
                <div className="flex flex-col gap-4">
                    {apartmentData.map((apartment, index) => (
                        <ApartmentCard
                        key={index}
                        apartmentNumber={apartment.apartmentNumber}
                        size={apartment.size}
                        block={apartment.block}
                        status={apartment.status}
                        imageSrc={apartment.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
                
    </div>
  );
};

export default ApartmentChoose;