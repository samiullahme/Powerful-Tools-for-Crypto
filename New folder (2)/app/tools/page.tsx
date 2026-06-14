import type { Metadata } from 'next';
import ToolCard from '@/components/ToolCard';
import { toolsRegistry, categories } from '@/lib/tools-registry';
import Link from 'next/link';
import { absoluteTitle, canonicalUrl } from '@/lib/seo';
import { shell } from '@/lib/ui-classes';

export const metadata: Metadata = {
  title: absoluteTitle('All Tools — Free Online Calculators & Utilities | CryptoRedar'),
  description: 'Browse all free tools on CryptoRedar. Crypto calculators, finance tools, developer utilities, text tools, SEO generators, and more.',
  alternates: { canonical: canonicalUrl('/tools') },
  openGraph: {
    title: 'All Free Tools — CryptoRedar',
    description: 'Browse all free tools on CryptoRedar. Crypto calculators, finance tools, developer utilities, and more.',
    url: canonicalUrl('/tools'),
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'All Free Tools — CryptoRedar',
    description: 'Browse all free tools on CryptoRedar.',
  },
};

export default function AllToolsPage() {
  return (
    <main className="pt-16 md:pt-20 pb-20 relative z-10">
      <div className={shell}>

        {/* Page header */}
        <div className="mb-10">
          <span className="text-[11px] font-bold text-[#FF9500] uppercase tracking-[0.14em] block mb-2">Browse</span>
          <h1 className="text-3xl md:text-[2.65rem] font-bold text-[#0F172A] tracking-[-0.04em] mb-3">All Free Tools</h1>
          <p className="text-[15px] text-slate-500 leading-7 max-w-[600px]">
            {toolsRegistry.length} free tools across {categories.length} categories. No signup. No downloads. Use right in your browser.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex gap-2.5 flex-wrap mb-14">
          <span className="px-4 py-2 rounded-full bg-[#FFF5E6] border border-[#FF9500]/25 text-[#FF9500] text-xs font-semibold shadow-sm">
            All ({toolsRegistry.length})
          </span>
          {categories.map(cat => {
            const count = toolsRegistry.filter(t => t.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/tools/${cat.slug}`}
                className="px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-slate-500 text-xs font-semibold shadow-sm hover:bg-white hover:text-[#FF9500] hover:border-[#FF9500]/30 hover:-translate-y-0.5 transition-all"
              >
                {cat.icon} {cat.label} ({count})
              </Link>
            );
          })}
        </div>

        {/* Tools grouped by category */}
        {categories.map(cat => {
          const tools = toolsRegistry.filter(t => t.category === cat.slug);
          return (
            <div key={cat.slug} className="mb-16">
              {/* Section heading */}
              <div className="flex items-end justify-between mb-6 gap-4">
                <div>
                  <span className="text-[11px] font-bold text-[#FF9500] uppercase tracking-[0.14em] block mb-1">
                    {cat.label}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-[-0.025em]">
                    {cat.icon} {cat.label}
                  </h2>
                </div>
                <Link
                  href={`/tools/${cat.slug}`}
                  className="text-sm font-medium text-slate-500 hover:text-[#FF9500] transition-colors flex items-center gap-1 group shrink-0"
                >
                  View category
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* Tools grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {tools.map(tool => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
