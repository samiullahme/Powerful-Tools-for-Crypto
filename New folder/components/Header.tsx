'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { toolsRegistry } from '@/lib/tools-registry';
import { IconSearch } from '@/components/icons';
import {
  glassNav,
  headerBar,
  headerNav,
  navLinkActive,
  navLinkIdle,
  shell,
} from '@/lib/ui-classes';

export default function Header() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<typeof toolsRegistry>([]);
  const [showResults, setShowResults] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('header-search')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (val: string) => {
    setSearch(val);
    if (val.length < 2) { setResults([]); setShowResults(false); return; }
    const filtered = toolsRegistry.filter(t =>
      t.name.toLowerCase().includes(val.toLowerCase()) ||
      t.description.toLowerCase().includes(val.toLowerCase()) ||
      t.category.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 6);
    setResults(filtered);
    setShowResults(true);
  };

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');
  const navLinkClass = (path: string) => (isActive(path) ? navLinkActive : navLinkIdle);

  return (
    <header className={`fixed top-0 w-full z-50 h-16 flex items-center ${glassNav}`}>
      <div className={`${shell} ${headerBar}`}>

        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#FF9500] text-white flex items-center justify-center shadow-sm group-hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="text-base font-semibold text-[#0F172A] tracking-tight group-hover:opacity-80 transition-opacity">
            CRYPTOREDAR
          </span>
        </Link>

        <nav className={headerNav} aria-label="Main navigation">
          <Link href="/tools" className={navLinkClass('/tools')}>All Tools</Link>
          <Link href="/tools/crypto" className={navLinkClass('/tools/crypto')}>Crypto</Link>
          <Link href="/tools/finance" className={navLinkClass('/tools/finance')}>Finance</Link>
          <Link href="/tools/dev" className={navLinkClass('/tools/dev')}>Dev</Link>
          <Link href="/tools/text" className={navLinkClass('/tools/text')}>Text</Link>
          <Link href="/tools/seo" className={navLinkClass('/tools/seo')}>SEO</Link>
          <Link href="/tools/misc" className={navLinkClass('/tools/misc')}>Misc</Link>
        </nav>

        <div className="flex items-center justify-end gap-3 shrink-0">
          <div
            className="relative hidden sm:flex items-center gap-2 bg-white/50 border border-white/80 rounded-full h-9 px-3 hover:bg-white/80 focus-within:bg-white/90 focus-within:border-[#FF9500]/25 transition-all shadow-sm w-[190px] lg:w-[220px]"
            ref={searchRef}
          >
            <IconSearch className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={e => handleSearch(e.target.value)}
              onFocus={() => search.length >= 2 && setShowResults(true)}
              className="bg-transparent border-none outline-none text-xs font-normal text-[#0F172A] placeholder-[#64748B] w-full min-w-0"
              aria-label="Search tools"
              id="header-search"
            />
            <span className="text-[10px] font-medium bg-black/5 px-1.5 py-0.5 rounded text-black/40 shrink-0">⌘K</span>

            {showResults && results.length > 0 && (
              <div className="absolute top-[calc(100%+10px)] right-0 w-[300px] bg-white/95 backdrop-blur-xl border border-white/90 rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.14)] p-1.5 max-h-72 overflow-y-auto z-50">
                {results.map(tool => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.category}/${tool.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FF9500]/8 text-[#0F172A] transition-colors"
                    onClick={() => { setSearch(''); setShowResults(false); }}
                  >
                    <span className="text-lg shrink-0">{tool.icon}</span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold leading-snug truncate">{tool.name}</div>
                      <div className="text-[10px] font-medium text-[#64748B] mt-0.5">{tool.categoryLabel}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            className="md:hidden w-9 h-9 rounded-full bg-white/50 border border-white/80 flex items-center justify-center text-[#0F172A] shadow-sm hover:bg-white/80 transition-colors shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            id="mobile-menu-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-lg p-4 flex flex-col gap-1 z-50 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          {[
            { href: '/tools', label: 'All Tools' },
            { href: '/tools/crypto', label: 'Crypto Tools' },
            { href: '/tools/finance', label: 'Finance Tools' },
            { href: '/tools/dev', label: 'Dev Tools' },
            { href: '/tools/text', label: 'Text Tools' },
            { href: '/tools/seo', label: 'SEO Tools' },
            { href: '/tools/misc', label: 'Misc Tools' },
          ].map(nav => (
            <Link
              key={nav.href}
              href={nav.href}
              className="px-4 py-3 rounded-xl hover:bg-[#FF9500]/10 hover:text-[#FF9500] text-[#64748B] font-medium transition-colors text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
