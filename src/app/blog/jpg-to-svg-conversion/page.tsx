import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

export const metadata = {
    title: "JPG to SVG: How to Convert Raster Photos into Scalable Vectors",
    description: "Learn how to vectorize JPG images to create infinitely scalable SVG files.",
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
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Tutorial</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 25, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Admin</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            JPG to SVG: How to Convert Raster Photos into Scalable Vectors
                        </h1>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop"
                            alt="Abstract Vectors"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            Have you ever wanted to turn a photograph or logo from a JPG file into a vector? Using a JPG to SVG conversion workflow is the key. JPG files are raster-based and lose quality when scaled, while SVG files stay crisp forever.
                        </p>

                        <p>
                            You can convert JPG images using tools that trace the shapes and paths in your photo to create scalable paths — perfect for logos or graphic assets.
                        </p>

                        <p>
                            A great place to try this is through the <Link href="/">SVG Crawler & Export Tool</Link>, which supports transforming images and managing SVG assets efficiently.
                        </p>

                        <h2>What are the benefits of converting a JPG to SVG?</h2>
                        <p>
                            Converting a JPG to SVG provides infinite visual scalability, allowing graphics to resize perfectly to any dimension without blurring. It significantly reduces file sizes for simple logos and icons, improves website performance, and turns static raster images into interactive, editable paths that developers can manipulate directly via CSS and JavaScript.
                        </p>

                        <h3>Primary Conversion Advantages:</h3>
                        <ul>
                            <li><strong>Resolution Independence:</strong> Perfect sharpness on mobile devices and 4K desktop screens alike.</li>
                            <li><strong>Reduced Bandwidth:</strong> Smaller file sizes for simple graphics compared to heavy JPGs.</li>
                            <li><strong>Ideal for Brand Assets:</strong> The standard format for rendering logos and UI icons on the web.</li>
                            <li><strong>Vector Editability:</strong> Fully editable nodes and paths in tools like standard vector design software.</li>
                        </ul>

                        <p>
                            Whether you’re a graphic designer or a web developer, converting JPGs to SVG can take your visuals to the next level.
                        </p>

                        <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col items-center text-center">
                            <h3 className="text-2xl font-bold mb-2">Turn JPGs into Vectors</h3>
                            <p className="mb-6 text-muted-foreground">Our browser-based tool traces your JPGs in seconds without uploading them.</p>
                            <Link href="/image-to-svg" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors">
                                Convert JPG to SVG <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
