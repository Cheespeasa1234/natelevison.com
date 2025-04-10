<script lang="ts">
    import type { Project } from "$lib/project";

    const { name, desc, tags, links, start, end }: Project = $props();
</script>

<div>
    <h4>{name}</h4>
    <p>{desc}</p>
    {#each tags as tag}
        <span>{tag}</span>
    {/each}
    {#each links as link}
        <a href={link.url}>{link.name}</a>
    {/each}
    <p>{start} - {end}</p>
</div>