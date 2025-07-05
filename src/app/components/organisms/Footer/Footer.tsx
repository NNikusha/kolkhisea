"use client";

import React from "react";
import Logo from "../../atoms/FooterLogo/FooterLogo";
import FooterLinks from "../../molecules/FooterLinks/FooterLinks";
import ContactInfo from "../../molecules/ContactInfo/ContactInfo";
import SocialIcons from "../../molecules/SocialIcons/SocialIcons";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Footer = () => {
  const t = useTranslations("Language");

  return (
    <footer className="bg-[#1C1C1E] w-full lg:pt-[55px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#1C1C1E] w-full lg:pt-[55px]"
      >
        <div className="container mx-auto px-4 lg:px-[108px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
            <Logo />
            <FooterLinks />
            <ContactInfo />
            <SocialIcons />
          </div>

          <div className="flex pt-[56px] pb-[24px] text-[14px] md:text-[16px] justify-between text-[#9F9F9F] font-normal">
            <p className="flex-1 md:text-center text-start w-[50%]">
              {t("Copyright")}
            </p>
            <p className="text-right flex md:items-center items-end">
              {t("MadeBy")}
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
