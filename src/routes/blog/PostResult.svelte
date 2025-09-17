<script lang="ts">
    import type { BlogArticle } from "$lib/blog";
    import { onMount } from "svelte";

    const { result, index }: { result: BlogArticle, index: number } = $props();

    function clicked() {
        window.location.href = result.content.url;
    }

    function removeHTML(str: string) {
        const d = document.createElement("div");
        d.innerHTML = str;
        return d.innerText || d.textContent;
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="card mb-2" onclick={clicked} role="link" tabindex={index}>
    {#if index === 0}
        <div class="card-header">
            Top Result
        </div>
    {/if}
    <div class="card-body">
        <h5 class="card-title">
            {result.info.title}
        </h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Published {new Date(result.info.created).toLocaleDateString()}</h6>
        <div class="post-tags card-text">
            {#if result.info.starred}
                <div class="post-tag t2">
                    <i class="fa fa-solid fa-star"></i>
                </div>
            {/if}
            {#if result.info.unlisted}
                <div class="post-tag t2">
                    <i class="fa fa-solid fa-eye-slash"></i>
                </div>
            {/if}
            {#if result.info.enableGlossary}
                <div class="post-tag t2">
                    <i class="fa fa-solid fa-code"></i>
                </div>
            {/if}
            {#each result.info.tags as tag}
                <div class="post-tag">{tag}</div>
            {/each}
        </div>
    </div>
</div>

<style>
    .card {
        width: 50%;
    }

    @media screen and (max-width: 900px) {
        .card {
            width: 100%;
        }
    }

    .card:hover {
        background: var(--color-501);
        cursor: pointer;
    }

    .post-tags {
        display: flex;
        gap: 10px;
        max-width: 100%;
        overflow: auto;
    }

    .post-tag {
        background: var(--color-110);
        color: white;
        padding: 2px 4px;
        border-radius: 5px;
        min-width: fit-content;
    }

    .t2 {
        background: var(--color-150);
    }
</style>
