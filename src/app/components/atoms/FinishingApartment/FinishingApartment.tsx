"use client";
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useRef, useState } from 'react';
import TestSlide1 from "@/app/assets/TestSlide1.jpg";
import TestSlide2 from "@/app/assets/TestSlide2.jpg";
import TestSlide3 from "@/app/assets/TestSlide3.jpg";
import TestSlide4 from "@/app/assets/TestSlide4.jpg";
import TestSlide5 from "@/app/assets/TestSlide5.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import LeftArrow from '@/app/assets/LeftArrow';
import RightArrow from '@/app/assets/RightArrow';

const FinishingApartment = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  const slideLabels = ['Living Room', 'Kitchen', 'Dining Area', 'Bedroom', 'Bathroom'];

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 lg:px-[150px]">
        <div className="max-w-[690px]">
          <div className="px-4 py-3 md:py-4 mb-4 flex justify-center items-center bg-[#285260]/5 inline-block rounded-4xl">
            <h3 className="text-[var(--grayMixGreen)] text-center">
              Finishing
            </h3>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1C1C1E] mb-6 md:hidden">
            FINISHING <br />OF APARTMENTS
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1C1C1E] mb-6 hidden md:block">
            FINISHING OF APARTMENTS
          </h1>
          <p className="text-[#3D3D3D] text-sm md:text-base mb-6 hidden md:block">
            Our premium apartments are designed with high-quality materials and elegant finishes to provide maximum comfort and luxury. Each unit is thoughtfully crafted with modern aesthetics and durable components, ensuring a stylish yet functional living space.
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
                  className={`cursor-pointer transition duration-300 ${
                    activeIndex === index
                      ? 'text-[#CB684D] font-[700] border-b-[3px] border-[#CB684D] pb-[5px]'
                      : 'text-[#7E7E7E] hover:text-[#E88B72] pb-[5px] border-b-[3px] border-white'
                  }`}
                  onClick={() => handleSlideChange(index)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute top-0 right-0 h-full w-18 pointer-events-none bg-gradient-to-l from-white to-transparent block md:hidden"></div>
        </div>

        <div className='relative h-[200px] md:h-[300px] xl:h-[400px] w-full mb-[16px] rounded-[32px]'>
          <Swiper
              className="h-[200px] md:h-[300px] xl:h-[400px] w-full mb-[16px] rounded-[32px]"
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
              className={`custom-prev bg-white text-[#1C1C1E] w-10 h-10 rounded-full hidden md:flex justify-center items-center absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 ${
                activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
              }`}
            >
              <LeftArrow />
            </div>
            <div
              className={`custom-next bg-white text-[#1C1C1E] w-10 h-10 rounded-full hidden md:flex justify-center items-center absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 ${
                activeIndex === slideLabels.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
              }`}
            >
              <RightArrow />
            </div>

            {/* Swiper Slides */}
            <SwiperSlide className="select-none">
              <Image alt="TestSlide1" src={TestSlide1} className="h-auto" />
            </SwiperSlide>

            <SwiperSlide className="select-none">
              <Image alt="TestSlide2" src={TestSlide2} className="h-auto" />
            </SwiperSlide>

            <SwiperSlide className="select-none">
              <Image alt="TestSlide3" src={TestSlide3} className="h-auto" />
            </SwiperSlide>

            <SwiperSlide className="select-none">
              <Image alt="TestSlide4" src={TestSlide4} className="h-auto" />
            </SwiperSlide>

            <SwiperSlide className="select-none">
              <Image alt="TestSlide5" src={TestSlide5} className="h-auto" />
            </SwiperSlide>
          </Swiper>

            {/* Custom Arrows */}
            <div className="custom-pagination mt-4 absolute bottom-[10px] z-10 flex"></div>
            </div>

        {/* Extra Previous Arrow */}
        <div className="h-[40px] w-full flex justify-center items-center gap-[16px]">
          <div
            className={`extra-prev ${
              activeIndex === 0 ? 'inactive' : 'active'
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <LeftArrow fill="white" />
          </div>

          {/* Extra Next Arrow */}
          <div
            className={`extra-next ${
              activeIndex === slideLabels.length - 1 ? 'inactive' : 'active'
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
