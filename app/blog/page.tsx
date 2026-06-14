import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { getAllPublishedPosts } from '@/lib/blog-data';
import { withCanonical } from '@/lib/seo';
import { glassCardStatic, shell } from '@/lib/ui-classes';

export const metadata: Metadata = withCanonical('/blog', {
  title: 'Blog',
  description:
    'Guides, tutorials, and practical insights on crypto trading math, Indian finance compliance, developer productivity, and getting the most from free online tools.',
  openGraph: {
    title: 'CryptoRedar Blog',
    description: 'Expert guides on crypto, finance, and developer tools.',
  },
});

export default async function BlogPage() {
  const posts = await getAllPublishedPosts();
  return (
    <>
      <ContentPageLayout
        title="CryptoRedar Blog"
        subtitle="Practical guides for traders, finance professionals, and developers — written to help you use our tools with confidence."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        wide
      >
        <p>
          Our editorial team publishes in-depth tutorials, formula breakdowns, and workflow guides aligned with
          the calculators and utilities on CryptoRedar. Every article is reviewed for accuracy and updated when
          regulations or best practices change.
        </p>
        <p>
          Subscribe via <Link href="/feed.xml">RSS</Link> to receive new posts as they are published.
        </p>
      </ContentPageLayout>

      <div className={`${shell} pb-20 -mt-10`}>
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`${glassCardStatic} p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300 group`}
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#FF9500] mb-3">
                {post.category}
              </span>
              <h2 className="text-lg font-bold text-[#0F172A] leading-snug mb-3 group-hover:text-[#FF9500] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed flex-grow mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-black/[0.06]">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
