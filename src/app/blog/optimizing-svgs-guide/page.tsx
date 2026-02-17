import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

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
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Tutorial</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 05, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Mike Code</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            The Ultimate Guide to Optimizing SVGs
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Learn how to reduce your SVG file size by up to 80% without losing quality using SVGO.
                        </p>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                            alt="Optimizing SVGs"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            SVGs are code. And like any code, they can be bloated. Design tools like Illustrator or Figma often export SVGs with a lot of unnecessary metadata, comments, and hidden layers.
                        </p>

                        <h2>Why Optimize?</h2>
                        <p>
                            1. <strong>Performance:</strong> Smaller files load faster.<br />
                            2. <strong>SEO:</strong> Faster sites rank better.<br />
                            3. <strong>Maintenance:</strong> Clean code is easier to read and style with CSS.
                        </p>

                        <h2>How to Optimize</h2>
                        <p>
                            The gold standard for SVG optimization is <strong>SVGO</strong> (SVG Optimizer). It’s a Node.js-based tool that strips away the junk.
                        </p>

                        <h3>What does SVGO do?</h3>
                        <ul>
                            <li>Removes XML instructions</li>
                            <li>Removes comments</li>
                            <li>Removes metadata</li>
                            <li>Minifies paths</li>
                            <li>Collapses useless groups</li>
                        </ul>

                        <h2>Try it yourself</h2>
                        <p>
                            You don't need to install the CLI to get the benefits. We've built an SVGO-powered optimizer right into this website.
                        </p>
                        <p>
                            Just <Link href="/" className="text-primary underline">paste your URL</Link> or upload an SVG to strip out the junk instantly.
                        </p>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
