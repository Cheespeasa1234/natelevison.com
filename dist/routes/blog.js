"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// dependencies
const express_1 = __importDefault(require("express"));
const blogManager_1 = require("../util/blogManager");
const htmt_1 = require("../util/htmt");
const consts_1 = require("../util/consts");
const fs_1 = __importDefault(require("fs"));
// blog parameters
const router = express_1.default.Router();
exports.router = router;
// route requests
router.get("/all", (req, res) => {
    var _a;
    // Get the parameters
    let filtered = [];
    let failed = [];
    const count = Number(req.query['count']) || blogManager_1.posts.length;
    // Get the tags
    const tagsQueryString = req.query['tags'] ? req.query['tags'].toString() : "";
    const tags = tagsQueryString === "" ? [] : tagsQueryString.split(",");
    const name = ((_a = req.query['name']) === null || _a === void 0 ? void 0 : _a.toString()) || "";
    const showRant = req.query['rants'] == "true";
    // Find the posts that match
    for (let i = 0; i < blogManager_1.posts.length && filtered.length < count; i++) {
        const post = (0, blogManager_1.getPost)(blogManager_1.posts[i].name);
        // check if it has all the tags
        if ((post.tags.includes("rant") && !showRant) || post.unlisted || !(0, blogManager_1.matchesTags)(tags, post.tags)) {
            continue;
        }
        // Begin sorting and trimming results
        const relevance = name ? (0, blogManager_1.similarity)(post.name, name) : 1;
        console.log(`\t${consts_1.ansi.FGGRAY}${post.name} matches ${name} with ${relevance * 100}% similarity${consts_1.ansi.RESET}`);
        const matchesName = relevance > consts_1.relevanceThreshold;
        // Remove not relevant posts
        post.relevance = relevance;
        (matchesName ? filtered : failed).push(post);
    }
    // Sort the failed posts
    failed.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    // Increase threshold until a result is found
    increaseThreshold: for (let i = 0; i < consts_1.thresholdIncreaseAttempts; i++) {
        const lowered = consts_1.relevanceThreshold - (consts_1.panic * i);
        for (let failPost of failed) {
            if ((failPost.relevance || 0) > lowered) {
                filtered.push(failPost);
                break increaseThreshold;
            }
        }
    }
    res.send({ filtered });
});
// send the content of a post
router.get("/article/:name", (req, res) => {
    // get the template string
    let template, content;
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    try {
        template = fs_1.default.readFileSync(`${consts_1.publicFolder}/blog/template/article.html`, "utf8");
        content = fs_1.default.readFileSync(`${consts_1.publicFolder}/blog/template/` + req.params.name + ".html", "utf8");
        fs_1.default.appendFileSync(`${consts_1.privateFolder}/logs/blog.log`, `[${ip}@${new Date().toISOString()}]: requested ${req.params.name}\n`);
    }
    catch (e) {
        res.status(404).sendFile(consts_1.folderRoot + `/${consts_1.publicFolder}/404.html`);
        return;
    }
    // get the post
    const post = (0, blogManager_1.getPost)(req.params.name);
    if (post === undefined) {
        return res.status(404).send("Post not found");
    }
    const compiled = (0, htmt_1.compile)(template, {
        MAIN: content,
        TITLE: post.title,
        DATE: new Date(post.created).toLocaleDateString(),
        ID: post.id,
        DIS: post.disableGlossary ? "true" : "false"
    }, false);
    // set the cookie
    res.cookie("read" + post.id, new Date(), { maxAge: 1000 * 60 * 60 * 24 * 365 * 10, httpOnly: true });
    // check if in the blog_reads file
    const blogReadsFileLocation = `${consts_1.folderRoot}/${consts_1.privateFolder}/blog_reads.json`;
    let blogReads = {};
    try {
        blogReads = JSON.parse(fs_1.default.readFileSync(blogReadsFileLocation, "utf8"));
    }
    catch (e) {
        console.error(e);
    }
    // add the post to the blog reads
    if (!blogReads[post.id]) {
        blogReads[post.id] = 1;
    }
    else {
        blogReads[post.id]++;
    }
    // write the file
    fs_1.default.writeFileSync(blogReadsFileLocation, JSON.stringify(blogReads));
    res.send(compiled);
});
router.get("/tags", (req, res, Response) => {
    res.json({ tags: blogManager_1.tags });
});
