import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Convert to SVG: Ultimate Guide for Web Designers",
    description: "Learn why and how web designers convert images to SVG for crisp, lightweight graphics.",
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
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Design</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 25, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Admin</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Convert to SVG: Ultimate Guide for Web Designers
                        </h1>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
                            alt="Web Design Tooling"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            Converting any image to SVG means transforming it from pixels into a vector format. This is especially useful when you want crisp, lightweight graphics that look great on screens of all sizes.
                        </p>

                        <h2>How do you convert an image to SVG format?</h2>
                        <p>
                            To convert an image to SVG format, you must use a specialized tool that traces the raster pixels and plots them as resolution-independent vector paths. You upload your original PNG or JPG file into the generator, allow the tool to calculate the scalable paths, and then download the resulting vector file.
                        </p>
                        <p>Follow these exact steps to vectorize an asset:</p>
                        <ol>
                            <li><strong>Pick the Asset:</strong> Select the raster image you want to convert (typically a JPG or PNG file).</li>
                            <li><strong>Use a Converter:</strong> Upload the image into an online vectorizer tool that supports SVG export tracing.</li>
                            <li><strong>Download and Import:</strong> Download the generated SVG file and add it to your project or open it in a graphics editor.</li>
                        </ol>

                        <p>
                            👉 Start with the <Link href="/">SVG Crawler & Export Tool</Link> — whether you’re extracting existing SVGs from websites or converting your own images.
                        </p>

                        <h2>Bonus tips:</h2>
                        <ul>
                            <li>Vectorize only simple graphics for best results.</li>
                            <li>Use SVG editors like Illustrator or Figma for further refinement after conversion.</li>
                        </ul>

                        <p>
                            Converting your images to SVG will make your designs sharper, faster, and more adaptable than traditional bitmap graphics.
                        </p>

                        <div className="mt-12 p-8 bg-muted rounded-2xl border border-border text-center">
                            <h3 className="text-2xl font-bold mb-4">Convert your first asset today</h3>
                            <p className="mb-6">Upload any PNG or JPG and instantly receive a scalable vector.</p>
                            <Link href="/image-to-svg" className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-colors">
                                Vectorize an Image <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
