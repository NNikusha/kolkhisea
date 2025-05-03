import Image from "next/image";
import KolkhiseaGallery from "@/app/assets/KolkhiseaGallery";
import { GalleryItem } from "@/app/types/type";
import { useState } from "react";

interface GalleryContentProps {
  galleryItems: GalleryItem[];
}

const GalleryContent = ({ galleryItems }: GalleryContentProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="container px-4 lg:px-[108px] mx-auto flex flex-col gap-6">
      {!galleryItems.length ? (
        <div className="pt-27 w-full h-full bg-[#1C1C1E] flex justify-center items-center">
          <div className="text-white text-[16px]">
            No gallery items available.
          </div>
        </div>
      ) : (
        <>
          {galleryItems[0] && (
            <div className="w-full rounded-[8px] relative">
              <Image
                src={galleryItems[0].url}
                alt="gallery img"
                width={1200}
                height={600}
                className="object-cover w-full rounded-[8px]"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />

              {imageLoaded && (
                <div className="absolute w-full flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold transition-opacity duration-500 opacity-100">
                  <div className="bg-white/10 backdrop-blur-lg py-3 px-4 md:p-4 text-[12px] sm:text-[14px] md:text-[16px] rounded-full">
                    Gallery
                  </div>
                  <KolkhiseaGallery className="w-[144px] h-[19px] md:w-[296px] md:h-[48px]" />
                  <p className="text-[12px] sm:text-[14px] md:text-[16px]">
                    IT IS NOT ONLY ABOUT BUILDING
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="flex gap-6 md:flex-row flex-col">
            {galleryItems[1] && (
              <div className="flex-1 w-full rounded-[8px] relative">
                <Image
                  src={galleryItems[1].url}
                  alt="gallery img"
                  width={600}
                  height={400}
                  className="object-cover w-full rounded-[8px]"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-8 font-normal hidden lg:block">
                  <p className="font-extrabold">01</p>
                  <p>
                    {galleryItems[1].description ||
                      "MINIMALISM AND BALANCE IN EACH DETAILS"}
                  </p>
                </div>
              </div>
            )}
            {galleryItems[2] && (
              <div className="flex-1 w-full ">
                <Image
                  src={galleryItems[2].url}
                  alt="gallery img"
                  width={600}
                  height={400}
                  className=" w-full h-full rounded-[8px]"
                  loading="lazy"
                />
              </div>
            )}
          </div>
          {galleryItems[3] && (
            <div className="w-full relative">
              <Image
                src={galleryItems[3].url}
                alt="gallery img"
                width={1200}
                height={600}
                className="object-cover w-full rounded-[8px]"
                loading="lazy"
              />
              <div className="absolute top-0 right-0 flex flex-col gap-2 p-8 text-right uppercase hidden lg:block">
                <div className="text-right font-extrabold">02</div>
                <div className="font-normal">
                  {galleryItems[3].description ||
                    "A modern space where organic textures, bold design, and comfort meet in harmony."}
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-6 md:flex-row flex-col">
            {galleryItems[4] && (
              <div className="flex-1 w-full">
                <Image
                  src={galleryItems[4].url}
                  alt="gallery img"
                  width={600}
                  height={400}
                  className="object-cover w-full rounded-[8px]"
                  loading="lazy"
                />
              </div>
            )}
            {galleryItems[5] && (
              <div className="flex-1 w-full relative">
                <Image
                  src={galleryItems[5].url}
                  alt="gallery img"
                  width={600}
                  height={400}
                  className="object-cover w-full rounded-[8px]"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 flex flex-col gap-2 p-8 uppercase hidden lg:block">
                  <div className="font-extrabold">03</div>
                  <div>
                    {galleryItems[5].description ||
                      "Not Just a Renovation—A Revelation"}
                  </div>
                </div>
              </div>
            )}
          </div>
          {galleryItems[6] && (
            <div className="w-full relative">
              <Image
                src={galleryItems[6].url}
                alt="gallery img"
                width={1200}
                height={600}
                className="object-cover w-full rounded-[8px]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-8 hidden lg:block">
                <div className="font-extrabold">04</div>
                <div>
                  {galleryItems[6].description || "PROFESSIONAL GARDENING"}
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-6 md:flex-row flex-col">
            {galleryItems[7] && (
              <div className="flex-1 w-full">
                <Image
                  src={galleryItems[7].url}
                  alt="gallery img"
                  width={600}
                  height={400}
                  className="object-cover w-full rounded-[8px]"
                  loading="lazy"
                />
              </div>
            )}
            {galleryItems[8] && (
              <div className="flex-1 w-full">
                <Image
                  src={galleryItems[8].url}
                  alt="gallery img"
                  width={600}
                  height={400}
                  className="object-cover w-full rounded-[8px]"
                  loading="lazy"
                />
              </div>
            )}
          </div>
          {galleryItems[9] && (
            <Image
              src={galleryItems[9].url}
              alt="gallery img"
              width={1200}
              height={600}
              className="object-cover w-full rounded-[8px]"
              loading="lazy"
            />
          )}
        </>
      )}
    </div>
  );
};

export default GalleryContent;
