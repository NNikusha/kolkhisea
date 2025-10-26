import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kolkhisea.ge'
  const isProduction = process.env.NODE_ENV === 'production'
  
  // Block everything in development/staging
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }

  // Production rules for KolkhiSea
  return {
    rules: [
      // General rules for all search engines
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // Block API endpoints
          '/admin/',         // Block admin areas
          '/_next/',         // Block Next.js internals
          '/private/',       // Block private content
          '/404',            // Block error pages
          '/500',
          '/login',          // Block authentication pages
          '/dashboard/',     // Block admin dashboard
        ],
        crawlDelay: 1,       // Be respectful to server
      },
      
      // Give Google and Bing special treatment for real estate
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/dashboard/',
        ],
        // No crawl delay for major search engines
      },
      
      // Block resource-draining bots that don't bring value
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot', 
          'MJ12bot',
          'DotBot',
        ],
        disallow: '/',
      },
      
      // Allow real estate specific bots
      {
        userAgent: [
          'facebookexternalhit',  // For Facebook sharing
          'Twitterbot',           // For Twitter cards
          'LinkedInBot',          // For LinkedIn sharing
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
