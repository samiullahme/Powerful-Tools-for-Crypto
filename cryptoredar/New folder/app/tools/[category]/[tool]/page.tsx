import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolLayout from '@/components/ToolLayout';
import { toolsRegistry, getToolBySlug, categories } from '@/lib/tools-registry';
import { getToolComponent } from '@/lib/tool-components';

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
    title: tool.seoTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.seoTitle,
      description: tool.metaDescription,
      url: `https://cryptoredar.com/tools/${tool.category}/${tool.slug}`,
    },
    twitter: {
      card: 'summary',
      title: tool.name,
      description: tool.metaDescription,
    },
    alternates: {
      canonical: `https://cryptoredar.com/tools/${tool.category}/${tool.slug}`,
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
    </ToolLayout>
  );
}
