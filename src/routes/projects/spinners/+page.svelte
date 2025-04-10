<script lang="ts">
    import Menu from "./Menu.svelte";
    import Logo from "./Logo.svelte";
    import BusinessCard from "./BusinessCard.svelte";
</script>

<main style="display: flex;">
    <Menu />
    <BusinessCard />
</main>

<style>
    :root {
        --font-serif-1: Georgia, 'Times New Roman', Times, serif;
        --font-sans-1: Verdana, Geneva, Tahoma, sans-serif;
        --font-sans-2: Calibri, Geneva, Tahoma, sans-serif;
        --w: 1236px;
        --h: 1700px;
        --color-100: #a73193;
        --color-200: #d64cbf;
        --color-300: #4e4e4e;
        --filter-gluten-free: invert(43%) sepia(94%) saturate(1424%) hue-rotate(21deg) brightness(100%) contrast(91%);
        --filter-vegan: invert(70%) sepia(84%) saturate(1256%) hue-rotate(23deg) brightness(94%) contrast(91%);
        --filter-dairy-free: invert(26%) sepia(68%) saturate(2736%) hue-rotate(325deg) brightness(86%) contrast(99%);
        --filter-egg-free: invert(71%) sepia(47%) saturate(722%) hue-rotate(7deg) brightness(99%) contrast(87%);
    }

    :global(html),
    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>