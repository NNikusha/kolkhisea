import React from 'react';
import Image from 'next/image';
import ProjectInfoSection from '@/app/components/atoms/ProjectSection/ProjectSection';
import OverviewSection from '@/app/components/atoms/OverviewSection/OverviewSection';
import FinishingApartment from '../../atoms/FinishingApartment/FinishingApartment';
import ApartmentTypes from '../../atoms/ApartmentTypes/ApartmentTypes';
import FeaturesSection from '../../molecules/FeaturesSection/FeaturesSection';
import OurFuture from '../../molecules/OurFuture/OurFuture';
import MobileChoose from '../../atoms/MobileChoose/MobileChoose';
import FloorHoverOverlay from '@/app/components/molecules/BuildingFloorsHighlight/BuildingFloorsHighlight';
import BackGroundLine5 from '@/app/assets/BackGroundLine5';
import BackGroundLine6 from '@/app/assets/BackGroundLine6';
import BackGroundLine7 from '@/app/assets/BackGroundLine7';
import BackGroundLine8 from '@/app/assets/BackGroundLine8';
import { fetchProjectAbout, fetchFlats } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';
import { Locale } from '@/app/types/type';
import { useTranslations } from 'next-intl';

interface MediaItem {
    id: number;
    model_type: string;
    model_id: number;
    uuid: string;
    collection_name: string;
    name: string;
    file_name: string;
    mime_type: string;
    disk: string;
    conversions_disk: string;
    size: number;
    manipulations: any[];
    custom_properties: any[];
    generated_conversions: any[];
    responsive_images: any[];
    order_column: number;
    created_at: string;
    updated_at: string;
    original_url: string;
    preview_url: string;
}

const AboutProject = async () => {
    const locale = await getLocale() as Locale;
    const data = await fetchProjectAbout();
    const flatsData = await fetchFlats();

    const buildingMainImage = flatsData[0]?.building?.media?.find(
        (media: MediaItem) => media.collection_name === "building_main_image"
    )?.original_url || '';

    const shapeData = flatsData[0]?.building?.shape_data || [];


    return (
        <div className="flex flex-col w-full">
            <section className="relative w-full">
                <header className="w-full relative h-[90vh] md:h-[110vh]">
                    <section className="flex justify-between items-center relative w-full h-full">
                        <div className="absolute z-1 w-full h-full top-0 left-0 border-b-[50%]">
                            <div className="relative w-full hidden xl:block">
                                <div className="relative w-full mt-[400px]" style={{ margin: "0 auto" }}>
                                    <Image
                                        className="block"
                                        alt="MainApartment"
                                        src={buildingMainImage}
                                        width={1214}
                                        height={682}
                                        style={{
                                            objectFit: "cover",
                                            overflowClipMargin: "content-box",
                                            overflow: "clip",
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        priority
                                    />
                                    <FloorHoverOverlay shapeData={shapeData} flatsData={flatsData} />
                                </div>
                            </div>


                            {/* Mobile */}
                            <div className="relative w-full h-full block xl:hidden">
                                <Image
                                    className="min-h-[900px] h-[632px] rounded-b-[45px]"
                                    alt="MainApartment"
                                    src={buildingMainImage}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority
                                />
                            </div>
                        </div>

                        <MobileChoose />
                    </section>
                </header>

                {/* ProjectInfoSection outside but pulled UP */}
                <ProjectInfoSection building={data?.building} />
            </section>


            <div className="relative">
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
    );
}

export default AboutProject;
