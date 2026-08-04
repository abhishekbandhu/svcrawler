import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
    title: "Download SVG from Website | The Ultimate SVG Downloader",
    description: "Easily download SVG from any website with our free online tool. Perfect for getting high-quality logos, icons, and illustrations from public URLs.",
    alternates: {
        canonical: 'https://www.svgcrawler.com/download-svg-from-website',
    },
    openGraph: {
        title: "Download SVG from Website",
        description: "Easily download SVG from any website with our free online tool.",
        url: "https://www.svgcrawler.com/download-svg-from-website",
        type: "website",
    }
};

export default function Page() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SVG Downloader",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://www.svgcrawler.com/download-svg-from-website",
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": "Download SVGs from any public webpage instantly."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How to download SVG from website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paste the website's URL into SVGCrawler, wait for the scan to complete, and click Download All to save every SVG as a ZIP file."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I download website logos as SVG?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, if the website uses an SVG logo (which most modern sites do), our tool will discover it and allow you to download it directly."
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
                "name": "Download SVG from Website",
                "item": "https://www.svgcrawler.com/download-svg-from-website"
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
