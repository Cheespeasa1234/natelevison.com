import { Post, folderRoot, privateFolder } from "./consts";
import fs from "fs";

/**
 * id: The numerical ID of the article.
 * created: The iso timestamp of the article.
 * tags: The tags of the article.
 * title: The title, as displayed, of the article.
 * name: The filename of the article.
 * starred: Whether or not to pin it.
 * disableGlossary: Disable the code glossary feature.
 * unlisted: Whether or not the article is available publicly.
 */
export const posts: Post[] = [
    {
        id: 0,
        created: "2022-03-11T17:25:00.000Z",
        tags: ["this", "update", "learntocode", "programming", "web"],
        title: "Update Page",
        name: "the-official-update-page",
        starred: true // Pinned to top
    },
    {
        id: 1,
        created: "2023-08-21T13:30:13.766Z",
        tags: ["this", "update", "personal"],
        title: "First Post of Remade Blog System",
        name: "first-post-of-remade-blog-system"
    },
    {
        id: 2,
        created: "2023-08-21T13:30:13.766Z",
        tags: ["this", "learntocode", "personal", "programming", "web", "tutorial"],
        title: "How I Made This Website From Scratch",
        name: "how-i-made-this-website-from-scratch"
    },
    {
        id: 3,
        created: "2023-09-14T20:56:07.330Z",
        tags: ["learntocode", "philosophy", "ideas"],
        title: "Stay critical of yourself",
        name: "we-are-all-stupid"
    },
    {
        id: 4,
        created: "2023-09-15T22:05:29.048Z",
        tags: ["personal", "books", "ideas"],
        title: "I am reading too fast",
        name: "i-am-reading-too-fast"
    },
    {
        id: 5,
        created: "2023-09-20T23:26:04.671Z",
        tags: ["javascript", "node", "learntocode", "web", "backend"],
        title: "How I Made my own Server - Fast",
        name: "how-i-made-my-own-server-fast",
        disableGlossary: true,
    },
    {
        id: 6,
        link: "/blog/posts/i-wish-i-could-be-meaner.html",
        created: "2023-09-21T20:28:21.853Z",
        tags: ["rant"],
        title: "[RANT] I wish I could be meaner.",
        name: "i-wish-i-could-be-meaner",
        disableGlossary: true,
        unlisted: true
    },
    {
        id: 7,
        link: "/blog/posts/its-time-to-say-something.html",
        created: "2023-11-13T21:20:42.000Z",
        tags: ["politics", "israel", "personal"],
        title: "It's time to say something.",
        name: "its-time-to-say-something",
        disableGlossary: true,
        unlisted: true
    },
    {
        id: 8,
        created: "2024-01-13T07:30:58.344Z",
        tags: ["personal"],
        title: "Never realized im actually getting older.",
        name: "bye-matpat",
        disableGlossary: true
    },
    {
        id: 9,
        created: "2024-01-29T16:02:13.986Z",
        tags: ["personal", "philosophy"],
        title: "Forgetting",
        name: "forgetting",
        disableGlossary: true,
    },
    {
        id: 10,
        created: "2024-03-08T16:41:38.718Z",
        tags: ["programming, java", "swing", "games", "learntocode", "programming"],
        title: "How I wasted 2 months of my life on a stats viewer",
        name: "how-i-wasted-2-months-of-my-life",
        unlisted: true // STILL WRITING IT
    },
    {
        id: 11,
        created: "2024-04-08T14:09:16.266Z",
        tags: ["ideas", "philosophy"],
        title: "Why I don't believe in free will",
        name: "free-will",
        disableGlossary: true,
        unlisted: true
    },
    {
        id: 12,
        created: "2024-04-25T20:40:50.375Z",
        tags: ["personal", "javascript", "typescript", "node", "programming", "backend"],
        title: "The worst function I've ever written",
        name: "the-worst-function-ever",
    },
    {
        id: 13,
        created: "2024-05-13T13:52:45.107Z",
        tags: [],
        title: "ATCS Final Project Log",
        name: "atcs-final-log",
        unlisted: true
    },
    {
        id: 14,
        created: "2024-08-10T21:30:26.645Z",
        tags: ["philosophy", "personal"],
        title: "I was wrong about free will",
        name: "wrong-about-free-will",
        unlisted: true
    }
]

export const tags: string[] = ["this", "update", "learntocode", "programming", "web", "personal", "philosophy", "ideas", "books",
    "javascript", "node", "tutorial", "backend", "frontend", "java", "swing", "games", "typescript",
]

export function getViews(id: number): number {
    const blogReadsFileLocation = `${folderRoot}/${privateFolder}/blog_reads.json`;
    let blogReads: { [key: string]: number } = {};
    try {
        blogReads = JSON.parse(fs.readFileSync(blogReadsFileLocation, "utf8"));
    } catch (e) {
        console.error(e);
    }

    return blogReads[id] || 0;
}

export function getPost(name: string): Post | undefined {
    let res = posts.find(post => post.name === name);
    
    // get the view count
    if (res) {
        res.views = getViews(res.id);
    }

    return res;
}

export function matchesTags(queryTags: string[], postTags: string[]): boolean {
    if (queryTags.length === 0) return true;
    else if (postTags.length === 0) return false;
    for (let queryTag of queryTags)
        if (!postTags.includes(queryTag))
            return false;
    return true;
}

export function similarity(s1: string, s2: string): number {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }

    let longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }

    function editDistance(s1: string, s2: string): number {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();

        var costs = new Array();
        for (var i = 0; i <= s1.length; i++) {
            var lastValue = i;
            for (var j = 0; j <= s2.length; j++) {
                if (i == 0)
                    costs[j] = j;
                else {
                    if (j > 0) {
                        var newValue = costs[j - 1];
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

    return (longerLength - editDistance(longer, shorter)) / longerLength;
}