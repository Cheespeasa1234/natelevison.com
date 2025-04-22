<script lang="ts">
    import { onMount } from "svelte";
    import hljs from "highlight.js";

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
</svelte:head>

<article style="display: {mounted ? "block":"none"}">
    <div class="article-head">
        <div class="article-head-background"></div>
        <div class="article-head-content">
            <div class="article-title">{title}</div>
            <div class="article-author">Nate Levison</div>
            <div class="article-date">
                Created on {new Date(created).toLocaleString()}
            </div>
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
    :root {
        --x: 50%;
        --y: 50%;
        transition: all 0.1s;
    }

    .loading {
        font-size: 2em;
        font-weight: 600;
        padding: 10px;
    }

    article :global {
        .article-head {
            border: 1px solid black;
            border-radius: 10px;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: "Roboto", sans-serif;
            font-weight: bolder;
            margin: 10px;
            transition: background-position 0.5s cubic-bezier(0, 0.58, 0.5, 1);
            position: relative;
            margin-left: 10%;
            margin-right: 10%;
            overflow: auto;
        }

        .article-head-content {
            /* center everythign */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .article-head-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            z-index: -1;
            /* make it transparent bg */
            background: url("https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
            opacity: 0.4;
        }

        .article-title {
            font-size: 40px;
            text-align: center;
            word-wrap: break-word;
        }

        .article-author,
        .article-date {
            font-size: 30px;
            color: #33212a;
        }

        .content {
            max-width: 1000px;
            /* center it on the page */
            margin: auto;
            margin-bottom: 20px;
            line-height: 1.5;
            font-size: 20px;
        }

        img:not(.logo):not(.banner-ico) {
            border: 1px solid black;
            border-radius: 10px;
        }

        /* if screen size small, make the article content font size smaller */
        @media only screen and (max-width: 600px) {
            div.content {
                font-size: 20px;
            }
            .article-head * {
                font-size: 20px;
            }

            img {
                width: 100%;
            }
        }

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
