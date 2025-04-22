<script lang="ts">
    import Project from "./Project.svelte";
    import { projects } from "$lib/project";

</script>

<h1>My Projects</h1>

{#each projects as project}
    <Project {...project} />
{/each}