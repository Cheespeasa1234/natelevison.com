<script lang="ts">
    import { generalSeoTags } from "$lib/frontend_util";
    import { onMount } from "svelte";
    import PostResult from "./PostResult.svelte";

    const { data } = $props();
    const { message, success } = data;
    const { results, count, time } = data.data;

    function getColor(word: string): string {
        let hash = 0;
        for (let i = 0; i < word.length; i++) {
            hash = word.charCodeAt(i) + ((hash << 5) - hash);
        }
        const c = (hash & 0x00ffffff).toString(16).toUpperCase();

        return "#" + "00000".substring(0, 6 - c.length) + c;
    }

    let filteredTags: any[] = $state([]);
    let filteredTagsLen: number = $derived(filteredTags.length);
    let paramName: string = $state("");

    async function getResults() {
        const parameters = new URLSearchParams();
        parameters.append("name", paramName);
        parameters.append("sort", sortMethods[0]);

        window.location.search = parameters.toString();
    }

    let sortMethods = $state([]);
    function moveToTop(index: number) {
        // Check if the index is valid
        if (index < 0 || index >= sortMethods.length) {
            console.error("Index out of bounds");
            return;
        }

        // Remove the element from its current position
        const element = sortMethods.splice(index, 1)[0];

        // Add the element to the top of the list
        sortMethods.unshift(element);
    }

    onMount(() => {
        sortMethods = [ "relevance", "date", "id" ];
        const urlParams = new URLSearchParams(window.location.search);
        const sort = urlParams.get("sort");
        const index = sortMethods.indexOf(sort);
        if (index !== -1) {
            moveToTop(index);2
        }
        paramName = urlParams.get("name") ?? "Search..."
    });

    const seoTitle = "Blog Search | Nate Levison";
    const seoDesc = "The official blog search page for Nate Levison's blog. Search with the search bar or the filters, and find the article right for you.";
    const seoKeys = generalSeoTags;
    const seoAuthor = "Nate Levison";
</script>

<svelte:head>
    <title>{seoTitle}</title>
    <link rel="canonical" href="https://natelevison.com/blog">
    <meta name="description" content={seoDesc} />
    <meta name="keywords" content={seoKeys} />
    <meta property="og:title" content={seoTitle} />
    <meta property="og:description" content={seoDesc} />
    <meta property="og:url" content="https://natelevison.com/blog" />
    <meta name="twitter:title" content={seoTitle} />
    <meta name="twitter:description" content={seoDesc} />
</svelte:head>

<main>
    <div class="input-group" style="width: fit-content">
        <input bind:value={paramName} type="text" class="form-control" placeholder="Search term" aria-label="Search term" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-label="sort" aria-expanded="false">
            <i class="fas fa-sort"></i>
        </button>
        <ul class="dropdown-menu">
            {#each sortMethods as sortMethod, index}
                {#if index == 0}
                    <li><button class="dropdown-item">
                        {sortMethods[index]}
                        <i class="fa-solid fa-check"></i>
                    </button></li>
                    <li><hr class="dropdown-divider"></li>
                {:else}
                    <li><button onclick={() => moveToTop(index)} class="dropdown-item">
                        {sortMethods[index]}
                    </button></li>
                {/if}
            {/each}
        </ul>
        <button onclick={getResults} class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>      
    {#if count == -1}
        Loading...
    {:else if count == 0}
        {#if success}
            <p>
                No results found.
            </p>
            <a href="/">
                <button class="btn btn-primary">Go Home</button>
            </a>
        {:else}
            <p>
                Something went wrong: <span style="color: red">{message}</span>
            </p>
            <a href="/">
                <button class="btn btn-primary">Go Home</button>
            </a>
        {/if}
    {:else}
        <div class="mt-1">Found {count} result{count == 1 ? "" : "s"} in {time} ms.</div>
    {/if}
    <div class="results-container" id="results">
        {#each results as result, index}
            <PostResult {result} {index}/>
        {/each}
    </div>
</main>


<style>
    .results-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;
    }
</style>