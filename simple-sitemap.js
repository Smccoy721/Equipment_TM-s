// Generate a simple sitemap with just the main pages
// This doesn't require importing the manuals.js file

const fs = require('fs');

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
    </url>
</urlset>`;

    return sitemap;
}

// Generate and save sitemap
const sitemapContent = generateSitemap();
fs.writeFileSync('sitemap.xml', sitemapContent);
console.log('Sitemap generated successfully!');
