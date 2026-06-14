import type { Metadata } from 'next';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import ToolCard from '@/components/ToolCard';
import CryptoCategoryContent from '@/components/CryptoCategoryContent';
import FinanceCategoryContent from '@/components/FinanceCategoryContent';
import DevCategoryContent from '@/components/DevCategoryContent';
import TextCategoryContent from '@/components/TextCategoryContent';
import SeoCategoryContent from '@/components/SeoCategoryContent';
import { toolsRegistry, categories, getCategoryColor } from '@/lib/tools-registry';
import Link from 'next/link';
import { absoluteTitle, canonicalUrl } from '@/lib/seo';
import { shell } from '@/lib/ui-classes';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find(c => c.slug === category);
  if (!cat) return {};
  const url = canonicalUrl(`/tools/${category}`);

  if (category === 'crypto') {
    const title = 'Free Crypto Tools — Profit, ROI, Tax & Portfolio Calculators | CryptoRedar';
    const description =
      'Free crypto tools for traders and investors. Calculate crypto profit, ROI, taxes, and track your portfolio instantly. No signup. No tracking.';
    return {
      title: absoluteTitle(title),
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: 'Free Crypto Tools — CryptoRedar',
        description,
      },
    };
  }

  if (category === 'finance') {
    const title = 'Free Finance Calculators — EMI, SIP, GST, Salary & More | CryptoRedar';
    const description =
      'Free finance calculators for EMI, SIP, GST, salary, and compound interest. Instant results, no signup, no data stored. Built for Indian professionals.';
    return {
      title: absoluteTitle(title),
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: 'Free Finance Calculators — CryptoRedar',
        description,
      },
    };
  }

  if (category === 'dev') {
    const title = 'Free Developer Tools Online — JSON, Base64, UUID, JWT | CryptoRedar';
    const description =
      'Free browser-based developer tools. Format JSON, encode Base64, generate UUIDs, decode JWTs instantly. No signup, no data stored, works on any device.';
    return {
      title: absoluteTitle(title),
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: 'Free Developer Tools Online — CryptoRedar',
        description,
      },
    };
  }

  if (category === 'text') {
    const title =
      'Free Text Utility Tools — Word Counter, Case Converter, Diff Checker | CryptoRedar';
    const description =
      'Free online text tools for writers and developers. Word counter, case converter, diff checker, and 18 more text utilities. Instant results, no signup.';
    return {
      title: absoluteTitle(title),
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: 'Free Text Utility Tools — CryptoRedar',
        description,
      },
    };
  }

  if (category === 'seo') {
    const title =
      'Free SEO Tools — Meta Tag Generator & Robots.txt Generator | CryptoRedar';
    const description =
      'Free online SEO tools including meta tag generator and robots.txt generator. Improve your search rankings instantly. No signup required.';
    return {
      title: absoluteTitle(title),
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: 'Free SEO Tools — CryptoRedar',
        description,
      },
    };
  }

  const count = toolsRegistry.filter(t => t.category === category).length;
  return {
    title: `${cat.label} — ${count} Free Online Tools`,
    description: `${count} free ${cat.label.toLowerCase()} on CryptoRedar. No signup required. Instant results in your browser.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${cat.label} — ${count} Free Online Tools`,
      description: `${count} free ${cat.label.toLowerCase()} on CryptoRedar.`,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${cat.label} — CryptoRedar`,
      description: `${count} free ${cat.label.toLowerCase()} on CryptoRedar.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find(c => c.slug === category);
  if (!cat) notFound();

  const tools = toolsRegistry.filter(t => t.category === category);
  const color = getCategoryColor(category);

  return (
    <main className="pb-20 relative z-10">

      {/* Category Hero */}
      <div
        className="relative pt-16 pb-14 md:pt-20 md:pb-16 overflow-hidden border-b border-white/60 bg-[radial-gradient(circle_at_top_center,#E8EEFF_0%,#F0F2F7_70%)]"
      >
        {/* Ambient orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-30"
          style={{ background: color }}
        />

        <div className={`${shell} relative z-10`}>
          {/* Back link */}
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-[#FF9500] transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 5 5 12 12 19"/>
            </svg>
            All Tools
          </Link>

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg backdrop-blur-md"
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}
          >
            <span>{cat.icon}</span>
          </div>

          <h1 className="text-3xl md:text-[2.65rem] font-bold text-[#0F172A] tracking-[-0.04em] mb-3">
            {cat.label}
          </h1>
          <p className="text-[15px] text-slate-500 leading-7 max-w-[540px] mb-7">
            {tools.length} free tools. No signup, no downloads. Use directly in your browser.
          </p>

          {/* Featured tool pills */}
          {tools.filter(t => t.isFeatured).slice(0, 3).length > 0 && (
            <div className="flex gap-2.5 flex-wrap">
              {tools.filter(t => t.isFeatured).slice(0, 3).map(t => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.category}/${t.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}25`,
                    color,
                  }}
                >
                  {t.icon} {t.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      <div className={`${shell} pt-12 md:pt-14`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tools.map(tool => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        {category === 'crypto' && <CryptoCategoryContent />}
        {category === 'finance' && <FinanceCategoryContent />}
        {category === 'dev' && <DevCategoryContent />}
        {category === 'text' && <TextCategoryContent />}
        {category === 'seo' && <SeoCategoryContent />}

        {category === 'seo' && (
          <>
            {/* SEO Tools Long-Form Content */}
            <section className="prose prose-slate max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
              <h2 className="text-3xl font-bold mb-6">Free SEO Tools for Better Search Engine Visibility</h2>
              <p className="mb-4">
                Whether you are a blogger, a developer, an SEO professional, or a small business owner, having access to powerful, free SEO tools online can dramatically improve your website's visibility in search results. Our suite of on-page SEO tools is designed to help you optimize content, fix technical issues, and boost rankings without any cost.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-6">Why Technical SEO Tools Matter for Every Website</h2>
              <p className="mb-4">
                Technical SEO is the backbone of a well‑ranked website. Proper meta tags influence click‑through rates, while a correctly configured robots.txt file ensures search engines crawl the right pages. Overlooking duplicate or missing meta descriptions can hurt rankings and user trust. Building genuine authority requires attention to these details, establishing expertise, authoritativeness, and trustworthiness (E‑E‑A‑T) in the eyes of Google.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-6">Complete Guide to Our SEO Tools</h2>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Meta Tag Generator</h3>
              <p className="mb-4">
                Our meta tag generator creates title, description, and Open Graph tags in seconds. Title tags should stay under 60 characters, and meta descriptions under 155 characters for optimal display in search results. Generate perfect tags for Google rankings and social sharing with one click. Try the <a href="/tools/seo/meta-tag-generator" className="text-blue-600 hover:underline">meta tag generator</a> now.
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Robots.txt Generator</h3>
              <p className="mb-4">
                The robots.txt generator helps you craft the correct directives – User‑agent, Disallow, Allow, and Sitemap – to guide Googlebot. Avoid common mistakes that accidentally block important pages and improve crawl efficiency. Use our <a href="/tools/seo/robots-txt-generator" className="text-blue-600 hover:underline">robots.txt generator</a> to protect your site.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-6">On-Page SEO Best Practices Every Website Owner Should Know</h2>
              <p className="mb-4">
                Effective on‑page SEO starts with a well‑structured title tag that includes your primary keyword and reflects the page’s intent. Write compelling meta descriptions that summarize the content and encourage clicks. Use a clear heading hierarchy – H1 for the main title, followed by H2 and H3 for sub‑sections – to help both users and crawlers understand the outline. Implement canonical URLs to prevent duplicate content issues, and create an internal linking strategy that passes link equity to important pages. Finally, always add descriptive alt text to images for accessibility and additional keyword relevance.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-6">Technical SEO Fundamentals — What Google Actually Looks For</h2>
              <p className="mb-4">
                Core Web Vitals, page speed, and mobile‑first indexing are critical ranking signals. Use structured data (Schema.org markup) to give Google explicit information about your content. Ensure your site is fully crawlable by checking for blocked resources in your robots.txt file. For deeper guidance, see the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google SEO Starter Guide</a> and explore the <a href="https://search.google.com/search-console" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Search Console</a>. Learn about schema markup at <a href="https://schema.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Schema.org structured data</a>.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-6">Frequently Asked Questions About SEO Tools</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>What is a meta tag and why does it matter?</strong> Meta tags provide search engines with concise information about a page’s title, description, and social sharing data, influencing click‑through rates and relevance.</li>
                <li><strong>How does robots.txt affect my Google rankings?</strong> It tells Google which pages to crawl or ignore; misconfigured rules can unintentionally block valuable content, harming rankings.</li>
                <li><strong>Are these SEO tools suitable for beginners?</strong> Yes – they are free, intuitive, and require no technical setup, making them perfect for newcomers.</li>
                <li><strong>How often should I update my meta tags?</strong> Review them whenever you add new content, change page focus, or notice performance drops in search results.</li>
                <li><strong>Can I use these tools for any type of website?</strong> Absolutely – they work for blogs, e‑commerce, portfolios, and corporate sites alike.</li>
              </ul>
            </section>

            {/* JSON‑LD for FAQ and Breadcrumb */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is a meta tag and why does it matter?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Meta tags provide search engines with concise information about a page’s title, description, and social sharing data, influencing click‑through rates and relevance." }
                    },
                    {
                      "@type": "Question",
                      "name": "How does robots.txt affect my Google rankings?",
                      "acceptedAnswer": { "@type": "Answer", "text": "It tells Google which pages to crawl or ignore; misconfigured rules can unintentionally block valuable content, harming rankings." }
                    },
                    {
                      "@type": "Question",
                      "name": "Are these SEO tools suitable for beginners?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Yes – they are free, intuitive, and require no technical setup, making them perfect for newcomers." }
                    },
                    {
                      "@type": "Question",
                      "name": "How often should I update my meta tags?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Review them whenever you add new content, change page focus, or notice performance drops in search results." }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I use these tools for any type of website?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely – they work for blogs, e‑commerce, portfolios, and corporate sites alike." }
                    }
                  ]
                })
              }}
            />

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cryptoredar.com/" },
                    { "@type": "ListItem", "position": 2, "name": "SEO Tools", "item": "https://cryptoredar.com/tools/seo" }
                  ]
                })
              }}
            />
          </>
        )}
      </div>
{category === 'misc' && (
  <>
    {/* Misc Tools Long-Form Content */}
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Free Everyday Utility Tools That Actually Solve Real Problems</h2>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Whether you are a blogger, developer, SEO professional, or small business owner, having access to genuinely useful, free online tools can make everyday tasks easier. Our collection of everyday calculator tools doesn’t fit neatly into a single category, but each solves a real‑world problem instantly without any signup.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Simple Utility Tools Are the Most Used Tools on the Web</h2>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Billions of users search for simple calculators—age calculators, unit converters, date diff tools—every day. Browser‑based tools win because they load instantly, protect privacy by keeping calculations local, and require no installation. The speed and zero‑signup experience make them the go‑to solution for quick, reliable answers.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Complete Guide to Our Misc Utility Tools</h2>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Age Calculator</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Calculates your exact age in years, months, and days. Perfect for birthday milestones, legal age verification, or genealogy research. <Link href="/tools/misc/age-calculator" className="text-orange-500 hover:text-orange-600 font-medium underline">Age calculator</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Date Difference Calculator</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Find the number of days between two dates, useful for project timelines or exam countdowns. <Link href="/tools/misc/date-difference" className="text-orange-500 hover:text-orange-600 font-medium underline">Date difference tool</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Unit Converter</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Convert between metric and imperial units—length, weight, temperature, and more. <Link href="/tools/misc/unit-converter" className="text-orange-500 hover:text-orange-600 font-medium underline">Unit converter</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">BMI Calculator</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Quickly compute your Body Mass Index to gauge health status. <Link href="/tools/misc/bmi-calculator" className="text-orange-500 hover:text-orange-600 font-medium underline">BMI calculator</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Loan Payment Calculator</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Determine monthly payments for loans or mortgages using principal, rate, and term. <Link href="/tools/misc/loan-calculator" className="text-orange-500 hover:text-orange-600 font-medium underline">Loan calculator</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Currency Converter</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Convert between dozens of currencies with up‑to‑date exchange rates. <Link href="/tools/misc/currency-converter" className="text-orange-500 hover:text-orange-600 font-medium underline">Currency converter</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">IP Address Lookup</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Find geolocation information for any IP address instantly. <Link href="/tools/misc/ip-lookup" className="text-orange-500 hover:text-orange-600 font-medium underline">IP lookup tool</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Password Strength Checker</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Evaluate how strong a password is and get suggestions for improvement. <Link href="/tools/misc/password-checker" className="text-orange-500 hover:text-orange-600 font-medium underline">Password checker</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Base64 Encoder/Decoder</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Encode or decode strings to and from Base64. <Link href="/tools/misc/base64" className="text-orange-500 hover:text-orange-600 font-medium underline">Base64 tool</Link>.
      </p>
      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">JSON Formatter</h3>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Beautify and validate JSON data quickly. <Link href="/tools/misc/json-formatter" className="text-orange-500 hover:text-orange-600 font-medium underline">JSON formatter</Link>.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">How to Get Maximum Value from Online Utility Tools</h2>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        Bookmark your favorite calculators, use keyboard shortcuts (Ctrl+L to focus), and keep a reference of which tool handles which calculation. Remember that date calculators can use different conventions (inclusive vs exclusive); choose the one that matches your need. For recurring needs, create a simple spreadsheet that pulls results from these tools via copy‑paste.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Philosophy Behind Building Simple, Useful Tools</h2>
      <p className="text-base text-slate-600 leading-relaxed mb-4">
        At CryptoRedar we believe every tool should solve a real problem, run entirely in the browser, and never store personal data. This approach boosts trust, aligns with E‑E‑A‑T guidelines, and keeps the experience fast. Learn more about performance best practices on <a href="https://web.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">web performance best practices</a> and explore <a href="https://developers.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Google developer resources</a>.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Frequently Asked Questions About Misc Tools</h2>
      <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
        <li><strong>Are all these miscellaneous tools completely free?</strong> Yes, every tool on this page is free to use with no hidden fees.</li>
        <li><strong>Do these tools work on mobile devices?</strong> They are fully responsive and work in any modern mobile browser.</li>
        <li><strong>How accurate is the age calculator?</strong> It uses the Gregorian calendar and accounts for leap years, providing day‑level accuracy.</li>
        <li><strong>Do these tools require any login or account?</strong> No, they run entirely in the browser with no sign‑up required.</li>
        <li><strong>Is my data private when using these tools?</strong> All calculations happen locally; no data is sent to a server.</li>
      </ul>
    </section>

    {/* JSON‑LD for FAQ and Breadcrumb */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Are all these miscellaneous tools completely free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, every tool on this page is free to use with no hidden fees."}},
        {"@type": "Question", "name": "Do these tools work on mobile devices?", "acceptedAnswer": {"@type": "Answer", "text": "They are fully responsive and work in any modern mobile browser."}},
        {"@type": "Question", "name": "How accurate is the age calculator?", "acceptedAnswer": {"@type": "Answer", "text": "It uses the Gregorian calendar and accounts for leap years, providing day‑level accuracy."}},
        {"@type": "Question", "name": "Do these tools require any login or account?", "acceptedAnswer": {"@type": "Answer", "text": "No, they run entirely in the browser with no sign‑up required."}},
        {"@type": "Question", "name": "Is my data private when using these tools?", "acceptedAnswer": {"@type": "Answer", "text": "All calculations happen locally; no data is sent to a server."}}
      ]
    })}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://cryptoredar.com/"},
        {"@type": "ListItem", "position": 2, "name": "Misc Tools", "item": "https://cryptoredar.com/tools/misc"}
      ]
    })}} />
  </>
)}
</div>
    </main>
  );
}
