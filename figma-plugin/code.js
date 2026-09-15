figma.showUI(__html__, { width: 400, height: 420 });

// Send initial payment status to the UI
figma.ui.postMessage({ type: 'payment-status', status: figma.payments.status.type });

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'initiate-checkout') {
        try {
            await figma.payments.initiateCheckoutAsync();
            // Send updated status back to UI after checkout closes
            figma.ui.postMessage({ type: 'payment-status', status: figma.payments.status.type });
        } catch (err) {
            console.error("Checkout failed or cancelled", err);
        }
    }

    if (msg.type === 'extract-svgs') {
        let { svgs } = msg;

        if (!svgs || svgs.length === 0) {
            figma.notify("No SVGs found on that URL.");
            return;
        }

        // The UI thread already slices the array based on payment status, 
        // but we enforce it here as well for security.
        const isUnpaid = figma.payments.status.type === 'UNPAID';
        const FREE_LIMIT = 10;

        if (isUnpaid && svgs.length > FREE_LIMIT) {
            svgs = svgs.slice(0, FREE_LIMIT);
        }

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
            const frame = figma.createFrame();
            frame.name = "SVGCrawler Extraction";
            
            let maxX = 0;
            let maxY = 0;
            nodes.forEach(node => {
                frame.appendChild(node);
                maxX = Math.max(maxX, node.x + node.width);
                maxY = Math.max(maxY, node.y + node.height);
            });
            
            frame.resize(Math.max(100, maxX + spacing), Math.max(100, maxY + spacing));
            
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


