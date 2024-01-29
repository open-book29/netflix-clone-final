/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'http',
        hostname: 'uhdtv.io',
      },
      {
        protocol: 'https',
        hostname: 'mango.blender.org',
      },
      {
        protocol: 'https',
        hostname: 'download.blender.org',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
    ],
  },
}

module.exports = nextConfig
