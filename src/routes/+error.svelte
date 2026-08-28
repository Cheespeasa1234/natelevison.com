<script lang="ts">
    import { page } from '$app/stores';

    import "bootstrap/dist/css/bootstrap.min.css";
    import "../style.css";
    
    import Nav from "../Nav.svelte";
</script>

<svelte:head>
    <title>{$page.status} {$page.error.message}</title>
    <!-- <link href="/bootstrap-5.3.6-dist/css/bootstrap.min.css" rel="stylesheet" /> -->
    <script src="/bootstrap-5.3.6-dist/js/bootstrap.bundle.min.js" async></script>
    <meta name="author" content="Nate Levison" />

    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://natelevison.com/favicon.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://natelevison.com/favicon.png" />
</svelte:head>

<Nav></Nav>

<main>
    <div class="text-center mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1 class="mb-0">{$page.status}</h1>
        <h2 class="mb-3">{$page.error.message}</h2>
        <img class="img" src="/img/80d364-3450615783.png" alt="Dejected brown ant with a stick over his shoulder, with a bag tied to it">
    </div>
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
    :global(main) {
        height: 100%;
    }

    h1 {
        font-size: 6em;
        font-weight: bold;
    }

    h2 {
        font-size: 2.5em;
    }

    img {
        width: 20%;
        height: auto;
    }

    @media screen and (max-width: 900px) {
        img {
            width: 80%;
        }
    }

        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

</style>