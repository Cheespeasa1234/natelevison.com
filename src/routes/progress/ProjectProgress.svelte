<script lang="ts">
    import type { Snippet } from "svelte";
    const { name, started, status, pct, children }: { name: string, started: string, status: number, pct: number, children: Snippet } = $props();
</script>

<div class="card" style="width: 20rem; height: 100%">
    <div class="card-body d-flex flex-column h-100 justify-content-between">
        <div>
            <h5 class="card-title">{name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Since {started}</h6>
            <p class="card-text">{@render children()}</p>
        </div>
        <div class="progress">
            {#if status === 1}
            <!-- ongoing -->
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="{pct}" aria-valuemin="0" aria-valuemax="100" style="width: {pct}%">Ongoing</div>
            {:else if status === 2}    
            <!-- completed -->
                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="{pct}" aria-valuemin="0" aria-valuemax="100" style="width: {pct}%">Complete</div>
            {:else if status === 3}    
            <!-- suspended -->
                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="{pct}" aria-valuemin="0" aria-valuemax="100" style="width: {pct}%">Suspended</div>
            {:else}
            <!-- normal -->
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="{pct}" aria-valuemin="0" aria-valuemax="100" style="width: {pct}%"></div>
            {/if}
        </div>
    </div>
</div>

<style>
    .progress {
        height: 1.2rem;
        font-size: 1.1em;
    }
</style>