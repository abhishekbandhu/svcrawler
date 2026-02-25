"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Is the SVG Crawler tool completely free to use online?",
        answer:
            "Yes, the SVG Crawler is completely free to use online. You can extract, optimize, and organize SVGs for both personal and commercial projects without any hidden fees, subscriptions, or strict usage limits.",
    },
    {
        question: "How does the SVG optimization process reduce file size?",
        answer:
            "Our tool uses SVGO under the hood. It reduces file size by removing redundant metadata, hidden elements, and unused definitions from your SVG files, ensuring maximum performance for your web projects.",
    },
    {
        question: "Can I use the extracted SVG icons commercially on my website?",
        answer:
            "Usage rights depend entirely on the license of the website you crawl. While our tool can extract public SVG code, you must independently verify that you have legal permission to use those graphic assets.",
    },
    {
        question: "Can the SVG Crawler access websites behind a login or firewall?",
        answer:
            "No, the crawler can only access publicly available pages. It cannot bypass authentication walls, login screens, or firewalls to extract SVG assets.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-background border-t border-border/40">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
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
