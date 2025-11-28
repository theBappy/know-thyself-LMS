// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "know-thyself-lms.t3.storageapi.dev",
        port: "",
        protocol: "https",
      },
    ],
  },
  experimental: {
    nodeMiddleware: true,
  },
};

export default nextConfig;
