import type { NextConfig } from "next";

// GitHub Pages 에서는 사이트가 /<저장소 이름>/ 아래에 놓입니다.
// Actions 에서는 저장소 이름으로 자동 계산하고, 로컬 개발에서는 빈 값입니다.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.GITHUB_ACTIONS && repoName ? `/${repoName}` : "");

const config: NextConfig = {
  output: "export",
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  // public 폴더 이미지 경로(asset 헬퍼)에서 같은 값을 쓰도록 노출합니다.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default config;
