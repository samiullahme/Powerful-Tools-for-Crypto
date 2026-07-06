import { NextResponse } from 'next/server';
import { pingIndexNow } from '@/lib/indexnow';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const urls = extractUrls(body);
  if (urls.length === 0) {
    return NextResponse.json(
      { error: 'Provide a "url" (string) or "urls" (string[]) in the JSON body.' },
      { status: 400 }
    );
  }

  const result = await pingIndexNow(urls);
  return NextResponse.json({
    submitted: urls.length,
    urls,
    result,
  }, { status: result.ok ? 200 : 502 });
}

function extractUrls(body: unknown): string[] {
  if (!body || typeof body !== 'object') return [];
  const b = body as Record<string, unknown>;
  if (Array.isArray(b.urls)) return b.urls.filter((u): u is string => typeof u === 'string');
  if (typeof b.url === 'string') return [b.url];
  return [];
}
