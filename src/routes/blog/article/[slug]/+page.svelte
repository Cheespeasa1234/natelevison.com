<script lang="ts">
    import { onMount } from "svelte";
    import hljs from "highlight.js";
    import { generalSeoTags } from "$lib/frontend_util";

    let mounted = $state(false);

    const props = $props();
    const article = props.data.article;

    const {
        id,
        created,
        tags,
        name,
        title,
        disableGlossary,
        starred,
        unlisted,
    } = article.info;
    const { text } = article.content;

    onMount(() => {
        mounted = true;
        const codeBlocks = document.querySelectorAll("code");
        codeBlocks.forEach((codeBlock) => {
            hljs.highlightElement(codeBlock);
        });
    });

    const seoTitle = title + " - Blog | Nate Levison";
    const seoDesc = `A blog article about ${tags.join(", ")}, called ${title}, written by Nate Levison`;
    const seoKeys = `${tags.join(',')},${generalSeoTags}`;
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://static.natelevison.com/highlight/styles/github-dark-dimmed.min.css"
    />
    <script
        defer
        src="https://static.natelevison.com/highlight/highlight.min.js"
    ></script>
    <title>{seoTitle}</title>
    <link rel="canonical" href="https://natelevison.com/blog/article/{name}">
    <meta name="description" content={seoDesc} />
    <meta name="keywords" content={seoKeys} />
    <meta property="og:title" content={seoTitle} />
    <meta property="og:description" content={seoDesc} />
    <meta property="og:url" content="https://natelevison.com/blog/article/{name}" />
    <meta name="twitter:title" content={seoTitle} />
    <meta name="twitter:description" content={seoDesc} />
</svelte:head>

<article style="display: {mounted ? "block":"none"}">
    <div class="card text-center mb-3">
        <img src='https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");' class="card-img" alt="Code on a black screen zoomed out">
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <h1 class="text-light card-title">{title}</h1>
            <h3 class="text-light card-subtitle mb-2">By Nate Levison</h3>
            <p class="text-light card-text">Created {new Date(created).toLocaleDateString()}</p>
        </div>
    </div>
    
    <div class="content">
        {@html text}
    </div>
</article>

<div class="loading" style="display: {mounted ? "none":"display"}">
    Loading article...
</div>

<style>

    article {
        width: 50%;
        margin: auto;
    }

    .card-img {
        height: 200px;
        object-fit: cover;
    }

    .content {
        max-width: 1000px;
        /* center it on the page */
        margin: auto;
        margin-bottom: 20px;
        line-height: 1.5;
        font-size: 20px;
    }

    img:not(.logo):not(.banner-ico):not(.card-img) {
        border: 1px solid black;
        border-radius: 10px;
    }

    /* if screen size small, make the article content font size smaller */
    @media only screen and (max-width: 600px) {
        div.content {
            font-size: 20px;
        }

        img {
            width: 100%;
        }
    }

    article :global {

    pre {
        margin-top: 0;
    }

    .code {
        background-color: #282c30;
    }

    .snip {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 15px;
    }

    .file-name {
        color: #96d0ff;
        margin: 0;
        padding: 5px 15px;
        border-bottom: 1px solid #ffffff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .quote {
        padding-left: 20px;
        border-left: 2px solid gray;
        color: #333;
    }
    }
</style>
