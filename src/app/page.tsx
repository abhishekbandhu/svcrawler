import ClientPage from "./client-page";
import { Metadata } from "next";
import { homeFaqData } from "@/data/homeFaq";

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    }
};

export default function Page() {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SVG Crawler",
            "url": "https://www.svgcrawler.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.svgcrawler.com/?url={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SVG Crawler",
            "url": "https://www.svgcrawler.com/",
            "logo": "https://www.svgcrawler.com/icon.png",
            "sameAs": []
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SVG Crawler Toolkit",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": "https://www.svgcrawler.com/",
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": "Extract, convert, and optimize SVGs online."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": homeFaqData.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
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
