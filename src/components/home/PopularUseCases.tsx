import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PopularUseCases() {
    const useCases = [
        { title: "Extract SVG logos", href: "/use-cases/extract-svg-logos", category: "Asset Type" },
        { title: "Download website icons", href: "/use-cases/download-website-icons", category: "Asset Type" },
        { title: "Extract SVG illustrations", href: "/use-cases/extract-svg-illustrations", category: "Asset Type" },
        { title: "Save SVG animations", href: "/use-cases/save-svg-animations", category: "Asset Type" },
        { title: "Extract SVGs from Shopify", href: "/use-cases/extract-svg-from-shopify", category: "Platform" },
        { title: "Extract SVGs from React apps", href: "/use-cases/extract-svg-from-react", category: "Framework" },
        { title: "Extract SVGs from landing pages", href: "/use-cases/extract-svg-landing-pages", category: "Page Type" },
        { title: "Extract SVGs from portfolios", href: "/use-cases/extract-svg-portfolios", category: "Page Type" },
    ];

    return (
        <section className="container mx-auto px-4 py-24 border-b border-border/40">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Popular Use Cases</h2>
                    <p className="text-muted-foreground text-lg">
                        See how designers and developers are using our toolkit to speed up their workflow across different platforms and assets.
                    </p>
                </div>
                <Link href="/blog" className="hidden md:inline-flex items-center text-primary font-medium hover:underline whitespace-nowrap">
                    Read our guides <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {useCases.map((useCase, i) => (
                    <Link 
                        key={i} 
                        href={useCase.href}
                        className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-muted/30 transition-all flex flex-col justify-between h-full"
                    >
                        <div>
                            <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2 block">
                                {useCase.category}
                            </span>
                            <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">
                                {useCase.title}
                            </h3>
                        </div>
                        <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors text-sm font-medium">
                            Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="mt-8 md:hidden text-center">
                <Link href="/blog" className="inline-flex items-center text-primary font-medium hover:underline">
                    Read our guides <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </section>
    );
}
