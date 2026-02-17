"use client";

import { ExtractedSvg } from "@/types";
import { SvgCard } from "./SvgCard";

interface SvgGridProps {
    svgs: ExtractedSvg[];
}

export function SvgGrid({ svgs }: SvgGridProps) {
    if (svgs.length === 0) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {svgs.map((svg, index) => (
                <SvgCard key={index} svg={svg} />
            ))}
        </div>
    );
}
