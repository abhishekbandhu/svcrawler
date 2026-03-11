import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
            <Navbar />
            <main className="flex-1 pt-32 pb-20 container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p>Last Updated: March 2026</p>
                    <p>Welcome to SVG Crawler. By accessing or using <a href="https://svgcrawler.com/">https://svgcrawler.com/</a>, you agree to comply with and be bound by the following Terms of Service.</p>
                    <p>If you do not agree with these terms, please do not use this website.</p>

                    <h2>1. Description of Service</h2>
                    <p>SVG Crawler is an online tool that allows users to:</p>
                    <ul>
                        <li>Detect and extract SVG files embedded within publicly accessible web pages</li>
                        <li>Convert SVG files to PNG format</li>
                        <li>Convert images to SVG format</li>
                    </ul>
                    <p>The service is provided for educational, research, and convenience purposes only. SVG Crawler does not host, own, or control the SVG files extracted from third-party websites.</p>

                    <h2>2. Ownership of Extracted Content</h2>
                    <p>SVG files discovered or downloaded using SVG Crawler may belong to third-party websites, designers, or organizations.</p>
                    <p>SVG Crawler:</p>
                    <ul>
                        <li>Does not claim ownership of any extracted SVG files</li>
                        <li>Does not grant licenses for the use of extracted files</li>
                        <li>Does not transfer copyright or usage rights</li>
                    </ul>
                    <p>All intellectual property rights remain with the original copyright holder. Users are solely responsible for verifying licensing terms before using any extracted files.</p>

                    <h2>3. User Responsibility</h2>
                    <p>By using SVG Crawler, you agree that:</p>
                    <ul>
                        <li>You will respect copyright and intellectual property laws.</li>
                        <li>You will obtain proper permission before using extracted assets commercially.</li>
                        <li>You will not use extracted files in a way that violates copyright, trademark, or licensing terms.</li>
                    </ul>
                    <p>SVG Crawler is not responsible for any misuse of downloaded or extracted content.</p>

                    <h2>4. Permitted Use</h2>
                    <p>You may use SVG Crawler for:</p>
                    <ul>
                        <li>Learning and educational purposes</li>
                        <li>Inspecting how SVG graphics are used on websites</li>
                        <li>Extracting SVGs when you have permission to use them</li>
                    </ul>
                    <p>You agree not to use the service for illegal or infringing purposes.</p>

                    <h2>5. No Warranty</h2>
                    <p>SVG Crawler is provided "as is" and "as available" without warranties of any kind. We do not guarantee:</p>
                    <ul>
                        <li>Accuracy of extracted files</li>
                        <li>Availability of the service</li>
                        <li>Suitability of extracted graphics for any specific purpose</li>
                    </ul>
                    <p>Use of the service is at your own risk.</p>

                    <h2>6. Limitation of Liability</h2>
                    <p>To the maximum extent permitted by law, SVG Crawler and its operators shall not be liable for: Any copyright violations by users, Damages resulting from the use of extracted files, Loss of data or business interruption. Users assume full responsibility for how they use any extracted content.</p>

                    <h2>7. Third-Party Websites</h2>
                    <p>SVG Crawler may interact with or analyze third-party websites. These websites are not controlled by SVG Crawler. We are not responsible for: Content hosted on third-party websites, Their copyright policies, Their terms or licensing conditions.</p>

                    <h2>8. Service Changes</h2>
                    <p>We reserve the right to: Modify or discontinue the service, Add or remove features, Update these Terms of Service. Changes may occur at any time without prior notice.</p>

                    <h2>9. Acceptance of Terms</h2>
                    <p>By using SVG Crawler, you confirm that you: Understand these terms, Accept responsibility for how you use extracted content, Agree to comply with copyright laws and licensing requirements.</p>

                    <h2>10. Contact</h2>
                    <p>For questions regarding these Terms of Service, you may contact us through the website contact page.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
