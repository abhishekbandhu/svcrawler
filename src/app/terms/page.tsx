import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />
            <main className="flex-1 pt-32 pb-20 container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p>Last updated: February 17, 2026</p>
                    <h2>1. Terms</h2>
                    <p>
                        By accessing this Website, accessible from svgcrawler.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
                    </p>
                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials on SVG Crawler's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul>
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose or for any public display;</li>
                        <li>attempt to reverse engineer any software contained on SVG Crawler's Website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    <h2>3. Disclaimer</h2>
                    <p>
                        All the materials on SVG Crawler's Website are provided "as is". SVG Crawler makes no warranties, may it be expressed or implied, therefore negates all other warranties.
                    </p>
                    <h2>4. Limitations</h2>
                    <p>
                        SVG Crawler or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on SVG Crawler's Website, even if SVG Crawler or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
