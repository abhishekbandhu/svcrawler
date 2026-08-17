import Link from "next/link";
import { ArrowRight, FileType, Image as ImageIcon } from "lucide-react";

export function ConverterCTA() {
    return (
        <section className="py-24 bg-primary/5 border-y border-border/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-primary shadow-sm">
                            <FileType className="w-3.5 h-3.5 mr-2" />
                            <span>New Feature</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Need to convert SVGs to PNG or JPG?
                        </h2>
                        <p className="text-lg text-muted-foreground text-balance">
                            We've built a privacy-first converter that runs entirely in your browser. Scale up your icons without losing quality and export them in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link
                                href="/convert"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 w-full sm:w-auto"
                            >
                                Try Converter
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link
                                href="/blog/svg-vs-png"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-input bg-background hover:bg-muted transition-colors font-medium w-full sm:w-auto"
                            >
                                Read Guide
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-sm">
                        <div className="aspect-square rounded-3xl bg-background border border-border shadow-xl p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>

                            <div className="relative z-10 w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 w-full">
                                <div className="flex-1 h-12 rounded-lg bg-muted border border-border flex items-center justify-center gap-2 text-sm font-medium">
                                    <ImageIcon className="w-4 h-4 text-muted-foreground" />
                                    PNG
                                </div>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                <div className="flex-1 h-12 rounded-lg bg-muted border border-border flex items-center justify-center gap-2 text-sm font-medium">
                                    <ImageIcon className="w-4 h-4 text-muted-foreground" />
                                    JPG
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
