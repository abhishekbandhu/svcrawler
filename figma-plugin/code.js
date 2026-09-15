figma.showUI(__html__, { width: 400, height: 350 });

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'extract-svgs') {
        const { svgs } = msg;

        if (!svgs || svgs.length === 0) {
            figma.notify("No SVGs found on that URL.");
            return;
        }

        figma.notify(`Found ${svgs.length} SVGs. Rendering...`);

        const nodes = [];
        let currentX = 0;
        let currentY = 0;
        const spacing = 40;
        let rowHeight = 0;

        for (let i = 0; i < svgs.length; i++) {
            const svgData = svgs[i];
            let svgString = '';

            try {
                if (svgData.type === 'inline') {
                    svgString = svgData.content;
                } else if (svgData.type === 'external' && svgData.url) {
                    // We must fetch external SVGs via the UI thread, but to keep this simple
                    // we'll ask the UI thread to resolve it, OR the UI thread can resolve them all first.
                    // Wait, the API returns URL. The UI thread should fetch the content of external SVGs
                    // before sending them to the main thread.
                    // Assuming the UI thread has sent us ONLY raw XML strings in msg.svgs!
                    svgString = svgData.content; 
                }

                if (!svgString) continue;

                const node = figma.createNodeFromSvg(svgString);
                node.name = `Extracted SVG ${i + 1}`;
                
                // Lay them out in a grid
                node.x = currentX;
                node.y = currentY;
                
                currentX += node.width + spacing;
                rowHeight = Math.max(rowHeight, node.height);

                // Start new row after 5 icons or 800px width
                if (currentX > 800) {
                    currentX = 0;
                    currentY += rowHeight + spacing;
                    rowHeight = 0;
                }

                nodes.push(node);
                
            } catch (err) {
                console.error("Failed to parse SVG:", err);
            }
        }

        if (nodes.length > 0) {
            // Group them or just frame them
            const frame = figma.createFrame();
            frame.name = "SVGCrawler Extraction";
            
            // Adjust frame size to fit all nodes
            let maxX = 0;
            let maxY = 0;
            nodes.forEach(node => {
                frame.appendChild(node);
                maxX = Math.max(maxX, node.x + node.width);
                maxY = Math.max(maxY, node.y + node.height);
            });
            
            frame.resize(Math.max(100, maxX + spacing), Math.max(100, maxY + spacing));
            
            // Move frame to viewport center
            frame.x = figma.viewport.center.x - (frame.width / 2);
            frame.y = figma.viewport.center.y - (frame.height / 2);

            figma.currentPage.appendChild(frame);
            figma.currentPage.selection = [frame];
            figma.viewport.scrollAndZoomIntoView([frame]);
            
            figma.notify(`Successfully rendered ${nodes.length} SVGs!`);
        } else {
            figma.notify("Failed to render the SVGs. They might be corrupted.");
        }
    }
};
