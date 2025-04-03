'use client'

import React from 'react'
import FinishingApartment from '../../atoms/FinishingApartment/FinishingApartment';
import SuggestApartment from '../../atoms/SuggestApartment/SuggestApartment';
import FlatDetailPageFeatureCards from '../../atoms/FlatDetailPageFeatureCards/FlatDetailPageFeatureCards';
import ApartmentInformation from '../../molecules/ApartmentInformation/ApartmentInformation';
import ApartmentInformationCard from '../../atoms/ApartmentInformationCard/ApartmentInformationCard';


const FlatDetailPage = () => {
  return (
    <div className='w-full bg-[#F3F6FB]'>
        <ApartmentInformation/>
        <div className='w-full bg-white rounded-t-[56px] mt-[32px] lg:mt-[40px] pt-[24px] lg:pt-[60px] pb-[72px] md:pb-[168px]'>
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