import type { BlogDataSource } from "./BlogDataSource";
import type { BlogArticle, Project } from "$lib/blog/BlogArticle";
import { isSafeArticleCode } from "./Blog";

import fs from "fs";
import path from "path";
import { xml2js, xml2json } from "xml-js";
import type { Element, ElementCompact } from "xml-js";

export class XmlBlogDataSource implements BlogDataSource {

    articleExists(name: string): boolean {
        if (!isSafeArticleCode(name)) {
                return false;
            }
        const file = path.join("src", "blog-data", name + ".xml");
        if (fs.existsSync(file)) {
            return true;
        }
        return false;
    }

    getAllArticles(): BlogArticle[] {

    }

    getAllArticlesBySearch(name: string, tags: string[], sort: string): BlogArticle[] {

    }

    getAllArticleNames(): string[] {
        const folder: string = path.join("src", "blog-data");
        const files: string[] = fs.readdirSync(folder);
        return files.map(file => file.substring(0, file.length - 4));
    }
    
    async getArticleByName(name: string): BlogArticle {
        if (!isSafeArticleCode(name)) {
            throw new Error("Article name is invalid.");
        }
        if (!this.articleExists(name)) {
            throw new Error("Article does not exist.");
        }

        const file: string = path.join("src", "blog-data", name + ".xml");
        const text: string = fs.readFileSync(file, { encoding: "utf-8" }).toString();

        // Get the XML data
        const xml = xml2js(text, { ignoreComment: true, alwaysChildren: true, compact: true }) as any;
        const article = xml.article;
        const info = xml.info;
        const content = xml.content;
        
        const id: number = parseInt(info.id._text);
        const created: number = parseInt(info.created._text);
        const updated: number = parseInt(info.updated._text);
        const tag: string[] = info.tag.map(x => x._text);
        const title: string = info.title._text;
        
    }
    
    async getAllProjects(): Project[] {

    }
}