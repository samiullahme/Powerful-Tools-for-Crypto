import Link from 'next/link';
import { Tool } from '@/lib/tools-registry';
import {
  financeCardCopy,
  getFinanceToolIcon,
  IconArrowRight,
} from '@/components/finance-icons';

interface FinanceToolCardProps {
  tool: Tool;
}

export default function FinanceToolCard({ tool }: FinanceToolCardProps) {
  const copy = financeCardCopy[tool.slug] ?? {
    title: tool.name,
    description: tool.description,
  };

  return (
    <Link
      href={`/tools/${tool.category}/${tool.slug}`}
      className="group flex flex-col h-full rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.06)] border border-slate-100/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(15,23,42,0.10)]"
      aria-label={`Open ${copy.title}`}
    >
      <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
        {getFinanceToolIcon(tool.slug)}
      </div>

      <h4 className="text-[15px] font-semibold text-[#1A202C] leading-snug mb-2">
        {copy.title}
      </h4>

      <p className="text-xs font-normal text-[#718096] leading-[1.65] line-clamp-2 mb-5 flex-grow">
        {copy.description}
      </p>

      <div className="mt-auto">
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full group-hover:bg-teal-100 transition-colors">
          Finance
          <IconArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}
