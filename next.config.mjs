/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // <-- Ini adalah perbaikan typo (sebelumnya 'httpsAN')
        hostname: 'api.builder.io',
        port: '',
        pathname: '/api/v1/image/assets/**',
      },
    ],
  },
};

export default nextConfig;