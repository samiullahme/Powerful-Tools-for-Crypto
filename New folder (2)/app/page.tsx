import type { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/ToolCard';
import FinanceToolCard from '@/components/FinanceToolCard';
import { POPULAR_FINANCE_SLUGS } from '@/components/finance-icons';
import { categories, toolsRegistry } from '@/lib/tools-registry';
import { absoluteTitle, canonicalUrl } from '@/lib/seo';
import { IconArrowRight, IconBolt, IconCheckCircle, IconShield, IconPhone, IconTag } from '@/components/icons';
import {
  ctaShell,
  dotPattern,
  glassCard,
  glassCardStatic,
  glassPill,
  heroShell,
  shell,
} from '@/lib/ui-classes';

export const metadata: Metadata = {
  title: absoluteTitle('CryptoRedar — Free Crypto, Finance & Developer Tools'),
  description: 'Free online tools for crypto traders, finance professionals, and developers. Crypto profit calculators, GST calculators, JSON formatters, and 20+ more tools. No signup.',
  alternates: { canonical: canonicalUrl('/') },
};

export default function HomePage() {
  const cryptoTools = toolsRegistry.filter(t => t.category === 'crypto').slice(0, 5);
  const financeTools = POPULAR_FINANCE_SLUGS
    .map(slug => toolsRegistry.find(t => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[680px] isolate bg-[radial-gradient(circle_at_top_center,#E8EEFF_0%,#F0F2F7_70%)]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-orange-400/25 rounded-full blur-[80px] mix-blend-multiply" />
          <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[80px] mix-blend-multiply" />
          <div className="absolute -bottom-20 left-1/3 w-[600px] h-[300px] bg-teal-400/15 rounded-full blur-[80px] mix-blend-multiply" />
        </div>

        <div className={`${heroShell} relative z-10 flex flex-col items-center`}>

          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/80 rounded-full px-4 py-1.5 shadow-sm mb-8">
            <IconBolt className="w-3.5 h-3.5 text-[#FF9500]" />
            <span className="text-xs font-medium text-[#0F172A] tracking-wide">
              {toolsRegistry.length} Free Tools · Zero Signup
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] text-center leading-[1.15] mb-6">
            Powerful Tools for <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9500] to-orange-400">
              Crypto, Finance
            </span>{' '}
            <br className="hidden sm:block" />
            &amp; Developers
          </h1>

          <p className="text-base md:text-lg font-normal text-[#64748B] text-center max-w-[540px] leading-relaxed mb-10">
            Free calculators, converters, and utilities for crypto traders, finance professionals, and developers.
            Zero tracking. Zero signup.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/tools"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FF9500] text-white h-12 px-8 rounded-full font-medium text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(255,149,0,0.40)] hover:shadow-[0_4px_20px_rgba(255,149,0,0.40),0_0_0_4px_rgba(255,149,0,0.18)] hover:scale-[1.02]"
            >
              Explore All Tools
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/crypto"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/50 backdrop-blur-sm border border-[#0F172A]/10 text-[#0F172A] h-12 px-8 rounded-full font-medium text-sm hover:bg-white/80 transition-colors shadow-sm hover:shadow"
            >
              <IconBolt className="w-4 h-4 text-[#FF9500]" />
              Crypto Tools
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-16 w-full">
            {[
              { val: toolsRegistry.length, label: 'Free Tools' },
              { val: '100%', label: 'Free Forever' },
              { val: 0, label: 'Signup Needed', hide: 'sm' as const },
              { val: categories.length, label: 'Categories', hide: 'md' as const },
            ].map(s => (
              <div
                key={s.label}
                className={`${glassPill} rounded-full px-5 py-2.5 flex items-center gap-2${s.hide === 'sm' ? ' hidden sm:flex' : s.hide === 'md' ? ' hidden md:flex' : ''}`}
              >
                <span className="text-lg font-bold text-[#FF9500] tracking-tight">{s.val}</span>
                <span className="text-xs font-normal text-[#64748B]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOL CATEGORIES ── */}
      <section className="py-20 relative z-10">
        <div className={shell}>
          <div className="mb-12">
            <span className="text-xs font-medium text-[#FF9500] uppercase tracking-wider block mb-2">
              Browse by Category
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight">
              Tool Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => {
              const count = toolsRegistry.filter(t => t.category === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/tools/${cat.slug}`}
                  className={`${glassCard} relative overflow-hidden p-6 min-h-[220px] group block`}
                  id={`cat-${cat.slug}`}
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF9500] to-transparent opacity-80" />
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-[14px] bg-[#FFF5E6] text-[#FF9500] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-2xl">
                      {cat.icon}
                    </div>
                    <h3 className="text-base font-medium text-[#0F172A] mb-2">{cat.label}</h3>
                    <p className="text-sm font-normal text-[#64748B] mb-6 flex-grow leading-relaxed">
                      {getCategoryDesc(cat.slug)}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="inline-flex items-center justify-center bg-[#FFF5E6] text-[#FF9500] text-[11px] font-medium px-2.5 py-1 rounded-md">
                        {count} tools
                      </span>
                      <IconArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#FF9500] transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRENDING CRYPTO TOOLS ── */}
      <section className="py-12 relative z-10">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-medium text-[#FF9500] uppercase tracking-wider mb-2 flex items-center gap-1">
                <IconBolt className="w-3.5 h-3.5" /> Trending
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight">Crypto Tools</h2>
            </div>
            <Link href="/tools/crypto" className="text-sm font-medium text-[#64748B] hover:text-[#FF9500] transition-colors flex items-center gap-1 group">
              View all crypto
              <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {cryptoTools.map(tool => (
              <ToolCard key={tool.slug} tool={tool} variant="glass" />
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR FINANCE CALCULATORS ── */}
      <section className="py-16 relative z-10 bg-[#F8F9FB]">
        <div className={shell}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-medium text-[#DD6B20] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <IconShield className="w-3.5 h-3.5" />
                Popular in India
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1A202C] tracking-tight">
                Popular Finance Calculators
              </h2>
            </div>
            <Link href="/tools/finance" className="text-sm font-medium text-[#64748B] hover:text-teal-600 transition-colors flex items-center gap-1 group shrink-0">
              View all finance
              <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {financeTools.map(tool => (
              <FinanceToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CRYPTOREDAR ── */}
      <section className="py-20 relative z-10">
        <div className={shell}>
          <div className="text-center mb-14">
            <span className="text-[11px] font-medium text-[#FF9500] uppercase tracking-wider block mb-2">
              Why CryptoRedar
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight mb-3">
              Built for Real Users
            </h2>
            <p className="text-base font-normal text-[#64748B] max-w-xl mx-auto">
              No fluff. Just fast, private, and beautifully designed tools that get the job done instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <IconBolt className="w-6 h-6" />, title: 'Instant Results', desc: 'Client-side processing means zero waiting time. Calculations happen as you type.', iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
              { icon: <IconShield className="w-6 h-6" />, title: 'Privacy First', desc: "We don't track your inputs or save your financial data. Everything stays on your device.", iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
              { icon: <IconPhone className="w-6 h-6" />, title: 'Mobile Ready', desc: 'Perfectly optimized interfaces that look and work like native apps on your phone.', iconBg: 'bg-green-50', iconColor: 'text-green-500' },
              { icon: <IconTag className="w-6 h-6" />, title: 'Always Free', desc: 'No paywalls, no premium subscriptions, no hidden fees. 100% free forever.', iconBg: 'bg-purple-50', iconColor: 'text-purple-500' },
            ].map(item => (
              <div
                key={item.title}
                className={`${glassCardStatic} ${dotPattern} p-6 min-h-[190px] flex flex-col items-center text-center`}
              >
                <div className={`w-14 h-14 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-5 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-medium text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm font-normal text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 relative z-10 px-4">
        <div className={`${ctaShell} relative`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF9500]/25 blur-[100px] rounded-full pointer-events-none" />

          <div className={`${glassCardStatic} relative z-10 rounded-[2rem] p-10 md:p-16 text-center border-white/90 bg-white/80`}>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight mb-4">
              Ready to Explore?
            </h2>
            <p className="text-base font-normal text-[#64748B] mb-10 max-w-md mx-auto">
              Browse all {toolsRegistry.length} carefully crafted tools across {categories.length} categories to simplify your workflow.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/tools"
                className="inline-flex justify-center items-center gap-2 bg-[#FF9500] text-white h-14 px-10 rounded-full font-medium text-base transition-all duration-300 shadow-[0_4px_20px_rgba(255,149,0,0.40)] hover:shadow-[0_4px_20px_rgba(255,149,0,0.40),0_0_0_4px_rgba(255,149,0,0.18)] hover:scale-[1.02]"
              >
                Browse All Tools
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-[11px] font-normal text-[#64748B] uppercase tracking-widest mt-2 flex items-center gap-2">
                <IconCheckCircle className="w-3.5 h-3.5 text-[#FF9500]" />
                No signup. No ads. No tracking.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function getCategoryDesc(slug: string): string {
  const descs: Record<string, string> = {
    crypto: 'Calculators and trackers for your crypto portfolio and investments.',
    finance: 'Smart calculators for loans, taxes, SIPs, and everyday finance planning.',
    dev: 'Formatters, generators, and encoders to speed up your dev workflow.',
    text: 'Case converters, word counters, and string manipulation utilities.',
    seo: 'Meta tag generators and basic SEO analysis tools for webmasters.',
    misc: 'A collection of random but highly useful everyday utilities.',
  };
  return descs[slug] || '';
}
