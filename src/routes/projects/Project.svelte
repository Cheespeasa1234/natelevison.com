<script lang="ts">
    import type { Project } from "$lib/project";

    const { name, desc, tags, links, start, end }: Project = $props();
</script>

<div class="card mb-2">
    <div class="card-body">
        <h5 class="card-title">{name}
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{start} - {end}</h6>
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