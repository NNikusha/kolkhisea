import React from 'react';
import ApartmentSection from './components/organisms/apartmentSection/ApartmentSection';
import HighlightsCard from './components/molecules/HighlightsCard/HighlightsCard';

const Page = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[110vh] w-full">
        <ApartmentSection />
      </section>
      <div className='container mx-auto px-4'>
        <section className="w-full">
          <HighlightsCard />
        </section>
      </div>
    </div>
  );
};

export default Page;