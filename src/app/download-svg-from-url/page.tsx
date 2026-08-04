import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
    title: "Download SVG from URL | Online SVG Extractor",
    description: "Input any URL to instantly find and download all SVG graphics. Ideal for developers needing to pull SVGs directly from live domains.",
    alternates: {
        canonical: 'https://www.svgcrawler.com/download-svg-from-url',
    },
    openGraph: {
        title: "Download SVG from URL",
        description: "Input any URL to instantly find and download all SVG graphics.",
        url: "https://www.svgcrawler.com/download-svg-from-url",
        type: "website",
    }
};

export default function Page() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SVG URL Downloader",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://www.svgcrawler.com/download-svg-from-url",
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": "Download any SVG file by simply entering the target URL."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do I download SVG from a URL?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Copy the specific web address (URL) where the SVG is located and paste it into SVGCrawler. The tool will parse the link and provide a direct download option."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I download SVGs from password-protected URLs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, SVGCrawler can only parse and download SVGs from public, publicly accessible URLs that do not require authentication or login."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.svgcrawler.com/"
            },{
                "@type": "ListItem",
                "position": 2,
                "name": "Download SVG from URL",
                "item": "https://www.svgcrawler.com/download-svg-from-url"
            }]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemas),
                }}
            />
            <ClientPage />
        </>
    );
}
