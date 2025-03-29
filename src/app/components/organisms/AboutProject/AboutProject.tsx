import React from 'react';
import Image from 'next/image';
import MainPhoto from "@/app/assets/aboutproject.svg";
import ProjectInfoSection from '@/app/components/atoms/ProjectSection/ProjectSection';
import OverviewSection from '@/app/components/atoms/OverviewSection/OverviewSection';
import FinishingApartment from '../../atoms/FinishingApartment/FinishingApartment';
import ApartmentTypes from '../../atoms/ApartmentTypes/ApartmentTypes';
import FeaturesSection from '../../molecules/FeaturesSection/FeaturesSection';
import TheJourneyMerg from '../../molecules/TheJourneyMerg/TheJourneyMerg';
import OurFuture from '../../molecules/OurFuture/OurFuture';

const AboutProject = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[632px] md:h-[90vh] w-full">
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

                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="relative inline-flex flex xl:hidden">
                                <button
                                    className="relative w-[102px] h-[102px] rounded-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
                                >
                                    <div
                                        className="absolute inset-0 bg-white/30 backdrop-blur-[4px] z-0"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                                    ></div>

                                    {/* Dashed border */}
                                    <div
                                        className="absolute inset-0 rounded-full border border-dashed border-white/80 z-10"
                                        style={{ borderWidth: '1px' }}
                                    ></div>

                                    {/* Text content */}
                                    <div className="z-20 text-white text-center ">
                                        <div className="text-[14px]">Select</div>
                                        <div className="text-[14px]">Flat</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </section>
                </header>
            </section>

            <ProjectInfoSection />
            <FeaturesSection />
            <OverviewSection />
            <ApartmentTypes />
            <FinishingApartment />
            <TheJourneyMerg/>
            <OurFuture />
        </div>
    )
}

export default AboutProject