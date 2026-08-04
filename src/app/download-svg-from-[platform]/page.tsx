import { Metadata } from "next";
import { platformsData } from "@/data/platforms";
import ClientPage from "./client-page";

export async function generateStaticParams() {
    return platformsData.map((platform) => ({
        platform: platform.id,
    }));
}

export async function generateMetadata({ params }: { params: { platform: string } }): Promise<Metadata> {
    const platform = platformsData.find(p => p.id === params.platform);
    
    if (!platform) {
        return { title: "Not Found" };
    }

    const title = `Download SVG from ${platform.name} | SVG Extractor for ${platform.category}`;
    const description = `Instantly download and extract SVGs from any ${platform.name} website. Learn how to bypass ${platform.name}'s architecture to grab vector graphics securely.`;

    return {
        title,
        description,
        alternates: {
            canonical: `https://www.svgcrawler.com/download-svg-from-${platform.id}`,
        },
        openGraph: {
            title,
            description,
            url: `https://www.svgcrawler.com/download-svg-from-${platform.id}`,
            type: "website",
        }
    };
}

export default function Page({ params }: { params: { platform: string } }) {
    const platform = platformsData.find(p => p.id === params.platform);

    if (!platform) {
        return <div>Platform not found</div>;
    }

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": `SVG Extractor for ${platform.name}`,
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "url": `https://www.svgcrawler.com/download-svg-from-${platform.id}`,
            "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
            },
            "description": `Download SVG files directly from ${platform.name} URLs.`
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": `How do I download SVG from ${platform.name}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `To extract SVGs from a ${platform.name} site, simply copy the URL, paste it into our extractor tool, and download the results. We bypass ${platform.name}'s specific DOM obfuscation automatically.`
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
                "name": `Download SVG from ${platform.name}`,
                "item": `https://www.svgcrawler.com/download-svg-from-${platform.id}`
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
            <ClientPage platform={platform} />
        </>
    );
}
