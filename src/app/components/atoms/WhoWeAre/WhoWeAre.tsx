'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, LocalizedContent } from '@/app/types/type';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface WhoWeAreProps {
    whoWeAreText?: {
        left?: LocalizedContent;
        right?: LocalizedContent;
    };
    whoWeAreImage?: string;
    lang?: Locale;
}

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

const WhoWeAre = ({
    whoWeAreText,
    whoWeAreImage,
    lang = 'en',
}: WhoWeAreProps) => {
    const t = useTranslations('Language');

    return (
        <motion.div
            className='container px-[16px] lg:px-[108px] mx-auto w-full bg-[#F3F6FB] mt-[calc(270px+40vw)] sm:mt-[800px] lg:mt-[810px] xl:mt-[570px] 2xl:mt-[660px]'
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div className='flex flex-col pb-[48px] w-full' variants={fadeInUp}>
                <div className='w-full flex items-center justify-center relative'>
                    <h1 className='text-[#1C1C1E] text-[32px] md:text-[64px] font-normal pb-[24px] uppercase z-[2]'>
                        {t('Who')} <span className='text-[#ABABAB]'>{t('WeAre')}</span>
                    </h1>
                    <div className="absolute hidden md:flex bg-[#B4D7D8]/50 h-[40px] w-[312px] left-[calc(50%-156px)] top-[55px] z-[1]"></div>
                    <div className="absolute md:hidden flex bg-[#B4D7D8]/50 h-[24px] w-[167px] left-[calc(50%-83px)] top-[26px] z-[1]"></div>
                </div>
            </motion.div>

            <motion.div
                className='w-full flex flex-col lg:flex-row justify-between items-center gap-[32px] lg:gap-[64px]'
                variants={containerVariants}
            >
                <motion.p
                    className='text-[#3D3D3D] text-base leading-relaxed max-w-full lg:max-w-[645px] text-center lg:text-left'
                    variants={fadeInUp}
                >
                    {whoWeAreText?.left && whoWeAreText.left[lang]}
                </motion.p>
                <motion.p
                    className='text-[#3D3D3D] text-base leading-relaxed max-w-full lg:max-w-[425px] text-center lg:text-left'
                    variants={fadeInUp}
                >
                    {whoWeAreText?.right && whoWeAreText.right[lang]}
                </motion.p>
            </motion.div>

            <motion.div
                className='rounded-[32px] overflow-hidden mt-8'
                variants={fadeInUp}
            >
                {whoWeAreImage && (
                    <Image
                        src={whoWeAreImage}
                        className="w-full object-fit relative h-[240px] md:h-[450px]"
                        width={1200}
                        height={450}
                        alt='Modern building'
                        priority
                    />
                )}
            </motion.div>
        </motion.div>
    );
};

export default WhoWeAre;