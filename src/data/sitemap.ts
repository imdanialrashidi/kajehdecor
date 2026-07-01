export interface SitemapEntry {
  url: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/services/', priority: 0.9, changefreq: 'monthly' },
  { url: '/services/kitchen-cabinet-design/', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/home-interior-design/', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/renovation/', priority: 0.8, changefreq: 'monthly' },
  { url: '/services/commercial-office-design/', priority: 0.8, changefreq: 'monthly' },
  { url: '/portfolio/', priority: 0.8, changefreq: 'weekly' },
  { url: '/consultation/', priority: 0.9, changefreq: 'monthly' },
  { url: '/quiz/', priority: 0.7, changefreq: 'monthly' },
  { url: '/about/', priority: 0.6, changefreq: 'monthly' },
  { url: '/contact/', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog/', priority: 0.7, changefreq: 'weekly' },
];
