import React from 'react'
import FinishingApartment from '../../atoms/FinishingApartment/FinishingApartment';
import SuggestApartment from '../../atoms/SuggestApartment/SuggestApartment';
import FlatDetailPageFeatureCards from '../../atoms/FlatDetailPageFeatureCards/FlatDetailPageFeatureCards';


const FlatDetailPage = () => {
  return (
    <div className='w-full bg-[#F3F6FB]'>
        <div className='container mx-auto min-h-[500px] px-4 lg:px-[108px]'>
            <p className='text-black'>place for component</p>
        </div>
        <div className='w-full bg-white rounded-t-[56px] mt-[100px] pt-[24px] lg:pt-[60px] pb-[72px] md:pb-[168px]'>
            <div className="container mx-auto">
                <FlatDetailPageFeatureCards/>
                <FinishingApartment/>
                <SuggestApartment/>
            </div>
        </div>
    </div>
  )
}

export default FlatDetailPage