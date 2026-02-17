"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Is this tool free to use?",
        answer:
            "Yes, SVG Crawler is completely free to use for both personal and commercial projects. There are no hidden fees or limits.",
    },
    {
        question: "How does the optimization work?",
        answer:
            "We use SVGO (SVG Optimizer), a standard NodeJS-based tool, to remove redundant information like metadata, hidden elements, and unused definitions from your SVG files.",
    },
    {
        question: "Can I use the extracted icons commercially?",
        answer:
            "That depends on the license of the website you are crawling. We provide the tool to extract them, but you must ensure you have the right to use the assets.",
    },
    {
        question: "Does it work on websites behind valid login?",
        answer:
            "Currently, our crawler can only access public pages. It cannot crawl pages that require authentication or are behind a firewall.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">
                        Have a different question and can’t find the answer you’re looking for? Reach out to support.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-border/60 rounded-xl overflow-hidden bg-card hover:border-primary/20 transition-colors">
                            <button
                                className="flex items-center justify-between w-full p-6 text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <ChevronDown className={cn("w-5 h-5 transition-transform text-muted-foreground", openIndex === index && "rotate-180 text-primary")} />
                            </button>
                            <div
                                className={cn(
                                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
