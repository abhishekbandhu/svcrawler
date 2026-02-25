import Link from "next/link";
import { ArrowRight, ImagePlus, PenTool } from "lucide-react";

export function ImageToSvgCTA() {
    return (
        <section className="py-24 bg-background border-y border-border/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 max-w-5xl mx-auto">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center rounded-full border border-secondary bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground shadow-sm">
                            <PenTool className="w-3.5 h-3.5 mr-2" />
                            <span>Vector Tracing</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Turn any image into a vector graphic.
                        </h2>
                        <p className="text-lg text-muted-foreground text-balance">
                            Upload a JPG or PNG and watch it magically transform into a scalable SVG path. Perfect for digitizing logos, sketches, and icons in your browser.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link
                                href="/image-to-svg"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-lg w-full sm:w-auto"
                            >
                                Vectorize Image
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-sm">
                        <div className="aspect-square rounded-3xl bg-card border border-border shadow-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]"></div>

                            <div className="relative z-10 w-24 h-24 bg-background rounded-2xl flex items-center justify-center text-foreground mb-8 border border-border shadow-sm group-hover:-translate-y-2 transition-transform duration-500">
                                <ImagePlus className="w-10 h-10" />
                            </div>

                            <div className="relative z-10 flex items-center justify-between w-full p-4 rounded-xl bg-muted/50 border border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-xs flex items-center justify-center">
                                        JPG
                                    </div>
                                    <span className="text-sm font-medium">logo.jpg</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium">logo.svg</span>
                                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-xs flex items-center justify-center">
                                        SVG
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
