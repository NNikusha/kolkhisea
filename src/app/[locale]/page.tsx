import React from 'react';
import MainPage from '../components/organisms/MainPage/MainPage';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ka' | 'ru' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  
  // Homepage gets the default metadata from layout, but we can enhance it
  const titles = {
    en: 'KolkhiSea — Luxury Black Sea Apartments in Kobuleti on the Ancient Land of Colchis',
    ka: 'KolkhiSea — ლუქს აპარტამენტები ქობულეთში უძველეს კოლხეთის მიწაზე',
    ru: 'KolkhiSea — Роскошные апартаменты на Черном море в Кобулети на древней земле Колхиды'
  };

  const descriptions = {
    en: 'Discover KolkhiSea - luxury apartments for sale in Kobuleti with panoramic Black Sea views. Modern living inspired by ancient Kolkhi culture and Colchian heritage. Premium beachfront property in Georgia.',
    ka: 'აღმოაჩინეთ KolkhiSea - ლუქს აპარტამენტები გასაყიდად ქობულეთში შავი ზღვის პანორამული ხედებით. თანამედროვე ცხოვრება შთაგონებული უძველესი კოლხური კულტურითა და მემკვიდრეობით.',
    ru: 'Откройте для себя KolkhiSea - роскошные апартаменты на продажу в Кобулети с панорамными видами на Черное море. Современная жизнь, вдохновленная древней колхидской культурой и наследием.'
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://kolkhisea.ge/${locale}`,
      languages: {
        'en': 'https://kolkhisea.ge/en',
        'ka': 'https://kolkhisea.ge/ka',
        'ru': 'https://kolkhisea.ge/ru',
      }
    }
  };
}

const Page = () => {
  return (
   <>
     <MainPage/>
     
     {/* Homepage Structured Data */}
     <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{
         __html: JSON.stringify({
           "@context": "https://schema.org",
           "@type": "WebPage",
           "@id": "https://kolkhisea.ge/#homepage",
           "name": "KolkhiSea - Luxury Black Sea Apartments",
           "description": "Luxury apartments in Kobuleti with Black Sea views and ancient Kolkhi heritage",
           "url": "https://kolkhisea.ge",
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
             "offers": {
               "@type": "Offer",
               "category": "Real Estate",
               "itemOffered": {
                 "@type": "Apartment",
                 "name": "Luxury Black Sea Apartments",
                 "amenityFeature": [
                   {
                     "@type": "LocationFeatureSpecification",
                     "name": "Sea View"
                   },
                   {
                     "@type": "LocationFeatureSpecification", 
                     "name": "Beachfront Location"
                   },
                   {
                     "@type": "LocationFeatureSpecification",
                     "name": "Modern Architecture"
                   }
                 ]
               }
             }
           }
         })
       }}
     />
   </>
  );
};

export default Page;