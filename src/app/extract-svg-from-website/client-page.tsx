"use client";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { CrawlerTool } from "@/components/CrawlerTool";

export default function ClientPage() {
    return (
        <LandingPageTemplate 
            h1="Extract SVG from Website"
            intro="Paste any URL below to instantly scan, extract, and download every vector graphic from the page. Perfect for developers and designers."
            toolComponent={<CrawlerTool />}
            instructions={[
                "Copy the URL of any public website or landing page.",
                "Paste it into the search bar above and click Extract.",
                "Preview the results and download individual SVGs or grab everything in a ZIP file."
            ]}
            benefits={[
                "Bypasses complex inline SVG obfuscation.",
                "No need to install bulky browser extensions.",
                "Runs entirely in the cloud, zero software needed.",
                "Instantly zips dozens of SVGs in one click."
            ]}
            faqs={[
                {
                    question: "How do I extract SVG from a website?",
                    answer: "Simply paste the URL into our extraction tool. It will parse the website's DOM and stylesheets to find both inline and linked SVGs, displaying them for you to download immediately."
                },
                {
                    question: "Can I download inline SVG?",
                    answer: "Yes, our crawler is specifically built to parse and extract inline <svg> code directly from HTML, which most standard image downloaders cannot do."
                }
            ]}
            seoContent={
                <>
                    <h2>The Ultimate Tool to Extract SVG from Any Website</h2>
                    <p>
                        In the modern landscape of web development, vector graphics are ubiquitous. From company logos to complex user interface icons, <strong>SVG (Scalable Vector Graphics)</strong> is the format of choice. But what happens when you need to <strong>extract SVG from a website</strong>? Maybe you are performing a design audit, backing up your own legacy assets, or gathering inspiration.
                    </p>
                    <p>
                        Historically, this process was painful. You had to open Chrome Developer Tools, dig through minified HTML, locate the exact `&lt;svg&gt;` node, and manually copy the outer HTML. If the site used dozens of icons, this could take hours. SVGCrawler was built to completely automate this workflow.
                    </p>

                    <h3>Why is it so hard to download SVG from a URL?</h3>
                    <p>
                        Unlike PNGs or JPGs, which are almost always embedded using a standard `&lt;img src=\"image.jpg\"&gt;` tag, SVGs are incredibly flexible. They can be injected into a page in several ways:
                    </p>
                    <ul>
                        <li><strong>External Files:</strong> Using an `&lt;img&gt;` or `&lt;object&gt;` tag linking to a `.svg` file.</li>
                        <li><strong>Inline Code:</strong> Embedding the raw `&lt;svg&gt;` code directly into the HTML DOM (very common in React, Next.js, and Vue).</li>
                        <li><strong>CSS Backgrounds:</strong> Using `background-image: url('icon.svg')` or even Base64 encoded strings inside stylesheets.</li>
                    </ul>
                    <p>
                        Because of this complexity, most basic "image downloader" browser extensions fail to detect them. Our engine, however, is designed specifically for vectors. It deeply scans all three methods, allowing you to seamlessly <strong>extract SVG icons</strong> regardless of how they were implemented by the original developer.
                    </p>

                    <h3>How to Extract SVG from a Website: Step-by-Step</h3>
                    <p>
                        Using our tool is incredibly simple:
                    </p>
                    <ol>
                        <li><strong>Find the URL:</strong> Navigate to the webpage containing the vector graphics you want. Copy the full URL from your browser's address bar.</li>
                        <li><strong>Run the Extractor:</strong> Paste the link into the SVGCrawler input field at the top of this page and hit "Extract".</li>
                        <li><strong>Review Results:</strong> Our cloud servers will render the page, parse the DOM, and extract every valid SVG node. The results will populate in a clean grid.</li>
                        <li><strong>Save:</strong> Click on individual items to copy their raw code, or use the "Download All (ZIP)" button to instantly package the entire asset library.</li>
                    </ol>

                    <h3>Developer Use Cases</h3>
                    <p>
                        Web developers frequently use our platform to <strong>save SVG from website</strong> environments when migrating old platforms. For example, if you are migrating a legacy WordPress site to a modern headless Shopify stack, you need to port over all the iconography. Instead of hunting down original Figma files, you can simply run the old domain through SVGCrawler and instantly export the entire icon system.
                    </p>

                    <h3>Best Practices and Fair Use</h3>
                    <p>
                        While our tool makes it incredibly easy to <strong>download SVG from website</strong> URLs, it is important to respect copyright and intellectual property. We provide this tool for educational purposes, design inspiration, competitive analysis, and recovering your own lost assets. You should always ensure you have the proper licensing or permission before using extracted logos, illustrations, or proprietary icons in a commercial project.
                    </p>
                </>
            }
        />
    );
}
