import React from 'react';
import AboutUsSection from '../../molecules/AboutUsSection/AboutUsSection';
import ChooseUsSection from '../../molecules/ChooseUsSection/ChooseUsSection';
import OurMissionSection from '../../molecules/OurMissionSection/OurMissionSection';
import WhoWeAre from '../../atoms/WhoWeAre/WhoWeAre';
import TheJourneyMerg from '../../molecules/TheJourneyMerg/TheJourneyMerg';
import OurMission from '../../atoms/OurMission/OurMission';
import { fetchAboutUs } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';
import { Locale } from '@/app/types/type';
import GetInTouchSection from '../../molecules/GetInTouchSection/GetInTouchSection';
import Flower1AboutUs from '@/app/assets/Flower1AboutUs';
import Image from 'next/image';
import Flower2AboutUs from '@/app/assets/Flower2AboutUs.png'

const AboutUs = async () => {
    const locale = await getLocale() as Locale;

    const data = await fetchAboutUs();

    return (
        <div className="flex flex-col w-full">
            <section className="relative w-full">
                <AboutUsSection
                    titleSecondary={data?.title_secondary}
                    mainImage={data?.main_image}
                    lang={locale}
                />
            </section>

            <div className="relative">
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <Flower1AboutUs className="absolute xl:top-[15%] top-[23%] xl:left-[20%] left-[10%] md:block hidden"/>
                    <Image
                        className="absolute top-[54%] md:block hidden"
                        alt="MainApartment"
                        src={Flower2AboutUs}                                
                    />
                </div>

                <section className="w-full mt-[424px] sm:mt-[604px] xl:mt-[228px] 2xl:mt-[540px]">
                    <WhoWeAre
                        whoWeAreText={data?.who_we_are_text}
                        whoWeAreImage={data?.who_we_are_image}
                        lang={locale}
                    />
                </section>

                <section className="w-full">

                    <OurMissionSection
                        ourMissionTitle={data?.our_mission_title}
                        ourMissionImage={data?.our_mission_image}
                        ourMissionImageSecondary={data?.our_mission_image_secondary}
                        lang={locale}
                    />
                </section>
            </div>

            <section className="w-full bg-white relative rounded-t-[56px] lg:py-[5px] 2xl:py-[80px] mt-[72px] 2xl:mt-[168px]">
                <OurMission />
                
                <ChooseUsSection
                    whyChooseUs={data?.why_choose_us}
                    lang={locale}
                />

            </section>
            <section className='bg-white pb-[56px]'>
                <TheJourneyMerg
                    journeyOfCreationBefore={data?.journey_of_creation_before}
                    journeyOfCreationImageBefore={data?.journey_of_creation_image_before}
                    journeyOfCreationAfter={data?.journey_of_creation_after}
                    journeyOfCreationImageAfter={data?.journey_of_creation_image_after}
                    lang={locale}
                />
            </section>
            <section className="relative  w-full z-[10] pt-[168px]">
                <GetInTouchSection/>
            </section>
        </div>
    );
};

export default AboutUs;