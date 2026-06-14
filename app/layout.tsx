import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[#64748B] bg-[#F0F2F7] antialiased overflow-x-hidden min-h-screen`}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
