import ClientPage from "./client-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    }
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "SVG Crawler",
                        "applicationCategory": "DesignApplication",
                        "operatingSystem": "Web",
                        "url": "https://www.svgcrawler.com/",
                        "offers": {
                            "@type": "Offer",
                            "price": "0.00",
                            "priceCurrency": "USD"
                        }
                    }),
                }}
            />
            <ClientPage />
        </>
    );
}
