"use client";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { CrawlerTool } from "@/components/CrawlerTool";

export default function ClientPage() {
    return (
        <LandingPageTemplate 
            h1="Download SVG from URL"
            intro="The fastest way to grab vectors online. Enter any web link below to instantly download SVG from URL inputs."
            toolComponent={<CrawlerTool />}
            instructions={[
                "Copy the URL link containing the SVG.",
                "Paste the URL into the extractor tool.",
                "Download the extracted SVG files securely to your system."
            ]}
            benefits={[
                "No coding knowledge required.",
                "Works instantly on any public web address.",
                "Supports deep crawling of CSS and JavaScript injected assets.",
                "Produces clean, scalable XML output."
            ]}
            faqs={[
                {
                    question: "How do I download SVG from a URL?",
                    answer: "Paste the URL into the SVGCrawler input box. Our cloud engines will fetch the target page and compile all vector paths into easily downloadable files."
                },
                {
                    question: "Are the downloaded SVGs safe to use?",
                    answer: "Our engine only extracts the structural vector paths (XML). It ignores embedded scripts, ensuring the downloaded files are completely safe."
                }
            ]}
            seoContent={
                <>
                    <h2>The Direct Method to Download SVG from URL</h2>
                    <p>
                        Sometimes you need a very specific asset from a live web project, and hunting down the original designer is impossible. If you need to <strong>download SVG from a URL</strong>, using a dedicated extraction pipeline is the only guaranteed way to pull the asset without degradation.
                    </p>
                    <p>
                        When a browser renders a page, it compiles hundreds of different assets via unique URLs (CDNs, relative paths, inline scripts). Navigating this maze to find the source of a vector graphic requires technical expertise.
                    </p>

                    <h3>Why our URL Downloader works</h3>
                    <p>
                        Our platform doesn't just look for `.svg` file extensions. When you tell our tool to <strong>download SVG from URL</strong> inputs, it spins up a headless Chromium instance. This means it actually executes the JavaScript on the page before scanning. If the website uses React or Vue to dynamically inject icons *after* the page loads, SVGCrawler will still catch them.
                    </p>

                    <h3>Security and Sanitization</h3>
                    <p>
                        One major concern when you <strong>download SVG from URL</strong> sources is security. Because SVGs are fundamentally XML documents, they can theoretically contain malicious &lt;script&gt; tags (Cross-Site Scripting or XSS).
                    </p>
                    <p>
                        SVGCrawler employs stringent sanitization algorithms. During the extraction process, any non-standard elements—particularly &lt;script&gt;, &lt;foreignObject&gt;, or executable attributes—are aggressively stripped from the final output. This ensures that the vectors you download are 100% safe to open in desktop applications or upload to your own production environments.
                    </p>
                </>
            }
        />
    );
}
