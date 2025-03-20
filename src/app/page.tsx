import React from 'react';
import ApartmentSection from './components/organisms/apartmentSection/ApartmentSection';
import HighlightsCard from './components/molecules/HighlightsCard/HighlightsCard';
import LuxuryCard from './components/molecules/LuxuryCard/LuxuryCard';

const Page = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[110vh] w-full">
        <ApartmentSection />
      </section>

      <div className='container px-[16px] lg:px-[150px] mx-auto'>
        <section className="w-full py-12 md:py-16 lg:py-24">
          <HighlightsCard />
        </section>
      
        <section className="w-full py-12 md:py-16 lg:py-24">
          <LuxuryCard />
        </section>
      </div>
    </div>
  );
};

export default Page;