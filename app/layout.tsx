import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import CookieConsent from '@/components/CookieConsent';
import { organizationSchema, websiteSchema, canonicalUrl } from '@/lib/seo';
import { INDEXNOW_KEY } from '@/lib/indexnow';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cryptoredar.com'),
  title: {
    default: 'CryptoRedar — Free Crypto, Finance & Developer Tools',
    template: '%s | CryptoRedar',
  },
  description: 'Free online tools for crypto traders, finance professionals, and developers. Calculators, converters, and utilities. No signup required.',
  keywords: ['crypto tools', 'finance calculator', 'developer tools', 'free online tools', 'cryptocurrency calculator'],
  authors: [{ name: 'CryptoRedar' }],
  creator: 'CryptoRedar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cryptoredar.com',
    siteName: 'CryptoRedar',
    title: 'CryptoRedar — Free Crypto, Finance & Developer Tools',
    description: 'Free online tools. Crypto calculators, finance tools, developer utilities. No signup required.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoRedar — Free Crypto & Finance Tools',
    description: 'Free tools for crypto, finance, dev & more.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: canonicalUrl('/'),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ─── Google Search Console verification (REPLACE placeholder with the code from GSC) ─── */}
        <meta name="google-site-verification" content="REPLACE_WITH_GSC_VERIFICATION_CODE" />

        {/* ─── IndexNow verification ─── */}
        <meta name="indexnow-verification" content={INDEXNOW_KEY} />

        {/* ─── Performance: preconnect / dns-prefetch ─── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/*
          AdSense script is intentionally NOT injected here at request time.
          For GDPR compliance the loader (see components/CookieConsent.tsx) appends this
          script to <head> ONLY after the visitor grants consent.

          Manual reference of the exact script tag (do not uncomment — kept for auditability):
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6077242570039713" crossorigin="anonymous"></script>
        */}
      </head>
      <body className={`${inter.className} text-[#64748B] bg-[#F0F2F7] antialiased overflow-x-hidden min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          {/* Footer ad slot — above the site footer on ALL pages */}
          <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
            <AdSlot position="footer" />
          </div>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
