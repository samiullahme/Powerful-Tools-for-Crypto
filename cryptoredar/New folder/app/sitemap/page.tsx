import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';
import { categories, toolsRegistry } from '@/lib/tools-registry';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete HTML sitemap of CryptoRedar — all tools, categories, blog posts, and site pages.',
};

const staticPages = [
  { href: '/', label: 'Home' },
  { href: '/tools', label: 'All Tools' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-use', label: 'Terms of Use' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/dmca', label: 'DMCA Policy' },
  { href: '/feed.xml', label: 'RSS Feed' },
];

export default function SitemapPage() {
  const toolsByCategory = categories.map((cat) => ({
    ...cat,
    tools: toolsRegistry.filter((t) => t.category === cat.slug),
  }));

  return (
    <ContentPageLayout
      title="Sitemap"
      subtitle="Browse every page on CryptoRedar. For search engines, an XML sitemap is also available at /sitemap.xml."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sitemap' }]}
      wide
    >
      <section className="not-prose mb-10">
        <h2 className="text-lg font-bold text-[#0F172A] mb-4">Main Pages</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {staticPages.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="text-sm text-[#FF9500] hover:underline font-medium">
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {toolsByCategory.map((cat) => (
        <section key={cat.slug} className="not-prose mb-10">
          <h2 className="text-lg font-bold text-[#0F172A] mb-1">
            <Link href={`/tools/${cat.slug}`} className="hover:text-[#FF9500] transition-colors">
              {cat.label}
            </Link>
          </h2>
          <ul className="grid sm:grid-cols-2 gap-1.5 mt-3">
            {cat.tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/tools/${cat.slug}/${tool.slug}`}
                  className="text-sm text-[#64748B] hover:text-[#FF9500] transition-colors"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="not-prose">
        <h2 className="text-lg font-bold text-[#0F172A] mb-4">Blog Articles</h2>
        <ul className="space-y-2">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-sm text-[#FF9500] hover:underline font-medium">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPageLayout>
  );
}
