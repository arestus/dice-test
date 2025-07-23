import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configure for GitHub Pages subdirectory deployment
  // Uncomment and modify the line below if deploying to a repository subdirectory
  // basePath: '/next-dice',
  // assetPrefix: '/next-dice/',
};

export default nextConfig;
