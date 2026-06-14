import { ReactNode } from 'react';
import { IconArrowRight } from '@/components/icons';

type IconProps = { className?: string };

export function IconCalculator({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8M8 10h2M12 10h2M16 10h0M8 14h2M12 14h2M16 14h0M8 18h2M12 18h2M16 18h0" />
    </svg>
  );
}

export function IconCard({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

export function IconChartBars({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20V10M10 20V4M16 20v-6M22 20H2" />
    </svg>
  );
}

export function IconWallet({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h18v12H3z" /><path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" /><path d="M17 13h4" />
    </svg>
  );
}

export function IconPieChart({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 0 1 9 9H12V3z" /><circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export function IconMath({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9h16M4 15h16M9 4v16M15 4v16" />
    </svg>
  );
}

export function IconHome({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /><path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function IconSparkle({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

export function IconHeart({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" />
    </svg>
  );
}

export function IconPaintRoller({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h11a3 3 0 0 0 0-6H3v6z" /><path d="M7 8v2a4 4 0 0 0 4 4h1l4 6" />
    </svg>
  );
}

const financeIconMap: Record<string, ReactNode> = {
  'gst-calculator': <IconCalculator />,
  'emi-calculator': <IconCard />,
  'sip-calculator': <IconChartBars />,
  'salary-calculator': <IconWallet />,
  'compound-interest-calculator': <IconPieChart />,
  'percentage-calculator': <IconMath />,
  'room-makeover-planner': <IconHome />,
  'goth-room-makeover': <IconSparkle />,
  'teen-girl-room-makeover': <IconHeart />,
  'room-makeover-budget-calculator': <IconPaintRoller />,
};

export function getFinanceToolIcon(slug: string): ReactNode {
  return financeIconMap[slug] ?? <IconCalculator />;
}

/** Display copy tuned to match the reference finance grid */
export const financeCardCopy: Record<string, { title: string; description: string }> = {
  'gst-calculator': {
    title: 'GST Calculator',
    description: 'Add or remove GST accurately from any amount based on standard slabs.',
  },
  'emi-calculator': {
    title: 'EMI Calculator',
    description: 'Plan your home, car or personal loan EMIs with amortization charts.',
  },
  'sip-calculator': {
    title: 'SIP Calculator',
    description: 'Estimate future wealth created through systematic mutual fund investments.',
  },
  'salary-calculator': {
    title: 'In-Hand Salary Calculator',
    description: 'Compute actual take-home pay after PF, tax, and deductions.',
  },
  'compound-interest-calculator': {
    title: 'Compound Interest Calculator',
    description: 'See the magic of compounding on your long-term savings.',
  },
  'percentage-calculator': {
    title: 'Percentage Calculator',
    description: 'Quickly find percentages, increases, and decreases for daily math.',
  },
  'room-makeover-planner': {
    title: 'Room Makeover Style Planner',
    description: 'Budget and plan your next room transformation project efficiently.',
  },
  'goth-room-makeover': {
    title: 'Goth Room Makeover Planner',
    description: 'Specialized budgeting for aesthetic and alternative room setups.',
  },
  'teen-girl-room-makeover': {
    title: 'Teen Girl Room Vision Board',
    description: 'Plan costs for trendy furniture, decor, and aesthetic upgrades.',
  },
  'room-makeover-budget-calculator': {
    title: 'Home Remodeling Budget',
    description: 'Track paint, materials, and labor costs for entire home renovations.',
  },
};

export const POPULAR_FINANCE_SLUGS = [
  'gst-calculator',
  'emi-calculator',
  'sip-calculator',
  'salary-calculator',
  'compound-interest-calculator',
  'percentage-calculator',
  'room-makeover-planner',
  'goth-room-makeover',
  'teen-girl-room-makeover',
  'room-makeover-budget-calculator',
] as const;

export { IconArrowRight };
