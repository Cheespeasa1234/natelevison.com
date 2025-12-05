<script lang="ts">
    import type { Project } from "$lib/project";

    const { name, desc, tags, links, start, end, code }: Project = $props();
</script>

<div class="card mb-2">
    <div class="card-body">
        <h2 id="{code}" class="card-title h4">{name}
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </h2>
        <h3 class="card-subtitle mb-2 text-body-secondary h5">{start} - {end}</h3>
        <p class="card-text">{desc}</p>
        
        {#each links as link}
            <a class="card-link" href={link.url}>{link.name}</a>
        {/each}
    </div>
</div>

<style>
    .tag {
        background: var(--color-100);
        color: white;
        padding: 4px 6px;
        border-radius: 5px;
        font-size: 0.75em;
        font-weight: normal;
        margin-left: 4px;
    }
</style>