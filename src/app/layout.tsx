import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "SVG Crawler & Export Tool",
  description: "Extract, optimize, and organize SVGs from any website.",
  metadataBase: new URL('https://www.svgcrawler.com'),
  openGraph: {
    title: 'SVG Crawler & Export Tool',
    description: 'Extract, optimize, and organize SVGs from any website.',
    url: 'https://www.svgcrawler.com',
    siteName: 'SVG Crawler',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'SVG Crawler & Export Tool OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVG Crawler & Export Tool',
    description: 'Extract, optimize, and organize SVGs from any website.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SVG Crawler & Export Tool",
              "url": "https://www.svgcrawler.com/",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SVG Crawler",
              "url": "https://www.svgcrawler.com/",
              "logo": "https://www.svgcrawler.com/logo.png",
            }),
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z49T4SRVZR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z49T4SRVZR');
            `,
          }}
        />
      </body>
    </html>
  );
}
