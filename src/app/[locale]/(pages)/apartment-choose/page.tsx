import ApartmentChoose from "@/app/components/atoms/ApartmentChoose/ApartmentChoose";
import React from "react";
import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/utils/seo-utils';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ka' | 'ru' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'Choose Your Apartment - KolkhiSea Luxury Black Sea Apartments in Kobuleti',
    ka: 'აირჩიეთ თქვენი აპარტამენტი - KolkhiSea ლუქს აპარტამენტები ქობულეთში',
    ru: 'Выберите свою квартиру - KolkhiSea Роскошные апартаменты в Кобулети'
  };

  const descriptions = {
    en: 'Choose your perfect apartment at KolkhiSea - luxury Black Sea apartments for sale in Kobuleti with panoramic sea views. Various layouts and sizes available with Kolkhi-inspired design.',
    ka: 'აირჩიეთ თქვენი იდეალური აპარტამენტი KolkhiSea-ში - ლუქს აპარტამენტები გასაყიდად ქობულეთში შავი ზღვის პანორამული ხედებით. ხელმისაწვდომია სხვადასხვა განლაგება და ზომები.',
    ru: 'Выберите свою идеальную квартиру в KolkhiSea - роскошные апартаменты на продажу в Кобулети с панорамными видами на море. Доступны различные планировки и размеры.'
  };

  return generatePageMetadata({
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      'choose apartment KolkhiSea',
      'apartment selection Kobuleti',
      'Black Sea apartment layouts',
      'luxury apartment options',
      'sea view apartments for sale',
      'apartment floor plans Kobuleti',
      'KolkhiSea apartment types',
      'beachfront apartment selection',
      'Georgia luxury apartment choice',
      'panoramic sea view apartments'
    ],
    canonical: `/${locale}/apartment-choose`,
    images: ['/apartment-selection.jpg', '/floor-plans.jpg', '/sea-view-apartments.jpg'],
    locale
  });
}

const Page = () => {
  return (
    <div>
      <ApartmentChoose />
      
      {/* Apartment Selection Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Choose Your Apartment - KolkhiSea",
            "description": "Select your perfect luxury apartment at KolkhiSea with Black Sea views",
            "url": "https://kolkhisea.ge/apartment-choose",
            "about": {
              "@type": "RealEstateProject",
              "name": "KolkhiSea",
              "offers": {
                "@type": "Offer",
                "category": "Real Estate",
                "itemOffered": {
                  "@type": "Apartment",
                  "name": "Luxury Black Sea Apartments"
                }
              }
            }
          })
        }}
      />
    </div>
  );
};

export default Page;