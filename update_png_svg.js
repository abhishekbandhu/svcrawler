const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'app', 'blog', 'png-to-svg', 'page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// The new FAQ schema items
const newFaqSchema = `
        {
            "@type": "Question",
            "name": "What is an SVG file?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "An SVG (Scalable Vector Graphics) file is a web-friendly vector image format. Unlike pixel-based raster formats like PNG and JPG, an SVG file uses mathematical formulas to draw lines and shapes, allowing it to scale infinitely without losing quality."
            }
        },
        {
            "@type": "Question",
            "name": "What does SVG stand for?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SVG stands for Scalable Vector Graphics. It is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation."
            }
        },
        {
            "@type": "Question",
            "name": "Is SVG a vector file?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, SVG is inherently a vector file. It is the most common vector image format used on the web because it is supported by all modern browsers and scales perfectly."
            }
        },
        {
            "@type": "Question",
            "name": "How to open SVG file?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can open an SVG file in any modern web browser (like Chrome, Firefox, or Safari). To edit it, you can use vector graphics software like Adobe Illustrator, Figma, Inkscape, or simply open it in a text editor to modify the raw XML code."
            }
        },
`;

// Insert the new schema items into the existing array
content = content.replace(
    /"text": "You can convert PNG to SVG online using a free png to svg converter tool.[^}]*}\s*},/g,
    `"text": "You can convert PNG to SVG online using a free png to svg converter tool. Upload your raster image, adjust tracing settings if necessary, and download the resulting vectorized SVG file."
            }
        },${newFaqSchema}`
);

// The new HTML FAQ sections
const newFaqHtml = `
                            <div>
                                <h3 className="text-xl font-bold mb-2">What is an SVG file?</h3>
                                <p>An <strong>SVG file</strong> is a web-friendly vector image format. Unlike pixel-based raster formats like PNG and JPG, an SVG file uses mathematical formulas to draw lines and shapes, allowing it to scale infinitely without losing quality.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">What does SVG stand for?</h3>
                                <p><strong>SVG stands for</strong> Scalable Vector Graphics. It is an XML-based vector image format designed specifically for the web, ensuring that graphics look crisp on any screen size or resolution.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Is SVG a vector file?</h3>
                                <p>Yes, <strong>is svg a vector file</strong> is a common question, and the answer is absolutely yes. It is the most universally supported vector format across all modern web browsers.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">How to open SVG file?</h3>
                                <p>Wondering <strong>how to open svg file</strong>? Simply drag and drop it into Chrome, Safari, or Firefox to view it. To edit it, use Adobe Illustrator, Figma, or open it in a code editor like VS Code since it is written in plain XML.</p>
                            </div>
`;

content = content.replace(
    /<p>You can <strong>convert png to svg online<\/strong>.*?<\/div>/g,
    `<p>You can <strong>convert png to svg online</strong> using a free png to svg converter tool like SVGCrawler. Upload your raster image, adjust tracing settings if necessary, and download the resulting vectorized SVG file.</p>
                            </div>${newFaqHtml}`
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully updated png-to-svg FAQs.');
