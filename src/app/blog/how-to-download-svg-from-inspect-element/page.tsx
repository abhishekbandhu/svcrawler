import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How to Download SVG From Inspect Element | SVG Crawler",
    description: "Learn how to use Chrome DevTools to inspect, find, and download SVG files from any website manually, or use an automated extractor.",
    alternates: {
        canonical: "/blog/how-to-download-svg-from-inspect-element",
    },
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />
            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Link href="/blog" className="text-primary hover:underline mb-8 inline-flex items-center text-sm font-medium">
                        &larr; Back to Blog
                    </Link>

                    <article>
                        <header className="mb-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                How to Download an SVG From Inspect Element
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
                                <span>September 14, 2026</span>
                                <span>•</span>
                                <span>4 min read</span>
                            </div>
                        </header>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>Have you ever seen a beautiful icon or crisp logo on a website, right-clicked it, and realized the "Save Image As..." option is missing?</p>
                            
                            <p>This happens because modern websites inject vector graphics directly into the HTML using <code>&lt;svg&gt;</code> tags. Because they are technically lines of code rather than discrete image files, your browser doesn't know how to "download" them natively.</p>

                            <p>In this guide, we will show you exactly how to dive into the code and download an SVG using the browser's <strong>Inspect Element</strong> tool.</p>

                            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
                                <h3 className="text-xl font-bold mb-2 mt-0">The Automated Alternative</h3>
                                <p className="mb-4">Don't want to dig through code? You can <Link href="/" className="text-primary hover:underline font-medium">extract SVGs from any website</Link> instantly using SVG Crawler. Just paste the URL and download all vectors in a ZIP file—no DevTools required.</p>
                                <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                                    Try SVG Crawler
                                </Link>
                            </div>

                            <h2>Step 1: Open Developer Tools</h2>
                            <p>To access the underlying code of a webpage, you need to open your browser's Developer Tools (DevTools).</p>
                            <ul>
                                <li><strong>Windows / Linux:</strong> Press <code>Ctrl + Shift + I</code> or <code>F12</code>.</li>
                                <li><strong>Mac:</strong> Press <code>Cmd + Option + I</code>.</li>
                            </ul>
                            <p>Alternatively, you can simply right-click anywhere on the webpage and select <strong>"Inspect"</strong> from the context menu.</p>

                            <h2>Step 2: Inspect the Target SVG</h2>
                            <p>To find the specific icon or logo you want to download:</p>
                            <ol>
                                <li>Click the <strong>Element Selection Arrow</strong> in the top-left corner of the DevTools panel (or press <code>Ctrl + Shift + C</code>).</li>
                                <li>Hover your mouse over the SVG on the actual webpage. You will see a blue box highlight the graphic.</li>
                                <li>Click the graphic. The DevTools panel will jump directly to the HTML code that generates that SVG.</li>
                            </ol>

                            <h2>Step 3: Identify the Implementation Method</h2>
                            <p>Depending on how the developer built the site, you will see one of two things in the Elements panel:</p>

                            <h3>Scenario A: Inline SVG (HTML Code)</h3>
                            <p>If you see an opening <code>&lt;svg&gt;</code> tag followed by <code>&lt;path&gt;</code> or <code>&lt;circle&gt;</code> elements, the graphic is coded directly into the page.</p>
                            <ol>
                                <li>Right-click the <code>&lt;svg&gt;</code> element in the DevTools panel.</li>
                                <li>Navigate to <strong>Copy</strong> &gt; <strong>Copy element</strong> (or "Copy outerHTML").</li>
                                <li>Open a plain text editor (like Notepad, TextEdit, or VS Code).</li>
                                <li>Paste the code and save the file with the <code>.svg</code> extension (e.g., <code>logo.svg</code>).</li>
                            </ol>
                            <p><em>Note: If the SVG appears blank or massive when you open the saved file, you may need to manually add <code>width="100%" height="100%"</code> to the opening <code>&lt;svg&gt;</code> tag to restore its dimensions.</em></p>

                            <h3>Scenario B: External SVG File (URL)</h3>
                            <p>If you see an <code>&lt;img src="/assets/icon.svg"&gt;</code> tag, the SVG is hosted as an external file on the server.</p>
                            <ol>
                                <li>In the DevTools panel, locate the URL inside the <code>src</code> attribute.</li>
                                <li>Right-click the URL and select <strong>Open in new tab</strong>.</li>
                                <li>When the graphic opens in the new tab, right-click the image and select <strong>Save As...</strong>.</li>
                            </ol>

                            <h2>Further Reading</h2>
                            <p>If you are looking to extract brand assets, check out our dedicated <Link href="/svg-logo-downloader" className="text-primary hover:underline">SVG Logo Downloader</Link>. If you want to dive deeper into the technical aspects of vectors, read our comprehensive guide on <Link href="/blog/download-svg-from-website" className="text-primary hover:underline">how to download an SVG from a website</Link>.</p>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
}
