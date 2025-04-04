"use client"
import CloseIcon from '@/app/assets/CloseIcon';
import Compas from '@/app/assets/Compas';
import React, { useState, useEffect } from 'react';
import VerticalPagination from '../VerticalPagination/VerticalPagination';
import Image from 'next/image'
import SelectApartmentTopView from "@/app/assets/SelectApartmentTopView.svg"
import PdfIcon from "@/app/assets/PdfIcon.svg"
import ArrowRightApartment from '@/app/assets/ArrowRightApartment';
import SelectApartmentSeaLogo from '@/app/assets/SelectApartmentSeaLogo';

interface ApartmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FullscreenApartmentModal: React.FC<ApartmentModalProps> = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [currentFloor, setCurrentFloor] = useState<number>(4);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsClosing(false);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleClose = (): void => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const handleFloorChange = (floor: number) => {
        setCurrentFloor(floor);
        console.log(`Floor changed to: ${floor}`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="absolute inset-0 bg-black/50 transition-opacity duration-300"
                style={{ opacity: isClosing ? 0 : 1 }}
                onClick={handleClose}
            />

            <div
                className="absolute top-[5vh] rounded-t-[56px] left-0 right-0 bottom-0 bg-white transition-all duration-300"
                style={{
                    transform: isClosing ? 'translateY(100%)' : 'translateY(0)',
                    opacity: isClosing ? 0 : 1
                }}
            >
                <div className="flex items-center justify-center h-[90%] w-full rounded-t-[56px] container mx-auto px-4 lg:px-[108px]">
                    <div className="flex flex-col justify-between h-full w-full mt-[40px] font-bold text-gray-800">
                        <div className='w-full flex items-center justify-between'>
                            <div className='uppercase text-[32px] font-normal text-black'>Select apartment</div>
                            <div 
                                className='bg-[#2852600D] px-[12px] py-[12px] rounded-full cursor-pointer'
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </div>
                        </div>
                        
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex items-center gap-[30px]  border border-[#E7E7E7] rounded-[32px] py-[60px] px-[24px] w-[35%]'>
                                {/* <div className='text-lg text-gray-700 mb-2'>
                                    {currentFloor}th Floor
                                </div> */}
                                <div className='text-[#6A6A6A] leading-[150%] font-normal '>
                                    Select an apartment from the plan on the right
                                </div>
                                <ArrowRightApartment />
                               

                            </div>
                            
                            <div className="flex w-full justify-between items-center pt-[50px]">
                                <div className='flex flex-col items-center justify-center'>
                                    
                                    <Image
                                        src={SelectApartmentTopView}
                                        width={872}
                                        alt="PDF icon"
                                        className='fill-black'
                                    />

                                    <div className="flex justify-center items-center gap-[8px] mt-4">
                                        <SelectApartmentSeaLogo />
                                        <h3 className="font-normal text-[#1C1C1E]">Sea</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex-1 flex justify-end'>
                                <VerticalPagination onFloorChange={handleFloorChange} />
                            </div>
                        </div>
                        
                        <div className='w-full flex justify-between items-center'>
                            <div className='text-[#9F9F9F] w-[170px] leading-[130%] font-normal'>© 2025 KOLKHISEA. All Rights Reserved.</div>
                            <div className='flex items-center gap-4'>
                                <Image
                                    src={PdfIcon}
                                    width={20}
                                    height={24}
                                    alt="PDF icon"
                                    className='fill-black'
                                />
                                <span className='font-normal underline'>Download PDF plan</span>
                                <Compas />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullscreenApartmentModal;