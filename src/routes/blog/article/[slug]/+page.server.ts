import type { PageServerLoad } from './$types';
import { error } from "@sveltejs/kit";
import { getBlogArticle, getAllBlogNames } from "$lib/blog";
import { HTTP } from '$lib/apis';

export const load: PageServerLoad = ({ params }) => {
    const name = params.slug;
    const names = getAllBlogNames();
    if (!names.includes(name)) {
        return error(404, `Article ${name} not found. (1)`);
    }
    const article = getBlogArticle(name);
    if (!article) {
        return error(HTTP.INTERNAL_SERVER_ERROR, `Article ${name} could not be parsed. (2)`);
    }
    
    return {
        article
    }
}