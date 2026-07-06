// IndexNow configuration + client helper.
// The key file must be publicly accessible at:  https://<host>/<INDEXNOW_KEY>.txt
// (already committed under /public/<INDEXNOW_KEY>.txt)

import { siteConfig } from '@/lib/site-config';

export const INDEXNOW_KEY = '7c9e2b6f4a1d8503e6b9f1c7a2d84f0b';
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/** Extract host (no protocol) from a full URL — required by IndexNow spec. */
export function siteHost(): string {
  try {
    return new URL(siteConfig.url).host;
  } catch {
    return siteConfig.domain;
  }
}

/**
 * Ping IndexNow with one or more URLs.
 * Fails silently — SEO helpers should never break a publish flow.
 */
export async function pingIndexNow(urls: string[]): Promise<{ ok: boolean; status?: number; error?: string }> {
  const cleaned = urls.map((u) => u.trim()).filter(Boolean);
  if (cleaned.length === 0) return { ok: false, error: 'No URLs provided' };

  const body = {
    host: siteHost(),
    key: INDEXNOW_KEY,
    keyLocation: `${siteConfig.url}/${INDEXNOW_KEY}.txt`,
    urlList: cleaned,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}
