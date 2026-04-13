/**
 * Defines types relating to Blog articles.
 */

/**
 * A Blog article.
 */
export type BlogArticle = {
    /**
     * The identifier of the article.
     */
    id: number;

    /**
     * The name of the article.
     */
    name: string;

    /**
     * The title of the article.
     */
    title: string;

    /**
     * The unix timestamp of the creation date of the article.
     */
    created: number;

    /**
     * The list of tags applicable to this article.
     */
    tags: string[];

    /**
     * Whether or not this article is pinned to the top of the default search results.
     */
    starred: boolean;

    /**
     * Whether or not to hide this article from search results.
     */
    unlisted: boolean;
    
    /**
     * Whether or not to use the glossarizer on the frontend.
     */
    enableGlossary: boolean;

    /**
     * The user-facing content of the article.
     */
    content: {
        /**
         * What type of data it is.
         */
        type: "html" | "url" | "project";

        /**
         * The raw HTML to render in the Svelte component. Present for HTML and Project types.
         */
        html?: string;

        /**
         * The URL to redirect the user to when they click. Present for URL types.
         */
        url?: string;

        /**
         * The project data. Present for Project types.
         */
        project?: Project;
    }
}

export type Project = {
    /**
     * The name of the project.
     */
    name: string;

    /**
     * The codename of the project.
     */
    code: string;

    /**
     * The short description of the project to display on the projects page.
     */
    desc: string;

    /**
     * The tags for the project to display on the projects page.
     */
    tags: string[];
    
    /**
     * The links to present on the projects page.
     */
    links: { url: string; name: string }[];

    /**
     * The freeform start date of the project.
     */
    start: string;

    /**
     * The freeform end date of the project.
     */
    end: string;
};