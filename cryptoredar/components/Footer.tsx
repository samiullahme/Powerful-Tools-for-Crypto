import Link from 'next/link';
import { IconBolt } from '@/components/icons';
import { shell } from '@/lib/ui-classes';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-white/5 relative z-10 mt-auto">
      <div className={shell}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          <div className="lg:col-span-1 flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-7 h-7 rounded bg-white/10 text-white flex items-center justify-center border border-white/20">
                <IconBolt className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold text-white tracking-tight group-hover:text-[#FF9500] transition-colors">
                CRYPTOREDAR
              </span>
            </Link>
            <p className="text-[13px] font-normal text-slate-400 mb-6 leading-relaxed max-w-[220px]">
              Free calculators, converters, and utilities for modern professionals and crypto enthusiasts.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <Link href="/contact" aria-label="Email" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </Link>
              <Link href="#" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
                </svg>
              </Link>
              <Link href="#" aria-label="Website" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5 opacity-90">Tools</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/tools/crypto" className="text-[13px] text-slate-400 hover:text-[#FF9500] transition-colors">Crypto Tools</Link></li>
              <li><Link href="/tools/finance" className="text-[13px] text-slate-400 hover:text-[#FF9500] transition-colors">Finance Tools</Link></li>
              <li><Link href="/tools/dev" className="text-[13px] text-slate-400 hover:text-[#FF9500] transition-colors">Developer Tools</Link></li>
              <li><Link href="/tools/text" className="text-[13px] text-slate-400 hover:text-[#FF9500] transition-colors">Text Tools</Link></li>
              <li><Link href="/tools/seo" className="text-[13px] text-slate-400 hover:text-[#FF9500] transition-colors">SEO Tools</Link></li>
              <li><Link href="/tools/misc" className="text-[13px] text-slate-400 hover:text-[#FF9500] transition-colors">Misc Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5 opacity-90">Popular</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/tools/crypto/crypto-investment-calculator" className="text-[13px] text-slate-400 hover:text-white transition-colors">BTC Converter</Link></li>
              <li><Link href="/tools/finance/sip-calculator" className="text-[13px] text-slate-400 hover:text-white transition-colors">SIP Calculator</Link></li>
              <li><Link href="/tools/finance/emi-calculator" className="text-[13px] text-slate-400 hover:text-white transition-colors">EMI Calculator</Link></li>
              <li><Link href="/tools/finance/gst-calculator" className="text-[13px] text-slate-400 hover:text-white transition-colors">GST Calculator</Link></li>
              <li><Link href="/tools/dev/json-formatter" className="text-[13px] text-slate-400 hover:text-white transition-colors">JSON Formatter</Link></li>
              <li><Link href="/tools/dev/uuid-generator" className="text-[13px] text-slate-400 hover:text-white transition-colors">UUID Generator</Link></li>
              <li><Link href="/tools/crypto/crypto-profit-calculator" className="text-[13px] text-slate-400 hover:text-white transition-colors">Crypto Profit Calc</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5 opacity-90">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-[13px] text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-[13px] text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-[13px] text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/sitemap" className="text-[13px] text-slate-400 hover:text-white transition-colors">Sitemap</Link></li>
              <li>
                <Link href="/feed.xml" className="text-[13px] text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" />
                  </svg>
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5 opacity-90">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/privacy-policy" className="text-[13px] text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-[13px] text-slate-400 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/cookie-policy" className="text-[13px] text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="text-[13px] text-slate-400 hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/dmca" className="text-[13px] text-slate-400 hover:text-white transition-colors">DMCA Policy</Link></li>
              <li><Link href="/contact" className="text-[13px] text-[#FF9500] hover:text-orange-400 transition-colors font-medium">Advertise with Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="h-px w-full bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-slate-500 font-normal">
          <p>© 2025 CryptoRedar.com — All rights reserved.</p>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <span>Made with ❤️ for the community</span>
            <span className="flex items-center gap-1 ml-1 text-sm">🇮🇳 🇵🇰 🌍</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
