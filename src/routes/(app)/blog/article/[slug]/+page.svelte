<script lang="ts">
    import { onMount } from "svelte";
    import hljs from "highlight.js";
    import { generalSeoTags } from "$lib/frontend_util";
    import type { BlogArticle } from "$lib/blog";
    import { glossarizeParagraph } from "$lib/glossarizer";
    import tippy from "tippy.js";
    import Seo from "$lib/components/Seo.svelte";

    let mounted = $state(false);

    const props = $props();
    const article: BlogArticle = props.data.article;

    const { info, content } = article;
    const { id, created, tags, name, title, enableGlossary, starred, unlisted } = info;
    const { type, text, projectData } = content;

    function wordCount(text: string): number {
        let count: number = 0;
        let textLow: string = text.toLowerCase();
        let textHi: string = text.toUpperCase();
        for (let i = 1; i < text.length; i++) {
            let c = text.charAt(i);
            if (c === " ") {
                let cLow = textLow.charAt(i - 1);
                let cHi = textHi.charAt(i - 1);
                if (cLow !== cHi) {
                    count++;
                }
            }
        }
        let cfLow = textLow.charAt(text.length - 1);
        let cfHi = textHi.charAt(text.length - 1);
        if (cfLow != cfHi) count++;
        return count;
    }

    onMount(() => {
        mounted = true;
        const codeBlocks = document.querySelectorAll("code");
        codeBlocks.forEach((codeBlock) => {
            hljs.highlightElement(codeBlock);
        });

        if (enableGlossary) {
            const ps = document.querySelectorAll("p");
            ps.forEach(glossarizeParagraph);
            tippy("[data-tippy-content]", {
                appendTo: document.body,
                inertia: true,
                animation: "scale",
            });
        } else {
            console.log("No glossary");
        }
    });

    const seoTitle = title + " - Blog | Nate Levison";
    const seoDesc = type === "project" ? 
        `A blog article about ${tags.join(", ")}, called ${title}, written by Nate Levison`
        : `A description of Nate Levison's project called ${title}`;
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

    <Seo 
        title={title + " - Blog"}
        desc={type === "project" ? `A description of Nate Levison's project called ${title}.` : `A blog article about ${tags.join(", ")}, called ${title}, written by Nate Levison`}
        keys={[generalSeoTags, tags]}
        canonUrl="https://natelevison.com/blog/article/{name}"
    />
</svelte:head>

{#snippet backBtn()}

    {#if type === "project"}
        <a href="/projects#{projectData.code}" class="mb-3 d-flex back-btn-container">
            <button class="btn btn-primary back-btn">Back</button>
        </a>
    {:else}
        <a href="/blog" class="mb-3 d-flex back-btn-container">
            <button class="btn btn-primary back-btn">Back</button>
        </a>
    {/if}
{/snippet}

<article style="display: {mounted ? "block":"none"}">
    <div class="card text-center mb-3">
        <img src='https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");' class="card-img" alt="Code on a black screen zoomed out">
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <h1 class="text-light card-title">{title}</h1>
            <h3 class="text-light card-subtitle mb-2">By Nate Levison</h3>
            {#if type==="project"}
                <p class="text-light card-text">{projectData.start} - {projectData.end}</p>
            {:else}
                <p class="text-light card-text mb-1">Created {new Date(created).toLocaleDateString()} - {wordCount(text)} words - {text.length} chars</p>
            {/if}
        </div>
    </div>

    {@render backBtn()}
    
    <div class="content">
        {@html text}
    </div>
    
    
    {@render backBtn()}<br>
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

    .back-btn {
        margin: auto;
        font-size: 1.25em;
    }

    /* if screen size small, make the article content font size smaller */
    @media only screen and (max-width: 900px) {
        div.content {
            font-size: 20px;
        }

        img {
            width: 100%;
        }

        article {
            width: 95%;
        }

        .back-btn {
            margin: auto;
            width: 100%;
        }
    }

    /* CSS that applies to children */
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

    .quote, blockquote {
        padding-left: 20px;
        border-left: 2px solid gray;
        color: #333;
    }

    blockquote > p {
        margin-bottom: 10px;
    }

    [data-tippy-content] {
        text-decoration-line: underline;
        text-decoration-style: dotted;
        text-decoration-color: gray;
        cursor: help;
    }

    .spoileralert {
        color: red;
        margin-bottom: 50vh;
    }

    section {
        margin-bottom: 1.5em;
    }

    sub {
        vertical-align: 0.9em;
    }

    }
</style>
