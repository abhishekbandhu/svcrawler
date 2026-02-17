"use client";

import { ExtractedSvg } from "@/types";
import { Check, Copy, Download, Maximize2, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SvgCardProps {
    svg: ExtractedSvg;
}

export function SvgCard({ svg }: SvgCardProps) {
    const [copied, setCopied] = useState(false);
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [optimizedContent, setOptimizedContent] = useState<string | null>(null);
    const [stats, setStats] = useState<{ originalSize: number; optimizedSize: number; savings: string } | null>(null);

    const displayContent = optimizedContent || (svg.type === "inline" ? svg.content : null);
    const displayUrl = !displayContent && svg.type === "external" ? svg.url : null;

    const handleCopy = async () => {
        const textToCopy = displayContent || displayUrl;
        if (textToCopy) {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        if (!displayContent) return;
        const blob = new Blob([displayContent], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `icon-${Math.random().toString(36).substr(2, 9)}.svg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleOptimize = async () => {
        if (!displayContent && !displayUrl) return;
        setIsOptimizing(true);
        try {
            // If we have content, send it. If URL, fetch it first.
            let contentToSend = displayContent;
            if (!contentToSend && displayUrl) {
                const res = await fetch(displayUrl);
                contentToSend = await res.text();
                // Basic validation if fetched content is SVG
                if (!contentToSend.trim().startsWith("<svg")) {
                    console.error("Fetched content is not SVG");
                    return;
                }
            }

            if (!contentToSend) return;

            const res = await fetch("/api/optimize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ svg: contentToSend }),
            });

            const data = await res.json();
            if (data.optimized) {
                setOptimizedContent(data.optimized);
                setStats({
                    originalSize: data.originalSize,
                    optimizedSize: data.optimizedSize,
                    savings: data.savings
                });
            }
        } catch (e) {
            console.error("Optimization failed", e);
        } finally {
            setIsOptimizing(false);
        }
    };

    return (
        <div className="group rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">
            <div className="p-6 flex items-center justify-center bg-secondary/30 min-h-[160px] relative">
                <div className="w-full h-full flex items-center justify-center p-4">
                    {displayContent ? (
                        <div dangerouslySetInnerHTML={{ __html: displayContent }} className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-[64px] [&>svg]:max-h-[64px] text-foreground" />
                    ) : (
                        <img src={displayUrl || ''} alt="Extracted SVG" className="w-16 h-16 object-contain" />
                    )}
                </div>

                {/* Dimensions Badge */}
                {(svg.width || svg.viewBox) && (
                    <div className="absolute bottom-2 right-2 text-[10px] text-muted-foreground bg-background/80 px-1.5 py-0.5 rounded backdrop-blur-sm border">
                        {svg.width ? `${svg.width}x${svg.height || svg.width}` : svg.viewBox}
                    </div>
                )}

                {stats && (
                    <div className="absolute top-2 right-2 text-[10px] text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-1.5 py-0.5 rounded border border-green-200 dark:border-green-800">
                        Saved {stats.savings}
                    </div>
                )}
            </div>

            <div className="p-3 border-t bg-card grid grid-cols-3 gap-1">
                <button
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-1.5 h-8 text-xs font-medium rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    title="Copy SVG Code"
                >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="sr-only">Copy</span>
                </button>

                <button
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-1.5 h-8 text-xs font-medium rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground disabled:opacity-50"
                    title="Download SVG"
                    disabled={(!displayContent && !displayUrl) || (!displayContent && svg.type === 'external')} /* Can't download external easily without fetching first, unless optimized */
                >
                    <Download className="w-3.5 h-3.5" />
                    <span className="sr-only">Download</span>
                </button>

                <button
                    onClick={handleOptimize}
                    className="inline-flex items-center justify-center gap-1.5 h-8 text-xs font-medium rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground disabled:opacity-50"
                    title="Optimize SVG"
                    disabled={isOptimizing || !!stats}
                >
                    {isOptimizing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Maximize2 className="w-3.5 h-3.5 rotate-45" />}
                    <span className="sr-only">Optimize</span>
                </button>
            </div>
        </div>
    );
}
