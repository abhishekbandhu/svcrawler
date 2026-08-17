"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Download, RefreshCw, X, SlidersHorizontal, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageToSvg() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [svgStr, setSvgStr] = useState<string | null>(null);
    const [isConverting, setIsConverting] = useState(false);

    // Tracing options presets
    const [preset, setPreset] = useState<"default" | "posterized2" | "artistic" | "detailed">("default");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith("image/")) {
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
            setSvgStr(null);
        } else {
            alert("Please upload a valid image file (PNG/JPG).");
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files?.[0];
        if (selectedFile && selectedFile.type.startsWith("image/")) {
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
            setSvgStr(null);
        } else {
            alert("Please upload a valid image file (PNG/JPG).");
        }
    };

    const clearFile = () => {
        setFile(null);
        setPreviewUrl(null);
        setSvgStr(null);
    }

    const convertImage = async () => {
        if (!previewUrl) return;

        setIsConverting(true);
        setSvgStr(null);

        // Import imagetracerjs dynamically because it might rely on window/DOM
        try {
            const ImageTracer = (await import("imagetracerjs")).default || await import("imagetracerjs");

            // Get preset options and force viewBox for responsive scaling
            const options = ImageTracer.optionpresets[preset]
                ? { ...ImageTracer.optionpresets[preset], viewbox: true }
                : { viewbox: true };

            ImageTracer.imageToSVG(
                previewUrl,
                (svg: string) => {
                    setSvgStr(svg);
                    setIsConverting(false);
                },
                options
            );
        } catch (err) {
            console.error("Vectorization failed:", err);
            alert("Failed to vectorize image. Please try another one.");
            setIsConverting(false);
        }
    };

    const downloadSvg = () => {
        if (!svgStr) return;
        const blob = new Blob([svgStr], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `vectorized-${Date.now()}.svg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Auto-convert when preview URL or preset changes if file is loaded
    useEffect(() => {
        if (previewUrl) {
            convertImage();
        }
    }, [previewUrl, preset]);

    return (
        <div className="w-full max-w-5xl mx-auto">
            {!file ? (
                <div
                    className="border-2 border-dashed border-border rounded-3xl p-12 text-center hover:bg-muted/30 transition-colors cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("img-upload")?.click()}
                >
                    <input
                        id="img-upload"
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <ImageIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Upload an Image</h3>
                    <p className="text-muted-foreground mb-6">Drag and drop a PNG, JPG, or WEBP file</p>
                    <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-full font-medium text-sm">
                        Select File
                    </button>
                </div>
            ) : (
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                    <div className="p-8 grid lg:grid-cols-[1fr_300px] gap-8">

                        {/* Previews */}
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Original Image */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Original Raster (PNG/JPG)</h4>
                                    <div className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-muted/30 rounded-2xl p-4 flex items-center justify-center min-h-[250px] relative border border-border/50">
                                        <img src={previewUrl!} alt="Original" className="max-w-full max-h-[250px] object-contain drop-shadow-sm" />
                                    </div>
                                </div>

                                {/* Vectorized SVG */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                                        Vectorized SVG
                                        {isConverting && <RefreshCw className="w-3.5 h-3.5 animate-spin text-primary" />}
                                    </h4>
                                    <div className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-muted/30 rounded-2xl p-4 flex items-center justify-center min-h-[250px] relative border border-primary/20 bg-primary/5">
                                        {svgStr ? (
                                            <div
                                                className="w-full h-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto"
                                                dangerouslySetInnerHTML={{ __html: svgStr }}
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                                                <RefreshCw className="w-8 h-8 animate-spin mb-2 opacity-50" />
                                                <p className="text-sm">Tracing paths...</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Controls Sidebar */}
                        <div className="space-y-6 lg:border-l border-border lg:pl-8 flex flex-col pt-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold">Settings</h3>
                                <button
                                    onClick={clearFile}
                                    className="p-1.5 bg-muted rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground cursor-pointer hover:ring-2 hover:ring-destructive/20 active:scale-95"
                                    title="Clear Image"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="space-y-3 flex-1">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <SlidersHorizontal className="w-4 h-4 text-primary" />
                                    Tracing Styles
                                </label>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        { id: "default", name: "Default Vector" },
                                        { id: "detailed", name: "High Detail" },
                                        { id: "artistic", name: "Artistic Paint" },
                                        { id: "posterized2", name: "Logo / Poster" },
                                    ].map((p) => (
                                        <button
                                            key={p.id}
                                            onClick={() => setPreset(p.id as any)}
                                            className={cn(
                                                "px-4 py-3 rounded-xl text-sm font-medium border transition-all text-left cursor-pointer hover:shadow-md",
                                                preset === p.id
                                                    ? "border-primary bg-primary/5 text-primary shadow-sm ring-1 ring-primary/50 translate-x-1"
                                                    : "border-border hover:border-primary/40 hover:bg-primary/5 hover:translate-x-1 active:scale-[0.98] text-foreground"
                                            )}
                                        >
                                            {p.name}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                                    Different styles produce different path complexities. Logo preset is best for flat graphics, while Artistic is better for photos.
                                </p>
                            </div>

                            <button
                                onClick={downloadSvg}
                                disabled={isConverting || !svgStr}
                                className="w-full py-4 mt-auto bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:translate-y-0 disabled:hover:bg-primary cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                <Download className="w-5 h-5" />
                                Download SVG
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
