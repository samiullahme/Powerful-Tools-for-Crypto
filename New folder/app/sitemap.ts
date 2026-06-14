import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';
import { categories, toolsRegistry } from '@/lib/tools-registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/tools',
    '/about',
    '/blog',
    '/contact',
    '/sitemap',
    '/privacy-policy',
    '/terms-of-use',
    '/cookie-policy',
    '/disclaimer',
    '/dmca',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' || path === '/tools' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/tools' ? 0.9 : 0.6,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/tools/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const toolRoutes: MetadataRoute.Sitemap = toolsRegistry.map((tool) => ({
    url: `${base}/tools/${tool.category}/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes, ...blogRoutes];
}
