<script lang="ts">
    import Project from "./Project.svelte";
    import { projects } from "$lib/project";
    import { since } from "$lib/frontend_util";

</script>

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