import fs from 'fs/promises';
import path from 'path';
import type { WebhookBlogPost } from '@/lib/blog-types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'webhook-posts.json');

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, '[]', 'utf8');
  }
}

export async function readWebhookPosts(): Promise<WebhookBlogPost[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, 'utf8');
  const parsed = JSON.parse(raw) as WebhookBlogPost[];
  return Array.isArray(parsed) ? parsed : [];
}

export async function writeWebhookPosts(posts: WebhookBlogPost[]) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
}

export async function upsertWebhookPost(post: WebhookBlogPost): Promise<WebhookBlogPost> {
  const posts = await readWebhookPosts();
  const index = posts.findIndex((p) => p.slug === post.slug);
  if (index >= 0) {
    posts[index] = post;
  } else {
    posts.push(post);
  }
  await writeWebhookPosts(posts);
  return post;
}

export async function getWebhookPostBySlug(slug: string): Promise<WebhookBlogPost | undefined> {
  const posts = await readWebhookPosts();
  return posts.find((p) => p.slug === slug);
}
