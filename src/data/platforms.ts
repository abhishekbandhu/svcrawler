export interface PlatformData {
    id: string;
    name: string;
    category: string;
    description: string;
    challenges: string;
}

export const platformsData: PlatformData[] = [
    {
        id: "shopify",
        name: "Shopify",
        category: "eCommerce",
        description: "Shopify is the world's leading eCommerce platform. Many Shopify themes utilize complex Liquid templating and SVG sprites to render their icons, making it difficult to extract them manually.",
        challenges: "Shopify often uses SVG sprites or Base64 encoded SVGs within CSS files (via the Shopify CDN) to optimize loading times. This obfuscates the vectors from standard image downloaders."
    },
    {
        id: "wordpress",
        name: "WordPress",
        category: "CMS",
        description: "WordPress powers over 40% of the web. Depending on the theme or page builder (like Elementor or Divi) used, SVGs can be embedded in a multitude of ways.",
        challenges: "WordPress themes frequently inject SVGs via PHP templates directly into the DOM or use icon fonts that load SVG vectors asynchronously. Security plugins also sometimes block right-click saving."
    },
    {
        id: "wix",
        name: "Wix",
        category: "Website Builder",
        description: "Wix is a popular visual website builder that heavily relies on SVGs for its dynamic vector art and shape dividers.",
        challenges: "Wix renders its pages using a highly customized, heavily nested React DOM structure. Finding the specific SVG container in the Chrome inspector is notoriously frustrating."
    },
    {
        id: "squarespace",
        name: "Squarespace",
        category: "Website Builder",
        description: "Squarespace is known for its beautiful, design-centric templates which make extensive use of high-quality vector graphics and logos.",
        challenges: "Squarespace dynamically sizes and loads SVGs based on viewport dimensions. Manually extracting them often results in incorrect viewBox attributes."
    },
    {
        id: "figma",
        name: "Figma",
        category: "Design Tool",
        description: "Figma is the industry standard for UI/UX design. While you can export SVGs directly from the Figma app, extracting them from a public Figma prototype URL is completely different.",
        challenges: "Figma's web prototypes render using WebGL or HTML Canvas, meaning the vectors aren't even present in the standard DOM tree. Specialized extraction is required."
    },
    {
        id: "webflow",
        name: "Webflow",
        category: "Website Builder",
        description: "Webflow is the ultimate tool for visual development. It allows designers to embed raw SVG code directly into components or link them via asset managers.",
        challenges: "Webflow frequently converts uploaded SVGs into nested div structures with background images, or embeds them inside complex Lottie animation containers."
    },
    {
        id: "github",
        name: "GitHub",
        category: "Developer Platform",
        description: "GitHub is the home for developers. You might want to extract open-source SVG icons, architecture diagrams, or badges from a public repository.",
        challenges: "GitHub aggressively sanitizes SVGs displayed in readmes to prevent XSS attacks, which can sometimes break inline rendering. Extracting the raw file requires bypassing the UI."
    },
    {
        id: "canva",
        name: "Canva",
        category: "Design Tool",
        description: "Canva is a massive graphic design platform. Extracting specific vector elements from a published Canva public view can be incredibly useful.",
        challenges: "Canva often flattens designs into canvas elements or rasterizes them on the fly depending on the browser capabilities, making vector extraction difficult."
    },
    {
        id: "dribbble",
        name: "Dribbble",
        category: "Design Portfolio",
        description: "Dribbble is a community of designers sharing their work. Extracting an SVG logo or UI element for inspiration requires precise tools.",
        challenges: "Dribbble primarily serves raster images (shots). If an SVG is embedded in the DOM or a linked resource, it's typically heavily compressed and obfuscated."
    },
    {
        id: "react",
        name: "React",
        category: "Framework",
        description: "React is a JavaScript library for building user interfaces. Developers frequently use SVGR or inline JSX to render SVGs as React components.",
        challenges: "Because React injects SVGs into the DOM via JavaScript after the initial page load, standard HTML scrapers will completely miss them."
    }
];
