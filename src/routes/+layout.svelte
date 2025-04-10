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

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
</svelte:head>

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
