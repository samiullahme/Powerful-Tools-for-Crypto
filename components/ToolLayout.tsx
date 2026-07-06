import { ReactNode } from 'react';
import { Tool, getCategoryColor } from '@/lib/tools-registry';
import Breadcrumb from './Breadcrumb';
import FAQSection from './FAQSection';
import RelatedTools from './RelatedTools';
import AdSlot from './AdSlot';
import { canonicalUrl } from '@/lib/seo';
import { shell, toolSurfaceCard, sidebarCard } from '@/lib/ui-classes';

interface ToolLayoutProps {
  tool: Tool;
  children: ReactNode;
}

export default function ToolLayout({ tool, children }: ToolLayoutProps) {
  const color = getCategoryColor(tool.category);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.longDescription,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: canonicalUrl(`/tools/${tool.category}/${tool.slug}`),
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Use ${tool.name}`,
    description: tool.longDescription,
    step: tool.howTo.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.step,
      text: step.description,
    })),
  };

  return (
    <main className="pt-16 pb-20 md:pt-20 md:pb-28 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className={shell}>
        {/* Breadcrumb */}
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: tool.categoryLabel, href: `/tools/${tool.category}` },
          { label: tool.name },
        ]} />

        {/* Header ad slot — below site header, above tool title (tool pages only) */}
        <AdSlot position="header" />

        {/* Page title */}
        <div className="mb-9 mt-3 max-w-3xl">
          <h1 className="text-3xl md:text-[2.65rem] font-bold text-[#0F172A] tracking-[-0.04em] leading-[1.12] mb-3">
            {tool.h1}
          </h1>
          <p className="text-sm md:text-[15px] font-normal text-slate-500 max-w-[680px] leading-7">
            {tool.longDescription}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_290px] gap-7 lg:gap-8 items-start">

          {/* ── MAIN COLUMN ── */}
          <div className="flex flex-col gap-7">

            {/* Tool UI card */}
            <div className={toolSurfaceCard}>
              {/* Tool header */}
              <div className="flex items-center gap-4 mb-7 pb-6 border-b border-slate-200/60">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm"
                  style={{ background: `${color}15` }}
                >
                  <span>{tool.icon}</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#0F172A] tracking-tight leading-tight">{tool.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${color}15`, color }}
                    >
                      {tool.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400">Free · No signup</span>
                  </div>
                </div>
              </div>

              {/* Tool content (children) */}
              <div className="text-[#0F172A]">
                {children}
              </div>
            </div>

            {/* How-To section */}
            <div className={toolSurfaceCard}>
              <span className="text-[11px] font-bold text-[#FF9500] uppercase tracking-[0.14em] block mb-2">Guide</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-[-0.025em] mb-7">
                How to Use {tool.name}
              </h2>
              <div className="flex flex-col gap-6">
                {tool.howTo.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    {/* Step number */}
                    <div
                      className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center text-sm font-bold text-[#FF9500] border border-[#FF9500]/25 shadow-sm"
                      style={{ background: 'rgba(255,149,0,0.10)' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-[#0F172A] mb-1">{step.step}</h3>
                      <p className="text-sm text-slate-500 leading-6">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <FAQSection faqs={tool.faqs} toolName={tool.name} />
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
            <RelatedTools tool={tool} />

            {/* Sidebar ad slot — desktop only, tool pages */}
            <div className="hidden lg:block">
              <AdSlot position="sidebar" />
            </div>

            {/* Tool Info */}
            <div className={sidebarCard}>
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-4">Tool Info</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Category', value: tool.categoryLabel },
                  { label: 'Cost', value: '100% Free' },
                  { label: 'Sign-up Required', value: 'No' },
                  { label: 'Works Offline', value: 'Yes (Client-side)' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-4 text-xs py-0.5">
                    <span className="text-slate-400">{label}</span>
                    <span className="font-semibold text-[#0F172A]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Also Known As */}
            <div className={sidebarCard}>
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-4">Also Known As</h4>
              <div className="flex flex-wrap gap-2">
                {tool.keywords.slice(0, 5).map(kw => (
                  <span
                    key={kw}
                    className="text-[10px] font-medium px-2.5 py-1 bg-white/75 border border-white/90 shadow-sm rounded-full text-slate-500"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
