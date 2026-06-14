import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const pageUrl = `${siteConfig.url}/tools/seo`;

const faqs = [
  {
    question: 'What is a meta tag and why does it matter?',
    answer:
      'A meta tag is an HTML element in the document head that tells search engines and social platforms what your page is about. The title tag and meta description appear in Google search results and directly influence click-through rate. Open Graph and Twitter Card tags control how your link previews look when shared on social media. Well-crafted meta tags help search engines understand page relevance and give users a compelling reason to click.',
  },
  {
    question: 'How does robots.txt affect my Google rankings?',
    answer:
      'Robots.txt does not directly boost or lower rankings—it controls which pages Googlebot is allowed to crawl. If you accidentally disallow important directories, Google cannot discover or index those pages, which removes them from search results entirely. A properly configured robots.txt ensures crawlers spend their budget on valuable content while skipping admin panels, duplicate URLs, and staging environments that should never appear in search.',
  },
  {
    question: 'Are these SEO tools suitable for beginners?',
    answer:
      'Yes. Both tools on this page are designed as SEO tools for beginners who need professional output without reading technical documentation first. The meta tag generator walks you through title, description, and social preview fields with character guidance. The robots.txt generator uses a visual interface so you never have to memorize directive syntax. No prior SEO experience or account signup is required.',
  },
  {
    question: 'How often should I update my meta tags?',
    answer:
      'Update meta tags whenever page content, target keywords, or business positioning changes. Review title tags and meta descriptions at least quarterly for high-traffic pages and after any major site redesign. Seasonal campaigns, new product launches, and refreshed blog posts all warrant updated descriptions. Stale meta tags that no longer match page content confuse users and reduce click-through rates over time.',
  },
  {
    question: 'Can I use these tools for any type of website?',
    answer:
      'Yes. These website SEO tools free of charge work for blogs, e-commerce stores, SaaS landing pages, portfolios, news sites, and corporate websites on any platform—WordPress, Shopify, Next.js, static HTML, or custom CMS builds. The generated meta tag snippets paste into any HTML template, and the robots.txt file deploys to any web server root directory regardless of hosting provider.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'SEO Tools', item: pageUrl },
  ],
};

const linkClass = 'text-orange-500 hover:text-orange-600 font-medium underline';

