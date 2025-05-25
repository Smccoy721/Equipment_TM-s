// Generate sitemap for equipment manuals
// This will create a sitemap.xml file for better SEO

const fs = require('fs');
const path = require('path');

// Import the manuals data
const manuals = require('./manuals.js').manuals || require('./manuals.js');

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
