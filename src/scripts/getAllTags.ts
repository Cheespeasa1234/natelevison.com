import { getAllBlogNames, getBlogArticle, sortById, type BlogArticle } from "../lib/blog";
import fs from "fs";

function tags() {
    const allTags: Set<string> = new Set<string>();
    const articleNames: string[] = getAllBlogNames();
    const articles: BlogArticle[] = articleNames.map(getBlogArticle);
    
    for (const article of articles) {
        article.info.tags.forEach(tag => {
            allTags.add(tag);
        });
    }

    const allTagsArr = Array.from(allTags);
    const MAX_LINE_CHAR_LEN = 40;
    let curLine = "";
    for (let i = 0; i < allTagsArr.length; i++) {
        const tag = allTagsArr[i];
        curLine += "'" + tag + "' ";
        if (curLine.length >= MAX_LINE_CHAR_LEN) {
            console.log(curLine);
            curLine = "";
        }
    }
}

function main() {
    tags();
}

main();