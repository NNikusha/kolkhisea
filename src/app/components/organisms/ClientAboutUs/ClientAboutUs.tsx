"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutUsSection from "../../molecules/AboutUsSection/AboutUsSection";
import OurMissionSection from "../../molecules/OurMissionSection/OurMissionSection";
import WhoWeAre from "../../atoms/WhoWeAre/WhoWeAre";
import TheJourneyMerg from "../../molecules/TheJourneyMerg/TheJourneyMerg";
import GetInTouchSection from "../../molecules/GetInTouchSection/GetInTouchSection";
import Flower1AboutUs from "@/app/assets/Flower1AboutUs";
import Image from "next/image";
import Flower2AboutUs from "@/app/assets/Flower2AboutUs.png";
import { Locale } from "@/app/types/type";
import { LocalizedContent } from "@/app/types/type";

type AboutUsData = {
  title_secondary: LocalizedContent;
  main_image: string;
  who_we_are_text: {
    left?: LocalizedContent;
    right?: LocalizedContent;
  };
  who_we_are_image: string;
  our_mission_title: LocalizedContent;
  our_mission_image: string;
  our_mission_image_secondary: string;
  journey_of_creation_before: LocalizedContent;
  journey_of_creation_image_before: string;
  journey_of_creation_after: LocalizedContent;
  journey_of_creation_image_after: string;
  why_choose_us: string;
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.01,
      duration: 1.2,
      ease: [0.04, 0.62, 0.23, 0.98] as const,
    },
  }),
};

const ClientAboutUs = ({
  data,
  locale,
}: {
  data: AboutUsData;
  locale: Locale;
}) => {
  return (
    <div className="flex flex-col w-full">
      <AboutUsSection
        titleSecondary={data.title_secondary}
        mainImage={data.main_image}
        lang={locale}
      />

      <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <Flower1AboutUs className="absolute xl:top-[15%] top-[23%] xl:left-[20%] left-[10%] md:block hidden" />
          <Image
            className="absolute top-[54%] md:block hidden"
            alt="MainApartment"
            src={Flower2AboutUs}
          />
        </div>

        <motion.section
          className="w-full mt-[424px] sm:mt-[604px] xl:mt-[228px] 2xl:mt-[540px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          variants={sectionVariants}
        >
          <WhoWeAre
            whoWeAreText={data.who_we_are_text}
            whoWeAreImage={data.who_we_are_image}
            lang={locale}
          />
        </motion.section>

        <motion.section
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          variants={sectionVariants}
        >
          <OurMissionSection
            ourMissionTitle={data.our_mission_title}
            ourMissionImage={data.our_mission_image}
            ourMissionImageSecondary={data.our_mission_image_secondary}
            lang={locale}
          />
        </motion.section>
      </div>

      <motion.section
        className="w-full bg-white relative rounded-t-[56px] lg:py-[5px] 2xl:py-[80px] mt-[72px] 2xl:mt-[168px] pb-[56px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
        variants={sectionVariants}
      >
        {/* <OurMission /> */}
        <TheJourneyMerg
          journeyOfCreationBefore={data.journey_of_creation_before}
          journeyOfCreationImageBefore={data.journey_of_creation_image_before}
          journeyOfCreationAfter={data.journey_of_creation_after}
          journeyOfCreationImageAfter={data.journey_of_creation_image_after}
          lang={locale}
        />
      </motion.section>

      <motion.section
        className="relative w-full z-[10] pt-[168px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={5}
        variants={sectionVariants}
      >
        <GetInTouchSection />
      </motion.section>
    </div>
  );
};

export default ClientAboutUs;
