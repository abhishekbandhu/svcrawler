import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />
            <main className="flex-1 pt-32 pb-20 container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p>Last Updated: March 2026</p>
                    <p>The information and tools provided on SVG Crawler (<a href="https://www.svgcrawler.com/">https://www.svgcrawler.com/</a>) are intended for general informational and technical purposes only.</p>
                    <p>By using this website, you agree to the terms outlined in this disclaimer.</p>

                    <h2>1. No Ownership of Extracted SVG Files</h2>
                    <p>SVG Crawler is a tool designed to help users detect and extract SVG files embedded within publicly accessible web pages.</p>
                    <p>SVG Crawler does not host, store, own, or claim rights to any SVG files extracted using this tool.</p>
                    <p>Many SVG files belong to third-party websites, designers, or organizations and may be protected by copyright, trademark, or other intellectual property laws. All rights to such content remain with the original copyright owners.</p>

                    <h2>2. No Commercial Rights Granted</h2>
                    <p>Using SVG Crawler to extract an SVG file does not grant any permission or license to use that file.</p>
                    <p>SVG Crawler does not provide commercial rights, redistribution rights, or ownership rights for any extracted assets.</p>
                    <p>Users are responsible for ensuring they have the appropriate permissions or licenses before using any extracted graphics for:</p>
                    <ul>
                        <li>Commercial use</li>
                        <li>Redistribution</li>
                        <li>Publication</li>
                        <li>Branding or marketing materials</li>
                    </ul>

                    <h2>3. User Responsibility</h2>
                    <p>Users of SVG Crawler are solely responsible for how they use extracted files.</p>
                    <p>Before using any SVG files obtained through this tool, users should verify:</p>
                    <ul>
                        <li>Copyright ownership</li>
                        <li>Licensing terms</li>
                        <li>Usage permissions from the original creator or website</li>
                    </ul>
                    <p>SVG Crawler is not responsible for copyright infringement or misuse of any downloaded or extracted assets.</p>

                    <h2>4. Third-Party Websites</h2>
                    <p>SVG Crawler analyzes content from third-party websites provided by users. We do not control or manage these websites and are not responsible for:</p>
                    <ul>
                        <li>Their content</li>
                        <li>Their licensing terms</li>
                        <li>Their copyright policies</li>
                    </ul>
                    <p>Users should always review the terms and licenses of the original website before using extracted files.</p>

                    <h2>5. Tool Usage</h2>
                    <p>SVG Crawler is intended for: Educational purposes, Development and research, Inspecting how SVG graphics are used on websites. It should not be used to violate copyright laws or intellectual property rights.</p>

                    <h2>6. Accuracy of Information</h2>
                    <p>While we aim to provide a reliable tool, SVG Crawler makes no guarantees regarding the accuracy, completeness, or reliability of extracted files or tool outputs. The service is provided "as is" without warranties of any kind.</p>

                    <h2>7. Limitation of Liability</h2>
                    <p>Under no circumstances shall SVG Crawler or its operators be liable for any damages, losses, or legal issues arising from: The use of extracted SVG files, Copyright violations by users, Reliance on the information provided on this website. Users assume full responsibility for how they use this tool and any assets obtained from it.</p>

                    <h2>8. Contact</h2>
                    <p>If you have questions regarding this disclaimer, please contact us through the website.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
