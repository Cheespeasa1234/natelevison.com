<script lang="ts">
    import ProjectProgress from "./ProjectProgress.svelte";

</script>

<div class="text-center p-3">
    <h1 class="h3">Progress Page</h1>
    <p>Here you can find progress and status updates I have made on most of my active projects.</p>
</div>

<div class="progress-container p-2">
    <ProjectProgress status={0} started="May 2022" pct={95} name="Mobile design">
        Working on redesigning the mobile experience and the projects page. This will also be graded by my graphic design teacher.
    </ProjectProgress>
    <ProjectProgress status={0} started="September 2024" pct={85} name="Uhl Testing">
        Fixing CORS issues and getting it into prod.
    </ProjectProgress>
    <ProjectProgress status={0} started="February 2025" pct={10} name="Learning 3D modelling">
        I am learning how to use blender.
    </ProjectProgress>
    <ProjectProgress status={0} started="January 2025" pct={51} name="Blog rework">
        Reworking the blog search functionality and writing all the articles.
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