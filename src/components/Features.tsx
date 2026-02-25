import { Download, Layers, ShieldCheck, Zap } from "lucide-react";

const features = [
    {
        icon: Layers,
        title: "Deep Extraction",
        description:
            "Our advanced crawler digs deep into the DOM to find inline SVGs, sprites, and linked files that other tools miss.",
    },
    {
        icon: Zap,
        title: "Instant Optimization",
        description:
            "reduce file size by up to 80% without losing quality. We use SVGO under the hood to clean up messy code.",
    },
    {
        icon: Download,
        title: "Bulk Export",
        description:
            "Save time by downloading all extracted icons in a single ZIP file, or grab individual files as needed.",
    },
    {
        icon: ShieldCheck,
        title: "Privacy First",
        description:
            "We don't store your data. All processing happens on the fly, and your downloaded files are generated locally.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
                        Why do designers use the SVG Crawler tool?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Designers use the SVG Crawler tool to automate the extraction and optimization of scalable vector graphics directly from websites. Our tool eliminates the need for manual DOM inspection by batch-downloading and organizing all inline SVGs, sprites, and linked files into a single ZIP archive instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-background p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
