import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SvgConverter } from "@/components/SvgConverter";

export default function ConvertPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                            SVG to PNG/JPG Converter
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Convert your scalable vector graphics to high-resolution raster images instantly. No server uploads, 100% private.
                        </p>
                    </div>

                    <SvgConverter />

                    <div className="mt-20 max-w-3xl mx-auto prose prose-lg dark:prose-invert">
                        <h2>Why convert SVG to PNG?</h2>
                        <p>
                            While SVGs are great for the web, sometimes you need a standard image format for social media, email signatures, or legacy software that refuses to render vectors.
                        </p>
                        <h3>Features:</h3>
                        <ul>
                            <li><strong>Privacy First:</strong> All conversions happen in your browser. We never see your files.</li>
                            <li><strong>High Resolution:</strong> Scale up your SVGs up to 8x before converting to ensure crisp edges.</li>
                            <li><strong>Transparency Support:</strong> Export as PNG to keep those transparent backgrounds.</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
