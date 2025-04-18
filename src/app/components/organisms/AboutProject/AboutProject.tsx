import React from 'react';
import Image from 'next/image';
import MainPhoto from "@/app/assets/aboutproject.svg";
import ProjectInfoSection from '@/app/components/atoms/ProjectSection/ProjectSection';
import OverviewSection from '@/app/components/atoms/OverviewSection/OverviewSection';
import FinishingApartment from '../../atoms/FinishingApartment/FinishingApartment';
import ApartmentTypes from '../../atoms/ApartmentTypes/ApartmentTypes';
import FeaturesSection from '../../molecules/FeaturesSection/FeaturesSection';
import OurFuture from '../../molecules/OurFuture/OurFuture';
import MobileChoose from '../../atoms/MobileChoose/MobileChoose';
import BackGroundLine5 from '@/app/assets/BackGroundLine5';
import BackGroundLine6 from '@/app/assets/BackGroundLine6';
import BackGroundLine7 from '@/app/assets/BackGroundLine7';
import BackGroundLine8 from '@/app/assets/BackGroundLine8';
import { fetchProjectAbout } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';
import { Locale } from '@/app/types/type';

const AboutProject = async () => {
    const locale = await getLocale() as Locale;
    const data = await fetchProjectAbout();
    
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[90vh] md:h-[110vh] w-full">
                <header className="w-full relative h-full">
                    <section className="flex justify-between items-center relative w-full h-full">
                        <div className="absolute -z-10 w-full h-full top-0 left-0 border-b-[50%]">
                            <Image
                                className="hidden sm:flex min-h-[1080px] rounded-b-[45px] xl:rounded-b-[60px]"
                                alt="MainApartment"
                                src={MainPhoto}
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                            <Image
                                className="sm:hidden min-h-[900px] h-[632px] rounded-b-[45px]"
                                alt="MainApartment"
                                src={MainPhoto}
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                        
                        <MobileChoose />
                        <ProjectInfoSection building={data?.building} />
                    </section>
                </header>
            </section>
            
            <div className='relative'>
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <BackGroundLine6 className="absolute bottom-[0%] w-full h-auto max-w-none" />
                    <BackGroundLine7 className="absolute bottom-[5%] w-full h-auto max-w-none" />
                    <BackGroundLine5 className="absolute top-[30%] w-full h-auto max-w-none" />
                    <BackGroundLine8 className="absolute top-[5%] w-full h-auto max-w-none" />
                </div>
                <OverviewSection 
                    overviewText={data?.overview_text_secondary}
                    overviewImage={data?.overview_image}
                    lang={locale}
                />
                <FeaturesSection 
                    features={data?.features}
                    lang={locale}
                />
                <ApartmentTypes />
                <FinishingApartment 
                    gradientColor="#F3F6FB"
                    finishingText={data?.finishing_secondary}
                    livingRoomImage={data?.living_room_image}
                    kitchenImage={data?.kitchen_image}
                    diningAreaImage={data?.dining_area_image}
                    bedroomImage={data?.bedroom_image}
                    bathroomImage={data?.bathroom_image}
                    lang={locale}
                />
            </div>
            <OurFuture 
                timelineTitle={data?.timeline_title}
                timelineDescription={data?.timeline_description}
                timelinePhases={data?.timeline_phases}
                lang={locale}
            />
        </div>
    )
}

export default AboutProject;