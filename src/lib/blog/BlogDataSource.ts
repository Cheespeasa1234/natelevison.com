import type { BlogArticle, Project } from "$lib/blog/BlogArticle";

/**
 * An interface with which to interact with the storage medium of blog articles.
 */
export interface BlogDataSource {

    /**
     * Returns whether or not an article exists.
     * @param name The name of the article to check for.
     * @returns Whether or not the article data exists.
     */
    articleExists(name: string): boolean;
    
    /**
     * Return all articles that exist.
     * @returns A list of article data structs of all articles.
     */
    getAllArticles(): BlogArticle[];

    /**
     * Return all blog articles, from a search query.
     * @param name The name of an article to search for.
     * @param tags A list of tags an article must have.
     * @param sort The name of the type of sort. If the sorting method is invalid, sorts by relevance.
     * @returns A list of articles found, sorted as described.
     */
    getAllArticlesBySearch(name: string, tags: string[], sort: string): BlogArticle[]

    /**
     * Return the name of all articles that exist.
     */
    getAllArticleNames(): string[];

    /**
     * Returns the article of a given name.
     * @param name The name of the article to find.
     * @throws Requires name is an existing article name.
     */
    getArticleByName(name: string): BlogArticle[];

    /**
     * Return all projects that exist.
     */
    getAllProjects(): Project[];

}