import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        // Validate URL
        try {
            new URL(url);
        } catch {
            return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
        }

        // Fetch HTML
        const response = await fetch(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            next: { revalidate: 0 }, // Disable cache
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed to fetch URL: ${response.statusText}` },
                { status: response.status }
            );
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const svgs: { type: "inline" | "external"; content?: string; url?: string; viewBox?: string; width?: string; height?: string }[] = [];

        // 1. Extract Inline SVGs
        $("svg").each((_, elem) => {
            const $svg = $(elem);
            // Clean up SVG (optional: remove scripts, event handlers)
            $svg.find("script").remove();
            $svg.find("style").remove(); // Maybe keep styles? depends.

            // Get attributes
            const viewBox = $svg.attr("viewBox");
            const width = $svg.attr("width");
            const height = $svg.attr("height");

            // Get outerHTML
            const content = $.html(elem);
            if (content) {
                svgs.push({
                    type: "inline",
                    content,
                    viewBox,
                    width,
                    height,
                });
            }
        });

        // 2. Extract External SVGs (img src, object data, embed src)
        $("img[src$='.svg']").each((_, elem) => {
            const src = $(elem).attr("src");
            if (src) {
                const absoluteUrl = new URL(src, url).href;
                svgs.push({
                    type: "external",
                    url: absoluteUrl,
                });
            }
        });

        // Check <object> and <embed>
        $("object[data$='.svg']").each((_, elem) => {
            const data = $(elem).attr("data");
            if (data) {
                const absoluteUrl = new URL(data, url).href;
                svgs.push({ type: "external", url: absoluteUrl });
            }
        });

        $("embed[src$='.svg']").each((_, elem) => {
            const src = $(elem).attr("src");
            if (src) {
                const absoluteUrl = new URL(src, url).href;
                svgs.push({ type: "external", url: absoluteUrl });
            }
        });


        // Deduplicate based on content or URL
        const uniqueSvgs = svgs.filter((value, index, self) =>
            index === self.findIndex((t) => (
                (t.type === 'inline' && t.content === value.content) ||
                (t.type === 'external' && t.url === value.url)
            ))
        );

        return NextResponse.json({ svgs: uniqueSvgs });

    } catch (error) {
        console.error("Crawler Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
