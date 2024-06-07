/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    basePath:isProd ?  '/wynnie_next' : '',
    assetPrefix:isProd ? '/wynnie_next' : '',
    images: {
      unoptimized: true,
      formats: ['image/avif', 'image/webp'],
    },
    // theme: {
    //   screens: {

    //   }
    // },
    async redirects() {
      return [
        {
          source: "/",
          destination: "/Home",
          permanent: true,
        }
      ]
    },
    // async rewrites() {
    //   return [
    //     {
    //       source: '/mafa_next',
    //       destination: '/mafa_next/Home',
    //       permanent: true, // Set this to true for permanent redirects (HTTP 301)
    //     },
    //     // Add more redirect rules if needed
    //   ];
    // },
    async headers() {
      return [
        {
          // Set the favicon path
          source: '/favicon.ico',
          headers: [
            {
              key: 'Content-Type',
              value: 'image/x-icon',
            },
          ],
        },
      ];
    },
  };
  
module.exports = nextConfig
