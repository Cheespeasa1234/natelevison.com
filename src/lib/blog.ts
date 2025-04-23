import fs from "fs";
import path from "path";
import parser from "xml-js";

import { type Project, type ProjectLink } from "./project";

export type ContentType = "html" | "url" | "project";

export type BlogArticle = {
    info: {
        id: number,
        created: number,
        tags: string[],
        name: string,
        title: string,
        enableGlossary: boolean,
        starred: boolean,
        unlisted: boolean,
    },
    content: {
        type: ContentType,
        file: string,
        text?: string,
        url: string,
        projectData?: Project,
    },
    data?: any
}

export function sortBySimilarity(articles: BlogArticle[]) {
    articles.sort((a, b) => b.data.similarity - a.data.similarity);
}

export function sortByCreated(articles: BlogArticle[]) {
    articles.sort((a, b) => b.info.created - a.info.created);
}

export function sortById(articles: BlogArticle[]) {
    articles.sort((a, b) => b.info.id - a.info.id);
}

export function sortByStarred(articles: BlogArticle[]) {
    articles.sort((a, b) => (b.info.starred ? 1 : 0) - (a.info.starred ? 1 : 0));
}

export function stringHasContent(str: string): boolean {
    if (str == undefined) return false;
    if (str.length === 0) return false;
    return true;
}

function editDistance(s1: string, s2: string) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

function similarity(s1: string, s2: string) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength: number = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / longerLength;
}

export function wordSimilarity(source: string, query: string): number {
    // Get cleaned text
    const alphaNumSpaceRegex = /[^a-zA-Z0-9 ]/g;
    const sourceSan = source.replace(alphaNumSpaceRegex, ' ').toLowerCase();
    const querySan = query.replace(alphaNumSpaceRegex, ' ').toLowerCase();

    // Find how many words in the query are in the source
    const sourceWords = sourceSan.split(" ");
    const queryWords = querySan.split(" ");
    const total = queryWords.length;
    let count = 0;
    for (const queryWord of queryWords) {
        // Find the max similarity to another word in the list
        let maxSimilarity = 0;
        for (const sourceWord of sourceWords) {
            const sim = similarity(queryWord, sourceWord);
            if (sim > maxSimilarity) {
                maxSimilarity = sim;
            }
        }
        count += Math.pow(maxSimilarity, 3);
    }

    return count / total;
}

export function getAllBlogNames(): string[] {
    const folder = "src/blog-data";
    const files = fs.readdirSync(folder);
    return files.map(file => file.substring(0, file.length - 4));
}

function getXmlContent(articleName: string): string {
    const folder = path.join("src", "blog-data", articleName + ".xml");
    return fs.readFileSync(folder, "utf-8").toString();
}

const enableMemo = false;
const memo = {};

export function getBlogArticle(articleName: string): BlogArticle | undefined {
    try {
        const text = getXmlContent(articleName);
        const article = (parser.xml2js(text, { compact: true }) as any).article;

        const info = article.info;
        const id = info.id._text;
        const created = info.created._text;
        let tags = [];
        if (Array.isArray(info.tag)) {
            tags = info.tag.map(obj => obj._text);
        } else {
            tags = [info.tag._text];
        }
        const title = info.title._text;
        const name = info.name._text;

        let contentType: ContentType;
        const content = article.content;
        let contentString: string;
        let contentText: string | undefined = undefined;
        let contentUrl: string;
        let contentProject: Project | undefined = undefined;
        if (content.html) {
            contentType = "html";
            contentString = content.html._text;
            contentText = fs.readFileSync(path.join("src", "blog-content", contentString), "utf-8").toString();
            contentUrl = path.join("blog", "article", name);
        } else if (content.url) {
            contentType = "url";
            contentString = content.url._text;
            contentUrl = contentString;
        } else if (content.project) {
            contentType = "project";
            contentString = content.project.html._text;
            contentText = fs.readFileSync(path.join("src", "blog-content", contentString), "utf-8").toString();
            contentUrl = path.join("blog", "article", name);
            let projectLinks: ProjectLink[] = [];
            const lnk = content.project.link;
            if (Array.isArray(lnk)) {
                projectLinks = lnk.map(obj => { return { url: obj.url._text, name: obj.name._text }; });
            } else {
                projectLinks = [{ url: lnk.url._text, name: lnk.name._text }];
            }
            projectLinks.push({
                url: contentUrl,
                name: "Read More",
            });
            const project: Project = {
                name: title,
                desc: content.project.desc._text,
                start: content.project.start._text,
                end: content.project.end._text,
                tags: tags,
                links: projectLinks,
                code: name,
            };
            contentProject = project;
        }

        const enableGlossary = info.enableGlossary !== undefined ? true : false;
        const starred = info.starred !== undefined ? true : false;
        const unlisted = info.unlisted !== undefined ? true : false;

        return {
            info: {
                id: Number(id),
                created: Number(created),
                tags,
                name,
                title,
                enableGlossary,
                starred,
                unlisted,
            },
            content: {
                type: contentType,
                file: contentString,
                text: contentText,
                url: contentUrl,
                projectData: contentProject
            }
        }
    } catch (e) {
        console.error(`Error while parsing article xml ${articleName}: ${e}`);
        return undefined;
    }
}