// dependencies
import express, { Router, Request, Response, NextFunction } from "express";
import { posts, matchesTags, similarity, getPost, tags } from "../util/blogManager";
import { compile } from "../util/htmt";
import { ansi, publicFolder, privateFolder, relevanceThreshold, thresholdIncreaseAttempts, panic, Post, PostWithRelevance, folderRoot } from '../util/consts';
import fs from "fs";

// blog parameters
const router = express.Router();

// route requests
router.get("/all", (req: Request, res: Response) => {

    // Get the parameters
    let filtered: Post[] = [];
    let failed: Post[] = [];
    const count: number = Number(req.query['count']) || posts.length;

    // Get the tags
    const tagsQueryString: string = req.query['tags'] ? req.query['tags'].toString() : "";
    const tags: string[] = tagsQueryString === "" ? [] : tagsQueryString.split(",");

    const name: string = req.query['name']?.toString() || "";
    const showRant: boolean = req.query['rants'] == "true";

    // Find the posts that match
    for (let i = 0; i < posts.length && filtered.length < count; i++) {

        const post: Post = getPost(posts[i].name) as Post;

        // check if it has all the tags
        if ((post.tags.includes("rant") && !showRant) || post.unlisted || !matchesTags(tags, post.tags)) {
            continue;
        }

        // Begin sorting and trimming results
        const relevance = name ? similarity(post.name, name) : 1;
        console.log(`\t${ansi.FGGRAY}${post.name} matches ${name} with ${relevance * 100}% similarity${ansi.RESET}`);
        const matchesName = relevance > relevanceThreshold;

        // Remove not relevant posts
        post.relevance = relevance;
        (matchesName ? filtered : failed).push(post);
    }

    // Sort the failed posts
    failed.sort((a: Post, b: Post) => (b.relevance || 0) - (a.relevance || 0));

    // Increase threshold until a result is found
    increaseThreshold: for (let i = 0; i < thresholdIncreaseAttempts; i++) {
        const lowered = relevanceThreshold - (panic * i);
        for (let failPost of failed) {
            if ((failPost.relevance || 0) > lowered) {
                filtered.push(failPost);
                break increaseThreshold;
            }
        }
    }

    res.send({ filtered })
});

// send the content of a post
router.get("/article/:name", (req: Request, res: Response) => {
    // get the template string
    let template, content;
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    try {
        template = fs.readFileSync(`${publicFolder}/blog/template/article.html`, "utf8");
        content = fs.readFileSync(`${publicFolder}/blog/template/` + req.params.name + ".html", "utf8");
        fs.appendFileSync(`${privateFolder}/logs/blog.log`, `[${ip}@${new Date().toISOString()}]: requested ${req.params.name}\n`);
    } catch (e) {
        res.status(404).sendFile(folderRoot + `/${publicFolder}/404.html`);
        return;
    }

    // get the post
    const post: Post | undefined = getPost(req.params.name);
    if (post === undefined) {
        return res.status(404).send("Post not found");
    }

    const compiled = compile(template, {
        MAIN: content,
        TITLE: post.title,
        DATE: new Date(post.created).toLocaleDateString(),
        ID: post.id,
        DIS: post.disableGlossary ? "true" : "false"
    }, false);

    // set the cookie
    res.cookie("read" + post.id, new Date(), { maxAge: 1000 * 60 * 60 * 24 * 365 * 10, httpOnly: true });

    // check if in the blog_reads file
    const blogReadsFileLocation = `${folderRoot}/${privateFolder}/blog_reads.json`;
    let blogReads: { [key: string]: number } = {};
    try {
        blogReads = JSON.parse(fs.readFileSync(blogReadsFileLocation, "utf8"));
    } catch (e) {
        console.error(e);
    }

    // add the post to the blog reads
    if (!blogReads[post.id]) {
        blogReads[post.id] = 1;
    } else {
        blogReads[post.id]++;
    }

    // write the file
    fs.writeFileSync(blogReadsFileLocation, JSON.stringify(blogReads));

    res.send(compiled);
});

router.get("/tags", (req: Request, res, Response) => {
    res.json({ tags });
});

export { router };