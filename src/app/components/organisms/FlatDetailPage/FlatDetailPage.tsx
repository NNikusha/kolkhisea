'use client'

import React from 'react'
import FinishingApartment from '../../atoms/FinishingApartment/FinishingApartment';
import SuggestApartment from '../../atoms/SuggestApartment/SuggestApartment';
import FlatDetailPageFeatureCards from '../../atoms/FlatDetailPageFeatureCards/FlatDetailPageFeatureCards';
import ApartmentInformation from '../../molecules/ApartmentInformation/ApartmentInformation';
import ApartmentInformationCard from '../../atoms/ApartmentInformationCard/ApartmentInformationCard';
import BackGroundLine6 from '@/app/assets/BackGroundLine6';
import BackGroundLine7 from '@/app/assets/BackGroundLine7';


const FlatDetailPage = () => {
  return (
    <div className='w-full bg-[#F3F6FB]'>
        <ApartmentInformation/>
        <div className='w-full bg-white rounded-t-[56px] mt-[32px] lg:mt-[40px] pt-[24px] lg:pt-[60px] pb-[72px] md:pb-[168px] relative'>
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <BackGroundLine6 className="absolute top-[50%] lg:top-[50%] w-full h-auto max-w-none" />
            <BackGroundLine7 className="absolute top-[40%] lg:top-[20%] w-full h-auto max-w-none" />
          </div>
            <div className="container mx-auto">
                <div className='flex lg:hidden'>
                  <ApartmentInformationCard/>
                </div>
                <FlatDetailPageFeatureCards/>
                <FinishingApartment gradientColor="#FFFFFF" />
                <SuggestApartment/>
            </div>
        </div>
    </div>
  )
}

export default FlatDetailPage