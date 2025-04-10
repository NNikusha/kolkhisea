import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Specify the path to the request config file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://admin.kolkhisea.ge/api';
    const baseApiUrl = apiUrl.endsWith('/api') 
      ? apiUrl.slice(0, -4) 
      : apiUrl;

    return [
      {
        source: '/api/:path*',
        destination: `${baseApiUrl}/api/:path*`
      },
    ];
  },

  images: {
    domains: ['admin.kolkhisea.ge'], // added your production domain
  },
};

export default withNextIntl(nextConfig);
