import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContentPageLayout from '@/components/ContentPageLayout';
import AdSlot from '@/components/AdSlot';
import BlogPostContent from '@/components/BlogPostContent';
import { getAllPostSlugs, getBlogPostBySlug } from '@/lib/blog-data';
import { siteConfig } from '@/lib/site-config';
import { canonicalUrl } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getAllPostSlugs()).map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Article Not Found' };
  const url = post.canonicalUrl ?? canonicalUrl(`/blog/${post.slug}`);
  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
    twitter: {
      card: post.twitterImage ? 'summary_large_image' : 'summary',
      title,
      description,
      images: post.twitterImage ? [post.twitterImage] : undefined,
    },
  };
}

const articleBodies: Record<string, ReactNode> = {
  'how-to-calculate-crypto-profit-accurately': (
    <>
      <p>
        Calculating cryptocurrency profit sounds simple — sell price minus buy price — but real portfolios
        rarely fit on a napkin. Exchange fees, partial fills, transfers between wallets, and tax reporting
        requirements all affect your true return. This guide walks through a repeatable method you can apply
        whether you hold Bitcoin, Ethereum, or altcoins on centralized or decentralized venues.
      </p>
      <h2>Step 1: Define Your Cost Basis</h2>
      <p>
        Your <strong>cost basis</strong> is what you paid to acquire an asset, including brokerage or network
        fees at purchase. If you bought 0.5 BTC at $60,000 and paid a $25 fee, your basis is $30,025 — not
        $30,000. Use our{' '}
        <Link href="/tools/crypto/crypto-profit-calculator">Crypto Profit Calculator</Link> to enter buy price,
        quantity, and fees in one pass.
      </p>
      <h2>Step 2: Account for Exit Costs</h2>
      <p>
        Selling incurs its own fees. Subtract exit fees from proceeds before comparing to basis. For active
        traders, even 0.1% per side compounds across dozens of round trips annually.
      </p>
      <h2>Step 3: Express Results as ROI</h2>
      <p>
        Absolute profit ($) tells you what you made; <strong>return on investment (%)</strong> tells you how
        efficiently you deployed capital. ROI = (Net Profit ÷ Cost Basis) × 100. Compare ROI across assets with
        different ticket sizes using our{' '}
        <Link href="/tools/crypto/crypto-roi-calculator">Crypto ROI Calculator</Link>.
      </p>
      <h2>Step 4: Plan for Tax Reporting</h2>
      <p>
        Many jurisdictions treat crypto disposals as taxable events. Estimate liability early with our{' '}
        <Link href="/tools/crypto/crypto-tax-calculator">Crypto Tax Calculator</Link> so you are not surprised
        at filing season. CryptoRedar provides estimates only — consult a qualified tax professional for
        jurisdiction-specific advice.
      </p>
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Ignoring fees on both buy and sell sides</li>
        <li>Mixing unrealized (paper) gains with realized P&amp;L</li>
        <li>Using average entry price without tracking each lot</li>
        <li>Forgetting stablecoin swaps count as disposals in some countries</li>
      </ul>
    </>
  ),
  'gst-calculator-guide-for-indian-businesses': (
    <>
      <p>
        India&apos;s Goods and Services Tax (GST) applies to most supplies of goods and services. Whether you
        invoice clients as a freelancer, run a Shopify store, or manage accounts for an SME, understanding
        inclusive vs exclusive pricing prevents costly invoice disputes and filing errors.
      </p>
      <h2>CGST, SGST, and IGST Explained</h2>
      <p>
        For intra-state sales, tax splits into <strong>Central GST (CGST)</strong> and{' '}
        <strong>State GST (SGST)</strong> — each typically half the headline rate. Inter-state supplies use{' '}
        <strong>Integrated GST (IGST)</strong> at the full rate. Our{' '}
        <Link href="/tools/finance/gst-calculator">GST Calculator</Link> handles all three modes.
      </p>
      <h2>Inclusive vs Exclusive Amounts</h2>
      <p>
        An <strong>exclusive</strong> price adds GST on top (₹1,000 + 18% = ₹1,180 total). An{' '}
        <strong>inclusive</strong> price already contains tax (₹1,000 inclusive at 18% = ₹847.46 base + ₹152.54
        GST). Always label quotes clearly on proposals and contracts.
      </p>
      <h2>Workflow for Freelancers</h2>
      <ol>
        <li>Confirm your GST registration status and applicable rate slab</li>
        <li>Calculate tax before sending invoices</li>
        <li>Reconcile monthly using GSTR-1 and GSTR-3B schedules</li>
        <li>Archive calculation snapshots for audit trails</li>
      </ol>
      <h2>When to Seek Professional Help</h2>
      <p>
        Reverse charge, composition scheme, and multi-state nexus add complexity beyond a standard calculator.
        Use CryptoRedar for day-to-day arithmetic; engage a chartered accountant for registration, filing, and
        compliance strategy.
      </p>
    </>
  ),
  'developer-tools-that-save-hours': (
    <>
      <p>
        Developer productivity is less about typing faster and more about eliminating friction: invalid JSON
        in a pipeline, a malformed JWT in staging, or regenerating UUIDs by hand. These seven utilities — all
        free on CryptoRedar — remove recurring bottlenecks from modern web workflows.
      </p>
      <h2>1. JSON Formatter &amp; Validator</h2>
      <p>
        Paste API responses, minify for production, or prettify for code review. Our{' '}
        <Link href="/tools/dev/json-formatter">JSON Formatter</Link> catches syntax errors before they reach
        CI.
      </p>
      <h2>2. JWT Decoder</h2>
      <p>
        Inspect header and payload claims without sending tokens to external services. Debug expiry, issuer, and
        scope issues locally with the <Link href="/tools/dev/jwt-decoder">JWT Decoder</Link>.
      </p>
      <h2>3. Base64 Encoder / Decoder</h2>
      <p>
        Encode binary-safe strings for data URLs, basic auth headers, and test fixtures using the{' '}
        <Link href="/tools/dev/base64-encoder-decoder">Base64 tool</Link>.
      </p>
      <h2>4. UUID Generator</h2>
      <p>
        Generate RFC 4122 v4 identifiers in bulk for database seeds and mock APIs via the{' '}
        <Link href="/tools/dev/uuid-generator">UUID Generator</Link>.
      </p>
      <h2>5. Timestamp Converter</h2>
      <p>
        Convert Unix epoch values to ISO 8601 and local timezones when debugging logs —{' '}
        <Link href="/tools/dev/timestamp-converter">Timestamp Converter</Link>.
      </p>
      <h2>6. Hash Generator</h2>
      <p>
        Compute SHA-256 and other digests for checksum verification without installing OpenSSL locally.
      </p>
      <h2>7. Robots.txt Generator</h2>
      <p>
        Ship correct crawl directives on launch day with the{' '}
        <Link href="/tools/seo/robots-txt-generator">Robots.txt Generator</Link>.
      </p>
    </>
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const body = post.source === 'static' ? articleBodies[slug] : null;

  const articleSchema = post.schema ?? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedDate ?? post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: post.canonicalUrl ?? canonicalUrl(`/blog/${post.slug}`),
    image: post.featuredImage,
  };

  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ContentPageLayout
      title={post.title}
      subtitle={post.excerpt}
      lastUpdated={new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: post.category },
      ]}
    >
      <p className="text-sm text-slate-400 mb-6 not-prose">
        By {post.author} · {post.readTime}
      </p>
      <AdSlot position="header" />
      {body}
      {post.content && <BlogPostContent html={post.content} />}
      {post.faq && post.faq.length > 0 && (
        <div className="not-prose mt-10">
          <h2 className="text-xl font-bold text-[#0F172A] mb-4">FAQ</h2>
          <div className="space-y-4">
            {post.faq.map((item) => (
              <div key={item.question}>
                <h3 className="text-sm font-semibold text-[#0F172A] mb-1">{item.question}</h3>
                <p className="text-sm text-[#64748B] m-0">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <p className="mt-10 pt-6 border-t border-black/[0.06]">
        <Link href="/blog">← Back to all articles</Link>
      </p>
    </ContentPageLayout>
    </>
  );
}
