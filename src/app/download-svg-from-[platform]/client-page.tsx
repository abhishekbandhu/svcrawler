"use client";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { CrawlerTool } from "@/components/CrawlerTool";
import { PlatformData } from "@/data/platforms";

export default function ClientPage({ platform }: { platform: PlatformData }) {
    return (
        <LandingPageTemplate 
            h1={`Download SVG from ${platform.name}`}
            intro={`Instantly extract and download vector graphics from any ${platform.name} website. Our advanced crawler bypasses ${platform.category.toLowerCase()} architecture to find every hidden SVG.`}
            toolComponent={<CrawlerTool />}
            instructions={[
                `Copy the URL of the ${platform.name} website you want to scan.`,
                "Paste it into the crawler engine above and initiate the scan.",
                "Download the extracted SVG files securely to your system."
            ]}
            benefits={[
                `Specifically engineered to handle ${platform.name} DOM structures.`,
                "Works instantly on any public web address.",
                "Downloads SVGs in their original, uncompressed format.",
                "Produces clean, scalable XML output."
            ]}
            faqs={[
                {
                    question: `How do I download SVG from ${platform.name}?`,
                    answer: `Paste the URL into the SVGCrawler input box. Our cloud engines will fetch the target page, navigate the ${platform.name} architecture, and compile all vector paths into easily downloadable files.`
                },
                {
                    question: `Is it hard to extract vectors from ${platform.category} platforms?`,
                    answer: `Yes, ${platform.challenges} SVGCrawler automates this entire process for you.`
                }
            ]}
            seoContent={
                <>
                    <h2>Extracting Vectors from {platform.name} Architecture</h2>
                    <p>
                        {platform.description}
                    </p>
                    <p>
                        When working with a powerful {platform.category} like {platform.name}, extracting specific vector assets can be surprisingly difficult. Developers and designers often rely on right-click saving, but this completely fails when graphics are embedded dynamically. 
                    </p>

                    <h3>The Technical Challenge</h3>
                    <p>
                        The core issue is how {platform.name} renders its frontend. {platform.challenges}
                    </p>
                    <p>
                        Because of this, standard image downloading browser extensions are entirely blind to these SVGs. If you need to perform a design audit or recover assets, you are forced to dive into the browser developer tools, manually inspect the DOM tree, locate the SVG node, and attempt to copy the outer HTML. This manual process is tedious, error-prone, and often results in SVGs that fail to scale properly due to missing ViewBox attributes.
                    </p>

                    <h3>How our Extractor Solves This</h3>
                    <p>
                        SVGCrawler acts as a headless browser specifically optimized for vector extraction. When you input a {platform.name} URL, our engine executes the necessary page scripts and parses the fully rendered DOM. It understands how {platform.name} structures its code and can accurately identify, isolate, and reconstruct every vector graphic into a valid, standalone `.svg` file.
                    </p>

                    <h3>Safe and Secure Downloads</h3>
                    <p>
                        We aggressively sanitize all extracted SVGs to ensure they are safe to use. Any potentially malicious &lt;script&gt; tags or foreign objects that might have been injected into the original source code are stripped out, providing you with clean, production-ready vector math. Stop fighting with the {platform.name} inspector and start automating your vector extraction today.
                    </p>
                </>
            }
        />
    );
}
