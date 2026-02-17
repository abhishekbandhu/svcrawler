"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
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

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/convert" className="hover:text-primary transition-colors text-foreground font-semibold">Converter</Link>
                    <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                    <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</Link>
                    <Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
