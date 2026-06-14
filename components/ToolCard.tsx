import Link from 'next/link';
import { Tool, getCategoryColor } from '@/lib/tools-registry';
import { IconArrowRight } from '@/components/icons';
import { glassCard } from '@/lib/ui-classes';

interface ToolCardProps {
  tool: Tool;
  size?: 'default' | 'compact';
  /** `glass` matches the reference homepage card style */
  variant?: 'default' | 'glass';
}

const categoryBadgeStyles: Record<string, { iconBg: string; badgeBg: string; badgeText: string }> = {
  crypto: { iconBg: 'bg-[#FF9500]/10', badgeBg: 'bg-[#FFF5E6]', badgeText: 'text-[#FF9500]' },
  finance: { iconBg: 'bg-teal-50', badgeBg: 'bg-teal-50', badgeText: 'text-teal-700' },
  dev: { iconBg: 'bg-violet-50', badgeBg: 'bg-violet-50', badgeText: 'text-violet-700' },
  text: { iconBg: 'bg-sky-50', badgeBg: 'bg-sky-50', badgeText: 'text-sky-700' },
  seo: { iconBg: 'bg-orange-50', badgeBg: 'bg-orange-50', badgeText: 'text-orange-700' },
  misc: { iconBg: 'bg-teal-50', badgeBg: 'bg-teal-50', badgeText: 'text-teal-700' },
};

export default function ToolCard({ tool, size = 'default', variant = 'default' }: ToolCardProps) {
  const color = getCategoryColor(tool.category);
  const glassStyle = categoryBadgeStyles[tool.category] ?? categoryBadgeStyles.crypto;

  if (variant === 'glass') {
    return (
      <Link
        href={`/tools/${tool.category}/${tool.slug}`}
        className={`${glassCard} relative flex flex-col h-full min-h-[205px] p-5 group block`}
        aria-label={`Open ${tool.name}`}
      >
        {tool.isNew && (
          <span className="absolute top-4 right-4 bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
            New
          </span>
        )}

        <div className={`w-10 h-10 rounded-full ${glassStyle.iconBg} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform shrink-0`}>
          {tool.icon}
        </div>

        <h4 className={`text-[15px] font-medium text-[#0F172A] leading-tight mb-2${tool.isNew ? ' pr-6' : ''}`}>
          {tool.name}
        </h4>

        {size === 'default' && (
          <p className="text-xs font-normal text-[#64748B] line-clamp-2 mb-4 flex-grow">
            {tool.description}
          </p>
        )}

        <div className="mt-auto flex items-center">
          <span className={`inline-flex items-center gap-1 ${glassStyle.badgeBg} ${glassStyle.badgeText} text-[10px] font-medium px-2 py-0.5 rounded-full`}>
            {tool.categoryLabel}
            <IconArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/tools/${tool.category}/${tool.slug}`}
      className="relative flex flex-col h-full min-h-[205px] p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      aria-label={`Open ${tool.name}`}
    >
      <div className="absolute top-0 left-0 w-full h-[3px] rounded-t-2xl bg-gradient-to-r from-[#FF9500] to-transparent opacity-80" />

      {tool.isNew && (
        <span className="absolute top-4 right-4 bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
          New
        </span>
      )}

      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0"
        style={{ background: `${color}18` }}
      >
        {tool.icon}
      </div>

      <div className="flex-grow">
        <h4 className="text-[15px] font-bold text-[#0F172A] tracking-tight leading-snug mb-2">
          {tool.name}
        </h4>
        {size === 'default' && (
          <p className="text-xs font-normal text-slate-500 leading-5 line-clamp-2 mb-4">
            {tool.description}
          </p>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
          style={{ background: `${color}18`, color }}
        >
          {tool.categoryLabel}
        </span>
        <IconArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF9500] group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}
