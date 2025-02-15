import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      }, {
        protocol: "https",
        hostname: "media.graphassets.com",
      }, {
        protocol: "https",
        hostname: "proex.uesc.br",
      }, {
        protocol: "https",
        hostname: "us-west-2.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
