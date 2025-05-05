"use client";
import { GalleryContentProps } from "@/app/types/type";
import GalleryMainImage from "../../atoms/GalleryMainImage/GalleryMainImage";
import Gallery3ImageSection from "../../atoms/Gallery3ImageSections/Gallery3ImageSections";


const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const GalleryContent = ({ galleryData, locale }: GalleryContentProps) => {
  const { gallery_main_image, title, content } = galleryData;
  const itemChunks = chunkArray(content, 3);

  return (
    <div className="container px-4 lg:px-[108px] mx-auto flex flex-col gap-6">
      {!gallery_main_image && !content.length ? (
        <div className="pt-27 w-full h-full bg-[#1C1C1E] flex justify-center items-center">
          <div className="text-white text-[16px]">
            No gallery items available.
          </div>
        </div>
      ) : (
        <>
          {gallery_main_image && (
            <GalleryMainImage
              url={gallery_main_image}
              description={title[locale] || ""}
              isMain
              isMainImage
              locale={locale}
            />
          )}
          {itemChunks.map((chunk, index) => (
            <Gallery3ImageSection
              key={index}
              items={chunk}
              sectionIndex={index}
              locale={locale}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default GalleryContent;
