"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { homeFaqData } from "@/data/homeFaq";

export function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="container mx-auto px-4 py-24 border-b border-border/40 bg-muted/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg">
                        Everything you need to know about our SVG toolkit.
                    </p>
                </div>

                <div className="space-y-4">
                    {homeFaqData.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-border bg-card rounded-2xl overflow-hidden transition-colors hover:border-primary/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-bold text-lg pr-8">{faq.question}</span>
                                <ChevronDown 
                                    className={cn(
                                        "w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                                        openIndex === index && "rotate-180 text-primary"
                                    )} 
                                />
                            </button>
                            <div 
                                className={cn(
                                    "px-6 pb-6 text-muted-foreground overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pb-0"
                                )}
                            >
                                <p className="pt-2 border-t border-border/50 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
