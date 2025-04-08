// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
    
    const baseApiUrl = apiUrl.endsWith('/api') 
      ? apiUrl.slice(0, -4) 
      : apiUrl;
      
    return [
      {
        source: '/api/:path*',
        destination: `${baseApiUrl}/api/:path*`, 
      },
    ];
  },
  
  images: {
    domains: ['127.0.0.1', 'localhost'],
  },
};

export default nextConfig;