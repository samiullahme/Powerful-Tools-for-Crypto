export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type PublishStatus = 'draft' | 'published';

export type WebhookBlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  metaDescription?: string;
  content: string;
  canonicalUrl?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  category: string;
  tags?: string[];
  author: string;
  publishDate: string;
  updatedDate?: string;
  faq?: BlogFaqItem[];
  schema?: Record<string, unknown>;
  ogImage?: string;
  twitterImage?: string;
  status: PublishStatus;
  createdAt: string;
};

export type PublishPayload = {
  title: string;
  metaTitle?: string;
  description: string;
  metaDescription?: string;
  content: string;
  slug: string;
  canonicalUrl?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  category: string;
  tags?: string[];
  author?: string;
  publishDate?: string;
  updatedDate?: string;
  faq?: BlogFaqItem[];
  schema?: Record<string, unknown>;
  ogImage?: string;
  twitterImage?: string;
  status?: PublishStatus;
};
