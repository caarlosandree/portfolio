import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubPages ? '/PortfolioNovo' : '');

const nextConfig: NextConfig = {
  ...(isGitHubPages && { output: 'export' as const }),
  ...(basePath && { basePath, assetPrefix: `${basePath}/` }),
  images: {
    ...(isGitHubPages && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
