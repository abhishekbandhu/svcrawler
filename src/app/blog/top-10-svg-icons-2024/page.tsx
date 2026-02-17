import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <article className="container mx-auto px-4 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Resources</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 17, 2026</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Alex Designer</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Top 10 SVG Icon Sets for 2024
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Discover the best SVG icon libraries that will speed up your workflow and make your designs pop in 2024.
                        </p>
                    </header>

                    <div className="rounded-2xl overflow-hidden mb-12 border border-border">
                        <img
                            src="https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=2670&auto=format&fit=crop"
                            alt="SVG Icons"
                            className="w-full aspect-video object-cover"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                            Scalable Vector Graphics (SVGs) are the backbone of modern web design. They are crisp, lightweight, and infinitely scalable. But finding high-quality SVG icons can be a challenge. We've curated a list of the top 10 SVG icon sets you should know about in 2024.
                        </p>

                        <h2>1. Lucide Icons</h2>
                        <p>
                            Lucide is a beautiful, consistent, and customizable icon library. It's a fork of Feather Icons and is quickly becoming the standard for React applications (and what we use on this site!).
                        </p>
                        <ul>
                            <li><strong>Pros:</strong> Consistent stroke width, huge library, framework agnostic.</li>
                            <li><strong>Best for:</strong> UI design, dashboards, SaaS apps.</li>
                        </ul>

                        <h2>2. Heroicons</h2>
                        <p>
                            From the makers of Tailwind CSS, Heroicons are SVG icons that come in two distinct styles: outline and solid. They are designed to work seamlessly with Tailwind.
                        </p>

                        <h2>3. Phosphor Icons</h2>
                        <p>
                            Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really. It provides a wide range of weights (Thin to Fill).
                        </p>

                        <h2>4. Tabler Icons</h2>
                        <p>
                            Over 5200 pixel-perfect icons for web design. Highly customizable and easy to integrate.
                        </p>

                        <h2>How to optimize these icons?</h2>
                        <p>
                            Even though these libraries provide optimized SVGs, adding them to your project can sometimes introduce unnecessary bloat. Use our <Link href="/" className="text-primary underline">SVG Crawler & Optimizer</Link> to ensure your assets are as small as possible before shipping.
                        </p>

                        <hr className="my-8 border-border" />

                        <h3>Conclusion</h3>
                        <p>
                            Choosing the right icon set can define the visual language of your product. Experiment with a few and see which one fits your brand best. Happy designing!
                        </p>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
