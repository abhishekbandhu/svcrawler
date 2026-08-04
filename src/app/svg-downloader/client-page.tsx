"use client";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { CrawlerTool } from "@/components/CrawlerTool";

export default function ClientPage() {
    return (
        <LandingPageTemplate 
            h1="SVG Downloader"
            intro="The ultimate bulk SVG downloader. Instantly gather, preview, and batch-download every vector asset from any webpage in seconds."
            toolComponent={<CrawlerTool />}
            instructions={[
                "Input the target website's URL.",
                "Let the SVG Downloader scan the architecture.",
                "Click 'Download All (ZIP)' to batch export everything."
            ]}
            benefits={[
                "Massive time savings for large design audits.",
                "Downloads in native, uncompressed SVG formats.",
                "Instantly organizes files into a compressed ZIP.",
                "Works completely free in any modern browser."
            ]}
            faqs={[
                {
                    question: "Can I bulk download SVGs?",
                    answer: "Absolutely. Once the tool finishes scanning the webpage, simply click the 'Download All (ZIP)' button to package every single graphic into one file."
                },
                {
                    question: "Is there a limit to how many SVGs I can download?",
                    answer: "No, our SVG downloader will attempt to extract and download every valid SVG it can find on the requested page, whether there are 5 or 500."
                }
            ]}
            seoContent={
                <>
                    <h2>Why Use a Dedicated SVG Downloader?</h2>
                    <p>
                        When auditing a large website, a UI library, or a design system, you often need to gather dozens of icons simultaneously. Downloading these one by one using traditional methods is an incredibly inefficient use of time. A dedicated <strong>SVG downloader</strong> automates this entire batch-export workflow.
                    </p>

                    <h3>Batch Export Capabilities</h3>
                    <p>
                        Our <strong>SVG downloader</strong> was engineered for speed and volume. By pasting a single URL, the engine crawls the page and parses the structure. If it finds 150 unique icons embedded in the DOM, it immediately arrays them in a visual grid for you to review.
                    </p>
                    <p>
                        With a single click on the "Download All (ZIP)" button, the tool utilizes client-side Javascript to compile all 150 raw SVG files, package them into a highly compressed ZIP archive, and serve it directly to your local file system. This turns hours of manual labor into a process that takes literally seconds.
                    </p>

                    <h3>Preserving File Integrity</h3>
                    <p>
                        A common issue with low-quality <strong>SVG downloader</strong> tools is that they corrupt the XML data during extraction. They might strip out crucial namespace declarations (`xmlns`) or alter the `viewBox` attributes, resulting in graphics that open distorted in Adobe Illustrator or Figma.
                    </p>
                    <p>
                        SVGCrawler guarantees file integrity. The code you download is exactly the code that was rendering perfectly in the browser. 
                    </p>

                    <h3>A Must-Have for Agencies</h3>
                    <p>
                        For creative agencies performing competitive analysis or designers tasked with recreating legacy assets, an automated <strong>SVG downloader</strong> is indispensable. Stop wasting your budget on manual extraction and start using our free, cloud-based bulk downloading solution today.
                    </p>
                </>
            }
        />
    );
}
