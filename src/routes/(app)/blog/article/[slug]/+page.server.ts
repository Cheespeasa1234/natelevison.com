import type { PageServerLoad } from './$types';
import { error } from "@sveltejs/kit";
import { dataSource, isSafeArticleCode } from "$lib/blog/Blog";
import { HTTP } from '$lib/apis';

/**
 * On article/[slug] page load, return the article data if it can be found.
 */
export const load: PageServerLoad = async ({ params }) => {
    const name = params.slug;

    if (!isSafeArticleCode(name)) {
        return error(HTTP.BAD_REQUEST, `Invalid article name. (3)`);
    }

    const exists = await dataSource.articleExists(name);
    if (!exists) {
        return error(HTTP.NOT_FOUND, `Article ${name} not found. (1)`);
    }

    const article = await dataSource.getArticleByName(name);
    
    return {
        article
    }
}