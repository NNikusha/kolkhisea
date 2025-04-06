import React from "react";
import SeasideLocation from "@/app/assets/seaSideLocation.svg";
import Breathtakingview from "@/app/assets/Breathtakingview.svg";
import WaterSupply from "@/app/assets/WaterSupply.svg";
import HeatingandCooling from "@/app/assets/HeatingandCooling.svg";
import MainApartment from "@/app/assets/Main-Apartment.svg";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import OpacityButton from "../../atoms/opacityButton/OpacityButton";

export default function WhyUsSection() {
  return (
    <>
      <section>
        <div className=" w-[83px] h-[40px] lg:w-[99px] lg:h-[48px] m-auto xl:m-0 py-3 bg-[#285260]/5  rounded-4xl lg:m-0">
          <h3 className="text-[var(--grayMixGreen)] text-center text-[12px] lg:text-[16px]">
            Why Us?
          </h3>
        </div>
        <div className="lg:hidden mt-4">
          <h2 className="text-[24px] text-center w-[80%] m-auto sm:w-[100%] lg:text-start lg:text-[48px] leading-[130%] font-medium uppercase text-gray-300 ">
            Building the Future with{" "}
            <span className="text-[#1C1C1E]">
              Quality <br /> and Precision
            </span>
          </h2>
        </div>

        <div className="flex mt-6 lg:mt-5 md:gap-10 2xl:gap-0 flex-col xl:flex-row">
          <div className="order-2 flex-1">
            <div className="hidden lg:flex">
              <h2 className="text-[24px] text-center w-[60%] m-auto sm:w-[100%] lg:text-start lg:text-[48px] leading-[130%] font-medium uppercase text-gray-300 relative bottom-2">
                Building the Future with{" "}
                <span className="text-[#1C1C1E]">
                  Quality <br /> and Precision
                </span>
              </h2>
            </div>
            <div className="mt-[32px] lg:mt-[30px]">
              <div>
                <h3 className="text-[#7E7E7E]">What we offer:</h3>
              </div>
              <div className="mt-5 flex flex-col ">
                <div className="flex items-center gap-[30px] lg:gap-10">
                  <div className="flex items-center gap-3 w-[142px] sm:w-[237px]">
                    <Image
                      alt="SeasideImage"
                      src={SeasideLocation}
                      className="w-[32px] w-[32px] lg:min-w-[50px] min-w-[28px] min-h-[31px] lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] w-[50%] sm:w-[100%] lg:text-[16px] ">
                      Seaside Location
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 w-[142px] sm:w-[237px]">
                    <Image
                      alt="BreathtakingviewImage"
                      src={Breathtakingview}
                      className="w-[32px] w-[32px] lg:min-w-[50px] min-w-[28px] min-h-[31px] lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] w-[50%] sm:w-[100%] lg:text-[16px]">
                      Breathtaking view
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-[30px] mt-[25px] lg:mt-8 lg:gap-10">
                  <div className="flex items-center gap-3 w-[142px] sm:w-[237px]">
                    <Image
                      alt="WaterSupplyImage"
                      src={WaterSupply}
                      className="w-[32px] w-[32px] lg:min-w-[50px]  lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] lg:text-[16px]">
                      Water Supply
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 w-[142px] sm:w-[237px]">
                    <Image
                      alt="HeatingandCoolingImage"
                      src={HeatingandCooling}
                      className="w-[32px] w-[32px] lg:min-w-[50px]  lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] lg:text-[16px] w-[70%] sm:w-[100%] whitespace-wrap lg:whitespace-nowrap">
                      Heating and Cooling
                    </h2>
                  </div>
                </div>
                <div className="w-full mt-10 lg:w-[250px] lg:mt-4 w-full m-auto flex justify-center lg:mt-10 lg:m-0 xl:mt-[67px]">
                  <Button
                    className="gap-4 text-center flex justify-center w-full items-center "
                    text="Learn more"
                    href="/about-us"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" order-1 lg:order-2 flex-1">
            <div className="flex items-start">
              <p className="text-[#3D3D3D] font-medium leading-[150%] text-[14px] lg:text-[16px] md:mt-6 xl:mt-0  text-[#3D3D3D] text-center lg:text-start">
                We are a leading construction company dedicated to delivering
                high-quality residential and commercial projects. With years of
                experience and a passion for excellence, we create spaces that
                stand the test of time. Whether you&apos;re looking to build,
                renovate, or invest, we&apos;re here to make it happen.
              </p>
            </div>
            <div className="w-full h-[288px] lg:h-[375px] 2xl:h-[384px] 2xl:w-[648px] mt-10 relative">
              <div className="w-full h-full  overflow-hidden rounded-[48px] relative">
                <Image
                  alt="testImage"
                  src={MainApartment}
                  fill
                  className="rounded-[48px] object-cover"
                  priority
                />
              </div>
              <div className="hidden 2xl:flex gap-4 w-full absolute bottom-10 left-4">
                <OpacityButton
                  text="quality craftsmanship"
                  className="mt-10 bg-white/0 rounded-[48px]  px-6 py-3 text-center justify-center"
                />
                <OpacityButton
                  text="innovative solutions"
                  className="hidden 2xl:flex mt-10 bg-white/0 rounded-[48px] px-6 py-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
