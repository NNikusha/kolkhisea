import React from 'react';
import HighlightsCard from '../../molecules/HighlightsCard/HighlightsCard';
import LuxuryCard from '../../molecules/LuxuryCard/LuxuryCard';
import SubscribeSection from '../SubscribeSection/SubscribeSection';
import ApartmentSection from '../apartmentSection/ApartmentSection';
import WhyUsSection from '../whyUsSection/WhyUsSection';


const  MainPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[900px] md:h-[1100px] lg:h-[1000px] w-full">
        <ApartmentSection />
      </section>

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

      <div>
        <section className="relative h-fit lg:h-fit w-full">
          <SubscribeSection />
        </section>
      </div>

    </div>
  );
};

export default MainPage;