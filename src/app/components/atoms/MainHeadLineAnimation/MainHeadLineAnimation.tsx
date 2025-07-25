"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const MainHeadLineAnimation = () => {
  const t = useTranslations('Language');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    t('ContactUs'),
    t('WriteUs'), 
    t('CallUs')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1700);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      className="relative flex flex-col justify-center items-center w-full"
    >
      <h1 className="uppercase text-[28px] sm:min-w-[350px] font-medium xl:leading-[87px] xl:text-[48px] text-center text-white">
        {t('IfYouHaveAnyQuestions')}
      </h1>

      <div className="relative flex justify-center items-center h-[40px] overflow-hidden xl:h-[60px] w-full mt-[16px] mb-[24px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={texts[currentTextIndex]}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute text-white uppercase text-[28px] sm:min-w-[350px] font-medium xl:leading-[87px] xl:w-[70.5%] xl:text-[48px] text-center"
          >
            {texts[currentTextIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MainHeadLineAnimation;