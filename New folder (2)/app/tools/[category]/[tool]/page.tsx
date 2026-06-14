import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolLayout from '@/components/ToolLayout';
import CryptoProfitCalculatorContent from '@/components/tools/CryptoProfitCalculatorContent';
import { toolsRegistry, getToolBySlug, categories } from '@/lib/tools-registry';
import { getToolComponent } from '@/lib/tool-components';
import { absoluteTitle, canonicalUrl } from '@/lib/seo';

interface Props {
  params: Promise<{ category: string; tool: string }>;
}

export async function generateStaticParams() {
  return toolsRegistry.map(t => ({ category: t.category, tool: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tool: toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) return {};
  return {
    title: absoluteTitle(tool.seoTitle),
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.seoTitle,
      description: tool.metaDescription,
      url: canonicalUrl(`/tools/${tool.category}/${tool.slug}`),
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: tool.name,
      description: tool.metaDescription,
    },
    alternates: {
      canonical: canonicalUrl(`/tools/${tool.category}/${tool.slug}`),
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { category, tool: toolSlug } = await params;
  const tool = toolsRegistry.find(t => t.slug === toolSlug && t.category === category);
  if (!tool) notFound();

  const ToolComponent = getToolComponent(tool.slug);
  if (!ToolComponent) notFound();

  return (
    <ToolLayout tool={tool}>
      <ToolComponent />
      {toolSlug === 'crypto-profit-calculator' && <CryptoProfitCalculatorContent />}
    </ToolLayout>
  );
}
