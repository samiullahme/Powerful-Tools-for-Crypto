import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

/** Full document title — bypasses layout title template (avoids duplicate "| CryptoRedar"). */
export function absoluteTitle(title: string): Metadata['title'] {
  return { absolute: title };
}

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

export function withCanonical(path: string, metadata: Metadata): Metadata {
  const url = canonicalUrl(path);
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: url,
    },
    openGraph: metadata.openGraph
      ? { ...metadata.openGraph, url: metadata.openGraph.url ?? url }
      : undefined,
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};
