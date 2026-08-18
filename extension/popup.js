let extractedSvgs = [];
const downloadAllBtn = document.getElementById('downloadAllBtn');
const svgGrid = document.getElementById('svg-grid');
const loadingState = document.getElementById('loading');
const emptyState = document.getElementById('empty-state');

// Execute content script and get SVGs
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    
    // Inject the content script if not already injected
    chrome.scripting.executeScript({
        target: { tabId: currentTab.id },
        files: ['content.js']
    }, () => {
        // Now ask for the SVGs
        chrome.tabs.sendMessage(currentTab.id, { action: "EXTRACT_SVGS" }, (response) => {
            loadingState.classList.add('hidden');
            
            if (chrome.runtime.lastError || !response || (response.svgs.length === 0 && response.svgUrls.length === 0)) {
                emptyState.classList.remove('hidden');
                return;
            }

            // Combine inline SVGs and SVG URLs
            extractedSvgs = [
                ...response.svgs.map((s, i) => ({ type: 'inline', content: s.content, name: `vector-${i + 1}.svg` })),
                ...response.svgUrls.map((url, i) => ({ type: 'url', url: url, name: `image-${i + 1}.svg` }))
            ];
            
            if (extractedSvgs.length > 0) {
                downloadAllBtn.disabled = false;
                svgGrid.classList.remove('hidden');
                renderGrid(extractedSvgs);
            } else {
                emptyState.classList.remove('hidden');
            }
        });
    });
});

function renderGrid(svgs) {
    svgGrid.innerHTML = '';
    
    svgs.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let previewContent = '';
        if (item.type === 'inline') {
            previewContent = item.content;
        } else {
            previewContent = `<img src="${item.url}" alt="SVG preview" />`;
        }

        card.innerHTML = `
            <div class="card-preview">
                ${previewContent}
            </div>
            <div class="card-actions">
                <button class="btn btn-outline" data-index="${index}">Download</button>
            </div>
        `;
        
        const btn = card.querySelector('.btn');
        btn.addEventListener('click', () => downloadSingle(index));
        
        svgGrid.appendChild(card);
    });
}

async function downloadSingle(index) {
    const item = extractedSvgs[index];
    if (item.type === 'inline') {
        const blob = new Blob([item.content], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        chrome.downloads.download({
            url: url,
            filename: item.name
        });
    } else {
        chrome.downloads.download({
            url: item.url,
            filename: item.name
        });
    }
}

downloadAllBtn.addEventListener('click', async () => {
    downloadAllBtn.disabled = true;
    downloadAllBtn.innerHTML = 'Zipping...';
    
    const zip = new JSZip();
    const folder = zip.folder("SVGCrawler-Exports");
    
    // Process all SVGs
    for (let i = 0; i < extractedSvgs.length; i++) {
        const item = extractedSvgs[i];
        if (item.type === 'inline') {
            folder.file(item.name, item.content);
        } else {
            // Need to fetch the remote SVG to zip it
            try {
                const res = await fetch(item.url);
                const blob = await res.blob();
                folder.file(item.name, blob);
            } catch (err) {
                console.error('Failed to fetch', item.url);
            }
        }
    }
    
    zip.generateAsync({ type: "blob" }).then((blob) => {
        const url = URL.createObjectURL(blob);
        chrome.downloads.download({
            url: url,
            filename: "svgcrawler-exports.zip"
        });
        
        downloadAllBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download ZIP
        `;
        downloadAllBtn.disabled = false;
    });
});
