import { MetadataRoute } from 'next';

// Define the base URL we want to force
const BASE_URL = 'https://svgcrawler.com';

// If you have dynamic blog posts fetched from an API, you would iterate them here
// Since we are working with static files in this example codebase, we will map the known list.
// To future-proof this, we define the core static routes:
const staticRoutes = [
    '',
    '/about',
    '/convert',
    '/image-to-svg',
    '/favicon-generator',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/blog'
];

// Re-defining the blog posts map for sitemap generation
// In a full production app with a CMS, this would be an async fetch.
const blogPosts = [
    'how-to-convert-jpg-to-svg',
    'best-sites-to-convert-png-to-svg',
    'is-it-legal-to-download-svg-from-website',
    'png-to-svg',
    'extract-svg-from-website',
    'export-svg-from-website',
    'download-svg-from-website',
    'svg-creator-guide',
    'svg-converter-guide',
    'convert-to-svg-guide',
    'jpg-to-svg-conversion',
    'image-to-svg-workflow',
    'svg-vs-png',
    'optimizing-svgs-guide',
    'top-10-svg-icons-2026'
];

export default function sitemap(): MetadataRoute.Sitemap {

    // Map static routes
    const staticSitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Map blog post routes
    const blogSitemapEntries: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    // Combine them
    return [...staticSitemapEntries, ...blogSitemapEntries];
}
