import React from 'react';
import Image from 'next/image';
import ApartmentImage from "@/app/assets/FlatType.svg";

export interface ApartmentCardProps {
    type: string;
    size: number;
    isRenovated: boolean;
    availableFlats: number;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
    type,
    size,
    isRenovated,
    availableFlats
}) => {
    return (
        <div className="bg-[#FFFFFF] rounded-[20px] overflow-hidden w-full max-w-[295px] h-[468px] flex flex-col mx-auto" style={{ boxShadow: '0px 4px 18.8px 0px #0000001A' }}>
            <div className="p-6 flex flex-col h-full">
                <div className="py-[12.5px] px-[14px] text-[12px] md:-[16px] text-center text-[#1C1C1E] bg-[#F0F0F0] rounded-[200px] mb-[24px] self-start">
                    Available: {availableFlats} flats
                </div>

                <div className="w-full flex-grow flex items-center justify-center mb-6">
                    <div className="relative w-full h-[220px]">
                        <Image
                            src={ApartmentImage}
                            alt={`${type} apartment`}
                            fill
                            style={{ objectFit: 'contain' }}
                            className="p-2"
                        />
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="text-[14px] md:text-[16px] text-[#1C1C1E] font-medium mb-4">
                        {type} • {size} m²
                    </div>

                    {isRenovated && (
                        <div className="inline-block bg-[#F0F0F0] text-[#1C1C1E] text-[12px] md:text-[14px] py-[12.5px] px-[14px] rounded-full">
                            Renovated
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;