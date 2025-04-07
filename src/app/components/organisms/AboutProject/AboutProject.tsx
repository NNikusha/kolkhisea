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

const AboutProject = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[632px] md:h-[90vh] w-full  z-[10]">
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
                    </section>
                </header>
            </section>

            <ProjectInfoSection />
            <div className='relative'>

                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <BackGroundLine6 className="absolute bottom-[0%] w-full h-auto max-w-none" />
                    <BackGroundLine7 className="absolute bottom-[5%] w-full h-auto max-w-none" />
                    <BackGroundLine5 className="absolute top-[30%] w-full h-auto max-w-none" />
                    <BackGroundLine8 className="absolute top-[5%] w-full h-auto max-w-none" />
                </div>
                <OverviewSection />
                <FeaturesSection />
                <ApartmentTypes />
                <FinishingApartment gradientColor="#F3F6FB" />
            </div>
            <OurFuture />
        </div>
    )
}

export default AboutProject