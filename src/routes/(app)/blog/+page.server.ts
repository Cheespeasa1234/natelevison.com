import { dataSource } from '$lib/blog/Blog';
import type { BlogArticle } from '$lib/blog/BlogArticle';
import { stringHasContent, wordSimilarity } from '$lib/util';
import type { PageServerLoad } from "./$types";

/**
 * On /blog load, parse the search query in the URL and return a list of articles that match.
 */
export const load: PageServerLoad = async ({ params, url }) => {
    const startTime = Date.now();

    // Load the parameters provided
    const searchParams = url.searchParams;

    const name = searchParams.get("name"); // Remove articles that aren't similar to this name
    // const tags = searchParams.get("tags"); // Remove articles that don't have all the tags
    const sort = searchParams.get("sort"); // How to sort the final results- ['date', 'relevance' (default), 'id']

    const allArticleInfos = await dataSource.getAllArticlesBySearch(name, [], sort);

    // Sort and prepare results
    // if (sort === "relevance") {
    //     if (!stringHasContent(name)) {
    //         sortByCreated(allArticleInfos);
    //         sortByStarred(allArticleInfos);
    //     } else {
    //         sortBySimilarity(allArticleInfos);
    //     }
    // } else if (sort === "date") {
    //     sortByCreated(allArticleInfos);
    //     sortByStarred(allArticleInfos);
    // } else if (sort === "id") {
    //     sortById(allArticleInfos);
    //     sortByStarred(allArticleInfos);
    // } else if (!stringHasContent(sort)) { // If no sorting algorithm provided, sort by date, and put starred at the top
    //     if (stringHasContent(name)) {
    //         sortBySimilarity(allArticleInfos);
    //     } else {
    //         sortByCreated(allArticleInfos);
    //     }
    //     sortByStarred(allArticleInfos);
    // } else {
    //     return {
    //         data: {
    //             results: [],
    //             count: 0,
    //             time: -1,
    //         },
    //         message: `'${sort}' is not a recognized sorting algorithm`,
    //         success: false,
    //     }
    // }

    // Send over the results
    const endTime = Date.now();
    const elapsed = endTime - startTime;
    return {
        data: {
            results: allArticleInfos,
            count: allArticleInfos.length,
            time: elapsed
        },
        message: `Found ${allArticleInfos.length} results in ${elapsed} ms`,
        success: true,
    }
}