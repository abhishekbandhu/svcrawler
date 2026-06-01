import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/crawl/',
        '/bulk/'
      ],
    },
    sitemap: 'https://www.svgcrawler.com/sitemap.xml',
  }
}
