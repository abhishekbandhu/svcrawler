import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RelatedTools() {
    const tools = [
        { name: "SVG Extractor", href: "#extract", desc: "Extract SVGs from any public URL." },
        { name: "Image to SVG", href: "/image-to-svg", desc: "Convert PNG/JPG to SVG vectors." },
        { name: "SVG Optimizer", href: "#extract", desc: "Clean and compress raw SVG code." },
        { name: "Favicon Generator", href: "/favicon-generator", desc: "Create web-ready favicon packs." },
    ];

    return (
        <section className="container mx-auto px-4 py-24 border-b border-border/40">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Explore the Toolkit</h2>
                <p className="text-muted-foreground text-lg">
                    SVGCrawler is a growing ecosystem of tools designed to handle every aspect of vector graphic management. Seamlessly move between extraction, conversion, and optimization.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool, i) => (
                    <Link 
                        key={i} 
                        href={tool.href}
                        className="group p-6 rounded-2xl border border-border bg-card hover:bg-primary/5 transition-all text-center flex flex-col items-center justify-center h-full"
                    >
                        <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                        <div className="text-primary font-medium flex items-center text-sm">
                            Try Tool <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
