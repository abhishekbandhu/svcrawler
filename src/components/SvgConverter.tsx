"use client";

import { useState, useRef } from "react";
import { Upload, Download, Image as ImageIcon, FileType, RefreshCw, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function SvgConverter() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [format, setFormat] = useState<"png" | "jpeg">("png");
    const [scale, setScale] = useState<number>(2); // Default 2x for better quality
    const [isConverting, setIsConverting] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "image/svg+xml") {
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
        } else {
            alert("Please upload a valid SVG file.");
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files?.[0];
        if (selectedFile && selectedFile.type === "image/svg+xml") {
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
        } else {
            alert("Please upload a valid SVG file.");
        }
    };

    const clearFile = () => {
        setFile(null);
        setPreviewUrl(null);
    }

    const convertAndDownload = () => {
        if (!previewUrl || !canvasRef.current) return;

        setIsConverting(true);
        const img = new Image();
        img.onload = () => {
            const canvas = canvasRef.current!;
            const ctx = canvas.getContext("2d");

            if (!ctx) return;

            // Set canvas size based on scale
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // If JPEG, fill background with white (since JPEG doesn't support transparency)
            if (format === "jpeg") {
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Draw image
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Convert to blob
            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `converted-image.${format === "jpeg" ? "jpg" : "png"}`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }
                setIsConverting(false);
            }, `image/${format}`);
        };
        img.src = previewUrl;
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {!file ? (
                <div
                    className="border-2 border-dashed border-border rounded-3xl p-12 text-center hover:bg-muted/30 transition-colors cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("file-upload")?.click()}
                >
                    <input
                        id="file-upload"
                        type="file"
                        accept=".svg"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Upload className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Upload your SVG</h3>
                    <p className="text-muted-foreground mb-6">Drag and drop or click to browse</p>
                    <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-full font-medium text-sm">
                        Select File
                    </button>
                </div>
            ) : (
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
                    <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-muted/30 rounded-2xl p-8 flex items-center justify-center min-h-[300px] relative group">
                            <img src={previewUrl!} alt="Preview" className="max-w-full max-h-[300px] drop-shadow-sm" />
                            <button
                                onClick={clearFile}
                                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-1">Conversion Settings</h3>
                                <p className="text-muted-foreground text-sm">Customize your output file.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Format</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setFormat("png")}
                                            className={cn(
                                                "flex items-center justify-center gap-2 py-3 rounded-xl border transition-all",
                                                format === "png"
                                                    ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                                                    : "border-border hover:bg-muted"
                                            )}
                                        >
                                            <ImageIcon className="w-4 h-4" />
                                            PNG
                                        </button>
                                        <button
                                            onClick={() => setFormat("jpeg")}
                                            className={cn(
                                                "flex items-center justify-center gap-2 py-3 rounded-xl border transition-all",
                                                format === "jpeg"
                                                    ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                                                    : "border-border hover:bg-muted"
                                            )}
                                        >
                                            <FileType className="w-4 h-4" />
                                            JPG
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Scale (Resolution)</label>
                                    <div className="flex items-center gap-2">
                                        {[1, 2, 4, 8].map((s) => (
                                            <button
                                                key={s}
                                                onClick={() => setScale(s)}
                                                className={cn(
                                                    "flex-1 py-2 rounded-lg text-sm font-medium border transition-all",
                                                    scale === s
                                                        ? "border-primary bg-primary text-primary-foreground"
                                                        : "border-border hover:bg-muted"
                                                )}
                                            >
                                                x{s}
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground">Higher scale = better quality for large displays.</p>
                                </div>
                            </div>

                            <button
                                onClick={convertAndDownload}
                                disabled={isConverting}
                                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                            >
                                {isConverting ? (
                                    <>
                                        <RefreshCw className="w-5 h-5 animate-spin" />
                                        Converting...
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-5 h-5" />
                                        Download {format.toUpperCase()}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}
