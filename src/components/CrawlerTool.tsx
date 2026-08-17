"use client";

import { useState } from "react";
import JSZip from "jszip";
import { CrawlerForm } from "@/components/CrawlerForm";
import { SvgGrid } from "@/components/SvgGrid";
import { ExtractedSvg } from "@/types";
import { FileArchive } from "lucide-react";

export function CrawlerTool() {
    const [svgs, setSvgs] = useState<ExtractedSvg[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCrawl = async (url: string) => {
        setIsLoading(true);
        setError(null);
        setSvgs([]);

        try {
            const res = await fetch("/api/crawl", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to crawl");
            }

            const extractedSvgs = data.svgs || [];

            if (extractedSvgs.length === 0) {
                throw new Error("No SVGs found on this URL. Try another page.");
            }

            setSvgs(extractedSvgs);

            // Scroll to results
            setTimeout(() => {
                document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
            }, 100);

        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const downloadAll = async () => {
        if (svgs.length === 0) return;

        const zip = new JSZip();
        const folder = zip.folder("svgs");

        if (!folder) return;

        const promises = svgs.map(async (svg, index) => {
            const filename = `icon-${index}.svg`;
            if (svg.type === "inline" && svg.content) {
                folder.file(filename, svg.content);
            } else if (svg.type === "external" && svg.url) {
                try {
                    const res = await fetch(svg.url);
                    if (res.ok) {
                        const blob = await res.blob();
                        folder.file(filename, blob);
                    } else {
                        folder.file(`icon-${index}-error.txt`, `Failed to fetch: ${svg.url}`);
                    }
                } catch (e) {
                    console.warn("Failed to fetch external SVG for zip:", svg.url);
                    folder.file(`icon-${index}-link.txt`, svg.url);
                }
            }
        });

        await Promise.all(promises);

        const content = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(content);
        const a = document.createElement("a");
        a.href = url;
        a.download = "extracted-svgs.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full">
            <div className="w-full animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                <CrawlerForm onCrawl={handleCrawl} isLoading={isLoading} />
            </div>

            {/* Results Section */}
            {svgs.length > 0 && (
                <div id="results" className="w-full mt-16 scroll-mt-20">
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Found <span className="text-primary">{svgs.length}</span> SVGs
                            </h2>
                            <button
                                onClick={downloadAll}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-colors font-medium shadow-sm hover:shadow"
                            >
                                <FileArchive className="w-4 h-4" />
                                Download All (ZIP)
                            </button>
                        </div>

                        <SvgGrid svgs={svgs} />
                    </div>
                </div>
            )}

            {error && (
                <div className="w-full max-w-2xl mx-auto mt-8 p-4 bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-center animate-in fade-in slide-in-from-top-4">
                    {error}
                </div>
            )}
        </div>
    );
}
