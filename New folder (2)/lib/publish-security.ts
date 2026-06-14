import type { PublishPayload } from '@/lib/blog-types';

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_TITLE = 200;
const MAX_DESCRIPTION = 500;
const MAX_CONTENT = 200_000;
const MAX_SLUG = 120;
const MAX_TAGS = 20;

export function sanitizeHtmlContent(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .trim();
}

export function normalizeSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, MAX_SLUG);
}

export function validatePublishPayload(body: unknown): { ok: true; data: PublishPayload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Request body must be a JSON object.' };
  }

  const raw = body as Record<string, unknown>;
  const title = String(raw.title ?? '').trim();
  const description = String(raw.description ?? '').trim();
  const content = String(raw.content ?? '').trim();
  const slugInput = String(raw.slug ?? '').trim();
  const category = String(raw.category ?? '').trim();
  const status = raw.status === 'draft' ? 'draft' : 'published';

  if (!title) return { ok: false, error: 'title is required.' };
  if (title.length > MAX_TITLE) return { ok: false, error: 'title is too long.' };
  if (!description) return { ok: false, error: 'description is required.' };
  if (description.length > MAX_DESCRIPTION) return { ok: false, error: 'description is too long.' };
  if (!content) return { ok: false, error: 'content is required.' };
  if (content.length > MAX_CONTENT) return { ok: false, error: 'content is too long.' };
  if (!slugInput) return { ok: false, error: 'slug is required.' };
  if (!category) return { ok: false, error: 'category is required.' };

  const slug = normalizeSlug(slugInput);
  if (!slug || !SLUG_RE.test(slug)) {
    return { ok: false, error: 'slug must contain only lowercase letters, numbers, and hyphens.' };
  }

  const tags = Array.isArray(raw.tags)
    ? raw.tags.map((t) => String(t).trim()).filter(Boolean).slice(0, MAX_TAGS)
    : undefined;

  const faq = Array.isArray(raw.faq)
    ? raw.faq
        .map((item) => {
          if (!item || typeof item !== 'object') return null;
          const q = String((item as Record<string, unknown>).question ?? '').trim();
          const a = String((item as Record<string, unknown>).answer ?? '').trim();
          return q && a ? { question: q, answer: a } : null;
        })
        .filter((item): item is { question: string; answer: string } => Boolean(item))
    : undefined;

  let schema: Record<string, unknown> | undefined;
  if (raw.schema && typeof raw.schema === 'object' && !Array.isArray(raw.schema)) {
    schema = raw.schema as Record<string, unknown>;
  }

  const publishDate =
    typeof raw.publishDate === 'string' && raw.publishDate
      ? raw.publishDate
      : new Date().toISOString().slice(0, 10);

  return {
    ok: true,
    data: {
      title,
      metaTitle: raw.metaTitle ? String(raw.metaTitle).trim() : undefined,
      description,
      metaDescription: raw.metaDescription ? String(raw.metaDescription).trim() : undefined,
      content: sanitizeHtmlContent(content),
      slug,
      canonicalUrl: raw.canonicalUrl ? String(raw.canonicalUrl).trim() : undefined,
      featuredImage: raw.featuredImage ? String(raw.featuredImage).trim() : undefined,
      featuredImageAlt: raw.featuredImageAlt ? String(raw.featuredImageAlt).trim() : undefined,
      category,
      tags,
      author: raw.author ? String(raw.author).trim() : 'CryptoRedar Editorial',
      publishDate,
      updatedDate: raw.updatedDate ? String(raw.updatedDate).trim() : undefined,
      faq,
      schema,
      ogImage: raw.ogImage ? String(raw.ogImage).trim() : undefined,
      twitterImage: raw.twitterImage ? String(raw.twitterImage).trim() : undefined,
      status,
    },
  };
}

type RateBucket = { count: number; resetAt: number };

const buckets = new Map<string, RateBucket>();
const RATE_LIMIT = 30;
const WINDOW_MS = 60 * 60 * 1000;

export function checkRateLimit(key: string): { allowed: true } | { allowed: false; retryAfterSec: number } {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (bucket.count >= RATE_LIMIT) {
    return { allowed: false, retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { allowed: true };
}

export function verifyApiKey(request: Request): boolean {
  const expected = process.env.PUBLISH_API_KEY;
  if (!expected) return false;

  const headerKey = request.headers.get('x-api-key');
  const auth = request.headers.get('authorization');
  const bearer = auth?.startsWith('Bearer ') ? auth.slice(7).trim() : null;

  return headerKey === expected || bearer === expected;
}
