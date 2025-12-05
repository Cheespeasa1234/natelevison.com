<script lang="ts">
    import Project from "./Project.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import { generalSeoTags, since } from "$lib/frontend_util";
    
    const props = $props();
    const projects = props.data.projects;
</script>

<svelte:head>
    <Seo
        title="My Projects"
        desc="A portfolio of Nate Levison's projects. This page contains descriptions of Nate's proudest programming-related achievements, and can show his experience in his hobby."
        keys={[generalSeoTags]}
        canonUrl="https://natelevison.com/projects"
    />
</svelte:head>

<h1 class="h2">My Projects</h1>

<ul class="list-group list-group-horizontal mb-2">
    <li class="list-group-item">
        <div class="fw-bold">Frontend Webdev</div>
        {since(2021, "December")}
    </li>
    <li class="list-group-item">
        <div class="fw-bold">Backend Webdev</div>
        {since(2022, "December")}
    </li>
    <li class="list-group-item">
        <div class="fw-bold">Java</div>
        {since(2021, "September")}
    </li>
    <li class="list-group-item">
        <div class="fw-bold">Python</div>
        {since(2022, "January")}
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