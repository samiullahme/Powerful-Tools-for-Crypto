import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageLayout from '@/components/ContentPageLayout';
import { legalLastUpdated, siteConfig } from '@/lib/site-config';
import { toolsRegistry } from '@/lib/tools-registry';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about CryptoRedar — our mission, editorial standards, and commitment to free, accurate crypto, finance, and developer tools used by professionals worldwide.',
  openGraph: {
    title: 'About CryptoRedar',
    description: siteConfig.description,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <ContentPageLayout
      title="About CryptoRedar"
      subtitle="We build fast, trustworthy, privacy-respecting tools for people who work with numbers, code, and language every day."
      lastUpdated={legalLastUpdated}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
    >
      <p>
        <strong>CryptoRedar</strong> is an independent digital tools platform founded in {siteConfig.foundedYear}.
        We publish {toolsRegistry.length}+ free, browser-based calculators, converters, and utilities for
        cryptocurrency analysis, personal and business finance, software development, text processing, and SEO
        workflows. Every tool runs locally in your browser — no account, no upload, no paywall.
      </p>

      <h2>Our Mission</h2>
      <p>
        Professional-grade utility software should be accessible to everyone. Whether you are sizing a crypto
        position, validating GST on an invoice, formatting JSON before a deploy, or generating meta tags for a
        landing page, you should not need to install software, create an account, or hand your data to a third
        party. Our mission is to deliver accurate, fast tools that respect your time and your privacy.
      </p>

      <h2>What We Publish</h2>
      <p>CryptoRedar is organized around six core categories, each maintained with the same quality bar:</p>
      <ul>
        <li>
          <strong>Crypto tools</strong> — profit, ROI, tax estimation, portfolio tracking, and investment
          scenario calculators for traders and long-term holders.
        </li>
        <li>
          <strong>Finance tools</strong> — EMI, SIP, compound interest, salary, GST, and percentage calculators
          used by individuals, freelancers, and small businesses.
        </li>
        <li>
          <strong>Developer tools</strong> — JSON formatting, Base64 encoding, JWT decoding, UUID and hash
          generation, timestamp conversion, and related utilities.
        </li>
        <li>
          <strong>Text utilities</strong> — case conversion, word counting, Unicode stylers, diff checking, and
          other writing and formatting helpers.
        </li>
        <li>
          <strong>SEO tools</strong> — meta tag and robots.txt generators to support technical SEO workflows.
        </li>
        <li>
          <strong>Miscellaneous tools</strong> — creative and productivity utilities including name generators
          and planners.
        </li>
      </ul>

      <h2>Editorial &amp; Accuracy Standards</h2>
      <p>
        We treat every calculator and converter as a product, not a widget. Before a tool is published or
        updated, we verify its formulas against established references, test edge cases (zero values, large
        numbers, empty inputs), and review the surrounding copy for clarity. When tax rules, market conventions,
        or technical standards change, we update affected tools and note material revisions on this page and in
        our <Link href="/blog">blog</Link>.
      </p>
      <p>
        Our content — including FAQs, how-to guides, and blog articles — is written for practitioners. We
        explain assumptions, cite formulas where relevant, and avoid hype. CryptoRedar does not publish
        financial advice, price predictions, or paid endorsements disguised as editorial content.
      </p>

      <h2>Privacy by Design</h2>
      <p>
        CryptoRedar tools process data in your browser whenever technically feasible. We do not require
        registration, and we do not sell personal information. Some tools may store draft input in your
        device&apos;s local storage so you can resume work — that data never leaves your browser unless you
        choose to copy or share it. Read our full{' '}
        <Link href="/privacy-policy">Privacy Policy</Link> for details on cookies, analytics, and your rights.
      </p>

      <h2>Who We Serve</h2>
      <p>
        Our audience spans independent crypto traders, finance students, accountants, indie developers, content
        creators, SEO specialists, and small-business operators across India, Pakistan, Southeast Asia, the
        Middle East, Europe, and North America. We build for global use cases — multi-currency finance tools,
        Unicode text utilities, and developer helpers that work the same everywhere.
      </p>

      <h2>Independence &amp; Transparency</h2>
      <p>
        CryptoRedar is supported by display advertising and may introduce optional premium features in the
        future. Sponsored placements, when present, are clearly labeled. Advertising relationships never
        influence calculator logic, default values, or editorial recommendations. Our{' '}
        <Link href="/disclaimer">Disclaimer</Link> and <Link href="/terms-of-use">Terms of Use</Link> describe
        the limits of our liability and your responsibilities when using our tools.
      </p>

      <h2>Contact &amp; Corrections</h2>
      <p>
        Found an error in a formula, a broken tool, or outdated tax guidance? We take corrections seriously.
        Reach us at{' '}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> or through our{' '}
        <Link href="/contact">Contact page</Link>. For legal and privacy inquiries, use{' '}
        <a href={`mailto:${siteConfig.legalEmail}`}>{siteConfig.legalEmail}</a>.
      </p>

      <div className="mt-10 p-5 rounded-xl bg-[#FF9500]/8 border border-[#FF9500]/20 not-prose">
        <p className="text-sm text-[#0F172A] font-semibold mb-1">Trusted by daily users worldwide</p>
        <p className="text-sm text-[#64748B] leading-relaxed m-0">
          {toolsRegistry.length}+ tools · Zero signup · Browser-local processing · Updated regularly
        </p>
      </div>
    </ContentPageLayout>
  );
}
