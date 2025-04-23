import { getAllBlogNames, getBlogArticle, sortById } from "../lib/blog";
import fs from "fs";

function ids() {
    const articleNames = getAllBlogNames();
    const articles = articleNames.map(getBlogArticle);
    sortById(articles);
    
    let min = 0;
    for (const article of articles) {
        const id = article.info.id;
        console.log(article.info.name, id);
        if (id >= min) {
            min = id + 1;
        }
    }
    console.log("Next id: " + min);
    console.log("Time   : " + Date.now());
}

function main() {
    ids();
}

main();