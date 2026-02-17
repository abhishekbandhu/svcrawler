import { NextResponse } from "next/server";
import { optimize } from "svgo";

export async function POST(req: Request) {
    try {
        const { svg } = await req.json();

        if (!svg) {
            return NextResponse.json({ error: "SVG content is required" }, { status: 400 });
        }

        const result = optimize(svg, {
            multipass: true,
            plugins: [
                {
                    name: "preset-default",
                    params: {
                        overrides: {
                            removeViewBox: false, // Keep viewBox for responsiveness
                        },
                    },
                } as any,
            ],
        });

        if ('data' in result) {
            // Calculate savings
            const originalSize = new Blob([svg]).size;
            const optimizedSize = new Blob([result.data]).size;

            return NextResponse.json({
                optimized: result.data,
                originalSize,
                optimizedSize,
                savings: `${((originalSize - optimizedSize) / originalSize * 100).toFixed(1)}%`
            });
        } else {
            throw new Error("Optimization failed");
        }

    } catch (error) {
        console.error("Optimize Error:", error);
        return NextResponse.json(
            { error: "Optimization failed" },
            { status: 500 }
        );
    }
}
