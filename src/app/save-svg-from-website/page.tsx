import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
    title: "Save SVG from Website | Save Inline SVGs Instantly",
    description: "Learn how to save SVG from a website with a single click. Our tool extracts and saves complex inline SVGs, vector logos, and hidden CSS backgrounds.",
    alternates: {
        canonical: 'https://www.svgcrawler.com/save-svg-from-website',
    },
    openGraph: {
        title: "Save SVG from Website Instantly",
        description: "Extract and save complex inline SVGs, vector logos, and hidden CSS backgrounds from any URL.",
        url: "https://www.svgcrawler.com/save-svg-from-website",
        type: "website",
    }
};

export default function Page() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SVG Saver",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://www.svgcrawler.com/save-svg-from-website",
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": "Save SVGs directly from any webpage source code."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How to save SVG from website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The easiest method is to copy the website URL, paste it into our SVG saver tool, and let it extract the vectors. You can then save them individually or as a bulk ZIP."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I save SVG from Chrome?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While you can use Chrome Developer Tools to inspect the DOM and copy the outer HTML of an SVG element, it's much faster to use SVGCrawler which automates the extraction process in Chrome without requiring extensions."
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
                "name": "Save SVG from Website",
                "item": "https://www.svgcrawler.com/save-svg-from-website"
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
