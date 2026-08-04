"use client";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { CrawlerTool } from "@/components/CrawlerTool";

export default function ClientPage() {
    return (
        <LandingPageTemplate 
            h1="Download SVG from Website"
            intro="The fastest way to download SVGs from any webpage. Fetch logos, extract icons, and save beautiful vector illustrations directly to your hard drive."
            toolComponent={<CrawlerTool />}
            instructions={[
                "Enter the URL of the webpage.",
                "Click the blue Download button to scan the page.",
                "Download individual SVGs or grab them all at once in a ZIP archive."
            ]}
            benefits={[
                "Scans both HTML structure and CSS files.",
                "Zero installation required - 100% web-based.",
                "Downloads SVGs in their original, uncompressed format.",
                "Completely free to use for unlimited downloads."
            ]}
            faqs={[
                {
                    question: "How to download SVG from website?",
                    answer: "Just paste the website's URL into SVGCrawler. The tool will parse the page, find every SVG, and provide you with a 'Download All' button."
                },
                {
                    question: "Is downloading SVGs legal?",
                    answer: "You can download SVGs for educational use, inspiration, or personal archiving. However, if you intend to use downloaded SVGs commercially, you must ensure you have the proper licensing or permission from the original creator."
                }
            ]}
            seoContent={
                <>
                    <h2>The Most Reliable SVG Downloader Online</h2>
                    <p>
                        Designers and developers often find themselves needing to <strong>download SVG from website</strong> URLs. Whether you are building a mood board, auditing a competitor's design system, or just trying to recover a logo for a client whose original files were lost, having a reliable <strong>SVG downloader</strong> is crucial.
                    </p>
                    <p>
                        Traditional methods for downloading images simply do not work well for vectors. Right-clicking and selecting "Save Image As" usually fails because modern SVGs are rarely served as standard `.svg` files anymore. Instead, they are embedded directly into the page source code. 
                    </p>

                    <h3>How to Download SVG from Website Effectively</h3>
                    <p>
                        To bypass these technical hurdles, SVGCrawler acts as a headless browser. When you ask it to <strong>download SVG from a URL</strong>, it fetches the page exactly how a human visitor would see it. It executes the necessary scripts, parses the Document Object Model, and looks for specific vector nodes.
                    </p>
                    <p>
                        Once identified, the tool reconstructs the inline code back into a valid, standalone `.svg` file that you can download directly to your machine. 
                    </p>

                    <h3>Common Issues When Downloading SVGs</h3>
                    <p>
                        If you've tried to manually copy and paste SVG code from the browser inspector, you might have run into several common issues:
                    </p>
                    <ul>
                        <li><strong>Missing ViewBox:</strong> The SVG doesn't scale properly when opened in Figma or Illustrator.</li>
                        <li><strong>Missing XMLNS:</strong> The file throws an error when trying to preview it in a browser or OS finder.</li>
                        <li><strong>CSS Dependencies:</strong> The SVG looks completely black or invisible because it relied on external CSS classes for its fill colors.</li>
                    </ul>
                    <p>
                        SVGCrawler automatically sanitizes and repairs these common issues during the extraction process, ensuring that the files you download are production-ready.
                    </p>
                </>
            }
        />
    );
}
