import React from 'react';
import FinishingApartment from '../../atoms/FinishingApartment/FinishingApartment';
import SuggestApartment from '../../atoms/SuggestApartment/SuggestApartment';
import FlatDetailPageFeatureCards from '../../atoms/FlatDetailPageFeatureCards/FlatDetailPageFeatureCards';
import ApartmentInformation from '../../molecules/ApartmentInformation/ApartmentInformation';
import ApartmentInformationCard from '../../atoms/ApartmentInformationCard/ApartmentInformationCard';
import { Locale } from '@/app/types/type';
import { fetchProjectAbout, fetchFlatById } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';

interface FlatDetailPageParams {
  id: string;
  locale: string;
}

interface FlatDetailPageProps {
  params: FlatDetailPageParams;
}

const FlatDetailPage = async ({ params }: FlatDetailPageProps) => {
  const locale = await getLocale() as Locale;
  const flatData = await fetchFlatById(params.id);
  const data = await fetchProjectAbout();
  
  console.log(flatData);
  
  return (
    <div className='w-full relative bg-[#F3F6FB]'>
      <div className='relative'>
        <ApartmentInformation />
        <div className='w-full bg-white rounded-t-[56px] mt-[32px] lg:mt-[40px] pt-[24px] lg:pt-[60px] pb-[72px] md:pb-[168px] relative'>
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            {/* <BackGroundLine6 className="absolute top-[50%] lg:top-[50%] w-full h-auto max-w-none" />
            <BackGroundLine7 className="absolute top-[40%] lg:top-[20%] w-full h-auto max-w-none" /> */}
          </div>
          <div className="container mx-auto">
            <div className='flex justify-center items-center lg:hidden'>
              <ApartmentInformationCard />
            </div>
            <FlatDetailPageFeatureCards />
            <FinishingApartment
              gradientColor="#FFFFFF"
              finishingText={data?.finishing_secondary}
              livingRoomImage={data?.living_room_image}
              kitchenImage={data?.kitchen_image}
              diningAreaImage={data?.dining_area_image}
              bedroomImage={data?.bedroom_image}
              bathroomImage={data?.bathroom_image}
              lang={locale}
            />
            <SuggestApartment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetailPage;