import { getAllBlogNames, getBlogArticle } from "../lib/blog";
import fs from "fs";

function getSitemapString(): string {
    const articleNames = getAllBlogNames();
    const articles = articleNames.map(getBlogArticle);
    
    const xmlEntries: string[] = [];
    
    for (const article of articles) {
        const unlisted = article.info.unlisted;
        if (unlisted) continue;
        
        const type = article.content.type;
        if (type === "url") continue;

        const created = article.info.created;
        const name = article.info.name;
        const url = article.content.url;
        const starred = article.info.starred;

        const fullUrl = `https://natelevison.com/${url}`;
        const lastMod = new Date(created).toISOString();
        
        console.log(fullUrl);
        console.log(lastMod);
        console.log()

        const priority = starred ? 0.75 : 0.5;

        const xmlEntry = `
    <url>
        <loc>${fullUrl}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>${priority}</priority>
    </url>`;

        xmlEntries.push(xmlEntry);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">${xmlEntries.join('')}
</urlset>
    `;

    return sitemap;
}

function writeSitemapToFile(sitemap: string) {
    const path = "static/sitemaps/blog.xml";
    fs.writeFileSync(path, sitemap);
}

function main() {
    writeSitemapToFile(getSitemapString());
}

main();