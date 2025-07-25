import React from "react";
import Image from "next/image";
import ProjectInfoSection from "@/app/components/atoms/ProjectSection/ProjectSection";
import OverviewSection from "@/app/components/atoms/OverviewSection/OverviewSection";
import FinishingApartment from "../../atoms/FinishingApartment/FinishingApartment";
import ApartmentTypes from "../../atoms/ApartmentTypes/ApartmentTypes";
import FeaturesSection from "../../molecules/FeaturesSection/FeaturesSection";
import OurFuture from "../../molecules/OurFuture/OurFuture";
import MobileChoose from "../../atoms/MobileChoose/MobileChoose";
import FloorHoverOverlay from "@/app/components/molecules/BuildingFloorsHighlight/BuildingFloorsHighlight";
import { fetchProjectAbout, fetchFlats } from "@/app/hooks/axios";
import { getLocale } from "next-intl/server";
import { Locale } from "@/app/types/type";
import FlowerAboutProject from "@/app/assets/FlowerAboutProject";
import MotionWrapper from "../MotionWrapper/MotionWrapper";

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
  manipulations: Array<{ key: string; value: string }>;
  custom_properties: Array<{ property: string; value: string }>;
  generated_conversions: Array<{ conversion: string; path: string }>;
  responsive_images: Array<string>;
  order_column: number;
  created_at: string;
  updated_at: string;
  original_url: string;
  preview_url: string;
}

const AboutProject = async () => {
  const locale = (await getLocale()) as Locale;
  const data = await fetchProjectAbout();
  const flatsData = await fetchFlats();

  const buildingMainImage =
    flatsData[0]?.building?.media?.find(
      (media: MediaItem) => media.collection_name === "building_main_image"
    )?.original_url || "";

  const shapeData = flatsData[0]?.building?.shape_data || [];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full">
        <header className="w-full relative h-[90vh] xl:h-[calc(120vh-197px)]">
          <section className="flex justify-between items-center relative w-full h-full">
            <div className="absolute z-1 w-full h-full md:h-[1000px] xl:h-full top-0 left-0 border-b-[50%]">
              {/* Desktop */}
              <div className="relative w-full hidden xl:block">
                <MotionWrapper delay={0.1}>
                  <div
                    className="relative w-full mt-[400px]"
                    style={{ margin: "0 auto" }}
                  >
                    <Image
                      className="block"
                      alt="MainApartment"
                      src={buildingMainImage}
                      width={1214}
                      height={682}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                      }}
                      priority
                    />
                    <FloorHoverOverlay
                      shapeData={shapeData}
                      flatsData={flatsData}
                    />
                    <div className="absolute bottom-[-240px] w-full">
                      <ProjectInfoSection building={data?.building} />
                    </div>
                  </div>
                </MotionWrapper>
              </div>

              {/* Mobile */}
              <div className="relative w-full h-full block xl:hidden">
                <MotionWrapper delay={0.1}>
                  <div className="relative w-full h-full">
                    <Image
                      className="min-h-[900px] h-[632px]"
                      alt="MainApartment"
                      src={buildingMainImage}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                    <div className="absolute top-[780px] md:top-[900px] w-full">
                      <ProjectInfoSection building={data?.building} />
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </div>

            <MobileChoose />
          </section>
        </header>
      </section>

      {/* Main Content Sections */}
      <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <FlowerAboutProject className="absolute 2xl:top-[22%] xl:top-[20%] lg:top-[26%] right-0 lg:block hidden" />
        </div>

        {/* Content Sections with Staggered Animation */}
        <div className="space-y-0">
          <MotionWrapper delay={0.15}>
            <OverviewSection
              overviewText={data?.overview_text_secondary}
              overviewImage={data?.overview_image}
              lang={locale}
            />
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <FeaturesSection features={data?.features} lang={locale} />
          </MotionWrapper>

          <MotionWrapper delay={0.25}>
            <ApartmentTypes />
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
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
          </MotionWrapper>
        </div>
      </div>

      <MotionWrapper delay={0.35}>
        <OurFuture
          timelineTitle={data?.timeline_title}
          timelineDescription={data?.timeline_description}
          timelinePhases={data?.timeline_phases}
          lang={locale}
        />
      </MotionWrapper>
    </div>
  );
};

export default AboutProject;
