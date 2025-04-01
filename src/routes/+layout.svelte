<script lang="ts">
    const { children } = $props();
    import "../style.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Nav from "../Nav.svelte";
    import { onMount } from "svelte";

    export function setTitle(message: string) {
        onMount(() => {
            document.title = "natelevison.com | " + message;
        });
    }
</script>

<header>
    <Nav selected={-1} />
</header>
<main>
    {@render children()}
</main>

<style>
    :global(html),
    :global(body) {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    main {
        padding: 10px;
    }
</style>
