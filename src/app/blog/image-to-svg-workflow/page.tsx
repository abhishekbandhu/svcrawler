import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Image to SVG: The Complete Conversion Workflow",
    description: "Learn the complete workflow for turning any picture into a resolution-independent vector file.",
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
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Workflow</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 25, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Admin</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Image to SVG: The Complete Conversion Workflow
                        </h1>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop"
                            alt="Code and Workflow"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            When designers talk about “image to SVG,” they typically mean turning any kind of picture — like PNG, JPG, GIF, or photo — into a vector file that’s resolution-independent.
                        </p>

                        <h2>What is the process for image to SVG conversion?</h2>
                        <p>
                            The process for image to SVG conversion involves uploading a raster graphic, such as a PNG or JPG, into a vectorizer tool. The tool algorithmically traces the contrast boundaries and shapes to create scalable mathematical paths. Finally, you download the resulting SVG file to use on the web or edit in vector design software.
                        </p>
                        <ul>
                            <li><strong>📌 Step 1:</strong> Upload your target raster image into the browser.</li>
                            <li><strong>📌 Step 2:</strong> Use a conversion algorithm to vectorize the underlying shapes.</li>
                            <li><strong>📌 Step 3:</strong> Download the newly generated SVG file.</li>
                            <li><strong>📌 Step 4:</strong> Open the asset in a vector editor to tweak details if necessary.</li>
                        </ul>

                        <p>
                            Even animations or simple icons can benefit from being SVGs because they scale neatly and stay sharp. For a dependable tool to help you extract icons or convert images to SVG, visit the <Link href="/">SVG Crawler & Export Tool</Link> and explore its features.
                        </p>

                        <p>
                            Using image-to-SVG workflows can improve your UI designs, icon sets, and graphics for web and mobile projects.
                        </p>

                        <div className="mt-12 grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-muted rounded-2xl border border-border">
                                <h3 className="font-bold text-xl mb-3">Convert Raster to Vector</h3>
                                <p className="text-muted-foreground mb-4 text-sm">Upload a PNG/JPG and trace it into an SVG path automatically.</p>
                                <Link href="/image-to-svg" className="text-primary font-medium flex items-center hover:underline">
                                    Try Image to SVG <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                            <div className="p-6 bg-muted rounded-2xl border border-border">
                                <h3 className="font-bold text-xl mb-3">Convert Vector to Raster</h3>
                                <p className="text-muted-foreground mb-4 text-sm">Have an SVG you need as a PNG? Use our offline converter tool.</p>
                                <Link href="/convert" className="text-primary font-medium flex items-center hover:underline">
                                    Try SVG to PNG <ArrowRight className="w-4 h-4 ml-1" />
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
