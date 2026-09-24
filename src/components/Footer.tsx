import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/30">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="relative w-48 h-10 flex items-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/logo-black.png" alt="SVG Crawler" className="h-full object-contain dark:hidden opacity-80 hover:opacity-100 transition-opacity" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/logo-white.png" alt="SVG Crawler" className="h-full object-contain hidden dark:block opacity-80 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Extract, optimize, and organize SVGs from any website instantly.
                            The ultimate tool for designers and developers.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Tools</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/convert" className="hover:text-foreground transition-colors" title="Convert SVG to PNG">SVG to PNG Converter</Link></li>
                            <li><Link href="/image-to-svg" className="hover:text-foreground transition-colors" title="Convert PNG to SVG">Image to SVG Converter</Link></li>
                            <li><Link href="/favicon-generator" className="hover:text-foreground transition-colors" title="Generate Favicons from Images">Favicon Generator</Link></li>
                            <li><Link href="#extract" className="hover:text-foreground transition-colors">SVG Extractor</Link></li>
                            <li><Link href="#extract" className="hover:text-foreground transition-colors">SVG Optimizer</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog & Guides</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">API (Coming Soon)</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-sm">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} SVG Crawler. All rights reserved.</p>
                    <a href="https://buymeacoffee.com/alphaknight21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 px-3 py-1.5 rounded-full text-sm">
                        <span>☕</span> Buy me a Coffee
                    </a>
                </div>
            </div>
        </footer>
    );
}
