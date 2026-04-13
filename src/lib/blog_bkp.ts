import fs from "fs";
import path from "path";
import parser from "xml-js";

/**
 * What type of content a article XML file is containing.
 * An HTML type means there is an HTML file in blog-content to render.
 * A URL type means it should be a redirect (update page, etc).
 * A project type means it isn't a normal article, instead it is for the projects page.
 */
export type ContentType = "html" | "url" | "project";

/**
 * A link to a project.
 */
export type ProjectLink = { url: string; name: string }

/**
 * A project I have done.
 */
export type Project = {
    name: string;
    code: string;
    desc: string;
    tags: string[];
    links: ProjectLink[];
    start: string;
    end: string;
};

/**
 * A blog article, and all of its data.
 */
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

export function getAllProjects(): Project[] {
    const articleNames = getAllBlogNames().filter(name => name.startsWith("project"));
    const articles = articleNames.map(name => getBlogArticle(name));
    sortById(articles);
    const projects = articles.map(article => article.content.projectData).toReversed();
    return projects;
}

export const projects = getAllProjects();

/**
 * Returns a list of articles, sorted by similarity, descending.
 * @param articles The articles to sort
 * @returns The sorted articles
 */
export function sortBySimilarity(articles: BlogArticle[]) {
    articles.sort((a, b) => b.data.similarity - a.data.similarity);
}

/**
 * Returns a list of articles, sorted by date created, descending.
 * @param articles The articles to sort
 * @returns The sorted articles
 */
export function sortByCreated(articles: BlogArticle[]) {
    articles.sort((a, b) => b.info.created - a.info.created);
}

/**
 * Returns a list of articles, sorted by id number, descending.
 * @param articles The articles to sort
 * @returns The sorted articles
 */
export function sortById(articles: BlogArticle[]) {
    articles.sort((a, b) => b.info.id - a.info.id);
}

/**
 * Returns a list of articles, sorted by first starred articles, then non starred.
 * @param articles The articles to sort
 * @returns The sorted articles
 */
export function sortByStarred(articles: BlogArticle[]) {
    articles.sort((a, b) => (b.info.starred ? 1 : 0) - (a.info.starred ? 1 : 0));
}

/**
 * Returns whether or not the given article code is a valid code.
 * It is NOT a valid article code if there is any character which is not alphanumeric,
 * or a space, hyphen, or period. Those are the only valid characters.
 * @param s The string to check
 * @returns Whether or not it is a safe article code
 */
function isSafeArticleCode(s: string) {
    const alpha = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const numeric = "01234567890";
    const special = " -.";
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (!alpha.includes(c) && !numeric.includes(c) && !special.includes(c)) {
            return false;
        }
    }
    return true;
}

/**
 * Returns whether or not the name of an article, as in the url, is a real one that has a real article
 * @param name The name of the article to check
 * @returns Whether or not that article exists at all
 */
export function isNameRealArticle(name: string): boolean {
    if (!isSafeArticleCode(name)) {
        return false;
    }
    const file = path.join("src", "blog-data", name + ".xml");
    if (fs.existsSync(file)) {
        return true;
    }
    return false;
}

/**
 * Returns a list of all the blog articles currently in the blog-data directory
 * @returns The list of blog data file names (article names)
 */
export function getAllBlogNames(): string[] {
    const folder = path.join("src", "blog-data");
    const files = fs.readdirSync(folder) || [];
    return files.map(file => file.substring(0, file.length - 4));
}

/**
 * Returns the XML content as a string of an article. If the article DNE,
 * or it is not even checked because it is not safe, it will return an empty string.
 * @param articleName The article to get
 * @returns The xml file as a string of the article, or an empty string
 */
function getXmlContent(articleName: string): string {
    if (!isSafeArticleCode(articleName)) return "";
    if (!isNameRealArticle(articleName)) return "";
    const folder = path.join("src", "blog-data", articleName + ".xml");
    return fs.readFileSync(folder, "utf-8").toString();
}

/**
 * Parses the XML file of an article and returns the data found in it.
 * Returns undefined if: the article is not found, the article is not safe to check,
 * @param articleName The article name to get
 * @returns The article data if found, undefined if something went wrong
 */
export function getBlogArticle(articleName: string): BlogArticle | undefined {
    try {
        const text = getXmlContent(articleName);
        if (text.length == 0) return undefined;
        const article = (parser.xml2js(text, { compact: true }) as any).article;

        const info = article.info;
        const id = info.id._text;
        const created = info.created._text;
        let tags = [];
        if (Array.isArray(info.tag)) {
            tags = info.tag.map((obj: { _text: any; }) => obj._text);
        } else {
            tags = [info.tag._text];
        }
        const title = info.title._text;
        const name = info.name._text;

        let contentType: ContentType = "html";
        const content = article.content;
        let contentString: string = "";
        let contentText: string | undefined = undefined;
        let contentUrl: string = "";
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