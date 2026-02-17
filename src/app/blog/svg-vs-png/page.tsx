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
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Guide</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 10, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Sarah Dev</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            SVG vs PNG: When to Use Which?
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Understand the key differences between vector and raster graphics and when to use each format.
                        </p>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="SVG vs PNG"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            One of the most common questions in web design is: "Should I use an SVG or a PNG here?" The answer depends on what you are trying to display.
                        </p>

                        <h2>What is PNG?</h2>
                        <p>
                            PNG (Portable Network Graphics) is a raster format. It uses pixels to form an image. This means if you zoom in effectively, it gets blurry.
                        </p>
                        <ul>
                            <li><strong>Best for:</strong> Photographs, complex illustrations with shadows/textures.</li>
                            <li><strong>Pros:</strong> Wide support, handles complex colors well.</li>
                            <li><strong>Cons:</strong> Large file size for simple shapes, not scalable.</li>
                        </ul>

                        <h2>What is SVG?</h2>
                        <p>
                            SVG (Scalable Vector Graphics) is a vector format. It uses math to draw lines and curves. You can zoom in infinitely, and it will always look crisp.
                        </p>
                        <ul>
                            <li><strong>Best for:</strong> Logos, icons, simple illustrations, charts.</li>
                            <li><strong>Pros:</strong> Infinite scalability, small file size, code-editable.</li>
                            <li><strong>Cons:</strong> Cannot handle complex photographs.</li>
                        </ul>

                        <h2>The Verdict</h2>
                        <p>
                            If it's an icon or a logo, <strong>always use SVG</strong>. If it's a photo of a person or a landscape, use PNG (or WebP/JPG).
                        </p>

                        <p>
                            Need to extract SVGs from your site to optimize them? Try our <Link href="/" className="text-primary underline">home page tool</Link>.
                        </p>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
