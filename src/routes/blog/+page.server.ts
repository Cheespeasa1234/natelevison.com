import { getBlogArticle, getAllBlogNames, stringHasContent, wordSimilarity, type BlogArticle, sortBySimilarity, sortByCreated, sortById, sortByStarred } from "$lib/blog";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params, url }) => {
    const startTime = Date.now();

    // Load the parameters provided
    const searchParams = url.searchParams;
    const allArticleNames = getAllBlogNames();
    let allArticleInfos: BlogArticle[] = allArticleNames.map(name => getBlogArticle(name));
    allArticleInfos = allArticleInfos.filter(article => !article.info.unlisted);

    const name = searchParams.get("name"); // Remove articles that aren't similar to this name
    // const tags = searchParams.get("tags"); // Remove articles that don't have all the tags
    const sort = searchParams.get("sort"); // How to sort the final results- ['date', 'relevance' (default), 'id']

    // Check the tags
    // if (stringHasContent(tags)) {
    //     const tagList = tags.split(",");
    //     allArticleInfos = allArticleInfos.filter(article => {
    //         for (let i = 0; i < tagList.length; i++) {
    //             if (!article.info.tags.includes(tagList[i])) return false;
    //         }
    //         return true;
    //     });
    // }

    // Check the name / title similarity
    const minSimilarity = 0.25;
    if (stringHasContent(name)) {
        // Set the similarity to the query for each
        for (let article of allArticleInfos) {
            const titleSimilarity = wordSimilarity(article.info.title, name);
            const nameSimilarity = wordSimilarity(article.info.name, name);
            article.data = {
                similarity: titleSimilarity + nameSimilarity
            };
        }

        // Remove non similar values
        allArticleInfos = allArticleInfos.filter(article => {
            return article.data.similarity >= minSimilarity * 2;
        });
    }

    // Sort and prepare results    
    if (sort === "relevance") {
        if (!stringHasContent(name)) {
            sortByCreated(allArticleInfos);
            sortByStarred(allArticleInfos);
        } else {
            sortBySimilarity(allArticleInfos);
        }
    } else if (sort === "date") {
        sortByCreated(allArticleInfos);
        sortByStarred(allArticleInfos);
    } else if (sort === "id") {
        sortById(allArticleInfos);
        sortByStarred(allArticleInfos);
    } else if (!stringHasContent(sort)) { // If no sorting algorithm provided, sort by date, and put starred at the top
        if (stringHasContent(name)) {
            sortBySimilarity(allArticleInfos);
        } else {
            sortByCreated(allArticleInfos);
        }
        sortByStarred(allArticleInfos);
    } else {
        return {
            data: {
                results: [],
                count: 0,
                time: -1,
            },
            message: `'${sort}' is not a recognized sorting algorithm`,
            success: false,
        }
    }

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