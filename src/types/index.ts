export interface ExtractedSvg {
    type: "inline" | "external";
    content?: string; // For inline SVGs
    url?: string;     // For external SVGs
    viewBox?: string;
    width?: string;
    height?: string;
    originalSize?: number; // Size in bytes
}

export interface CrawlResponse {
    svgs: ExtractedSvg[];
    error?: string;
}
