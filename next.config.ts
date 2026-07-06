import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      // API routes: no caching
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
      // Tool pages: cache with SWR revalidation
      {
        source: '/tools/:category/:tool',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/tools/:category',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/tools',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      // Blog posts: cache with SWR revalidation
      {
        source: '/blog/:slug',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      // Global: mark all public pages as indexable (safe default; individual pages can override).
      {
        source: '/((?!api).*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },
};

export default nextConfig;
