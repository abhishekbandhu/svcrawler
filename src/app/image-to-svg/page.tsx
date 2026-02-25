import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImageToSvg } from "@/components/ImageToSvg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image to SVG Converter | Free Online Vectorizer",
    description: "Convert PNG or JPG images to scalable vector graphics (SVG) instantly. Runs fully in your browser for total privacy.",
};

export default function ImageToSvgPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                            AI-Powered Tracing
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground text-balance">
                            Convert Image to SVG
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl text-balance">
                            Transform your raster images (PNG, JPG) into high-quality, infinitely scalable vector graphics. No server uploads required.
                        </p>
                    </div>

                    <ImageToSvg />

                    {/* SEO Content Section */}
                    <section className="mt-32 max-w-4xl mx-auto border-t border-border pt-16">
                        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
                            Why Convert to SVG?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 prose prose-lg dark:prose-invert max-w-none">
                            <div>
                                <h3>Infinite Scalability</h3>
                                <p>
                                    Unlike JPG or PNG files which are made of fixed pixels and lose quality when enlarged, SVGs are made of mathematical paths. This means you can scale an SVG to the size of a billboard or shrink it to a mobile icon, and it will remain crisply rendering on every screen density without any pixelation.
                                </p>

                                <h3>Smaller File Sizes</h3>
                                <p>
                                    For logos, icons, and simple illustrations, an SVG file is often significantly smaller than its raster counterpart. By converting flatter PNGs to SVGs, you strip away heavy pixel data, leading to faster loading times for your websites and applications.
                                </p>
                            </div>

                            <div>
                                <h3>Completely Private</h3>
                                <p>
                                    Our Image to SVG converter brings the tracing algorithm directly into your browser using WebAssembly and client-side JavaScript. Your images are never uploaded to a remote server. This guarantees 100% privacy and lightning-fast conversion since there's no network latency.
                                </p>

                                <h3>How the Vectorization Works</h3>
                                <p>
                                    Our tool uses advanced path-tracing algorithms to analyze the contrast boundaries in your image and plot Bézier curves along them. You can toggle between different presets like <i>Logo</i> for sharp edges or <i>Artistic</i> for photographic vectorization to achieve the perfect result.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-muted rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 justify-between border border-border">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Need to go the other way?</h3>
                                <p className="text-muted-foreground max-w-md">
                                    If you have an SVG file that you need to convert into a PNG or JPG for social media or legacy systems, we have a tool for that too.
                                </p>
                            </div>
                            <a href="/convert" className="px-6 py-3 bg-foreground text-background font-medium rounded-xl whitespace-nowrap hover:bg-foreground/90 transition-colors">
                                Try SVG to PNG
                            </a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
