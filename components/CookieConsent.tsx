'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ADSENSE_CLIENT } from '@/components/AdSlot';

const STORAGE_KEY = 'cryptoredar-consent-v1';
const ADSENSE_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;

type ConsentValue = 'accepted' | 'rejected' | 'custom';
type ConsentRecord = {
  value: ConsentValue;
  ads: boolean;
  analytics: boolean;
  timestamp: string;
};

function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentRecord;
  } catch {
    return null;
  }
}

function writeConsent(record: ConsentRecord) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage unavailable — non-fatal.
  }
}

function loadAdSense() {
  if (typeof window === 'undefined') return;
  if (window.__adsenseLoaded) return;
  if (document.querySelector(`script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`)) {
    window.__adsenseLoaded = true;
    window.dispatchEvent(new Event('adsense-loaded'));
    return;
  }
  const s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = ADSENSE_SRC;
  s.onload = () => {
    window.__adsenseLoaded = true;
    window.dispatchEvent(new Event('adsense-loaded'));
  };
  document.head.appendChild(s);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [adsAllowed, setAdsAllowed] = useState(true);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      return;
    }
    if (existing.ads) loadAdSense();
  }, []);

  const acceptAll = () => {
    writeConsent({ value: 'accepted', ads: true, analytics: true, timestamp: new Date().toISOString() });
    loadAdSense();
    setVisible(false);
  };

  const rejectAll = () => {
    writeConsent({ value: 'rejected', ads: false, analytics: false, timestamp: new Date().toISOString() });
    setVisible(false);
  };

  const savePreferences = () => {
    writeConsent({
      value: 'custom',
      ads: adsAllowed,
      analytics: analyticsAllowed,
      timestamp: new Date().toISOString(),
    });
    if (adsAllowed) loadAdSense();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 md:bottom-6 z-[60] max-w-3xl md:mx-auto"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      data-testid="cookie-consent-banner"
    >
      <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.14)] p-5 md:p-6">
        {!showPrefs ? (
          <>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFF5E6] text-[#FF9500]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8.5 8.5v.01" />
                      <path d="M16 15.5v.01" />
                      <path d="M12 12v.01" />
                      <path d="M11 17v.01" />
                      <path d="M7 14v.01" />
                    </svg>
                  </span>
                  <h2 className="text-sm md:text-base font-bold text-[#0F172A] tracking-tight">
                    We use cookies
                  </h2>
                </div>
                <p className="text-[13px] leading-relaxed text-[#64748B]">
                  We use cookies to keep the site fast and, with your permission, to show ads that help keep CryptoRedar free.
                  {' '}
                  <Link href="/cookie-policy" className="text-[#FF9500] font-medium underline-offset-2 hover:underline">
                    Cookie policy
                  </Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowPrefs(true)}
                  className="inline-flex justify-center items-center h-10 px-4 rounded-full text-[13px] font-medium text-[#0F172A] bg-white border border-black/10 hover:bg-black/[0.03] transition-colors"
                  data-testid="cookie-manage-btn"
                >
                  Manage Preferences
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="inline-flex justify-center items-center h-10 px-4 rounded-full text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-black/[0.03] transition-colors"
                  data-testid="cookie-reject-btn"
                >
                  Reject
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="inline-flex justify-center items-center h-10 px-5 rounded-full text-[13px] font-semibold text-white bg-[#FF9500] shadow-[0_4px_14px_rgba(255,149,0,0.35)] hover:shadow-[0_4px_20px_rgba(255,149,0,0.45)] hover:scale-[1.02] transition-all"
                  data-testid="cookie-accept-btn"
                >
                  Accept All
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-base font-bold text-[#0F172A] tracking-tight mb-1">
              Manage cookie preferences
            </h2>
            <p className="text-[13px] leading-relaxed text-[#64748B] mb-4">
              Choose what you&apos;re OK with. You can change this anytime from the footer.
            </p>

            <div className="flex flex-col gap-3 mb-5">
              <label className="flex items-start gap-3 p-3 rounded-xl border border-black/[0.06] bg-white/60">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 accent-[#FF9500]"
                  data-testid="cookie-toggle-essential"
                />
                <div>
                  <div className="text-[13px] font-semibold text-[#0F172A]">Essential (always on)</div>
                  <div className="text-[12px] text-[#64748B]">Needed for the site to work. Stores your consent choice locally.</div>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl border border-black/[0.06] bg-white/60 cursor-pointer hover:bg-white transition-colors">
                <input
                  type="checkbox"
                  checked={adsAllowed}
                  onChange={(e) => setAdsAllowed(e.target.checked)}
                  className="mt-1 accent-[#FF9500]"
                  data-testid="cookie-toggle-ads"
                />
                <div>
                  <div className="text-[13px] font-semibold text-[#0F172A]">Advertising cookies</div>
                  <div className="text-[12px] text-[#64748B]">Loads Google AdSense to show non-personalized or personalized ads.</div>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl border border-black/[0.06] bg-white/60 cursor-pointer hover:bg-white transition-colors">
                <input
                  type="checkbox"
                  checked={analyticsAllowed}
                  onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                  className="mt-1 accent-[#FF9500]"
                  data-testid="cookie-toggle-analytics"
                />
                <div>
                  <div className="text-[13px] font-semibold text-[#0F172A]">Analytics cookies</div>
                  <div className="text-[12px] text-[#64748B]">Helps us understand which tools are most useful. No personal data.</div>
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row-reverse gap-2">
              <button
                type="button"
                onClick={savePreferences}
                className="inline-flex justify-center items-center h-10 px-5 rounded-full text-[13px] font-semibold text-white bg-[#FF9500] shadow-[0_4px_14px_rgba(255,149,0,0.35)] hover:scale-[1.02] transition-transform"
                data-testid="cookie-save-btn"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={() => setShowPrefs(false)}
                className="inline-flex justify-center items-center h-10 px-4 rounded-full text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-black/[0.03] transition-colors"
                data-testid="cookie-back-btn"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
