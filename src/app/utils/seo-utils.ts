import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  images?: string[];
  type?: 'website' | 'article';
  locale?: 'en' | 'ka' | 'ru';
}

// Base keywords for KolkhiSea that should appear on every page
const baseKeywords = [
  'KolkhiSea',
  'Black Sea apartments',
  'Kobuleti real estate',
  'luxury apartments Georgia',
  'Kolkhi culture',
  'Colchian heritage',
  'beachfront property Georgia',
  'apartments near Batumi',
  'Georgia coastal living',
  'Black Sea investment',
];

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonical,
  images = ['/hero-kolkhisea.jpg'],
  type = 'website',
  locale = 'en'
}: SEOProps): Metadata {
  
  const localeMap = {
    en: 'en_US',
    ka: 'ka_GE', 
    ru: 'ru_RU'
  };

  const baseUrl = 'https://kolkhisea.ge';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    openGraph: {
      title,
      description,
      type,
      locale: localeMap[locale],
      url: fullCanonical,
      images: images.map(img => ({
        url: img.startsWith('http') ? img : `${baseUrl}${img}`,
        width: 1200,
        height: 630,
        alt: title
      })),
      siteName: 'KolkhiSea'
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: images[0].startsWith('http') ? images[0] : `${baseUrl}${images[0]}`,
      creator: '@kolkhisea',
    },
    alternates: fullCanonical ? { 
      canonical: fullCanonical,
      languages: {
        'en': `${baseUrl}/en${canonical?.replace(`/${locale}`, '') || ''}`,
        'ka': `${baseUrl}/ka${canonical?.replace(`/${locale}`, '') || ''}`,
        'ru': `${baseUrl}/ru${canonical?.replace(`/${locale}`, '') || ''}`,
      }
    } : undefined,
    other: {
      'geo.region': 'GE-AJ',
      'geo.placename': 'Kobuleti, Adjara, Georgia',
      'geo.position': '41.8225;41.7767',
    }
  };
}

// Specific metadata generators for different page types
export function generateApartmentMetadata(apartmentData: {
  title: string;
  description: string;
  price?: string;
  area?: string;
  bedrooms?: number;
  images?: string[];
  locale?: 'en' | 'ka' | 'ru';
}): Metadata {
  const { title, description, price, area, bedrooms, images, locale = 'en' } = apartmentData;
  
  const enhancedTitle = `${title} - ${price ? `${price} | ` : ''}${area ? `${area}m² | ` : ''}${bedrooms ? `${bedrooms} Bedrooms | ` : ''}KolkhiSea`;
  
  const enhancedDescription = `${description} ${price ? `Price: ${price}.` : ''} ${area ? `Area: ${area}m².` : ''} ${bedrooms ? `${bedrooms} bedrooms.` : ''} Luxury Black Sea apartment in Kobuleti with panoramic sea views.`;

  return generatePageMetadata({
    title: enhancedTitle,
    description: enhancedDescription,
    keywords: [
      'apartment for sale Kobuleti',
      'Black Sea view apartment',
      'luxury apartment Georgia',
      price ? `${price} apartment` : '',
      area ? `${area}m² apartment` : '',
      bedrooms ? `${bedrooms} bedroom apartment` : '',
    ].filter(Boolean),
    images: images || ['/apartment-default.jpg'],
    type: 'article',
    locale
  });
}

export function generateGalleryMetadata(locale: 'en' | 'ka' | 'ru' = 'en'): Metadata {
  const titles = {
    en: 'Gallery - KolkhiSea Luxury Apartments & Black Sea Views',
    ka: 'გალერეა - KolkhiSea ლუქს აპარტამენტები და შავი ზღვის ხედები',
    ru: 'Галерея - KolkhiSea Роскошные Апартаменты и Виды на Черное Море'
  };

  const descriptions = {
    en: 'Explore stunning photos of KolkhiSea luxury apartments in Kobuleti. See panoramic Black Sea views, modern interiors, and Kolkhi-inspired architecture.',
    ka: 'იხილეთ KolkhiSea-ს ლუქს აპარტამენტების განსაცვიფრებელი ფოტოები ქობულეთში. ნახეთ შავი ზღვის პანორამული ხედები, თანამედროვე ინტერიერები და კოლხური არქიტექტურა.',
    ru: 'Изучите потрясающие фотографии роскошных апартаментов KolkhiSea в Кобулети. Посмотрите панорамные виды на Черное море, современные интерьеры и архитектуру, вдохновленную колхидской культурой.'
  };

  return generatePageMetadata({
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      'KolkhiSea gallery',
      'apartment photos Kobuleti',
      'Black Sea view photos',
      'luxury apartment interior',
      'Kolkhi architecture photos',
      'Georgia real estate gallery'
    ],
    canonical: `/${locale}/gallery`,
    images: ['/gallery-hero.jpg', '/apartment-interior.jpg', '/sea-view.jpg'],
    locale
  });
}

export function generateContactMetadata(locale: 'en' | 'ka' | 'ru' = 'en'): Metadata {
  const titles = {
    en: 'Contact KolkhiSea - Luxury Black Sea Apartments in Kobuleti',
    ka: 'დაუკავშირდით KolkhiSea-ს - ლუქს აპარტამენტები ქობულეთში',
    ru: 'Связаться с KolkhiSea - Роскошные Апартаменты в Кобулети'
  };

  const descriptions = {
    en: 'Contact KolkhiSea for luxury Black Sea apartments in Kobuleti. Get information about prices, availability, and investment opportunities in Georgia.',
    ka: 'დაუკავშირდით KolkhiSea-ს შავი ზღვის ლუქს აპარტამენტებისთვის ქობულეთში. მიიღეთ ინფორმაცია ფასების, ხელმისაწვდომობისა და საინვესტიციო შესაძლებლობების შესახებ.',
    ru: 'Свяжитесь с KolkhiSea по поводу роскошных апартаментов на Черном море в Кобулети. Получите информацию о ценах, наличии и инвестиционных возможностях в Грузии.'
  };

  return generatePageMetadata({
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      'contact KolkhiSea',
      'apartment inquiry Kobuleti',
      'Black Sea property contact',
      'Georgia real estate contact',
      'luxury apartment sales',
      'investment inquiry Georgia'
    ],
    canonical: `/${locale}/contact`,
    locale
  });
}
