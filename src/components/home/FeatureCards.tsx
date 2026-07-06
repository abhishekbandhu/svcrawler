import Link from "next/link";
import { Search, Image as ImageIcon, Sparkles, Wand2 } from "lucide-react";

export function FeatureCards() {
    return (
        <section className="container mx-auto px-4 py-20 border-b border-border/40 bg-muted/20">
            <div className="grid md:grid-cols-4 gap-6">
                <div className="p-8 rounded-3xl border border-border bg-card flex flex-col h-full hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                        <Search className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold mb-3">Website SVG Extractor</h2>
                    <p className="text-muted-foreground mb-8 flex-1">
                        Paste any webpage URL and instantly extract every SVG, icon, logo, and vector graphic.
                    </p>
                    <Link href="#extract" className="inline-flex items-center text-primary font-medium hover:underline">
                        Extract SVGs &rarr;
                    </Link>
                </div>

                <div className="p-8 rounded-3xl border border-border bg-card flex flex-col h-full hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                        <Wand2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold mb-3">Image to SVG Converter</h2>
                    <p className="text-muted-foreground mb-8 flex-1">
                        Convert PNG, JPG and WebP images into scalable SVG vectors effortlessly.
                    </p>
                    <Link href="/image-to-svg" className="inline-flex items-center text-primary font-medium hover:underline">
                        Convert Image &rarr;
                    </Link>
                </div>

                <div className="p-8 rounded-3xl border border-border bg-card flex flex-col h-full hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                        <ImageIcon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold mb-3">Favicon Generator</h2>
                    <p className="text-muted-foreground mb-8 flex-1">
                        Upload an image and instantly generate every favicon size required for modern websites.
                    </p>
                    <Link href="/favicon-generator" className="inline-flex items-center text-primary font-medium hover:underline">
                        Generate Favicons &rarr;
                    </Link>
                </div>

                <div className="p-8 rounded-3xl border border-border bg-card flex flex-col h-full hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold mb-3">SVG Optimization</h2>
                    <p className="text-muted-foreground mb-8 flex-1">
                        Clean and compress your SVG code to drastically reduce file sizes using SVGO.
                    </p>
                    <Link href="#extract" className="inline-flex items-center text-primary font-medium hover:underline">
                        Optimize SVGs &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
