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

const AboutProject = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[632px] md:h-[90vh] w-full  z-[-1]">
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
            <OverviewSection />
            <FeaturesSection />
            <ApartmentTypes />
            <FinishingApartment gradientColor="#F3F6FB" />
            <OurFuture />
        </div>
    )
}

export default AboutProject