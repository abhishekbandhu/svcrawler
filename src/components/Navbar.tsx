"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when a link is clicked
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight" onClick={closeMobileMenu}>
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                    </div>
                    <span>SVG Crawler</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/convert" className="hover:text-primary transition-colors text-foreground font-semibold">SVG to PNG</Link>
                    <Link href="/image-to-svg" className="hover:text-primary transition-colors text-foreground font-semibold">Image to SVG</Link>
                    <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                    <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-foreground focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-zinc-950 border-b border-border shadow-lg">
                    <nav className="flex flex-col py-4 px-6 gap-4 text-base font-medium">
                        <Link href="/convert" onClick={closeMobileMenu} className="hover:text-primary transition-colors text-foreground font-semibold py-2">SVG to PNG</Link>
                        <Link href="/image-to-svg" onClick={closeMobileMenu} className="hover:text-primary transition-colors text-foreground font-semibold py-2">Image to SVG</Link>
                        <Link href="/blog" onClick={closeMobileMenu} className="hover:text-foreground transition-colors py-2">Blog</Link>
                        <Link href="/#features" onClick={closeMobileMenu} className="hover:text-foreground transition-colors py-2">Features</Link>
                        <Link href="/#faq" onClick={closeMobileMenu} className="hover:text-foreground transition-colors py-2">FAQ</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
