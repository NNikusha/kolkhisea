"use client";
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import LeftArrow from '@/app/assets/LeftArrow';
import RightArrow from '@/app/assets/RightArrow';
import { Locale, LocalizedContent } from '@/app/types/type';
import { useTranslations } from 'next-intl';

interface FinishingApartmentProps {
  gradientColor?: string;
  finishingText?: LocalizedContent;
  livingRoomImage?: string;
  kitchenImage?: string;
  diningAreaImage?: string;
  bedroomImage?: string;
  bathroomImage?: string;
  lang?: Locale;
}

const FinishingApartment = ({
  gradientColor = '#F3F6FB',
  finishingText,
  livingRoomImage,
  kitchenImage,
  diningAreaImage,
  bedroomImage,
  bathroomImage,
  lang = 'en'
}: FinishingApartmentProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = useTranslations('Language');

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  const slideLabels = [
    t('LivingRoom'),
    t('Kitchen'),
    t('DiningArea'),
    t('Bedroom'),
    t('Bathroom')
  ];

  const slideImages = [
    livingRoomImage,
    kitchenImage,
    diningAreaImage,
    bedroomImage,
    bathroomImage
  ];

  return (
    <div className="w-full lg:mt-[120px] mt-[50px]">
      <div className="container mx-auto px-4 lg:px-[108px]">
        <div className="max-w-[690px]">
          {/* <div className="px-4 py-3 md:py-4 mb-4 flex justify-center items-center bg-[#285260]/5 inline-block rounded-4xl">
            <h3 className="text-[var(--grayMixGreen)] text-center">
              {t('Details')}
            </h3>
          </div> */}

          <h1 className="text-[24px] lg:text-[48px] uppercase font-medium text-[#1C1C1E] lg:hidden">
            {t('Finishing')}</h1>
          <div className='relative inline-block'>
            <h1 className="text-[24px] lg:text-[48px] uppercase font-medium text-[#1C1C1E] mb-6 lg:hidden">
              {t('OfApartments')}
            </h1>
            <div className="absolute lg:hidden flex bg-[#B4D7D8]/50 h-[24px] w-[167px] right-[-55px] top-[18px] z-[-1]"></div>
          </div>

          <div className='relative inline-block'>
            <h1 className="text-[24px] lg:text-[48px] uppercase font-medium text-[#1C1C1E] mb-6 hidden lg:block">
              {t('FinishingApartments')}
            </h1>
            <div className="absolute hidden lg:flex bg-[#B4D7D8]/50 h-[40px] w-[200px] right-[-70px] top-[39px] z-[-1]"></div>
          </div>
          <p className="text-[#7E7E7E] text-sm md:text-base mb-6 hidden md:block">
            {finishingText && finishingText[lang]
              ? finishingText[lang]
              : t('DefaultApartmentDescription')}
          </p>
        </div>

        <div className="relative w-full mb-[32px]">
          <div className="w-full overflow-x-auto">
            <div
              className="flex gap-[16px] md:gap-[24px] justify-start items-center py-3"
              style={{ width: '506px' }}
            >
              {slideLabels.map((label, index) => (
                <button
                  key={index}
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  className={`cursor-pointer transition duration-300 ${activeIndex === index
                    ? 'text-[#CB684D] font-[700] border-b-[3px] border-[#CB684D] pb-[5px]'
                    : 'text-[#7E7E7E] hover:text-[#E88B72] pb-[5px] border-b-[3px] border-transparent'
                    } whitespace-nowrap`}
                  onClick={() => handleSlideChange(index)}
                >
                  {label}
                </button>
              ))}

            </div>
          </div>
          {/* Gradient Overlay */}
          <div
            className="absolute top-0 right-0 h-full w-18 pointer-events-none bg-gradient-to-l to-transparent block md:hidden"
            style={{ background: `linear-gradient(to left, ${gradientColor}, transparent)` }}
          ></div>
        </div>

        <div className='relative h-[200px] md:h-[300px] xl:h-[550px] w-full mb-[16px] rounded-[32px]'>
          <Swiper
            className="h-[200px] md:h-[300px] xl:h-[550px] w-full mb-[16px] rounded-[32px]"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1500}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >

            {/* Custom Arrows */}
            <div
              className={`custom-prev bg-white text-[#1C1C1E] w-10 h-10 rounded-full hidden md:flex justify-center items-center absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 ${activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
                }`}
            >
              <LeftArrow />
            </div>
            <div
              className={`custom-next bg-white text-[#1C1C1E] w-10 h-10 rounded-full hidden md:flex justify-center items-center absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 ${activeIndex === slideLabels.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
                }`}
            >
              <RightArrow />
            </div>

            {slideLabels.map((label, index) => (
              <SwiperSlide key={index} className="select-none">
                <div className="relative w-full h-full">
                  <Image
                    alt={label}
                    src={slideImages[index] || `/default-${label.toLowerCase().replace(' ', '-')}.jpg`}
                    className="object-cover"
                    fill
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination mt-4 absolute bottom-[10px] z-10 flex"></div>
        </div>

        {/* Extra Previous Arrow */}
        <div className="h-[40px] w-full flex justify-center items-center gap-[16px]">
          <div
            className={`extra-prev ${activeIndex === 0 ? 'inactive' : 'active'
              }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <LeftArrow fill="white" />
          </div>

          {/* Extra Next Arrow */}
          <div
            className={`extra-next ${activeIndex === slideLabels.length - 1 ? 'inactive' : 'active'
              }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RightArrow fill="white" BgFill="none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishingApartment;