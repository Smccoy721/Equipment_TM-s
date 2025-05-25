// Generate sitemap for equipment manuals
// This will create a sitemap.xml file for better SEO

const fs = require('fs');
const path = require('path');

// Import the manuals data - directly access the global manuals variable
let manuals = [];
try {
  // Check if we have access to the global manuals variable
  const manualsModule = require('./manuals.js');
  
  // First try to get manuals as a property of the module
  if (manualsModule.manuals && Array.isArray(manualsModule.manuals)) {
    manuals = manualsModule.manuals;
  } 
  // If that doesn't work, check if manuals was defined globally in the module
  else if (global.manuals && Array.isArray(global.manuals)) {
    manuals = global.manuals;
  }
  // Otherwise, expect the module itself to be the array
  else if (Array.isArray(manualsModule)) {
    manuals = manualsModule;
  }
  else {
    // Read the file directly and evaluate the code, since it might be using a browser-style declaration
    const manualsFileContent = fs.readFileSync('./manuals.js', 'utf8');
    // Simple extraction of the array from a file that might look like "const manuals = [...]"
    const match = manualsFileContent.match(/const\s+manuals\s*=\s*(\[[\s\S]*\])/);
    if (match && match[1]) {
      // Safely evaluate the array part only
      manuals = eval(match[1]);
    } else {
      console.error('Could not parse manuals.js content');
    }
  }
} catch (error) {
  console.error('Error reading manuals.js:', error.message);
}

const baseUrl = 'https://smccoy721.github.io/Equipment_TM-s';

function generateSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseUrl}/</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${baseUrl}/qr-codes.html</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>${baseUrl}/pdf-viewer.html</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>`;

    // Add each manual PDF to the sitemap
    manuals.forEach(manual => {
        if (manual && manual.files && Array.isArray(manual.files)) {
            manual.files.forEach(filePath => {
                const viewerUrl = `${baseUrl}/pdf-viewer.html?file=${encodeURIComponent(filePath)}`;
                sitemap += `
    <url>
        <loc>${viewerUrl}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`;
            });
        }
    });

    sitemap += `
</urlset>`;

    return sitemap;
}

// Generate and save sitemap
const sitemapContent = generateSitemap();
fs.writeFileSync('sitemap.xml', sitemapContent);
console.log('Sitemap generated successfully!');

module.exports = { generateSitemap };
