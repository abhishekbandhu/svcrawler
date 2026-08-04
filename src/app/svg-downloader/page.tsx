import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
    title: "SVG Downloader | Batch Download SVG Graphics Online",
    description: "The premier SVG downloader for batch exporting vector graphics. Compress dozens of SVGs from any URL into a single ZIP archive instantly.",
    alternates: {
        canonical: 'https://www.svgcrawler.com/svg-downloader',
    },
    openGraph: {
        title: "The Ultimate SVG Downloader",
        description: "Batch export vector graphics and compress them into a ZIP archive instantly.",
        url: "https://www.svgcrawler.com/svg-downloader",
        type: "website",
    }
};

export default function Page() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Batch SVG Downloader",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://www.svgcrawler.com/svg-downloader",
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": "Batch download multiple SVG files simultaneously from any webpage."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does an SVG downloader do?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An SVG downloader automates the process of finding, extracting, and saving multiple SVG files from a single webpage."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I bulk download SVGs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, our SVG downloader features a 'Download All' button that instantly zips every extracted vector graphic into a single, organized archive."
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
                "name": "SVG Downloader",
                "item": "https://www.svgcrawler.com/svg-downloader"
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
