import Link from 'next/link';
import { Tool, getRelatedTools, getCategoryColor } from '@/lib/tools-registry';
import { sidebarCard } from '@/lib/ui-classes';

interface RelatedToolsProps {
  tool: Tool;
}

export default function RelatedTools({ tool }: RelatedToolsProps) {
  const related = getRelatedTools(tool);

  if (!related.length) return null;

  return (
    <div className={sidebarCard}>
      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.14em] mb-4">
        Related Tools
      </h4>
      <div className="flex flex-col gap-1">
        {related.map(t => {
          const color = getCategoryColor(t.category);
          return (
            <Link
              key={t.slug}
              href={`/tools/${t.category}/${t.slug}`}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FF9500]/6 transition-colors group"
              aria-label={`Open ${t.name}`}
            >
              <span
                className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl text-base shadow-sm"
                style={{ background: `${color}18` }}
              >
                {t.icon}
              </span>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-[#0F172A] group-hover:text-[#FF9500] transition-colors truncate">
                  {t.name}
                </div>
                <div className="text-[11px] text-slate-400">{t.categoryLabel}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