export default function SeoCategoryContent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-3xl mt-16 md:mt-20" aria-label="SEO tools guide">
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 first:mt-0">
          Free SEO Tools for Better Search Engine Visibility
        </h2>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Search visibility starts long before you publish content. Every page needs a compelling title tag,
          a precise meta description, and a robots.txt file that tells crawlers what to index. This page
          collects <strong>free SEO tools online</strong> that handle those foundational tasks in
          minutes—no plugins, no agency retainer, no account required.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Bloggers optimize article snippets before sharing on social media. Developers generate meta tags
          during Next.js or React deployments without hand-coding Open Graph blocks. SEO professionals audit
          robots.txt directives before client launches. Small business owners improve local search presence
          without hiring a consultant. These <strong>on-page SEO tools</strong> serve anyone who needs
          reliable <strong>website SEO tools free</strong> of signup walls and subscription tiers—run them
          in any modern browser on any device.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
          Why Technical SEO Tools Matter for Every Website
        </h2>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Technical SEO is the infrastructure beneath every ranking. Meta tags are the first impression
          users see in Google search results—a weak title or missing description costs clicks even when your
          page ranks on page one. Studies consistently show that optimized meta descriptions improve
          click-through rate by twenty to thirty percent compared to auto-generated snippets Google pulls
          from page body text.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Robots.txt controls which URLs crawlers can access. A single misplaced{' '}
          <code className="text-sm text-slate-800">Disallow: /</code> directive blocks your entire site from
          Google indexing. Conversely, leaving staging environments crawlable duplicates content across
          domains and dilutes ranking signals. Missing meta descriptions force Google to guess your page
          summary—often pulling irrelevant sentences that reduce trust and clicks.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Duplicate title tags across pages confuse search engines about which URL deserves ranking credit.
          These <strong>technical SEO tools</strong> prevent the silent errors that undermine months of
          content work. Getting meta tags and crawl directives right before launch builds the kind of
          technical authority Google rewards through E-E-A-T signals—demonstrating that your site is
          maintained by people who understand how search engines actually process web pages.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
          Complete Guide to Our SEO Tools
        </h2>

        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Meta Tag Generator</h3>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Meta tags live in your HTML <code className="text-sm text-slate-800">&lt;head&gt;</code> section
          and communicate page purpose to search engines and social platforms. The title tag appears as the
          blue clickable headline in Google results. The meta description is the gray summary text beneath
          it. Open Graph tags control Facebook and LinkedIn link previews. Twitter Card tags shape how your
          URL displays in tweets and direct messages.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Character limits matter because Google truncates display text at pixel width. Keep title tags
          around sixty characters and meta descriptions near one hundred fifty-five characters to avoid
          ellipsis cutoffs that hide your call to action. The{' '}
          <Link href="/tools/seo/meta-generator" className={linkClass}>
            meta tag generator
          </Link>{' '}
          produces a complete, copy-ready HTML block including title, description, Open Graph, and Twitter
          Card tags with a live SERP preview. Use it as your primary{' '}
          <strong>meta tag generator online</strong> and <strong>meta description generator</strong> before
          every new page launch or content refresh.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Robots.txt Generator</h3>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Robots.txt is a plain-text file at your website root that instructs search engine crawlers which
          paths they may or may not request. Directives follow a simple syntax:{' '}
          <code className="text-sm text-slate-800">User-agent</code> names the bot,{' '}
          <code className="text-sm text-slate-800">Disallow</code> blocks paths,{' '}
          <code className="text-sm text-slate-800">Allow</code> explicitly permits them, and{' '}
          <code className="text-sm text-slate-800">Sitemap</code> points crawlers to your XML sitemap URL.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Common mistakes include blocking CSS and JavaScript files Google needs to render pages, disallowing
          entire CMS admin directories with overly broad wildcards, and forgetting to add sitemap references
          that slow discovery of new content. The{' '}
          <Link href="/tools/seo/robots-txt-generator" className={linkClass}>
            robots.txt generator
          </Link>{' '}
          builds a valid file through a visual interface—select bots, toggle allow and disallow rules, and
          export clean syntax without memorizing directive formatting. It is the fastest{' '}
          <strong>robots.txt generator</strong> for developers deploying new sites and marketers auditing
          existing crawl policies.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
          On-Page SEO Best Practices Every Website Owner Should Know
        </h2>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          On-page SEO is everything you control directly on each page. Start with title tag optimization:
          place your primary keyword near the beginning, keep it under sixty characters, and make it
          compelling enough to earn clicks over competing results. Write meta descriptions as concise ad
          copy—include a clear benefit and action verb rather than keyword lists that read like spam.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Heading hierarchy signals content structure to search engines. Use one H1 per page for the main
          topic, H2 sections for major subtopics, and H3 tags for supporting points. Skipping levels or
          stuffing keywords into headings hurts readability and can trigger quality filters. Set canonical URLs
          on every page to tell Google which version is authoritative when duplicate paths exist—common with
          tracking parameters, www versus non-www variants, and paginated archives.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Internal linking distributes ranking authority across your site and helps crawlers discover new
          content. Link from high-traffic pages to newer articles using descriptive anchor text—not generic
          &quot;click here&quot; phrases. Add descriptive alt text to every meaningful image so search engines
          understand visual content and screen readers can convey context to users. These on-page SEO tips
          compound over time: a site that nails fundamentals consistently outranks competitors who publish
          great content but neglect technical structure.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Pair these practices with our{' '}
          <Link href="/tools/text" className={linkClass}>
            text utility tools
          </Link>{' '}
          for word counting meta descriptions and our{' '}
          <Link href="/tools/dev" className={linkClass}>
            developer tools
          </Link>{' '}
          for validating JSON-LD structured data—together they cover the full on-page workflow from draft to
          deployment.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
          Technical SEO Fundamentals — What Google Actually Looks For
        </h2>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Beyond meta tags and robots.txt, Google evaluates technical health signals that determine whether
          your content can rank at all. Core Web Vitals measure real-user experience: Largest Contentful
          Paint tracks loading speed, Interaction to Next Paint measures responsiveness, and Cumulative Layout
          Shift quantifies visual stability. Pages that fail these thresholds face ranking disadvantages in
          competitive SERPs regardless of content quality.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Google uses mobile-first indexing, meaning the mobile version of your site is the primary basis for
          ranking and indexing. Page speed directly affects bounce rate—users abandon sites that take more
          than three seconds to load, and Google interprets high bounce rates as a relevance signal. Structured
          data markup helps search engines understand entity relationships on your pages, enabling rich
          results like FAQ accordions, product ratings, and breadcrumb trails in search listings.
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-4">
          Monitor your site through{' '}
          <a
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Google Search Console
          </a>{' '}
          to catch crawl errors, indexing issues, and Core Web Vitals regressions before they impact traffic.
          Study the{' '}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Google SEO Starter Guide
          </a>{' '}
          for authoritative best practices, and reference{' '}
          <a
            href="https://schema.org"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Schema.org structured data
          </a>{' '}
          vocabulary when implementing JSON-LD on your pages. Explore our{' '}
          <Link href="/tools" className={linkClass}>
            all free tools
          </Link>{' '}
          hub for utilities that support every stage of your technical SEO workflow.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
          Frequently Asked Questions About SEO Tools
        </h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="border border-slate-200 rounded-xl p-6 mb-4">
            <h3 className="text-xl font-semibold text-slate-800 mt-0 mb-3">{faq.question}</h3>
            <p className="text-base text-slate-600 leading-relaxed mb-0">{faq.answer}</p>
          </div>
        ))}
      </article>
    </>
  );
}
