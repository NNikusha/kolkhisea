import React from 'react';
import HighlightsCard from '../../molecules/HighlightsCard/HighlightsCard';
import LuxuryCard from '../../molecules/LuxuryCard/LuxuryCard';
import ApartmentSection from '../apartmentSection/ApartmentSection';
import WhyUsSection from '../whyUsSection/WhyUsSection';
import BackGroundLine1 from '@/app/assets/BackGroundLine1';
import BackGroundLine2 from '@/app/assets/BackGroundLine2';
import BackGroundLine4 from '@/app/assets/BackGroundLine4';
import { fetchMain } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';
import { Locale } from '@/app/types/type';
import GetInTouchSection from '../../molecules/GetInTouchSection/GetInTouchSection';

const MainPage = async () => {
  const locale = await getLocale() as Locale;
  const data = await fetchMain();

  return (
    <div className="flex flex-col w-full relative z-[10]">
      <section className="relative h-[900px] md:h-[1100px] lg:h-[1000px] w-full">
        <ApartmentSection
          secondaryTitle={data?.title_secondary}
          cloudText={data?.cloud_text}
          cloudTextSecondary={data?.cloud_text_secondary}
          lang={locale}
          mainImg={data?.main_img} // Pass the main image from the fetched data
        />
      </section>
      <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <BackGroundLine1 className="absolute bottom-[10%] w-full h-auto max-w-none" />
          <BackGroundLine2 className="absolute bottom-[5%] w-full h-auto max-w-none" />
          <BackGroundLine2 className="absolute lg:top-[35%] top-[47%] w-full h-auto max-w-none" />
          <BackGroundLine4 className="absolute xl:top-[5%] lg:top-[20%] top-[35%] w-full h-auto max-w-none" />
        </div>
        
        <div className="container px-[16px] lg:px-[108px] mx-auto">
          <section className="w-full py-12 md:py-16 lg:py-24">
            <HighlightsCard
              insights={data?.insights}
              lang={locale}
            />
          </section>
          
          <section className="w-full py-12 md:py-16 lg:py-24">
            <WhyUsSection
              title={data?.why_us_title_secondary}
              image={data?.why_us_img}
              imageText={data?.why_us_img_text}
              lang={locale}
            />
          </section>
          
          <section className="w-full py-12 md:py-16 lg:py-24">
            <LuxuryCard
              title={data?.our_project_title_secondary}
              image={data?.our_project_img}
              imageText={data?.our_project_img_text}
              lang={locale}
            />
          </section>
        </div>
        <section className="w-full pt-12 md:pt-16 lg:pt-24">
          <GetInTouchSection />
        </section>
              
      </div>
    </div>
  );
};

export default MainPage;