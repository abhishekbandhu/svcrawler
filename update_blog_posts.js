const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

dirs.forEach(slug => {
    const filePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Ensure Metadata is imported
    if (!content.includes('import { Metadata }')) {
        if (content.includes('from "lucide-react"')) {
            content = content.replace(/(import .* from "lucide-react";?\s*)/, '$1import { Metadata } from "next";\n');
        } else if (content.includes('from "next"')) {
             // do nothing, handle later
        } else {
             content = 'import { Metadata } from "next";\n' + content;
        }
    }
    
    // 2. Extract title and description
    const titleMatch = content.match(/title:\s*["'](.*?)["']/);
    const descMatch = content.match(/description:\s*["'](.*?)["']/);
    
    const title = titleMatch ? titleMatch[1] : `SVG Crawler Guide: ${slug}`;
    const desc = descMatch ? descMatch[1] : `Read the ultimate guide on ${slug} at SVG Crawler.`;
    
    // 3. Replace metadata block
    const newMetadata = `export const metadata: Metadata = {
    title: "${title}",
    description: "${desc}",
    alternates: {
        canonical: "/blog/${slug}",
    },
    openGraph: {
        title: "${title}",
        description: "${desc}",
        url: "https://svgcrawler.com/blog/${slug}",
        siteName: "SVG Crawler",
        images: [{ url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "${title}",
        description: "${desc}",
        images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"],
    },
};`;

    content = content.replace(/export const metadata(?:.*?)=\{[\s\S]*?};/, newMetadata);

    // 4. Inject JSON-LD
    const jsonLd = `{
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "${title}",
                        "description": "${desc}",
                        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
                        "author": {
                            "@type": "Organization",
                            "name": "SVG Crawler"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "SVG Crawler",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://svgcrawler.com/logo.png"
                            }
                        }
                    }`;

    const breadcrumbLd = `{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://svgcrawler.com/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://svgcrawler.com/blog"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "${title}",
                                "item": "https://svgcrawler.com/blog/${slug}"
                            }
                        ]
                    }`;

    // Insert script tags right after <main ...>
    if (!content.includes('"@type": "Article"')) {
        const scriptTags = `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${jsonLd}) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${breadcrumbLd}) }} />`;
        content = content.replace(/(<main[^>]*>)/, `$1\n                ${scriptTags}`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
});
console.log("Updated " + dirs.length + " blog posts.");
