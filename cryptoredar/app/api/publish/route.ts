import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { upsertWebhookPost } from '@/lib/blog-store';
import type { WebhookBlogPost } from '@/lib/blog-types';
import { checkRateLimit, validatePublishPayload, verifyApiKey } from '@/lib/publish-security';
import { canonicalUrl } from '@/lib/seo';

function getClientKey(request: Request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export async function POST(request: Request) {
  if (!process.env.PUBLISH_API_KEY) {
    return NextResponse.json(
      { error: 'Publishing API is not configured. Set PUBLISH_API_KEY.' },
      { status: 503 }
    );
  }

  if (!verifyApiKey(request)) {
    return NextResponse.json({ error: 'Unauthorized. Invalid or missing API key.' }, { status: 401 });
  }

  const rate = checkRateLimit(getClientKey(request));
  if (!rate.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded.', retryAfterSec: rate.retryAfterSec },
      { status: 429, headers: { 'Retry-After': String(rate.retryAfterSec) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const validated = validatePublishPayload(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const payload = validated.data;
  const now = new Date().toISOString();

  const post: WebhookBlogPost = {
    slug: payload.slug,
    title: payload.title,
    metaTitle: payload.metaTitle,
    description: payload.description,
    metaDescription: payload.metaDescription,
    content: payload.content,
    canonicalUrl: payload.canonicalUrl ?? canonicalUrl(`/blog/${payload.slug}`),
    featuredImage: payload.featuredImage,
    featuredImageAlt: payload.featuredImageAlt,
    category: payload.category,
    tags: payload.tags,
    author: payload.author ?? 'CryptoRedar Editorial',
    publishDate: payload.publishDate ?? now.slice(0, 10),
    updatedDate: payload.updatedDate ?? now.slice(0, 10),
    faq: payload.faq,
    schema: payload.schema,
    ogImage: payload.ogImage,
    twitterImage: payload.twitterImage,
    status: payload.status ?? 'published',
    createdAt: now,
  };

  await upsertWebhookPost(post);

  if (post.status === 'published') {
    revalidatePath('/blog');
    revalidatePath(`/blog/${post.slug}`);
    revalidatePath('/sitemap.xml');
    revalidatePath('/feed.xml');
  }

  return NextResponse.json({
    success: true,
    slug: post.slug,
    status: post.status,
    url: post.canonicalUrl,
    message: post.status === 'published' ? 'Post published successfully.' : 'Draft saved successfully.',
  });
}
