<script lang="ts">
    const { children } = $props();
    import "../style.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Nav from "../Nav.svelte";
    import { onMount } from "svelte";

    import moment from 'moment';
    moment().format();
</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
    
    <title>Nate Levison</title>
    <meta name="author" content="Nate Levison" />
    
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://natelevison.com/favicon.png" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://natelevison.com/favicon.png" />
</svelte:head>

<Nav></Nav>

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
