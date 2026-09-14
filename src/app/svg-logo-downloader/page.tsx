import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CrawlerTool } from "@/components/CrawlerTool";
import Link from "next/link";
import { Download, Search, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "SVG Logo Downloader — Download SVG Logos From Websites",
    description: "Extract and download high-quality SVG logos from any website instantly. Paste a URL to isolate, preview, and save corporate vectors.",
    alternates: {
        canonical: "/svg-logo-downloader",
    },
};

export default function SvgLogoDownloaderPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />

            <main className="flex-1">
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border/40">
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

                    <div className="container mx-auto px-4 flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground animate-in fade-in slide-in-from-bottom-6 duration-700">
                            Download an SVG Logo <br className="hidden md:block" /> From Any Website
                        </h1>

                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            Need a high-resolution, transparent vector logo for a mockup, presentation, or partnership page? Paste a website URL below to extract all SVGs, including corporate logos.
                        </p>

                        <CrawlerTool />
                        
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                          <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Transparent backgrounds</span>
                          <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Infinite scaling</span>
                          <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Free to use</span>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to extract SVG logos</h2>
                            <p className="text-muted-foreground text-lg">It takes less than 5 seconds to download a high-quality logo vector.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-card border border-border p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">1. Paste the URL</h3>
                                <p className="text-muted-foreground">Find the official website of the company whose logo you need. Copy their homepage URL and paste it into the SVG crawler above.</p>
                            </div>
                            
                            <div className="bg-card border border-border p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">2. Isolate the Logo</h3>
                                <p className="text-muted-foreground">The tool will extract every SVG graphic from the page. Scroll through the grid to identify the official logo among the icons.</p>
                            </div>
                            
                            <div className="bg-card border border-border p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                    <Download className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">3. Download the SVG</h3>
                                <p className="text-muted-foreground">Click the download button directly under the logo. You now have a clean, transparent, perfectly scalable vector logo file.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2>Why download SVG logos?</h2>
                            <p>Most corporate websites embed their logos as inline SVGs in the navigation bar. This ensures the brand looks perfectly crisp on all devices, from massive 4K monitors to high-density mobile screens.</p>
                            <p>Because they are coded in XML, SVGs do not suffer from pixelation when scaled, and they naturally support transparent backgrounds—making them infinitely superior to saving a logo as a JPG or PNG.</p>
                            
                            <p>Designers and marketers often need to download an SVG logo for:</p>
                            <ul>
                                <li>Building "Trusted By" partnership carousels on landing pages.</li>
                                <li>Adding high-quality vectors to pitch decks and presentations.</li>
                                <li>Creating mockup designs in Figma, Sketch, or Adobe XD.</li>
                                <li>Replacing blurry raster logos with crisp vectors.</li>
                            </ul>

                            <h2>Legal & Copyright Explanation</h2>
                            <p>While SVG Crawler makes it incredibly easy to <Link href="/blog/download-svg-from-website" className="text-primary hover:underline">download an SVG from a website</Link>, it is critical to understand that <strong>corporate logos are trademarked and copyrighted assets</strong>.</p>
                            <p>Technically extracting the code from a public front-end does not transfer ownership. You may use extracted logos for internal mockups or educational purposes under fair use, but you must acquire legal permission or follow the company's official brand guidelines before publishing their logo on your own commercial website.</p>
                            
                            <h2>Looking to learn more?</h2>
                            <p>If you prefer to extract code manually, read our guide on <Link href="/blog/extract-svg-from-website" className="text-primary hover:underline">how to extract SVG from website</Link> source code, or check out our tutorial on <Link href="/blog/how-to-download-svg-from-inspect-element" className="text-primary hover:underline">how to download SVG from Inspect Element</Link>.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
