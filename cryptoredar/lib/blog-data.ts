import { blogPosts, type BlogPost } from '@/lib/blog-posts';
import { getWebhookPostBySlug, readWebhookPosts } from '@/lib/blog-store';
import type { WebhookBlogPost } from '@/lib/blog-types';

export type UnifiedBlogPost = BlogPost & {
  source: 'static' | 'webhook';
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  tags?: string[];
  faq?: { question: string; answer: string }[];
  schema?: Record<string, unknown>;
  ogImage?: string;
  twitterImage?: string;
  status?: 'draft' | 'published';
  updatedDate?: string;
};

function webhookToUnified(post: WebhookBlogPost): UnifiedBlogPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    category: post.category,
    publishedAt: post.publishDate,
    readTime: estimateReadTime(post.content),
    author: post.author,
    source: 'webhook',
    content: post.content,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    canonicalUrl: post.canonicalUrl,
    featuredImage: post.featuredImage,
    featuredImageAlt: post.featuredImageAlt,
    tags: post.tags,
    faq: post.faq,
    schema: post.schema,
    ogImage: post.ogImage,
    twitterImage: post.twitterImage,
    status: post.status,
    updatedDate: post.updatedDate,
  };
}

function estimateReadTime(content: string) {
  const words = content.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export async function getAllPublishedPosts(): Promise<UnifiedBlogPost[]> {
  const staticPublished: UnifiedBlogPost[] = blogPosts.map((p) => ({ ...p, source: 'static' }));
  const webhook = (await readWebhookPosts())
    .filter((p) => p.status === 'published')
    .map(webhookToUnified);
  return [...staticPublished, ...webhook].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getBlogPostBySlug(slug: string): Promise<UnifiedBlogPost | undefined> {
  const staticPost = blogPosts.find((p) => p.slug === slug);
  if (staticPost) return { ...staticPost, source: 'static' };

  const webhook = await getWebhookPostBySlug(slug);
  if (!webhook || webhook.status !== 'published') return undefined;
  return webhookToUnified(webhook);
}

export async function getAllPostSlugs(): Promise<string[]> {
  const webhook = (await readWebhookPosts())
    .filter((p) => p.status === 'published')
    .map((p) => p.slug);
  return [...blogPosts.map((p) => p.slug), ...webhook];
}
