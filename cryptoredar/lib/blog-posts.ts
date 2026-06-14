export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-calculate-crypto-profit-accurately',
    title: 'How to Calculate Crypto Profit Accurately (Including Fees & Tax)',
    excerpt:
      'A practical framework for measuring cryptocurrency gains and losses — from entry price and position size to exchange fees, slippage, and tax-aware reporting.',
    category: 'Crypto',
    publishedAt: '2025-05-28',
    readTime: '7 min read',
    author: 'CryptoRedar Editorial',
  },
  {
    slug: 'gst-calculator-guide-for-indian-businesses',
    title: 'GST Calculator Guide for Indian Businesses & Freelancers',
    excerpt:
      'Understand CGST, SGST, and IGST components, inclusive vs exclusive pricing, and how to validate invoices before filing — with examples you can apply immediately.',
    category: 'Finance',
    publishedAt: '2025-05-14',
    readTime: '6 min read',
    author: 'CryptoRedar Editorial',
  },
  {
    slug: 'developer-tools-that-save-hours',
    title: '7 Developer Tools That Save Hours Every Week',
    excerpt:
      'From JSON validation to JWT inspection and UUID generation — the small utilities that reduce context-switching and keep your workflow fast and reliable.',
    category: 'Developer',
    publishedAt: '2025-04-30',
    readTime: '5 min read',
    author: 'CryptoRedar Editorial',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
