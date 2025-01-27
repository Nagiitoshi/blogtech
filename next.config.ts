import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'unsplash.com',
      'images.unsplash.com',
      'media.graphassets.com',
      'us-west-2.graphassets.com', // Adicionado
    ],
  },
};

export default nextConfig;

