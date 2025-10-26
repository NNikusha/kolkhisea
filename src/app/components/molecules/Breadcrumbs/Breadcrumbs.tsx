'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  locale?: 'en' | 'ka' | 'ru';
}

const Breadcrumbs = ({ items, locale = 'en' }: BreadcrumbsProps) => {
  const pathname = usePathname();
  const t = useTranslations('Language');
  
  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Always start with home
    breadcrumbs.push({
      name: t('MainPage') || 'Home',
      href: `/${locale}`
    });
    
    // Map path segments to breadcrumb names
    const pathMap: Record<string, string> = {
      'about-project': t('AboutProject') || 'About Project',
      'about-us': t('AboutUs') || 'About Us',
      'apartment-choose': t('ChooseApartment') || 'Choose Apartment',
      'apartment-types': 'Apartment Types',
      'gallery': 'Gallery',
      'contact': t('Contacts') || 'Contact',
      'apartments': 'Apartments'
    };
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      // Skip locale segment
      if (index === 0 && ['en', 'ka', 'ru'].includes(segment)) {
        return;
      }
      
      currentPath += `/${segment}`;
      const name = pathMap[segment] || segment.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      breadcrumbs.push({
        name,
        href: `/${locale}${currentPath}`
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();
  
  // Don't show breadcrumbs on homepage
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://kolkhisea.ge${item.href}`
    }))
  };

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav 
        aria-label="Breadcrumb" 
        className="py-4 px-4 lg:px-8 bg-gray-50"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li 
              key={index}
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
              className="flex items-center"
            >
              {index < breadcrumbItems.length - 1 ? (
                <>
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  <svg
                    className="w-4 h-4 mx-2 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span 
                    className="text-gray-500 font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                  <meta itemProp="position" content={String(index + 1)} />
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
