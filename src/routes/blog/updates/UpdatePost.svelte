<script lang="ts">
    const { id, title, date, modified, first, children }: { id: number, title: string, date: string, first?: boolean, modified?: {date: string, cause: string}[], children: any } = $props();
</script>

<div class="card mb-3" style="width: 50%;">
    {#if first}
        <div class="card-header">
            Newest
        </div>
    {/if}
    <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Published {date}</h6>
        {#each modified as mod}
            {#if mod.cause === ""}
                <h6 class="card-subtitle mb-2 text-body-secondary fw-normal" style="font-size: 0.8em">Modified {mod.date}</h6>
            {:else}
                <h6 class="card-subtitle mb-2 text-body-secondary fw-normal" style="font-size: 0.8em">Modified {mod.date}: {mod.cause}</h6>
            {/if}
        {/each}
        <div class="card-text">
            {@render children()}
        </div>
    </div>
  </div>
