import AboutContact from '@/app/components/organisms/AboutContact/AboutContact'
import React from 'react'
import { Metadata } from 'next';
import { generateContactMetadata } from '@/app/utils/seo-utils';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ka' | 'ru' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return generateContactMetadata(locale);
}

const page = () => {
  return (
    <>
      <AboutContact/>
      
      {/* Contact Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact KolkhiSea",
            "description": "Contact KolkhiSea for luxury Black Sea apartments in Kobuleti",
            "url": "https://kolkhisea.ge/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "KolkhiSea Development",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "areaServed": "GE",
                "availableLanguage": ["English", "Georgian", "Russian"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kobuleti",
                "addressRegion": "Adjara",
                "addressCountry": "GE"
              }
            }
          })
        }}
      />
    </>
  )
}

export default page