import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Adiciona o domínio de imagens externas permitidas
  },
  reactStrictMode: true,
};

export default nextConfig;
