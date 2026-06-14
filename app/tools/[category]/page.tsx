import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolCard from '@/components/ToolCard';
import { toolsRegistry, categories, getCategoryColor } from '@/lib/tools-registry';
import Link from 'next/link';
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
  const count = toolsRegistry.filter(t => t.category === category).length;
  return {
    title: `${cat.label} — ${count} Free Online Tools`,
    description: `${count} free ${cat.label.toLowerCase()} on CryptoRedar. No signup required. Instant results in your browser.`,
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
      </div>
    </main>
  );
}
