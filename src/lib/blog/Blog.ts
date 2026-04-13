import type { BlogArticle, Project } from "./BlogArticle";
import type { BlogDataSource } from "./BlogDataSource";
import { XmlBlogDataSource } from "./XmlBlogDataSource";

export const dataSource: BlogDataSource = new XmlBlogDataSource();

/**
 * Returns whether or not the given article code is a valid code.
 * It is NOT a valid article code if there is any character which is not alphanumeric,
 * or a space, hyphen, or period. Those are the only valid characters.
 * @param s The string to check
 * @returns Whether or not it is a safe article code
 */
export function isSafeArticleCode(s: string): boolean {
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
 * Returns a list of articles, sorted by date created, descending.
 * @param articles The articles to sort
 * @returns The sorted articles
 */
export function sortByCreated(articles: BlogArticle[]) {
    articles.sort((a, b) => b.created - a.created);
}

/**
 * Returns a list of articles, sorted by id number, descending.
 * @param articles The articles to sort
 * @returns The sorted articles
 */
export function sortById(articles: BlogArticle[]) {
    articles.sort((a, b) => b.id - a.id);
}

/**
 * Returns a list of articles, sorted by first starred articles, then non starred.
 * @param articles The articles to sort
 * @returns The sorted articles
 */
export function sortByStarred(articles: BlogArticle[]) {
    articles.sort((a, b) => (b.starred ? 1 : 0) - (a.starred ? 1 : 0));
}