"use client";

import { Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCards } from "@/components/home/FeatureCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Benefits } from "@/components/home/Benefits";
import { PopularUseCases } from "@/components/home/PopularUseCases";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { RelatedTools } from "@/components/home/RelatedTools";
import { SeoContent } from "@/components/home/SeoContent";
import { CrawlerTool } from "@/components/CrawlerTool";

export default function Home() {
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
              Paste any public webpage URL to instantly find, preview, and download every SVG used on the page. No browser extensions or coding required.
            </p>

            <CrawlerTool />

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
              <span className="flex items-center justify-center gap-2"><span className="text-primary font-bold">✓</span> Works with most public websites</span>
              <span className="flex items-center justify-center gap-2"><span className="text-primary font-bold">✓</span> Extracts inline & linked SVGs</span>
              <span className="flex items-center justify-center gap-2"><span className="text-primary font-bold">✓</span> Download individually or ZIP</span>
              <span className="flex items-center justify-center gap-2"><span className="text-primary font-bold">✓</span> Built for designers & developers</span>
            </div>
          </div>
        </section>

        <FeatureCards />
        <HowItWorks />
        <Benefits />
        <PopularUseCases />
        <HomeFAQ />
        <RelatedTools />
        <SeoContent />
      </main>

      <Footer />
    </div>
  );
}

