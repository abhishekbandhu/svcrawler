import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />
            <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-8xl md:text-9xl font-black text-primary/20 tracking-tighter mb-4">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Page Not Found</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Oops! The page you are looking for doesn't exist or has been moved. 
                        Let's get you back on track with our most popular tools.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Link href="/image-to-svg" className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all text-left block">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">PNG to SVG Converter</h3>
                            <p className="text-muted-foreground mb-6">
                                Vectorize your images instantly in the browser. Free and private.
                            </p>
                            <span className="flex items-center text-primary font-medium">
                                Try it now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        
                        <Link href="/convert" className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all text-left block">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <ImageIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">SVG to PNG Converter</h3>
                            <p className="text-muted-foreground mb-6">
                                Convert scalable vector graphics into high-resolution rasters.
                            </p>
                            <span className="flex items-center text-primary font-medium">
                                Try it now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>

                    <div className="mt-16">
                        <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-colors">
                            Return to Homepage
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
