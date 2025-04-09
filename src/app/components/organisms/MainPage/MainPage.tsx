import React from 'react';
import HighlightsCard from '../../molecules/HighlightsCard/HighlightsCard';
import LuxuryCard from '../../molecules/LuxuryCard/LuxuryCard';
import SubscribeSection from '../SubscribeSection/SubscribeSection';
import ApartmentSection from '../apartmentSection/ApartmentSection';
import WhyUsSection from '../whyUsSection/WhyUsSection';
import BackGroundLine1 from '@/app/assets/BackGroundLine1';
import BackGroundLine2 from '@/app/assets/BackGroundLine2';
import BackGroundLine4 from '@/app/assets/BackGroundLine4';


const  MainPage = () => {
  return (
<div className="flex flex-col w-full relative z-[10]">
      <section className="relative h-[900px] md:h-[1100px] lg:h-[1000px] w-full ">
        <ApartmentSection />
      </section>
      <div className='relative'>

          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <BackGroundLine1 className="absolute bottom-[10%] w-full h-auto max-w-none" />
            <BackGroundLine2 className="absolute bottom-[5%] w-full h-auto max-w-none" />
            <BackGroundLine2 className="absolute lg:top-[35%] top-[47%] w-full h-auto max-w-none" />
            <BackGroundLine4 className="absolute xl:top-[5%] lg:top-[20%] top-[35%] w-full h-auto max-w-none" />
          </div>

          <div className='container px-[16px] lg:px-[108px] mx-auto'>
          <section className="w-full py-12 md:py-16 lg:py-24">
            <HighlightsCard />
          </section>
          <section className="w-full py-12 md:py-16 lg:py-24 ">
            <WhyUsSection />
          </section>
          <section className="w-full py-12 md:py-16 lg:py-24">
            <LuxuryCard />
          </section>
        </div>
      </div>

      <div>
        <section className="relative h-fit lg:h-fit w-full z-[10]">
          <SubscribeSection />
        </section>
      </div>

    </div>
  );
};

export default MainPage;