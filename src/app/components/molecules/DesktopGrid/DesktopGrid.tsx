import { ApartmentType } from '@/app/types/type';
import React from 'react';
import ApartmentCard from '../ApartmentCard/ApartmentCard';


interface DesktopGridProps {
    apartmentTypes: ApartmentType[];
    isMobile: boolean;
}

const DesktopGrid: React.FC<DesktopGridProps> = ({ apartmentTypes, isMobile }) => {
    return (
        <div className={`${isMobile ? 'hidden' : 'block'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 sm:max-w-2xl lg:max-w-4xl 2xl:max-w-none mx-auto">
                {apartmentTypes.map((apartment, index) => (
                    <div 
                        key={apartment.id} 
                        className={index === 3 ? 'hidden 2xl:block' : ''}
                    >
                        <ApartmentCard
                            type={apartment.type}
                            size={apartment.size}
                            isRenovated={apartment.isRenovated}
                            availableFlats={apartment.availableFlats}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesktopGrid;