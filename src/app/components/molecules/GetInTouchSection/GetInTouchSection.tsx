"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import GetInTouchSmallFlower from "@/app/assets/GetInTouchSmallFlower.png";
import GetInTouchBigFlower from "@/app/assets/GetInTouchBigFlower.png";
import GetInTouchFlowerMobile from "@/app/assets/GetInTouchFlowerMobile.png";

import GetInTouchForm from "../../atoms/GetInTouchForm/GetInTouchForm";
import Button from "../../atoms/Button/Button";
import { saveContact } from "@/app/hooks/axios";
import GetInTouchSuccess from "../GetInTouchSuccess/GetInTouchSuccess";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: [0.04, 0.62, 0.23, 0.98] as const,
      duration: 1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const GetInTouchSection = () => {
  const t = useTranslations("Language");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendRequest = async () => {
    if (!name.trim()) {
      alert(t("NameError"));
      return;
    }

    if (!phoneNumber.trim()) {
      alert(t("PhoneError"));
      return;
    }

    const rawNumber = phoneNumber.replace(/\D/g, "");
    if (rawNumber.length < 7) {
      alert(t("ShortPhoneError"));
      return;
    }

    setIsSubmitting(true);

    try {
      const formattedPhoneNumber = `+${phoneNumber}`;

      await saveContact({
        name: name,
        phone_number: formattedPhoneNumber,
      });

      setIsSuccess(true);
      setName("");
      setPhoneNumber("");
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error("Error sending contact request:", error);
      alert(t("RequestError"));
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="container mx-auto px-[16px] lg:pl-[108px] sm:pb-[168px] pb-[72px] w-full relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="bg-white rounded-[32px] flex flex-row justify-between relative z-20 overflow-hidden">
        <Image
          src={GetInTouchSmallFlower}
          alt="Small Flower"
          className="absolute xl:w-[180px] w-[140px] lg:block hidden top-0 left-0 z-10 pointer-events-none"
        />
        <Image
          src={GetInTouchBigFlower}
          alt="Big Flower"
          className="absolute xl:w-[474px] md:w-[303px] top-0 xl:right-[67px] right-0 z-10 pointer-events-none hidden md:block"
        />
        <Image
          src={GetInTouchFlowerMobile}
          alt="Small Flower"
          className="absolute block md:hidden top-0 right-0 z-10 pointer-events-none"
        />

        <div className="px-[16px] lg:pl-[108px] xl:pl-[180px] relative z-20 w-full">
          <motion.h1
            className="sm:text-[48px] text-[24px] font-normal text-[#1C1C1E] pt-[50px]"
            variants={itemVariants}
          >
            {t("Title")}
          </motion.h1>
          <motion.p
            className="text-[#3D3D3D] font-normal pt-4 sm:text-[16px] text-[14px]"
            variants={itemVariants}
          >
            {t("Description")}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6">
            <GetInTouchForm
              nameValue={name}
              onNameChange={setName}
              phoneValue={phoneNumber}
              onPhoneChange={setPhoneNumber}
              namePlaceholder={t("NamePlaceholder")}
              phonePlaceholder={t("PhonePlaceholder")}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="xl:pb-[64px] pb-[32px]"
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
              </div>
            ) : (
              <Button
                text={t("ButtonText")}
                disabled={isSubmitting}
                className="gap-[10px] lg:text-[16px] text-[14px] sm:w-[203px] w-full sm:justify-start justify-center"
                onClick={handleSendRequest}
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      {isSuccess && <GetInTouchSuccess onClose={() => setIsSuccess(false)} />}
    </motion.div>
  );
};

export default GetInTouchSection;
