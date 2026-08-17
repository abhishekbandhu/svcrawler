import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export interface LandingPageTemplateProps {
    h1: string;
    intro: string;
    toolComponent: React.ReactNode;
    instructions: string[];
    benefits: string[];
    faqs: { question: string; answer: string }[];
    seoContent: React.ReactNode;
}

export function LandingPageTemplate({ 
    h1, 
    intro, 
    toolComponent, 
    instructions, 
    benefits, 
    faqs, 
    seoContent 
}: LandingPageTemplateProps) {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />

            <main className="flex-1">
                {/* Hero / Tool Area */}
                <section className="relative pt-32 pb-20 border-b border-border/40">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{h1}</h1>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
                            {intro}
                        </p>
                        
                        <div className="max-w-4xl mx-auto">
                            {toolComponent}
                        </div>
                    </div>
                </section>

                {/* Instructions */}
                <section className="container mx-auto px-4 py-20 border-b border-border/40">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to use this tool
                        <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full opacity-80"></div>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {instructions.map((step, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                                    {i + 1}
                                </div>
                                <p className="text-muted-foreground">{step}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className="container mx-auto px-4 py-20 border-b border-border/40 bg-muted/10">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Why choose our tool?
                        <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full opacity-80"></div>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                                <p className="font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section className="container mx-auto px-4 py-20 border-b border-border/40">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Frequently Asked Questions
                        <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full opacity-80"></div>
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Long Form SEO Content */}
                <section className="container mx-auto px-4 py-20">
                    <article className="prose prose-invert max-w-4xl mx-auto">
                        {seoContent}
                    </article>
                </section>

            </main>

            <Footer />
        </div>
    );
}
