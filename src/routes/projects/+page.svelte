<script lang="ts">
    import Project from "./Project.svelte";
    import { projects } from "$lib/project";
    import { generalSeoTags, since } from "$lib/frontend_util";

    const seoTitle = "My Projects | Nate Levison";
    const seoDesc = "A portfolio of Nate Levison's projects. This page contains descriptions of Nate's proudest programming-related achievements, and can show his experience in his hobby.";
    const seoKeys = generalSeoTags;
</script>

<svelte:head>
    <title>{seoTitle}</title>
    <link rel="canonical" href="https://natelevison.com">
    <meta name="description" content={seoDesc} />
    <meta name="keywords" content={seoKeys} />
    <meta property="og:title" content={seoTitle} />
    <meta property="og:description" content={seoDesc} />
    <meta property="og:url" content="https://natelevison.com" />
    <meta name="twitter:title" content={seoTitle} />
    <meta name="twitter:description" content={seoDesc} />
</svelte:head>

<h1>My Projects</h1>

<ul class="list-group list-group-horizontal mb-2">
    <li class="list-group-item">
        <div class="fw-bold">Frontend Webdev</div>
        {since(2022, "December")}
    </li>
    <li class="list-group-item">
        <div class="fw-bold">Backend Webdev</div>
        {since(2022, "December")}
    </li>
    <li class="list-group-item">
        <div class="fw-bold">Java</div>
        {since(2022, "September")}
    </li>
    <li class="list-group-item">
        <div class="fw-bold">Python</div>
        {since(2023, "January")}
    </li>
</ul>

<div class="projects">
    {#each projects as project}
        <Project {...project} />
    {/each}
</div>

<style>
    .projects {
        display: flex;
        flex-direction: column;
        gap: 2px;
        max-width: 900px;
    }
</style>