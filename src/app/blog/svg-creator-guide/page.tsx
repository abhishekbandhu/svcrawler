import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

export const metadata = {
    title: "SVG Creator: Build Beautiful Scalable Graphics",
    description: "Discover how an SVG creator tool helps you generate scalable, editable content ready for websites and apps.",
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <article className="container mx-auto px-4 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Creation</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 25, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Admin</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            SVG Creator: Build Beautiful Scalable Graphics
                        </h1>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2574&auto=format&fit=crop"
                            alt="Design Creation"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            An SVG creator isn’t just a converter — it’s a tool that lets you generate SVG graphics from scratch or from uploaded raster images. Whether you want to craft logos, icons, or custom illustrations, an SVG creator gives you scalable, editable content ready for websites, apps, and print.
                        </p>

                        <p>
                            The <Link href="/">SVG Crawler & Export Tool</Link> works great if you’re extracting SVGs from live websites or optimizing your vector assets for production.
                        </p>

                        <h2>Why Create SVGs Instead of Standard Images?</h2>
                        <ul>
                            <li>🟩 Sharp graphics at any resolution</li>
                            <li>🟩 Better performance on web & mobile</li>
                            <li>🟩 Editable via CSS/JS</li>
                            <li>🟩 Ideal for responsive designs</li>
                        </ul>

                        <p>
                            An SVG creator workflow usually lets you import an image, trace it into vector paths, clean up the output, and export the final graphic — all within a browser.
                        </p>

                        <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col items-center justify-center text-center">
                            <h3 className="text-2xl font-bold mb-4">Start Creating Vectors</h3>
                            <p className="mb-6 max-w-lg">Create stunning vectors from your desktop images automatically with our tracing engine.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/image-to-svg" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors">
                                    Open Vectorizer <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                                <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground font-medium rounded-xl border border-border hover:bg-muted/80 transition-colors">
                                    Crawl a Website <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
