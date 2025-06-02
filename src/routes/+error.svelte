<script>
  import { page } from '$app/stores';
</script>

<div class="text-center mt-5 d-flex flex-column justify-content-center align-items-center">
    <h1 class="mb-0">{$page.status}</h1>
    <h2 class="mb-3">{$page.error.message}</h2>
    <img class="img" src="/img/80d364-3450615783.png" alt="Dejected brown ant with a stick over his shoulder, with a bag tied to it">
</div>

<svelte:head>
    <title>{$page.status} ${page.error.message}</title>
</svelte:head>

<style>
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
</style>