import React from 'react';
import HighlightsCard from '../../molecules/HighlightsCard/HighlightsCard';
import LuxuryCard from '../../molecules/LuxuryCard/LuxuryCard';
import SubscribeSection from '../SubscribeSection/SubscribeSection';
import ApartmentSection from '../apartmentSection/ApartmentSection';
import WhyUsSection from '../whyUsSection/WhyUsSection';
import { fetchMain } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';
import { Locale,} from '@/app/types/type';

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
        />
      </section>

      <div className='container px-[16px] lg:px-[108px] mx-auto'>
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

      <div>
        <section className="relative h-fit lg:h-fit w-full">
          <SubscribeSection />
        </section>
      </div>
    </div>
  );
};

export default MainPage;
