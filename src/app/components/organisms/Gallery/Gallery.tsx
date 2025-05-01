import Image from "next/image";
import gallery from "../../../assets/gallery.svg";
import gallery3 from "../../../assets/gallery3.svg";
import gallery1 from "../../../assets/gallery1.svg";
import gallery2 from "../../../assets/gallery2.svg";
import gallery4 from "../../../assets/gallery4.svg";
import gallery5 from "../../../assets/gallery5.svg";
import gallery6 from "../../../assets/gallery6.svg";
import gallery7 from "../../../assets/gallery7.svg";
import gallery8 from "../../../assets/gallery8.svg";
import gallery9 from "../../../assets/gallery9.svg";
import KolkhiseaGallery from "@/app/assets/KolkhiseaGallery";

const Gallery = () => {
  return (
    <div className="pt-27 w-full h-full bg-[#1C1C1E]">
      <div className="container px-4 lg:px-[108px] mx-auto flex flex-col gap-6">
        <div className="w-full rounded-[8px] relative">
          <Image src={gallery3} alt="gallery img" />
          <div className="absolute w-full flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
            <div className="bg-white/10 backdrop-blur-lg py-3 px-4 md:p-4 text-[12px] sm:text-[14px] md:text-[16px] rounded-full">
              Gallery
            </div>
            <KolkhiseaGallery className="w-[144px] h-[19px] md:w-[296px] md:h-[48px]" />
            <p className="text-[12px] sm:text-[14px] md:text-[16px]">
              IT IS NOT ONLY ABOUT BUILDING
            </p>
          </div>
        </div>
        <div className="flex gap-6 md:flex-row flex-col ">
          <div className="flex-1 w-full rounded-[8px] relative">
            <Image src={gallery5} alt="gallery img" />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-8 font-normal hidden lg:block">
              <p className="font-extrabold">01</p>
              <p>MINIMALISM AND BALANCE IN EACH DETAILS</p>
            </div>
          </div>
          <div className="flex-1 w-full rounded-[8px]">
            <Image src={gallery6} alt="gallery img" />
          </div>
        </div>
        <div className="w-full rounded-[8px] relative">
          <Image src={gallery8} alt="gallery img" />
          <div className="absolute top-0 right-0 flex flex-col gap-2 p-8 text-right uppercase hidden lg:block">
            <div className="text-right font-extrabold">02</div>
            <div className="font-normal ">
              A modern space where organic textures, bold design, <br /> and
              comfort meet in harmony.
            </div>
          </div>
        </div>
        <div className="flex gap-6  md:flex-row flex-col">
          <div className="flex-1 w-full rounded-[8px]">
            <Image src={gallery2} alt="gallery img" />
          </div>
          <div className="flex-1 w-full rounded-[8px] relative">
            <Image src={gallery1} alt="gallery img" />
            <div className="absolute top-0 left-0 flex flex-col gap-2 p-8 uppercase hidden lg:block">
              <div className="font-extrabold">03</div>
              <div>Not Just a Renovation—A Revelation</div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-[8px] relative">
          <Image src={gallery} alt="gallery img" />
          <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-8 hidden lg:block">
            <div className="font-extrabold">04</div>
            <div>PROFESSIONAL GARDENING</div>
          </div>
        </div>
        <div className="flex gap-6  md:flex-row flex-col">
          <div className="flex-1 w-full rounded-[8px]">
            <Image src={gallery9} alt="gallery img" />
          </div>
          <div className="flex-1 w-full rounded-[8px]">
            <Image src={gallery4} alt="gallery img" />
          </div>
        </div>
        <div className="w-full rounded-[8px]">
          <Image src={gallery7} alt="gallery img" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
