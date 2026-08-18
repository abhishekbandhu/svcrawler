function extractSVGs() {
    const svgs = [];
    const uniqueMap = new Set();

    // Helper to add SVG string to array if unique
    const addSvg = (svgStr, source) => {
        if (!svgStr || typeof svgStr !== 'string') return;
        const cleaned = svgStr.trim();
        // Super basic validation
        if (!cleaned.startsWith('<svg') && !cleaned.startsWith('<?xml')) return;
        
        // Remove scripts for safety
        const sanitized = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

        if (!uniqueMap.has(sanitized)) {
            uniqueMap.add(sanitized);
            svgs.push({
                content: sanitized,
                source: source
            });
        }
    };

    // 1. Find inline <svg> elements
    const inlineSvgs = document.querySelectorAll('svg');
    inlineSvgs.forEach((svg) => {
        // Clone to avoid modifying the actual DOM
        const clone = svg.cloneNode(true);
        // Ensure XML namespace exists
        if (!clone.getAttribute('xmlns')) {
            clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }
        addSvg(clone.outerHTML, 'inline');
    });

    // 2. Find img tags with .svg
    // Note: To get the actual SVG XML from an <img> we would need to fetch it.
    // For a simple synchronous extension script, we will just return the URLs and let the popup fetch them if needed.
    // However, to keep things simple and unified, we will just return the URLs of images to the popup.
    const imgTags = document.querySelectorAll('img[src$=".svg"]');
    const svgUrls = [];
    imgTags.forEach(img => {
        if (img.src) svgUrls.push(img.src);
    });

    // Return the data back to the popup
    return { svgs, svgUrls };
}

// Execute and send results when requested by the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "EXTRACT_SVGS") {
        const results = extractSVGs();
        sendResponse(results);
    }
});
