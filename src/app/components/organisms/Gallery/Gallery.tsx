"use client";

import { useState, useEffect } from "react";
import { fetchGallery } from "@/app/hooks/axios";
import GalleryContent from "../../molecules/GalleryContent/GalleryContent";
import { GalleryItem, Locale } from "@/app/types/type";
import { useLocale } from "next-intl";

interface GalleryItemApi {
  image_url: string;
  text?: Record<string, string>;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale() as Locale;

  useEffect(() => {
    const loadGallery = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGallery();
        console.log("Fetched gallery data:", data);

        if (!data || !data.content) {
          throw new Error("Invalid gallery data structure");
        }

        const transformedItems: GalleryItem[] = [
          // მთავარი სურათი
          {
            id: data.id || 0,
            url: data.gallery_main_image,
            title: data.title?.[locale] || "Main Gallery",
            description: data.title?.[locale] || "Main Gallery",
          },
          // სხვა სურათები
          ...data.content.map((item: GalleryItemApi, index: number) => ({
            id: index + 1,
            url: item.image_url,
            title: item.text?.[locale] || `Image ${index + 1}`,
            description:
              item.text?.[locale] || `Description for image ${index + 1}`,
          })),
        ];

        console.log("Transformed gallery items:", transformedItems);
        setGalleryItems(transformedItems);
      } catch (error) {
        console.error("Failed to load gallery items:", error);
        setError("Failed to load gallery. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    loadGallery();
  }, [locale]);

  return (
    <div className="bg-[#1C1C1E]">
      {isLoading ? (
        <div className=" w-full h-screen bg-[#1C1C1E] flex justify-center items-center">
          <div className="flex justify-center items-center h-[250px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
          </div>
        </div>
      ) : error ? (
        <div className=" w-full h-full bg-[#1C1C1E] flex justify-center items-center">
          <div className="text-white text-[16px]">{error}</div>
        </div>
      ) : (
        <div className="pt-27">
          <GalleryContent galleryItems={galleryItems} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
