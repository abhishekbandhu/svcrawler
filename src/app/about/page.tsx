import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />
            <main className="flex-1 pt-32 pb-20 container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">About SVG Crawler</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p>
                        SVG Crawler was built to solve a simple problem: extracting vector assets from websites is tedious. Whether you're a designer looking for inspiration, a developer auditing assets, or just curious about how a site is built, inspecting elements one by one is a pain.
                    </p>
                    <p>
                        Our tool automates this process. We fetch the page, parse the DOM, and extract every inline SVG, linked icon, and embedded vector file we can find. Then, we give you powerful tools to organize, optimize, and export them.
                    </p>
                    <h2>Our Mission</h2>
                    <p>
                        To provide the most robust and user-friendly tool for working with web SVGs. We believe in open standards, clean code, and fast tools.
                    </p>
                    <h2>Technology</h2>
                    <p>
                        SVG Crawler is built with Next.js, Tailwind CSS, and Cheerio. We use SVGO for optimization and JSZip for bundling files.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
