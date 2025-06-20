"use client";
import React from 'react';
import Image from 'next/image';
import { Locale, LocalizedContent } from '@/app/types/type';
import { useTranslations } from 'next-intl';

interface WhoWeAreProps {
    whoWeAreText?: {
        left?: LocalizedContent;
        right?: LocalizedContent;
    };
    whoWeAreImage?: string;
    lang?: Locale;
}

const WhoWeAre = ({ 
    whoWeAreText,
    whoWeAreImage,
    lang = 'en'
}: WhoWeAreProps) => {

    const t = useTranslations('Language');

    return (
        <div className='container px-[16px] lg:px-[108px] mx-auto w-full bg-[#F3F6FB] mt-[calc(270px+40vw)] sm:mt-[800px] lg:mt-[810px] xl:mt-[570px] 2xl:mt-[660px]'>
            <div className='flex flex-col pb-[48px] w-full'>
                <div className='w-full flex items-center justify-center relative'>
                    <h1 className='text-[#1C1C1E] text-[32px] md:text-[64px] font-normal pb-[24px] uppercase z-[2]'>
                        {t('Who')} <span className='text-[#ABABAB]'>{t('WeAre')}</span>
                    </h1>
                      <div className="absolute hidden md:flex bg-[#B4D7D8]/50 h-[40px] w-[312px] left-[calc(50%-156px)] top-[55px] z-[1]"></div>
                      <div className="absolute md:hidden flex bg-[#B4D7D8]/50 h-[24px] w-[167px] left-[calc(50%-83px)] top-[26px] z-[1]"></div>
                </div>
                <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-[32px] lg:gap-[64px]'>
                    <p className='text-[#3D3D3D] text-base leading-relaxed max-w-full lg:max-w-[645px]  text-center lg:text-left'>
                        {whoWeAreText?.left && whoWeAreText.left[lang]}
                    </p>
                    <p className='text-[#3D3D3D] text-base leading-relaxed max-w-full lg:max-w-[425px] text-center lg:text-left'>
                        {whoWeAreText?.right && whoWeAreText.right[lang]}
                    </p>
                </div>
            </div>
            <div className='rounded-[32px] overflow-hidden'>
                {whoWeAreImage && (
                    <Image
                        src={whoWeAreImage}
                        className="w-full object-fit  relative h-[240px] md:h-[450px] "
                        width={1200}
                        height={450}
                        alt='Modern building'
                        priority
                    />
                )}
            </div>
        </div>
    );
};

export default WhoWeAre;