import type { ReactNode } from 'react';
import Link from 'next/link';
import { glassCardStatic, heroShell, shell } from '@/lib/ui-classes';
import { canonicalUrl } from '@/lib/seo';

type Breadcrumb = { label: string; href?: string };

type ContentPageLayoutProps = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  breadcrumbs?: Breadcrumb[];
  children: ReactNode;
  wide?: boolean;
};

export default function ContentPageLayout({
  title,
  subtitle,
  lastUpdated,
  breadcrumbs,
  children,
  wide = false,
}: ContentPageLayoutProps) {
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: crumb.label,
            ...(crumb.href ? { item: canonicalUrl(crumb.href) } : {}),
          })),
        }
      : null;

  return (
    <div className="relative pb-20">
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-[radial-gradient(circle_at_top_center,#E8EEFF_0%,#F0F2F7_70%)] border-b border-black/[0.04]">
        <div className={`${heroShell} relative z-10`}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-5">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-slate-300">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#FF9500] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-700 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-[#64748B] max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          {lastUpdated && (
            <p className="text-xs text-slate-400 mt-4 font-medium uppercase tracking-wider">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      <div className={`${shell} -mt-6 relative z-10`}>
        <article className={`${glassCardStatic} p-6 md:p-10 lg:p-12 ${wide ? 'max-w-5xl mx-auto' : 'max-w-3xl mx-auto'}`}>
          <div className="prose-content [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2:first-child]:mt-0 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-[#64748B] [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-2 [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-[#64748B] [&_a]:text-[#FF9500] [&_a]:font-medium [&_a]:underline-offset-2 [&_a]:hover:underline [&_strong]:text-[#0F172A] [&_strong]:font-semibold">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
