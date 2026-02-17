"use client";

import { useState } from "react";
import { Loader2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface CrawlerFormProps {
    onCrawl: (url: string) => Promise<void>;
    isLoading: boolean;
}

export function CrawlerForm({ onCrawl, isLoading }: CrawlerFormProps) {
    const [url, setUrl] = useState("");
    const [error, setError] = useState<string | null>(null);

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
        <div className="w-full max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSubmit} className="relative flex items-center">
                <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder="Type a URL to crawl..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className={cn(
                            "w-full pl-10 pr-4 py-3 rounded-xl border bg-background",
                            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                            "transition-all duration-200",
                            error ? "border-destructive" : "border-input"
                        )}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !url}
                    className={cn(
                        "ml-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium",
                        "hover:bg-primary/90 transition-colors",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "flex items-center gap-2"
                    )}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Crawling...
                        </>
                    ) : (
                        "Fetch SVGs"
                    )}
                </button>
            </form>
            {error && <p className="mt-2 text-sm text-destructive ml-1">{error}</p>}
        </div>
    );
}
