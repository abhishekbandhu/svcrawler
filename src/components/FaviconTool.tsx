"use client";

import { useState, useRef } from 'react';
import { Upload, Download, RefreshCw, AlertCircle, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import JSZip from 'jszip';

export function FaviconTool() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        if (!selectedFile.type.startsWith('image/')) {
            setError('Please upload a valid image file (PNG, JPG, SVG, WebP).');
            return;
        }

        setError(null);
        setSuccessMessage(null);
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewUrl(e.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile && droppedFile.type.startsWith('image/')) {
            setError(null);
            setSuccessMessage(null);
            setFile(droppedFile);
            
            const reader = new FileReader();
            reader.onload = (e) => setPreviewUrl(e.target?.result as string);
            reader.readAsDataURL(droppedFile);
        } else {
            setError('Please drop a valid image file.');
        }
    };

    const resizeImageToBlob = async (img: HTMLImageElement, size: number): Promise<Blob> => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error("Could not get canvas context");
        
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);

        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (blob) resolve(blob);
                else reject(new Error("Canvas to Blob failed"));
            }, 'image/png');
        });
    };

    const generateIco = async (images: { blob: Blob, size: number }[]): Promise<Blob> => {
        const header = new Uint8Array(6);
        const view = new DataView(header.buffer);
        view.setUint16(0, 0, true); // reserved
        view.setUint16(2, 1, true); // type (1 = ico)
        view.setUint16(4, images.length, true); // num images

        const dirEntries: Uint8Array[] = [];
        const imageData: Uint8Array[] = [];
        let offset = 6 + (16 * images.length);

        for (const img of images) {
            const buffer = await img.blob.arrayBuffer();
            const data = new Uint8Array(buffer);
            imageData.push(data);

            const entry = new Uint8Array(16);
            const entryView = new DataView(entry.buffer);
            // Size of 256 is represented as 0 in ICO format
            const dim = img.size === 256 ? 0 : img.size;
            entryView.setUint8(0, dim); // width
            entryView.setUint8(1, dim); // height
            entryView.setUint8(2, 0); // color palette count
            entryView.setUint8(3, 0); // reserved
            entryView.setUint16(4, 1, true); // color planes
            entryView.setUint16(6, 32, true); // bpp
            entryView.setUint32(8, data.length, true); // size in bytes
            entryView.setUint32(12, offset, true); // offset from beginning of file

            dirEntries.push(entry);
            offset += data.length;
        }

        const blobParts: BlobPart[] = [
            header.buffer as ArrayBuffer, 
            ...dirEntries.map(e => e.buffer as ArrayBuffer), 
            ...imageData.map(e => e.buffer as ArrayBuffer)
        ];
        return new Blob(blobParts, { type: 'image/vnd.microsoft.icon' });
    };

    const handleGenerate = async () => {
        if (!previewUrl) return;

        setIsProcessing(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const img = new Image();
            img.src = previewUrl;
            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
            });

            // Required sizes
            // For ICO: 16x16, 32x32, 48x48
            // For Pngs: 16x16, 32x32, 180x180 (apple), 192x192 (android), 512x512
            const sizes = [16, 32, 48, 180, 192, 512];
            const blobs = await Promise.all(sizes.map(async (size) => {
                return { size, blob: await resizeImageToBlob(img, size) };
            }));

            // Filter for ICO specifically
            const icoSizes = blobs.filter(b => b.size === 16 || b.size === 32 || b.size === 48);
            const icoBlob = await generateIco(icoSizes);

            // Zip it all up
            const zip = new JSZip();
            zip.file("favicon.ico", icoBlob);
            zip.file("favicon-16x16.png", blobs.find(b => b.size === 16)!.blob);
            zip.file("favicon-32x32.png", blobs.find(b => b.size === 32)!.blob);
            zip.file("apple-touch-icon.png", blobs.find(b => b.size === 180)!.blob);
            zip.file("android-chrome-192x192.png", blobs.find(b => b.size === 192)!.blob);
            zip.file("android-chrome-512x512.png", blobs.find(b => b.size === 512)!.blob);

            const content = await zip.generateAsync({ type: "blob" });
            
            // Download the ZIP
            const url = URL.createObjectURL(content);
            const a = document.createElement("a");
            a.href = url;
            a.download = "favicon_package.zip";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            setSuccessMessage("Favicon package downloaded successfully!");
        } catch (err) {
            console.error(err);
            setError("Failed to generate favicons. Ensure the image is valid and try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setPreviewUrl(null);
        setError(null);
        setSuccessMessage(null);
    };

    return (
        <div className="w-full max-w-2xl mx-auto rounded-3xl border border-border bg-card shadow-xl overflow-hidden mt-8">
            <div className="p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                        Generate Your Favicons
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Upload a square (1:1 ratio) image (at least 512x512px recommended). We will generate the <code>.ico</code> file and all necessary <code>.png</code> sizes for iOS and Android.
                    </p>
                </div>

                {!previewUrl ? (
                    <div 
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        className="group relative flex flex-col items-center justify-center p-12 border-2 border-dashed border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer overflow-hidden"
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            aria-label="Upload image"
                        />
                        <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8 text-primary" />
                        </div>
                        <p className="font-medium text-lg mb-1">Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground text-center">
                            SVG, PNG, JPG, or WebP. <br/> Ideal aspect ratio is 1:1.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="bg-muted/30 border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8">
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-xl overflow-hidden bg-background border border-border shadow-sm flex items-center justify-center">
                                    <img 
                                        src={previewUrl} 
                                        className="w-full h-full object-contain"
                                        alt="Preview" 
                                    />
                                </div>
                            </div>
                            
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <div>
                                    <h3 className="font-semibold flex items-center justify-center md:justify-start gap-2">
                                        <ImageIcon className="w-4 h-4 text-primary" />
                                        {file?.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Image ready for conversion
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">16x16</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">32x32</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">180x180</span>
                                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">512x512</span>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg text-sm">
                                <AlertCircle className="w-4 h-4" />
                                <p>{error}</p>
                            </div>
                        )}

                        {successMessage && (
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-3 rounded-lg text-sm">
                                <CheckCircle2 className="w-4 h-4" />
                                <p>{successMessage}</p>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button
                                onClick={handleReset}
                                disabled={isProcessing}
                                className="flex-1 py-3 px-4 flex items-center justify-center gap-2 font-medium rounded-xl border border-border hover:bg-muted transition-colors disabled:opacity-50"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Upload Different Image
                            </button>
                            <button
                                onClick={handleGenerate}
                                disabled={isProcessing}
                                className="flex-1 py-3 px-4 flex items-center justify-center gap-2 font-medium rounded-xl bg-primary text-primary-foreground shadow-lg hover:bg-secondary hover:text-secondary-foreground transition-all disabled:opacity-75"
                            >
                                {isProcessing ? (
                                    <>
                                        <RefreshCw className="w-5 h-5 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-5 h-5" />
                                        Download Favicon Package
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="bg-muted px-8 py-5 border-t border-border flex items-center justify-center text-sm text-muted-foreground text-center">
                <p>The downloaded package contains a multi-resolution <code>.ico</code> file and standard PNG icons.</p>
            </div>
        </div>
    );
}
