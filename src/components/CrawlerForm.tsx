"use client";

import { useState, useEffect } from "react";
import { Loader2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface CrawlerFormProps {
    onCrawl: (url: string) => Promise<void>;
    isLoading: boolean;
}

const PLACEHOLDERS = [
    "https://apple.com",
    "https://github.com",
    "https://stripe.com",
    "https://figma.com",
];

export function CrawlerForm({ onCrawl, isLoading }: CrawlerFormProps) {
    const [url, setUrl] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        try {
            new URL(url);
            setError(null);
            await onCrawl(url);
        } catch {
            setError("Please enter a valid URL (e.g., https://example.com)");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-4">
            <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder={`e.g., ${PLACEHOLDERS[placeholderIndex]}`}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className={cn(
                            "w-full pl-12 pr-4 py-4 rounded-2xl border bg-background text-lg shadow-sm",
                            "focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary",
                            "transition-all duration-300",
                            error ? "border-destructive" : "border-input"
                        )}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !url}
                    className={cn(
                        "px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-lg",
                        "hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300",
                        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg",
                        "flex items-center justify-center gap-2"
                    )}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Extracting...
                        </>
                    ) : (
                        "Extract SVGs"
                    )}
                </button>
            </form>
            {error && <p className="mt-3 text-sm text-destructive ml-1">{error}</p>}
        </div>
    );
}
