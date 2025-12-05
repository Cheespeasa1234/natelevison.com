<script lang="ts">
    import { generalSeoTags } from "$lib/frontend_util";
    import ProjectProgress from "./ProjectProgress.svelte";
    import Seo from "$lib/components/Seo.svelte";

</script>

<svelte:head>
    <Seo 
        title="Progress"
        desc="A tracker page to display progress on Nate's individual projects."
        keys={[generalSeoTags]}
        canonUrl="https://natelevison.com/progress"
    />
</svelte:head>

<div class="text-center p-3">
    <h1 class="h3">Progress Page</h1>
    <p>Here you can find progress and status updates I have made on most of my active projects.</p>
</div>

<div class="progress-container p-2">
    <ProjectProgress status={0} started="January 2025" pct={55} name="Blog rework">
        Reworking the blog search functionality and writing all the articles.
    </ProjectProgress>
    <ProjectProgress status={0} started="June 2025" pct={25} name="Spotify bpm">
        Creating a simple webapp that tracks what you are listening to on spotify and plays a gif at the appropriate BPM.
    </ProjectProgress>
</div>

<style>
    .progress-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        height: 15rem;
    }
</style>