"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { fetchFlats } from '@/app/hooks/axios';
import ApartmentCard from '../ApartmentCard/ApartmentCard';

interface ApartmentCardProps {
  apartmentNumber: string;
  size: string;
  type: string;
  status: string;
  imageSrc: string;
  onClick?: () => void;
}

interface Flat {
  id: number;
  number: number;
  total_area: number;
  living_space: number;
  price_total: string;
  per_square_price: string;
  status: {
    en: string;
    ka: string;
  };
  floor: number;
  floorplan_image: string | null;
  flat_image_2d: string | null;
  flat_image_3d: string | null;
  building: {
    id: number;
    name: {
      en: string;
      ka: string;
      ru: string;
    };
    location: {
      en: string;
      ka: string;
      ru: string;
    };
    floors: string;
    shape_data: unknown[]; 
    status: string;
    completion_date: string;
    created_at: string;
    updated_at: string;
    media?: Array<{
      id: number;
      original_url: string;
      preview_url: string;
    }>;
  };
  bedroom?: Array<{ area: string }>;
  balcony?: Array<{ area: string }>;
  flat_conditions?: {
    en: string;
    ka: string;
  };
}

const ApartmentChoose: React.FC = () => {
  const [flats, setFlats] = useState<Flat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [floorPlanImage, setFloorPlanImage] = useState<string | null>(null);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const floorParam = searchParams?.get('floor');
  const floor = floorParam ? parseInt(floorParam, 10) : 4; 
  
  useEffect(() => {
    const loadFlats = async () => {
      setLoading(true);
      try {
        const data = await fetchFlats({ floor: floor.toString() });
        
        if (Array.isArray(data)) {
          setFlats(data);
          
          const floorPlanImage = data.find(flat => flat.floorplan_image)?.floorplan_image || null;
          setFloorPlanImage(floorPlanImage);
        } else {
          console.error("Unexpected data format:", data);
          setError("Failed to load apartments. Please try again.");
        }
      } catch (error) {
        console.error("Error loading flats:", error);
        setError("Failed to load apartments. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    
    loadFlats();
  }, [floor]);

  const handleFlatClick = (flatId: number) => {
    console.log(`Navigating to flat ID: ${flatId}`); // Debug log
    
    try {
      // Get locale from URL path
      const pathname = window.location.pathname;
      const localeMatch = pathname.match(/^\/([a-z]{2})\//);
      const locale = localeMatch ? localeMatch[1] : 'ka';
      
      // Correct URL format as specified
      const targetUrl = `/${locale}/flat-detail-page/${flatId}`;
      console.log(`Navigating to: ${targetUrl}`); // Debug log
      
      router.push(targetUrl);
    } catch (err) {
      console.error("Navigation error:", err);
      // Fallback direct navigation
      window.location.href = `/ka/flat-detail-page/${flatId}`;
    }
  };
  
  const transformedApartmentData: ApartmentCardProps[] = flats
    .filter(flat => flat.status.en === 'Available')
    .map(flat => {
      const flatImage = flat.flat_image_3d || flat.floorplan_image || '';
      
      let apartmentType = 'Studio';
      if (flat.bedroom && flat.bedroom.length > 0) {
        apartmentType = flat.bedroom.length === 1 
          ? '1 Bedroom' 
          : `${flat.bedroom.length} Bedrooms`;
      }
      
      return {
        apartmentNumber: flat.number.toString(),
        size: `${flat.total_area} m²`,
        type: apartmentType, 
        status: flat.flat_conditions?.en || 'Standard',
        imageSrc: flatImage, 
        onClick: () => handleFlatClick(flat.id)
      };
    });
  
  return (
    <div className="h-full w-full bg-white 2xl:hidden">
      <div className='flex items-center gap-[16px] lg:flex pt-[124px] pb-[32px] px-4 bg-white'>
        <div className='flex justify-center items-center text-[#B4B4B4] cursor-pointer' onClick={() => router.push('/')}>
          Main Page
        </div>
        <div className='bg-[#1C1C1E] w-[8px] h-[8px] rounded-full flex justify-center items-center'></div>
        <div className='flex justify-center items-center text-[#1C1C1E] cursor-pointer'>
          {floor}th Floor
        </div>
      </div>
      
      <div className='px-4 flex bg-white justify-center pb-[32px] w-full'>
        {floorPlanImage && (
          <Image 
            src={floorPlanImage}
            alt={`${floor}th Floor Plan`}
            width={800}
            height={500}
          />
        )}
      </div>
      
      <div className='rounded-t-[32px] bg-[#F3F6FB] pb-[32px]'>
        <div className='px-4 pt-[32px]'>
          <h1 className='text-[20px] font-normal text-[#1C1C1E]'>AVAILABLE APARTMENTS</h1>
          <h3 className='font-normal text-[#7E7E7E] pb-[24px]'>{floor}th floor</h3>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-pulse">Loading apartments...</div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : transformedApartmentData.length > 0 ? (
            <div className="flex flex-col gap-4">
              {transformedApartmentData.map((apartment, index) => (
                <div 
                  key={index}
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    const flatId = flats.find(flat => flat.number.toString() === apartment.apartmentNumber)?.id;
                    if (flatId) handleFlatClick(flatId);
                  }}
                >
                  <ApartmentCard
                    apartmentNumber={apartment.apartmentNumber}
                    size={apartment.size}
                    type={apartment.type}
                    status={apartment.status}
                    imageSrc={apartment.imageSrc}
                    onClick={apartment.onClick}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No available apartments on this floor.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentChoose;