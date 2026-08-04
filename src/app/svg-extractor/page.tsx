import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
    title: "SVG Extractor | The Best Online SVG Extractor Tool",
    description: "The premier SVG extractor for developers. Instantly pull SVG code, images, and backgrounds from any website architecture with our powerful extraction engine.",
    alternates: {
        canonical: 'https://www.svgcrawler.com/svg-extractor',
    },
    openGraph: {
        title: "The Ultimate SVG Extractor Tool",
        description: "Instantly pull SVG code, images, and backgrounds from any website architecture.",
        url: "https://www.svgcrawler.com/svg-extractor",
        type: "website",
    }
};

export default function Page() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Advanced SVG Extractor",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://www.svgcrawler.com/svg-extractor",
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": "Powerful cloud-based SVG extractor to isolate vectors from modern web frameworks."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is an SVG Extractor?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An SVG extractor is a specialized tool that parses HTML, CSS, and DOM structures to find and isolate Scalable Vector Graphics, allowing users to download them easily."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why use an SVG Extractor instead of 'Save Image'?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Because SVGs are often embedded directly into the website's code (inline SVG) rather than linked as image files, making traditional saving methods impossible. An extractor reads the code directly."
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
                "name": "SVG Extractor",
                "item": "https://www.svgcrawler.com/svg-extractor"
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
