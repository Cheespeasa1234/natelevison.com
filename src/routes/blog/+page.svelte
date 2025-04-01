<script lang="ts">
    import { setTitle } from "$lib/frontend_util";
    import { onMount } from "svelte";
    import PostResult from "./PostResult.svelte";

    const { data } = $props();
    const { message, success } = data;
    const { results, count, time } = data.data;

    setTitle("Blog");

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
        parameters.append("tags", filteredTags.join(","));
        parameters.append("sort", "date");

        window.location.search = parameters.toString();
    }

    let searchConfigModal: HTMLDialogElement;
    let searchConfigModalOpen: boolean = $state(false);
    function toggleConfigModal() {
        if (searchConfigModalOpen) {
            searchConfigModal.close();
        } else {
            searchConfigModal.showModal();
        }
        searchConfigModalOpen = !searchConfigModalOpen;
    }
</script>

<main>
    <div id="searchbox">
        <input
            bind:value={paramName}
            type="text"
            id="search-input"
            placeholder="Search..."
        />
        <button
            onclick={getResults}
            aria-label="Search"
            class="search-button"
            id="search"
        >
            <i class="fa-solid fa-search"></i>
        </button>
        <!-- <button onclick={toggleConfigModal} aria-label="Settings" class="search-button" id="config">
            <i class="fa-solid fa-gear {filteredTagsLen > 0 ? "spinning" : ""}"></i>
        </button> -->
        <!-- <dialog bind:this={searchConfigModal} id="search-config-modal">
            <span id="filtered-msg">Filtered Tags: 0</span>
            {#each }
        </dialog> -->
    </div>
</main>

<div class="results-container" id="results">
    {#if count == -1}
        Loading...
    {:else if count == 0}
        {#if success}
            No results found.
        {:else}
            Something went wrong: <span style="color: red">{message}</span>
        {/if}
    {:else}
        Found {count} result{count == 1 ? "" : "s"} in {time} ms.
    {/if}

    {#each results as result}
        <PostResult {result} />
    {/each}
</div>

<style>

    .spinning {
        animation: 0.3s ease-in-out spin;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(120deg);
        }
    }

    .results-container {
        width: fit-content;
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
        background: #eaeaea;
        padding: 10px;
        max-width: 500px;
        border-radius: 5px;
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
