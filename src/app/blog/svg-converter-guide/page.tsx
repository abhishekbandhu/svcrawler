import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

export const metadata = {
    title: "SVG Converter: What It Is & How to Use It",
    description: "Learn how an SVG converter transforms raster images into scalable, editable vector graphics.",
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
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Guide</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 25, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Admin</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            SVG Converter: What It Is & How to Use It
                        </h1>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=2670&auto=format&fit=crop"
                            alt="SVG Converter"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            Are you trying to transform raster images into scalable, editable graphic files? An SVG converter lets you do exactly that — converting your images (like JPG or PNG) into vector format that can scale infinitely without pixelation.
                        </p>

                        <p>
                            SVG (Scalable Vector Graphics) is an open web standard that keeps high quality at any size and works beautifully on websites, logos, icons, and illustrations.
                        </p>

                        <p>
                            If you want a powerful tool to help with this, check out the <Link href="/">SVG Crawler & Export Tool</Link> — it’s designed to extract, optimize, and convert SVGs from any website and offers features like deep extraction and optimization.
                        </p>

                        <h2>Why use an SVG Converter?</h2>
                        <ul>
                            <li>✔ Better performance for web graphics</li>
                            <li>✔ Sharper visuals at any resolution</li>
                            <li>✔ Edit SVG files in vector editors</li>
                            <li>✔ Ideal for logos, icons, and UI graphics</li>
                        </ul>

                        <p>
                            Learn how to quickly convert files by uploading your image into a converter section of the site — then download your scalable SVG for design or web work.
                        </p>

                        <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20 text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to start converting?</h3>
                            <p className="mb-6">Turn your PNGs and JPGs into infinitely scalable vectors right in your browser.</p>
                            <Link href="/image-to-svg" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors">
                                Try Image to SVG Converter <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
