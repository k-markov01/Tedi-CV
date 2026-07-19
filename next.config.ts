import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Tedi-CV",
  assetPrefix: "/Tedi-CV/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
