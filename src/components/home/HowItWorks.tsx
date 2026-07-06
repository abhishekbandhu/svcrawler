import { Link, Scan, Download } from "lucide-react";

export function HowItWorks() {
    return (
        <section className="container mx-auto px-4 py-24 border-b border-border/40">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
                <p className="text-muted-foreground text-lg md:text-xl">
                    Extract SVGs without browser extensions or manual code inspection. Our fast cloud processor does the heavy lifting in three simple steps.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
                <div className="absolute top-12 left-[16%] right-[16%] h-[2px] bg-border hidden md:block"></div>
                
                <div className="relative text-center z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                        <Link className="w-10 h-10 text-primary" />
                    </div>
                    <div className="bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center absolute top-0 right-1/4 -mt-2 -mr-2 shadow-lg">1</div>
                    <h3 className="text-2xl font-bold mb-4">Paste URL</h3>
                    <p className="text-muted-foreground">
                        Paste any public webpage URL into the search box.
                    </p>
                </div>

                <div className="relative text-center z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                        <Scan className="w-10 h-10 text-primary" />
                    </div>
                    <div className="bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center absolute top-0 right-1/4 -mt-2 -mr-2 shadow-lg">2</div>
                    <h3 className="text-2xl font-bold mb-4">Scan the Page</h3>
                    <p className="text-muted-foreground">
                        SVGCrawler scans the DOM and stylesheet to find every SVG asset.
                    </p>
                </div>

                <div className="relative text-center z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                        <Download className="w-10 h-10 text-primary" />
                    </div>
                    <div className="bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center absolute top-0 right-1/4 -mt-2 -mr-2 shadow-lg">3</div>
                    <h3 className="text-2xl font-bold mb-4">Download SVGs</h3>
                    <p className="text-muted-foreground">
                        Preview, optimize and download your extracted SVGs instantly.
                    </p>
                </div>
            </div>
        </section>
    );
}
