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
        <div className="py-[14px] px-5 bg-[#285260]/5 inline-block rounded-4xl">
          <h3 className="text-[var(--grayMixGreen)]">Why Us?</h3>
        </div>
 
        <div className="flex mt-5 flex-wrap">
          <div className=" flex-1">
            <div>
              <h2 className="text-[48px] leading-[130%] font-medium uppercase text-gray-300 relative bottom-2">
                Building the Future with{" "}
                <span className="text-[#1C1C1E]">Quality <br /> and Precision</span>
              </h2>
            </div>
            <div className="mt-[30px]">
              <div>
                <h3 className="text-[#7E7E7E]">What we offer:</h3>
              </div>
              <div className="mt-6 flex flex-col gap-10">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-3 w-[237px]">
                    <Image
                      alt="SeasideImage"
                      src={SeasideLocation}
                      className="min-w-[50px] min-h-[50px]"
                    />
                    <h2 className="text-black">Seaside Location</h2>
                  </div>
                  <div className="flex items-center gap-3 w-[237px]">
                    <Image
                      alt="SeasideImage"
                      src={Breathtakingview}
                      className="min-w-[50px] min-h-[50px]"
                    />
                    <h2 className="text-black">Breathtaking view</h2>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-3 w-[237px]">
                    <Image
                      alt="SeasideImage"
                      src={WaterSupply}
                      className="min-w-[50px] min-h-[50px]"
                    />
                    <h2 className="text-black">Water Supply</h2>
                  </div>
                  <div className="flex items-center gap-3 w-[237px]">
                    <Image
                      alt="SeasideImage"
                      src={HeatingandCooling}
                      className="min-w-[50px] min-h-[50px]"
                    />
                    <h2 className="text-black whitespace-nowrap">
                      Heating and Cooling
                    </h2>
                  </div>
                </div>
                <div className="w-[250px] mt-4">
                    <Button 
                    className="gap-4"
                    text="Learn more"
                    />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <div className="flex items-start">
              <p className="text-[#3D3D3D] font-medium leading-[150%]">
                We are a leading construction company dedicated to delivering
                high-quality residential and commercial projects. With years of
                experience and a passion for excellence, we create spaces that
                stand the test of time. Whether you&apos;re looking to build,
                renovate, or invest, we&apos;re here to make it happen.
              </p>
            </div>
            <div className="mt-14 w-[640px] h-[384px] relative">
                <Image alt="testImage" src={MainApartment} className="rounded-[48px] absolute -z-10"  />
                <div className="flex gap-4 w-full absolute bottom-10 left-4">
                    <OpacityButton 
                    text="quality craftsmanship"
                    className="mt-10 bg-white/0 rounded-[48px]"
                    />
                    <OpacityButton 
                    text="innovative solutions"
                    className="mt-10 bg-white/0 rounded-[48px]"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
