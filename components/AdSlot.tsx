'use client';

import { useEffect, useRef } from 'react';

// AdSense publisher client ID (replace value if the pub ID ever changes).
export const ADSENSE_CLIENT = 'ca-pub-6077242570039713';

type AdPosition = 'header' | 'sidebar' | 'footer';

interface AdSlotProps {
  position: AdPosition;
  /** Ad slot ID from AdSense dashboard (placeholder until user replaces). */
  slotId?: string;
  className?: string;
}

// Ad slot IDs — REPLACE these placeholder numeric strings with real slot IDs
// from your Google AdSense dashboard.
const DEFAULT_SLOT_IDS: Record<AdPosition, string> = {
  header: '1111111111',
  sidebar: '2222222222',
  footer: '3333333333',
};

// Slot dimensions — matches common AdSense unit sizes.
const SLOT_STYLE: Record<AdPosition, React.CSSProperties> = {
  header: { display: 'block', minHeight: '90px' },   // 728x90 leaderboard (responsive)
  sidebar: { display: 'block', minHeight: '250px' }, // 300x250 or responsive
  footer: { display: 'block', minHeight: '90px' },   // 728x90 leaderboard (responsive)
};

const SLOT_LABEL: Record<AdPosition, string> = {
  header: 'ad-header',
  sidebar: 'ad-sidebar',
  footer: 'ad-footer',
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    __adsenseLoaded?: boolean;
  }
}

export default function AdSlot({ position, slotId, className = '' }: AdSlotProps) {
  const insRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const tryPush = () => {
      if (pushedRef.current) return;
      if (!window.__adsenseLoaded) return;
      // Only push once the <ins> element is mounted & AdSense script is present.
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      } catch {
        // adsbygoogle throws if pushed before script fully init — ignore, we'll retry via event.
      }
    };

    tryPush();
    const handler = () => tryPush();
    window.addEventListener('adsense-loaded', handler);
    return () => window.removeEventListener('adsense-loaded', handler);
  }, []);

  const effectiveSlot = slotId ?? DEFAULT_SLOT_IDS[position];

  return (
    <div
      className={`w-full flex justify-center my-6 ${className}`}
      data-testid={SLOT_LABEL[position]}
      aria-label="Advertisement"
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={SLOT_STYLE[position]}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={effectiveSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
