"use client"
import React, { useEffect, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { ApartmentType } from '@/app/types/type';
import DesktopGrid from '../../molecules/DesktopGrid/DesktopGrid';
import MobileSwiper from '../../molecules/MobileSwiper/MobileSwiper';
import SectionHeader from '../SectionHeader/SectionHeader';

const ApartmentTypesIntegrated: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    useEffect(() => {
        const checkIsMobile = (): void => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    useEffect(() => {
        if (swiper) {
            swiper.navigation.update();
        }
    }, [swiper]);

    const apartmentTypes: ApartmentType[] = [
        { id: 1, type: 'Studio', size: 40, isRenovated: true, availableFlats: 450 },
        { id: 2, type: 'Studio', size: 40, isRenovated: true, availableFlats: 45 },
        { id: 3, type: 'Studio', size: 40, isRenovated: true, availableFlats: 50 },
        { id: 4, type: 'Studio', size: 40, isRenovated: true, availableFlats: 50 },
    ];

    return (
        <section className="w-full py-12  relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-[150px] relative">
                <SectionHeader 
                    isMobile={isMobile}
                    swiper={swiper}
                />

                <DesktopGrid 
                    isMobile={isMobile} 
                    apartmentTypes={apartmentTypes} 
                />

                <MobileSwiper 
                    isMobile={isMobile} 
                    apartmentTypes={apartmentTypes}
                    setSwiper={setSwiper}
                />
            </div>
        </section>
    );
};

export default ApartmentTypesIntegrated;