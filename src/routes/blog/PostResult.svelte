<script lang="ts">
    import type { BlogArticle } from "$lib/blog_";

    const { result }: { result: BlogArticle } = $props();

    function clicked() {
        window.location.href = result.content.url;
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={clicked} class="post-container">
    <div class="post-top">
        <div class="post-title">
            {result.info.title}
            <div class="icons">
                {#if result.info.starred}
                    <i class="fa fa-regular fa-star"></i>
                    {/if}
                {#if result.info.unlisted}
                    <i class="fa fa-solid fa-eye-slash"></i>
                    {/if}
                {#if result.info.enableGlossary}
                    <i class="fa fa-solid fa-code"></i>
                {/if}
            </div>
        </div>
        <div class="post-date">
            {new Date(result.info.created).toLocaleDateString()}
        </div>
    </div>
    <div class="post-tags">
        {#each result.info.tags as tag}
            <div class="post-tag">{tag}</div>
        {/each}
    </div>
</div>

<style>

    .icons {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-left: 10px;
    }

    .fa {
        font-size: 0.75em;
        color: #808080;
    }

    .post-top {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
    }

    .post-container {
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
        margin-top: 10px;
        cursor: pointer;
        transition: box-shadow 0.2s;
        font-size: 24px;
        font-family: "Fira Sans", sans-serif;
        overflow: auto;
    }

    .post-container:hover {
        box-shadow: -2px 2px 5px 0 #808080;
    }

    .post-tags {
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        gap: 5px;
    }

    .post-date {
        font-size: 16px;
        color: #808080;
    }

    .post-tag {
        border: 2px solid var(--gray-1);
        border-radius: 5px;
        padding: 2px;
        font-size: 14px;
        margin-right: 5px;
        background-color: #b6b6b6;
    }

    #searchbox {
        border: 2px solid var(--gray-1);
        width: fit-content;
        padding: 0px;
        border-radius: 5px;
    }

    input#search-input {
        font-family: "Roboto", sans-serif;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
        margin: 0px;
        max-width: 100px;
        background-color: #eaeaea;
    }

    button.search-button {
        background: none;
        border: none;
        border-radius: 5px;
        margin: 0px;
        width: 30px;
        height: 30px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.2s;
    }

    button.search-button:hover {
        background: #e0e0e0;
    }

    input#search-input:placeholder-shown {
        font-style: italic;
    }
    input:focus {
        outline: none;
    }

    #search-config-modal {
        border: 2px solid var(--gray-1);
        position: absolute;
        background: #eaeaea;
        padding: 10px;
        max-width: 500px;
        border-radius: 5px;
        z-index: 3;
        margin-left: 10px;
        transform: translateY(-200%);
        transition: all 0.5s;
    }

    .tag-selected {
        background-color: rgb(41, 197, 41);
    }

    .tag-selected:hover,
    .config-tag:hover {
        cursor: pointer;
    }

    .config-tag {
        transition: all 0.2s;
        user-select: none;
    }

    .config-tag:hover:not(.tag-selected) {
        background-color: #ffffff;
    }

    #search-config-tags {
        display: flex;
        flex-wrap: wrap;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    .rotate {
        animation: rotation 2s infinite linear;
    }

    /* if screen size small, make the article content font size smaller */
    @media only screen and (max-width: 600px) {
        .post-title {
            font-size: 20px;
        }
    }
</style>
