import React from 'react';
import AboutProject from '@/app/components/organisms/AboutProject/AboutProject';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/utils/seo-utils';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ka' | 'ru' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: 'About KolkhiSea Project - Luxury Black Sea Apartments in Kobuleti on Ancient Colchis Land',
    ka: 'KolkhiSea პროექტის შესახებ - ლუქს აპარტამენტები ქობულეთში უძველეს კოლხეთის მიწაზე',
    ru: 'О проекте KolkhiSea - Роскошные апартаменты на Черном море в Кобулети на древней земле Колхиды'
  };

  const descriptions = {
    en: 'Discover the KolkhiSea project - luxury apartments for sale in Kobuleti with Black Sea views and historical heritage. Modern architecture inspired by ancient Kolkhi culture on archaeological discovery site.',
    ka: 'აღმოაჩინეთ KolkhiSea პროექტი - ლუქს აპარტამენტები გასაყიდად ქობულეთში შავი ზღვის ხედებითა და ისტორიული მემკვიდრეობით. თანამედროვე არქიტექტურა შთაგონებული უძველესი კოლხური კულტურით.',
    ru: 'Откройте для себя проект KolkhiSea - роскошные апартаменты на продажу в Кобулети с видами на Черное море и историческим наследием. Современная архитектура, вдохновленная древней колхидской культурой.'
  };

  return generatePageMetadata({
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      'KolkhiSea project',
      'about KolkhiSea',
      'Kobuleti luxury development',
      'Black Sea apartments project',
      'Colchian heritage apartments',
      'archaeological site development',
      'Kolkhi culture real estate',
      'ancient Colchis apartments',
      'historical site Kobuleti',
      'cultural heritage real estate Georgia',
      'luxury beachfront development',
      'modern architecture Kolkhi inspired'
    ],
    canonical: `/${locale}/about-project`,
    images: ['/about-project-hero.jpg', '/kolkhi-heritage.jpg', '/project-overview.jpg'],
    locale
  });
}

const page = () => {
    return (
     <>
        <AboutProject/>
        
        {/* About Project Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About KolkhiSea Project",
              "description": "Learn about KolkhiSea luxury apartment development in Kobuleti, inspired by ancient Kolkhi culture",
              "url": "https://kolkhisea.ge/about-project",
              "mainEntity": {
                "@type": "RealEstateProject",
                "name": "KolkhiSea",
                "description": "Luxury Black Sea apartments in Kobuleti on ancient Colchis archaeological site",
                "location": {
                  "@type": "Place",
                  "name": "Kobuleti, Adjara, Georgia",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 41.8225,
                    "longitude": 41.7767
                  }
                },
                "developer": {
                  "@type": "Organization",
                  "name": "KolkhiSea Development"
                }
              }
            })
          }}
        />
     </>
    );
};

export default page;