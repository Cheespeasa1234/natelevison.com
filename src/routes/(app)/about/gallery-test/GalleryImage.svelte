<script lang="ts">
    const entries = [
        {
            src: "/img/fit.png",
            alt: "Nate at a debate tournament, between rounds",
            cap: "Nate was a member of Junior Varsity Debate in his Sophomore year and his Junior year, participating in the varsity level in his Senior year.",
        },
        {
            src: "/img/me at statue of liberty.jpg",
            alt: "Nate on a ferry passing the Statue of Liberty",
            cap: "As part of his world history class, Nate visited Ellis Island with his class. On the way back, they passed the Statue of Liberty.",
        },
        {
            src: "/img/nate dressed up as mr scerbo high school.jpg",
            alt: "Nate wearing a patagonia vest, collared shirt, and his glasses",
            cap: "In his senior year, many students decided for one day to dress up as one of their teachers. Nate chose to dress up as his world history teacher, incredibly accurately.",
        },
    ];
</script>

<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        {#each entries as entry, i}
            {#if i == 0}
                <div class="carousel-item active">
                    <img src={entry.src} class="d-block w-100" alt={entry.alt}>
                </div>
            {:else}
                <div class="carousel-item">
                    <img src={entry.src} class="d-block w-100" alt={entry.alt}>
                </div>
            {/if}
        {/each}
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
    >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
    >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
