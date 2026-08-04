"use client";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { CrawlerTool } from "@/components/CrawlerTool";

export default function ClientPage() {
    return (
        <LandingPageTemplate 
            h1="SVG Extractor"
            intro="The most powerful SVG extractor online. Built to navigate complex DOM structures, React apps, and minified CSS to isolate every vector graphic instantly."
            toolComponent={<CrawlerTool />}
            instructions={[
                "Copy the target URL.",
                "Paste it into the SVG Extractor engine.",
                "Select and extract the necessary SVG assets."
            ]}
            benefits={[
                "Engineered to extract deeply nested inline SVGs.",
                "Supports extraction from Single Page Applications (SPAs).",
                "Automatically formats and sanitizes raw SVG code.",
                "Allows one-click copying to your clipboard."
            ]}
            faqs={[
                {
                    question: "What makes this SVG Extractor different?",
                    answer: "Unlike basic scrapers, our extractor actually evaluates the DOM just like a real browser, ensuring we catch dynamically injected SVGs from frameworks like React and Next.js."
                },
                {
                    question: "Does the SVG Extractor work on mobile?",
                    answer: "Yes, our tool is fully responsive and runs entirely in the cloud, allowing you to extract SVGs directly from your phone or tablet."
                }
            ]}
            seoContent={
                <>
                    <h2>Why You Need a Dedicated SVG Extractor</h2>
                    <p>
                        Web architecture has evolved rapidly. Ten years ago, extracting an image was simple. Today, developers use complex component libraries to render icons and graphics mathematically. A dedicated <strong>SVG extractor</strong> is the only reliable way to interface with these modern DOM structures.
                    </p>

                    <h3>How our SVG Extractor handles complex code</h3>
                    <p>
                        When you use an <strong>SVG extractor</strong>, it performs multiple layers of analysis:
                    </p>
                    <ol>
                        <li><strong>DOM Parsing:</strong> It searches the active document object model for any `&lt;svg&gt;` nodes.</li>
                        <li><strong>CSS Inspection:</strong> It scans linked stylesheets for pseudo-elements utilizing SVG background images.</li>
                        <li><strong>Reconstruction:</strong> If it finds a deeply nested path, it wraps it in a standard, sanitized SVG container with the correct `viewBox` coordinates so the graphic scales perfectly.</li>
                    </ol>

                    <h3>The perfect tool for Front-end Developers</h3>
                    <p>
                        If you are a front-end developer migrating an old interface, our <strong>SVG extractor</strong> will save you hours of work. Instead of trying to piece together broken vector paths from the Chrome Network Tab, you can simply run the old domain through our engine and instantly export the entire design system's iconography to a clean, organized ZIP file.
                    </p>
                    
                    <h3>Extract vs Scrape</h3>
                    <p>
                        We use the term <em>extract</em> deliberately. Scraping implies indiscriminately pulling data. An extractor intelligently isolates the exact asset class you need (vectors), cleans the formatting, removes malicious or broken code, and delivers a production-ready file. It is a surgical tool built for modern web professionals.
                    </p>
                </>
            }
        />
    );
}
