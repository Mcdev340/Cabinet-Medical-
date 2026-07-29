import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [],
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;