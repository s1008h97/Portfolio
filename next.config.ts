import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const config: NextConfig = {
  output: "export",
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default config;
