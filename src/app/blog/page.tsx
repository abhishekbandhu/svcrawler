import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
    {
        slug: "extract-svg-from-website-guide",
        title: "Extract SVG from Website – Download Any SVG",
        excerpt: "Extract SVG files from any website instantly. Detect inline and external SVG elements using SVG Crawler.",
        date: "Feb 26, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
    },
    {
        slug: "export-svg-from-website",
        title: "Export SVG from Website – Fast SVG Downloader",
        excerpt: "Export and download SVG files from any website. Scan pages and save vector graphics with SVG Crawler.",
        date: "Feb 26, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    },
    {
        slug: "download-svg-from-website",
        title: "Download SVG from Website – Easy SVG Extractor",
        excerpt: "Download SVG graphics from websites without DevTools. Extract icons, logos, and vectors instantly.",
        date: "Feb 26, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    },
    {
        slug: "svg-creator-guide",
        title: "SVG Creator Online – Create & Export SVG Files",
        excerpt: "Create, extract, and export SVG files easily. Use SVG Crawler to build scalable graphics for web and design.",
        date: "Feb 25, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2574&auto=format&fit=crop",
    },
    {
        slug: "image-to-svg-workflow",
        title: "Image to SVG Converter – Fast Vector Conversion Tool",
        excerpt: "Transform any image into SVG format. Upload, convert, and download scalable vector graphics instantly.",
        date: "Feb 25, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
    },
    {
        slug: "jpg-to-svg-conversion",
        title: "JPG to SVG Converter – Turn Images into Vector Files",
        excerpt: "Convert JPG to SVG online. Create scalable vector graphics for logos, icons, and web design using SVG Crawler.",
        date: "Feb 25, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop",
    },
    {
        slug: "convert-to-svg-guide",
        title: "Convert to SVG Online – JPG, PNG & Image to SVG",
        excerpt: "Easily convert JPG, PNG, and images to SVG format. Extract and export scalable vectors with SVG Crawler.",
        date: "Feb 25, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    },
    {
        slug: "svg-converter-guide",
        title: "SVG Converter Online – Fast & Free SVG Conversion Tool",
        excerpt: "Convert images to SVG instantly. Use SVG Crawler to extract, convert, and download scalable vector graphics from any website.",
        date: "Feb 25, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=2670&auto=format&fit=crop",
    },
    {
        slug: "top-10-svg-icons-2024",
        title: "Top 10 SVG Icon Sets for 2024",
        excerpt: "Discover the best SVG icon libraries that will speed up your workflow and make your designs pop.",
        date: "Feb 17, 2026",
        author: "Alex Designer",
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=2670&auto=format&fit=crop",
    },
    {
        slug: "svg-vs-png",
        title: "SVG vs PNG: When to Use Which?",
        excerpt: "Understand the key differences between vector and raster graphics and when to use each format.",
        date: "Feb 10, 2026",
        author: "Sarah Dev",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    },
    {
        slug: "optimizing-svgs-guide",
        title: "The Ultimate Guide to Optimizing SVGs",
        excerpt: "Learn how to reduce your SVG file size by up to 80% without losing quality using SVGO.",
        date: "Feb 05, 2026",
        author: "Mike Code",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Latest from our Blog
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Tips, tricks, and resources for designers and developers working with SVGs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="flex flex-col group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all">
                                <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-video">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Link>
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-muted-foreground text-sm flex-1 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
