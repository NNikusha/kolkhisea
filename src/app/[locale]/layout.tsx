import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HeaderNav from '@/app/components/molecules/headerNav/HeaderNav';
import Footer from '@/app/components/organisms/Footer/Footer';
import GeorgianUppercaseProvider from '@/app/components/providers/GeorgianUppercaseProvider';
import '@/app/globals.css';
import Script from "next/script";
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://kolkhisea.ge'),
  title: {
    default: "KolkhiSea — Luxury Black Sea Apartments in Kobuleti on the Ancient Land of Colchis",
    template: "%s | KolkhiSea - Luxury Black Sea Apartments",
  },
  description: "Discover KolkhiSea - luxury apartments for sale in Kobuleti with panoramic Black Sea views. Modern living inspired by ancient Kolkhi culture and Colchian heritage. Premium beachfront property in Georgia.",
  keywords: [
    "Black Sea apartments",
    "KolkhiSea",
    "Kolkhi Sea project", 
    "Batumi real estate",
    "Kobuleti development",
    "luxury apartments Georgia",
    "seafront apartments Georgia",
    "Black Sea property for sale",
    "modern apartments by the sea",
    "Kolkhi culture site",
    "Colchian heritage",
    "ancient Colchis",
    "archaeological discovery Georgia",
    "historical site development",
    "Georgia coastal living",
    "new residential building Black Sea",
    "real estate investment Georgia",
    "modern architecture Georgia",
    "smart home apartments Georgia",
    "beachfront apartments Kobuleti",
    "apartments near Batumi",
    "investment property Georgia",
    "Kolkhi civilization",
    "Colchian culture archaeology",
    "coastal apartments Georgia",
    "cultural heritage real estate",
    "sustainable real estate Georgia",
    "Kolkhi history apartments",
    "Black Sea view apartments",
    "luxury property Georgia",
    "real estate by the sea",
    "apartments with panoramic sea view",
    "Black Sea investment opportunity",
    "Georgia tourism development",
    "Kolkheti region history",
    "discover ancient Colchis",
    "new construction Kobuleti",
    "KolkhiSea project Georgia",
    "coastal development project",
    "premium apartments Black Sea",
    "historic site near Batumi",
    "archaeology and architecture Georgia",
    "Colchian artifacts discovery",
    "Kolkhi civilization ruins",
    "ancient Georgia history",
    "luxury living Black Sea coast",
    "Kolkhi inspired architecture",
    "eco-friendly apartments Georgia",
    "Batumi coastal projects",
    "Georgia property investment 2025",
    "real estate with cultural value",
    "beachfront lifestyle Georgia",
    "apartments near boulevard Kobuleti",
    "Kolkhi heritage revival",
    "cultural tourism Georgia",
    "sea view homes Georgia"
  ],
  authors: [{ name: "KolkhiSea Development" }],
  creator: "KolkhiSea Development",
  publisher: "KolkhiSea Development",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ka_GE", "ru_RU"],
    url: "https://kolkhisea.ge",
    title: "KolkhiSea — Luxury Black Sea Apartments in Kobuleti on Ancient Colchis Land",
    description: "Discover luxury apartments for sale in Kobuleti with Black Sea views. Modern living inspired by ancient Kolkhi culture. Premium beachfront property in Georgia.",
    images: [
      {
        url: "/hero-kolkhisea.jpg",
        width: 1200,
        height: 630,
        alt: "KolkhiSea luxury Black Sea apartments in Kobuleti with panoramic sea views and modern architecture",
      },
      {
        url: "/kolkhisea-building.jpg", 
        width: 1200,
        height: 630,
        alt: "KolkhiSea residential building exterior with Black Sea coastline and Kolkhi-inspired design",
      }
    ],
    siteName: "KolkhiSea",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KolkhiSea — Luxury Black Sea Apartments in Kobuleti',
    description: 'Discover luxury apartments with Black Sea views in Kobuleti. Modern living inspired by ancient Kolkhi culture.',
    images: ['/hero-kolkhisea.jpg'],
    creator: '@kolkhisea',
  },
  alternates: {
    canonical: "https://kolkhisea.ge",
    languages: {
      'en': 'https://kolkhisea.ge/en',
      'ka': 'https://kolkhisea.ge/ka', 
      'ru': 'https://kolkhisea.ge/ru',
    },
  },
  other: {
    'theme-color': '#285260',
    'msapplication-TileColor': '#285260',
    'geo.region': 'GE-AJ',
    'geo.placename': 'Kobuleti, Adjara, Georgia',
    'geo.position': '41.8225;41.7767',
    'ICBM': '41.8225, 41.7767',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <html lang={locale}>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/hero-kolkhisea.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link rel="dns-prefetch" href="//admin.kolkhisea.ge" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://kolkhisea.ge/#organization",
              "name": "KolkhiSea",
              "url": "https://kolkhisea.ge",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kolkhisea.ge/kolkhisea-logo.png",
                "width": 800,
                "height": 600
              },
              "description": "Luxury Black Sea apartments in Kobuleti inspired by ancient Kolkhi culture and Colchian heritage",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kobuleti",
                "addressRegion": "Adjara",
                "addressCountry": "GE"
              },
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Kobuleti, Georgia"
                },
                {
                  "@type": "Place", 
                  "name": "Batumi, Georgia"
                },
                {
                  "@type": "Place",
                  "name": "Adjara, Georgia"
                }
              ],
              "serviceType": [
                "Luxury Apartment Sales",
                "Real Estate Development",
                "Property Investment",
                "Beachfront Properties"
              ]
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://kolkhisea.ge/#website",
              "url": "https://kolkhisea.ge",
              "name": "KolkhiSea",
              "description": "Luxury Black Sea apartments in Kobuleti on the ancient land of Colchis",
              "publisher": {
                "@id": "https://kolkhisea.ge/#organization"
              },
              "inLanguage": ["en-US", "ka-GE", "ru-RU"]
            })
          }}
        />
        
        {/* Real Estate Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "@id": "https://kolkhisea.ge/#realestate",
              "name": "KolkhiSea Development",
              "url": "https://kolkhisea.ge",
              "description": "Premium real estate development specializing in luxury Black Sea apartments with cultural heritage inspiration",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kobuleti",
                "addressRegion": "Adjara",
                "addressCountry": "GE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.8225,
                "longitude": 41.7767
              },
              "areaServed": {
                "@type": "Place",
                "name": "Black Sea Coast, Georgia"
              }
            })
          }}
        />
      </head>
      <body data-locale={locale}>
        {/* End Google Analytics */}
        <NextIntlClientProvider locale={locale}>
          <GeorgianUppercaseProvider />
          <HeaderNav />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DJHG3RS987"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJHG3RS987');
          `}
        </Script>
      </body>
    </html>
  );
}
