import React, { useState, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper';
import Button from '../Button/Button';
import LeftArrow from '@/app/assets/LeftArrow';
import RightArrow from '@/app/assets/RightArrow';
import { useTranslations } from 'next-intl';

interface SectionHeaderProps {
    isMobile: boolean;
    swiper?: SwiperType | null;
    selectedFilter?: string;
    onFilterChange?: (filter: string) => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
    isMobile, 
    swiper, 
    selectedFilter = "All",
    onFilterChange 
}) => {
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

    const handleFilterClick = (filter: string) => {
        if (onFilterChange) {
            onFilterChange(filter);
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className='w-full'>
                {/* <GrayBlueButton text={t('Collection')} /> */}
                <div className='relative inline-block'>
                    <h2 className="text-[24px] lg:text-[48px] pb-[14px] md:pb-0 text-[#1C1C1E] uppercase">{t('ApartmentTypes')}</h2>
                    <div className="absolute hidden lg:flex bg-[#B4D7D8]/50 h-[40px] w-[200px] right-[-80px] top-[39px] z-[-1]"></div>
                    <div className="absolute lg:hidden flex bg-[#B4D7D8]/50 h-[24px] w-[167px] left-[80px] top-[18px] z-[-1]"></div>
                </div>
                <div className="flex justify-between w-full items-center">
                    <div className="flex items-center space-x-8">
                        <div className="relative">
                            <button 
                                className={`font-medium text-[16px] pb-1 transition-all duration-300 cursor-pointer ${
                                    selectedFilter === "All" 
                                        ? "text-[#CB684D] font-semibold" 
                                        : "text-[#1C1C1E] opacity-60 hover:opacity-80"
                                }`}
                                onClick={() => handleFilterClick("All")}
                            >
                                {t('All')}
                            </button>
                            {selectedFilter === "All" && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CB684D]"></div>
                            )}
                        </div>
                        <div className="relative">
                            <button 
                                className={`font-medium text-[16px] pb-1 transition-all duration-300 cursor-pointer ${
                                    selectedFilter === "1BR" 
                                        ? "text-[#CB684D] font-semibold" 
                                        : "text-[#1C1C1E] opacity-60 hover:opacity-80"
                                }`}
                                onClick={() => handleFilterClick("1BR")}
                            >
                                {t('OneBedroom')}
                            </button>
                            {selectedFilter === "1BR" && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CB684D]"></div>
                            )}
                        </div>
                        <div className="relative">
                            <button 
                                className={`font-medium text-[16px] pb-1 transition-all duration-300 cursor-pointer ${
                                    selectedFilter === "2BR" 
                                        ? "text-[#CB684D] font-semibold" 
                                        : "text-[#1C1C1E] opacity-60 hover:opacity-80"
                                }`}
                                onClick={() => handleFilterClick("2BR")}
                            >
                                {t('TwoBedroom')}
                            </button>
                            {selectedFilter === "2BR" && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CB684D]"></div>
                            )}
                        </div>
                        <div className="relative">
                            <button 
                                className={`font-medium text-[16px] pb-1 transition-all duration-300 cursor-pointer ${
                                    selectedFilter === "Studio" 
                                        ? "text-[#CB684D] font-semibold" 
                                        : "text-[#1C1C1E] opacity-60 hover:opacity-80"
                                }`}
                                onClick={() => handleFilterClick("Studio")}
                            >
                                {t('Studio')}
                            </button>
                            {selectedFilter === "Studio" && (
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#CB684D]"></div>
                            )}
                        </div>
                    </div>

                    {isMobile ? (
                        <div className="flex space-x-2">
                            <button
                                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center z-10 transition duration-300 ${isBeginning ? 'bg-gray-300' : 'bg-[#1C1C1E]'
                                    }`}
                                aria-label={t('PreviousSlide')}
                                onClick={() => swiper?.slidePrev()}
                                disabled={isBeginning}
                            >
                                <LeftArrow fill="white" />
                            </button>
                            <button
                                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center z-10 transition duration-300 ${isEnd ? 'bg-gray-300' : 'bg-[#1C1C1E]'
                                    }`}
                                aria-label={t('NextSlide')}
                                onClick={() => swiper?.slideNext()}
                                disabled={isEnd}
                            >
                                <RightArrow fill="white" BgFill="none" />
                            </button>
                        </div>
                    ) : (
                        <div className='pb-[30px]'>
                            <Button text={t('SeeAllSuggestions')}
                                href='/apartment-types' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;