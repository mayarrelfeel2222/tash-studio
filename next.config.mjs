/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com', 'v0.blob.com', 'cdn.mariatash.com', 'i.postimg.cc'],
    unoptimized: true,
  },
};

export default nextConfig;

