import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FaviconTool } from "@/components/FaviconTool";
import Link from "next/link";
import { Wrench, CheckCircle2, MonitorSmartphone } from "lucide-react";

export const metadata = {
    title: "Free Favicon Generator Tool | Create .ICO, PNG, Apple Touch Icon",
    description: "Generate a perfect set of favicons for your website. Upload any image to instantly create a multi-resolution .ico file, Apple Touch Icons, and Android Chrome PNGs.",
    alternates: {
        canonical: "/favicon-generator",
    },
    openGraph: {
        title: "Free Favicon Generator Tool | Create .ICO, PNG",
        description: "Generate a perfect set of favicons for your website instantly from any image.",
        url: "https://svgcrawler.com/favicon-generator",
        siteName: "SVG Crawler",
        images: [{ url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Favicon Generator Tool | Create .ICO, PNG",
        description: "Generate a perfect set of favicons for your website instantly from any image.",
        images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"],
    },
};

export default function FaviconGeneratorPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Favicon Generator",
                        "applicationCategory": "DesignApplication",
                        "operatingSystem": "Web",
                        "url": "https://svgcrawler.com/favicon-generator",
                        "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" }
                    }),
                }}
            />
            <Navbar />

            <main className="flex-1 pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
                            <Wrench className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Free Favicon Generator
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground px-4">
                            Upload an image to instantly create highly optimized, multi-resolution <code>.ico</code> files and standard responsive PNG web icons.
                        </p>
                    </div>

                    <div className="mb-20">
                        <FaviconTool />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    What is the recommended ratio?
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Favicons must be a perfect <strong>1:1 square ratio</strong>. We recommend uploading an image that is at least <code>512x512</code> pixels to ensure that the largest outputs (like the Android Chrome icon) remain crisp and high-quality.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    What files are included in the download?
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    You will receive a <code>.zip</code> package containing a multi-resolution <code>favicon.ico</code> (which holds 16x16, 32x32, and 48x48 sizes inside), an <code>apple-touch-icon.png</code> (180x180), and specific Android icons up to 512x512.
                                </p>
                            </div>

                            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Why do I need a true .ico file?
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Legacy web browsers and specific RSS feed readers expressly require a file at the root directory named <code>favicon.ico</code>. It is a Microsoft-specific graphical format that efficiently bundles multiple resolutions into a single requested file.
                                </p>
                            </div>
                            
                            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Is my data uploaded to your servers?
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    No. Just like our core <Link href="/convert" className="text-primary hover:underline">SVG conversion tools</Link>, all favicon rendering and <code>.zip</code> creation occurs entirely inside your local browser. Your images are never sent over the network to external servers.
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2>The Ultimate Guide to Generating Website Favicons</h2>
                            <p>
                                A favicon (short for "favorite icon") is a crucial, yet surprisingly complex piece of website architecture. Though it appears as a tiny graphic in a browser tab, deploying a professional favicon strategy ensures your brand looks crisp not just in Chrome, but when saved to mobile home screens, shared on iOS, and pinned on Windows start menus.
                            </p>
                            <p>
                                With our free favicon generator, you no longer need complex Photoshop scripts or third-party command line tools. We utilize the native HTML5 Canvas drawing API to parse your uploaded graphic, systematically resize the rendering buffer down to explicitly required grid dimensions efficiently, and package them.
                            </p>
                            
                            <h3>What HTML tags do I need to use?</h3>
                            <p>
                                Once you download the <code>favicon_package.zip</code> and unpack it into your website's public root directory, place the following HTML tags precisely within your document's <code>&lt;head&gt;</code> section:
                            </p>
                            <pre><code>{`<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`}</code></pre>
                            
                            <p>
                                It is considered best practice to leave the physically compiled <code>favicon.ico</code> file directly traversing the root path (<code>https://yoursite.com/favicon.ico</code>) as hard-coded legacy scrapers default to that explicit routing request before reading the DOM.
                            </p>
                            
                            <h3>The Importance of 512x512 Icons</h3>
                            <p>
                                When creating a Progressive Web App (PWA) manifesto tracking deployment, Google Lighthouse enforces web standards specifically verifying the inclusion of a 192x192 padding layer alongside an expansive 512x512 pixel splash screen vector footprint. That is why our tool automatically renders these large format PNG specifications natively, to guarantee 100% SEO tracking compliance for your web domains.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
