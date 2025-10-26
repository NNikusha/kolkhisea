import Gallery from "@/app/components/organisms/Gallery/Gallery";
import React from "react";
import { Metadata } from 'next';
import { generateGalleryMetadata } from '@/app/utils/seo-utils';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ka' | 'ru' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return generateGalleryMetadata(locale);
}

const page = () => {
  return (
    <>
      <Gallery />
      
      {/* Gallery Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "KolkhiSea Gallery",
            "description": "Photo gallery of KolkhiSea luxury apartments in Kobuleti with Black Sea views",
            "url": "https://kolkhisea.ge/gallery",
            "about": {
              "@type": "RealEstateProject",
              "name": "KolkhiSea",
              "description": "Luxury Black Sea apartments in Kobuleti"
            }
          })
        }}
      />
    </>
  );
};

export default page;
