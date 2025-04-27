"use client";
import React from 'react';
import Image from 'next/image';
import faceIcone from '@/app/assets/faceIcone.svg';
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
        <div className='container px-[16px] lg:px-[108px] mx-auto w-full bg-[#F3F6FB] mt-[100px] sm:mt-[250px] 2xl:mt-0'>
            <div className='flex flex-col md:flex-row justify-between pb-[48px] gap-8'>
                <div className='md:w-[50%]'>
                    <h1 className='text-[#1C1C1E] text-[48px] md:text-[64px] font-normal pb-[24px]'>
                        {t('BehindTheVision')}: <span className='text-[#ABABAB]'>{t('OurTeam')}</span>
                    </h1>
                    <p className='text-[#3D3D3D] text-base leading-relaxed'>
                        {whoWeAreText?.left && whoWeAreText.left[lang]}
                    </p>
                </div>
                <div className='md:w-[40%]'>
                    <div className='flex justify-start items-center gap-2 pb-[24px] overflow-hidden'>
                        <p className='text-[48px] md:text-[64px] text-[#000000] font-normal'>28+</p>
                        <Image
                            className=''
                            src={faceIcone}
                            width={224}
                            height={80}
                            alt='faceIcone'
                        />
                    </div>
                    <p className='text-[#3D3D3D] text-base leading-relaxed'>
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