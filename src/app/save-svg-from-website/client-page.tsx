"use client";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { CrawlerTool } from "@/components/CrawlerTool";

export default function ClientPage() {
    return (
        <LandingPageTemplate 
            h1="Save SVG from Website"
            intro="Struggling to save an SVG image because right-click doesn't work? Paste the URL below and our tool will find, parse, and save every SVG on the page for you."
            toolComponent={<CrawlerTool />}
            instructions={[
                "Find the webpage containing the SVG you want to save.",
                "Copy and paste the URL into our extraction engine.",
                "Select your desired SVGs and save them directly to your device."
            ]}
            benefits={[
                "Saves inline SVGs that normally cannot be right-clicked.",
                "Recovers lost SVG source files from live sites.",
                "Cleans up and formats the saved SVG code automatically.",
                "Batch saving functionality via ZIP archives."
            ]}
            faqs={[
                {
                    question: "How do I save SVG from Chrome?",
                    answer: "Instead of dealing with the Chrome Inspector tool, just copy the URL of the page you are on, paste it into our tool, and save the generated SVG files directly."
                },
                {
                    question: "Can I save SVG code directly?",
                    answer: "Yes, clicking on any extracted SVG in our tool allows you to instantly copy the raw HTML/XML code to your clipboard."
                }
            ]}
            seoContent={
                <>
                    <h2>Why is it so hard to save an SVG from a website?</h2>
                    <p>
                        Most users are accustomed to a very simple workflow when browsing the web: see an image you like, right-click, and select "Save Image As". However, when you try to <strong>save SVG from website</strong> interfaces, this option is frequently missing or disabled. 
                    </p>
                    <p>
                        This happens because modern web developers rarely embed SVGs using standard image tags. Instead, they insert the SVG mathematically directly into the HTML DOM. Because the browser interprets this as code rather than an external media file, the standard context menu for saving images is never triggered.
                    </p>

                    <h3>How to save SVG from a website instantly</h3>
                    <p>
                        SVGCrawler acts as the perfect middleman. It performs a deep scan of the target page's source code, looking specifically for vector math. When it finds it, it reconstructs the code into a downloadable file. This allows you to effectively <strong>save SVG from website</strong> URLs without ever needing to open a code editor.
                    </p>

                    <h3>Manual methods vs Automated tools</h3>
                    <p>
                        If you want to know <strong>how to save SVG from Chrome</strong> manually, the process looks like this:
                    </p>
                    <ol>
                        <li>Right-click near the graphic and click "Inspect".</li>
                        <li>In the Elements tab, expand the HTML nodes until you find the &lt;svg&gt; tag.</li>
                        <li>Right-click the tag and select "Copy &gt; Copy outerHTML".</li>
                        <li>Open a text editor, paste the code, and save the file with an `.svg` extension.</li>
                    </ol>
                    <p>
                        While this works for a single icon, it is incredibly tedious. If you need to audit an entire landing page, using an automated tool like SVGCrawler is infinitely faster and ensures you never accidentally miss a closing tag.
                    </p>
                </>
            }
        />
    );
}
