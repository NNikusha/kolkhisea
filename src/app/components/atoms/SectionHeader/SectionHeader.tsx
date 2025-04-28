import React, { useState, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper';
import GrayBlueButton from '../GrayBlueButton/GrayBlueButton';
import Button from '../Button/Button';
import LeftArrow from '@/app/assets/LeftArrow';
import RightArrow from '@/app/assets/RightArrow';
import { useTranslations } from 'next-intl';

interface SectionHeaderProps {
    isMobile: boolean;
    swiper?: SwiperType | null;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ isMobile, swiper }) => {

    const t = useTranslations('Language');

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (!swiper) return;

        const updateNavigationState = (): void => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };
        swiper.on('init', updateNavigationState);
        swiper.on('slideChange', updateNavigationState);

        if (swiper.isBeginning || swiper.isEnd) {
            updateNavigationState();
        }

        return () => {
            swiper.off('init', updateNavigationState);
            swiper.off('slideChange', updateNavigationState);
        };
    }, [swiper]);

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className='w-full'>
                <GrayBlueButton text={t('Collection')} />
                <h2 className="text-[32px] pb-[14px] md:pb-0 md:pt-[16px] font-bold text-[#1C1C1E]">APARTMENT TYPES</h2>
                <div className="flex justify-between w-full items-center">
                    <div className="flex items-center space-x-8">
                        <div className="relative">
                            <button className="font-medium text-[#1C1C1E] text-[16px] pb-1">All</button>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CB684D]"></div>
                        </div>
                        <button className="font-medium text-[#1C1C1E] opacity-60 text-[16px] pb-1">1BR</button>
                        <button className="font-medium text-[#1C1C1E] opacity-60 text-[16px] pb-1">Studio</button>
                    </div>

                    {isMobile ? (
                        <div className="flex space-x-2">
                            <button
                                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center z-10 transition duration-300 ${isBeginning ? 'bg-gray-300' : 'bg-[#1C1C1E]'
                                    }`}
                                aria-label="Previous slide"
                                onClick={() => swiper?.slidePrev()}
                                disabled={isBeginning}
                            >
                                <LeftArrow fill="white" />
                            </button>
                            <button
                                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center z-10 transition duration-300 ${isEnd ? 'bg-gray-300' : 'bg-[#1C1C1E]'
                                    }`}
                                aria-label="Next slide"
                                onClick={() => swiper?.slideNext()}
                                disabled={isEnd}
                            >
                                <RightArrow fill="white" BgFill="none" />
                            </button>
                        </div>
                    ) : (
                        <div className='pb-[30px]'>
                            <Button text='See All Suggestions'
                                href='/apartment-types' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
