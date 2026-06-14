import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `https://cryptoredar.com${crumb.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center gap-1.5 py-3 text-[11px] font-medium text-slate-400 flex-wrap">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="text-slate-300">/</span>}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-[#FF9500] transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-600 font-semibold" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
