import type { PageServerLoad } from './$types';
import { error } from "@sveltejs/kit";
import { getBlogArticle, getAllBlogNames, isNameRealArticle } from "$lib/blog";
import { HTTP } from '$lib/apis';

/**
 * On article/[slug] page load, return the article data if it can be found.
 */
export const load: PageServerLoad = ({ params }) => {
    const name = params.slug;
    if (!isNameRealArticle(name)) {
        return error(HTTP.NOT_FOUND, `Article ${name} not found. (1)`);
    }

    const article = getBlogArticle(name);
    if (!article) {
        return error(HTTP.INTERNAL_SERVER_ERROR, `Article ${name} could not be parsed. (2)`);
    }
    
    return {
        article
    }
}