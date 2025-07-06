import KolkhiseaGallery from "@/app/assets/KolkhiseaGallery";
import { GalleryItemProps } from "@/app/types/type";
import Image from "next/image";
import { useState } from "react";
import translations from "@/messages/translations";

const GalleryMainImage = ({
  url,
  description,
  isMain = false,
  index = 0,
  isMainImage = false,
  locale = "en",
}: GalleryItemProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCaptionPosition = (index: number, isMain: boolean) => {
    if (!isMain) {
      return index % 3 === 1 ? "bottom-0 left-0" : "top-0 right-0 text-right";
    }
    return "top-0 right-0 text-right";
  };

  const t =
    translations[locale as keyof typeof translations]?.Language ||
    translations.en.Language;

  return (
    <div
      className={`relative ${
        isMain ? "w-full" : "flex-1 w-full"
      } rounded-[8px]`}
    >
      <Image
        src={url}
        alt="gallery img"
        width={isMain ? 1200 : 600}
        height={isMain ? 600 : 600}
        className={`object-cover w-full rounded-[8px] ${
          !isMain ? "md:h-[600px] h-[405px]" : ""
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      {isMainImage && imageLoaded && (
        <div className="absolute w-full flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold transition-opacity duration-500 opacity-100">
          <div className="bg-white/10 backdrop-blur-lg py-3 px-4 md:p-4 text-[12px] sm:text-[14px] md:text-[16px] rounded-full font-normal">
            {t.Gallery}
          </div>
          <KolkhiseaGallery className="w-[144px] h-[19px] md:w-[296px] md:h-[48px]" />
          <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal">
            {t.NotOnlyAboutBuilding}
          </p>
        </div>
      )}
      {!isMainImage && index !== undefined && description && (
        <div
          className={`absolute ${getCaptionPosition(
            index,
            isMain
          )} flex flex-col gap-2 p-8 font-normal hidden lg:block uppercase`}
        >
          <p className="font-extrabold">{index.toString().padStart(2, "0")}</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryMainImage;
