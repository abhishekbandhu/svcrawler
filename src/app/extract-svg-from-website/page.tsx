import { Metadata } from "next";
import ClientPage from "./client-page";

export const metadata: Metadata = {
    title: "Extract SVG from Website Instantly | SVGCrawler",
    description: "The most powerful online tool to extract SVG from any website. Copy SVG code, download icons, and save SVG logos directly from any URL for free.",
    alternates: {
        canonical: 'https://www.svgcrawler.com/extract-svg-from-website',
    },
    openGraph: {
        title: "Extract SVG from Website Instantly",
        description: "Paste any URL to instantly extract and download every SVG used on the page.",
        url: "https://www.svgcrawler.com/extract-svg-from-website",
        type: "website",
    }
};

export default function Page() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SVG Extractor Tool",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://www.svgcrawler.com/extract-svg-from-website",
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": "Extract SVG code and vector graphics from any public URL instantly."
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to extract SVG from a website",
            "description": "Learn how to instantly extract all inline and external SVGs from any public webpage using SVGCrawler.",
            "step": [
                {
                    "@type": "HowToStep",
                    "name": "Copy the URL",
                    "text": "Copy the full URL (including https://) of the website you want to scan for SVGs."
                },
                {
                    "@type": "HowToStep",
                    "name": "Paste and Extract",
                    "text": "Paste the URL into the SVGCrawler search bar and click 'Extract SVGs'."
                },
                {
                    "@type": "HowToStep",
                    "name": "Preview and Download",
                    "text": "Wait a few seconds for the tool to scan the DOM. Preview the extracted SVGs and click Download All to save them as a ZIP file."
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do I extract SVG from a website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The fastest way to extract SVG from a website is to use SVGCrawler. Simply copy the website's URL, paste it into our extractor tool, and it will automatically scan the source code to find and download all SVG files."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I download inline SVG?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, unlike basic image downloaders that only look for .svg files, SVGCrawler parses the DOM to extract raw inline <svg> code embedded directly within the webpage's HTML."
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
                "name": "Extract SVG from Website",
                "item": "https://www.svgcrawler.com/extract-svg-from-website"
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
