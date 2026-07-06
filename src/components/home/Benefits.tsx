import { CheckCircle2 } from "lucide-react";

export function Benefits() {
    const benefits = [
        { title: "Extract SVGs without browser extensions", desc: "No need to clutter your browser with heavy extensions. Everything runs directly in the cloud." },
        { title: "Find hidden inline SVGs", desc: "Our crawler digs deep into the DOM to find SVG paths embedded directly in the HTML." },
        { title: "Download all SVGs at once", desc: "Save time by downloading every extracted SVG asset in a single, neatly organized ZIP file." },
        { title: "Works with most public websites", desc: "Whether it's a React SPA, Shopify store, or WordPress blog, if it's public, we can scan it." },
        { title: "Built for designers and developers", desc: "A streamlined workflow toolkit designed specifically for modern web professionals." },
        { title: "Fast cloud processing", desc: "We handle the heavy lifting on our servers so you get instant results without slowing down your computer." },
        { title: "No software installation", desc: "Access the entire SVG toolkit from any device, anywhere in the world, directly in your browser." },
        { title: "Free to use", desc: "Start extracting, converting, and optimizing your SVG assets immediately at no cost." },
    ];

    return (
        <section className="container mx-auto px-4 py-24 border-b border-border/40 bg-muted/10">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Use SVGCrawler?</h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                    More than just an extractor, SVGCrawler is the complete toolkit for managing vector assets.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                            <h3 className="font-bold text-lg">{benefit.title}</h3>
                        </div>
                        <p className="text-muted-foreground pl-9">
                            {benefit.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
