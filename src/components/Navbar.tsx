"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

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
                    <div className="relative w-48 h-10 flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo-black.png" alt="SVG Crawler" className="h-full object-contain dark:hidden" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo-white.png" alt="SVG Crawler" className="h-full object-contain hidden dark:block" />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/convert" className="hover:text-primary transition-colors text-foreground font-semibold">SVG to PNG</Link>
                    <Link href="/image-to-svg" className="hover:text-primary transition-colors text-foreground font-semibold">Image to SVG</Link>
                    <Link href="/favicon-generator" className="hover:text-primary transition-colors text-foreground font-semibold">Favicons</Link>
                    <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                    <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
                    <a href="https://buymeacoffee.com/alphaknight21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 px-3 py-1.5 rounded-full text-sm">
                        <span>☕</span> Buy me a Coffee
                    </a>
                    <div className="pl-4 border-l border-border/50">
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden flex items-center gap-2">
                    <ThemeToggle />
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
                        <Link href="/favicon-generator" onClick={closeMobileMenu} className="hover:text-primary transition-colors text-foreground font-semibold py-2">Favicon Generator</Link>
                        <Link href="/blog" onClick={closeMobileMenu} className="hover:text-foreground transition-colors py-2">Blog</Link>
                        <Link href="/#features" onClick={closeMobileMenu} className="hover:text-foreground transition-colors py-2">Features</Link>
                        <Link href="/#faq" onClick={closeMobileMenu} className="hover:text-foreground transition-colors py-2">FAQ</Link>
                        <a href="https://buymeacoffee.com/alphaknight21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 px-4 py-2 rounded-lg text-base w-fit">
                            <span>☕</span> Buy me a Coffee
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
