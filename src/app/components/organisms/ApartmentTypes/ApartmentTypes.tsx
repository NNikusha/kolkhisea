import React from 'react';
import ApartmentCard from '../../molecules/ApartmentCard/ApartmentCard';

const ApartmentTypes = () => {
    const apartments = [
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        },
        {
            type: 'Studio',
            size: 48,
            isRenovated: true,
            availableFlats: 458
        }
    ];

    return (
        <div className="flex flex-col w-full">
            <section className="relative h-fit w-full">
                <div className='h-[300px] bg-red-500'>
                    {/* Sabas content goes here */}
                </div>
            </section>

            <section className='w-full bg-white rounded-t-[56px] py-[32px] lg:py-[45px] 2xl:py-[80px] mt-[72px]'>
                <div className='container px-[20px] lg:px-[150px] mx-auto text-white'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {apartments.map((apartment, index) => (
                            <div key={index} className="flex justify-center">
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
            </section>
        </div>
    );
};

export default ApartmentTypes;