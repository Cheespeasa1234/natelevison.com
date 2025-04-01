<script lang="ts">
    type Project = {
        name: string;
        tags: string[];
        links: { url: string; name: string }[];
        start: Date;
        end?: Date;
    };

    const { name, tags, links, start, end }: Project = $props();
</script>

<div>
    <h4>{name}</h4>
    {#each tags as tag}
        <span>{tag}</span>
    {/each}
    {#each links as link}
        <a href={link.url}>{link.name}</a>
    {/each}
    <p>{start.toLocaleDateString()} - {end ? end.toLocaleDateString() : "Present"}</p>
</div>