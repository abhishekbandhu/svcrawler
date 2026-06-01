"use client";

import { useState } from "react";
import JSZip from "jszip";
import { CrawlerForm } from "@/components/CrawlerForm";
import { SvgGrid } from "@/components/SvgGrid";
import { ExtractedSvg } from "@/types";
import { FileArchive, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { ConverterCTA } from "@/components/ConverterCTA";
import { ImageToSvgCTA } from "@/components/ImageToSvgCTA";

export default function Home() {
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
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              <span>New: SVGO Optimization</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground animate-in fade-in slide-in-from-bottom-6 duration-700">
              Extract SVGs from <br className="hidden md:block" /> any website instantly.
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              The ultimate tool for designers and developers to crawl, extract, optimize, and organize SVG assets from any URL.
            </p>

            <div className="w-full animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              <CrawlerForm onCrawl={handleCrawl} isLoading={isLoading} />
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <span>Trusted by 10,000+ designers</span>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {svgs.length > 0 && (
          <section id="results" className="container mx-auto px-4 py-20 scroll-mt-20 border-b border-border/40">
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
          </section>
        )}

        {error && (
          <section className="container mx-auto px-4 py-8">
            <div className="w-full max-w-2xl mx-auto p-4 bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-center animate-in fade-in slide-in-from-top-4">
              {error}
            </div>
          </section>
        )}

        <Features />

        <ConverterCTA />

        <ImageToSvgCTA />

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
