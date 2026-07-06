const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            replaceInDir(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Fix canonical URL domain globally (avoiding double www if it somehow exists)
            const newContent = content.replace(/https:\/\/svgcrawler\.com/g, 'https://www.svgcrawler.com')
                                      .replace(/https:\/\/www\.www\.svgcrawler\.com/g, 'https://www.svgcrawler.com');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'src'));
