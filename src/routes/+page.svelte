<script lang="ts">
    import { generalSeoTags } from "$lib/frontend_util";
    import { onMount } from "svelte";
    import Seo from "../Seo.svelte";

    const startFloatKeyframes: Keyframe[] = [
        { transform: "translateY(0px) rotate(0deg)" },
        // { transform: "translateY(-5px) rotate(0deg)" },
        { 
            transform: "translateY(2.5px) rotate(2deg)",
            opacity: 1,
        },
    ];
    const startFloatOptions: KeyframeAnimationOptions = {
        duration: 1000,
        iterations: 1,
        easing: "ease",
        id: "startFloat",
    };

    const floatKeyframes: Keyframe[] = [
        { 
            transform: "translateY(2.5px) rotate(2.4deg)",
            opacity: 1,
        },
        { 
            transform: "translateY(-2.5px) rotate(-2.4deg)",
            opacity: 1,
        },
    ];
    const floatOptions: KeyframeAnimationOptions = {
        duration: 3000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
        id: "float",
    };

    onMount(() => {
        const bookCovers = document.querySelectorAll(".widget-book-cover.zoomable");
        for (const bookCover of bookCovers) {
            bookCover.addEventListener("mouseover", () => {
                const w = bookCover.clientWidth;
                const h = bookCover.clientHeight;
                const scale = 2;
                const transformScale = scale * 2;
                bookCover.setAttribute("style", `scale: ${scale}; transform: translate(${w / transformScale}px ${h / transformScale}px)`)
            });
            bookCover.addEventListener("mouseout", () => {
                bookCover.setAttribute("style", "")
            });
        }

        const floatyLetters = document.querySelectorAll("[data-float-wait]");
        for (const floatyLetter of floatyLetters) {
            const wait: number = parseFloat(floatyLetter.getAttribute("data-float-wait")) * 180;
            setTimeout(() => {
                const animation = floatyLetter.animate(startFloatKeyframes, startFloatOptions);
                animation.onfinish = () => {
                    floatyLetter.animate(floatKeyframes, floatOptions);
                };
            }, wait);
        }
    });

    const letters = "natelevison.com!".split("");
</script>

<svelte:head>
    <Seo
        title="Home"
        desc="Nate Levison's official website homepage. Find socials, projects, blog, and read more about Nate."
        keys={[generalSeoTags]}
        canonUrl="https://natelevison.com"
    />
</svelte:head>

<div class="home-title">
    <h1 class="floatyletterpre mb-0">Welcome to</h1>
    <span class="h1 d-flex">
        {#each letters as letter, i}
            <div class="floatyletter" data-float-wait={i}>{letter}</div>
        {/each}
    </span>
    <h2 class="text-muted">The one place for everything Nate Levison</h2>
</div>

<div class="container widget-cont">
    <div class="widgetrow row d-flex align-items-stretch">
        <div class="col">
            <div class="card h-100">
                <h2 class="h6 card-header">
                    Currently Coding
                </h2>
                <div class="card-body">
                    <h3 class="h5 card-title">Spotify BPM Detector</h3>
                    <h4 class="h6 card-subtitle mb-2 text-body-secondary">Since June 2025</h4>
                    <p class="card-text">A webapp that connects and authenticates with Spotify to track the BPM of the song you are listening to, and then play a gif at that BPM.</p>
                    <a href="https://github.com/Cheespeasa1234/spotify-bpm" class="btn btn-primary">GitHub Repo</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <h2 class="h6 card-header">
                    Currently Coding
                </h2>
                <div class="card-body">
                    <h3 class="h5 card-title">Not much...</h3>
                    <h4 class="h6 card-subtitle mb-2 text-body-secondary">Since June 2025</h4>
                    <p class="card-text">I'm off to college in a few weeks! I'm very busy with preparing for that so excuse me for not coding random junk like usual.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="h5 card-title">Quick Links</h2>
                    <h3 class="h6 card-subtitle mb-2 text-body-secondary">And socials</h3>
                    <div class="d-flex flex-column">
                        <a href="/about" class="m-1 btn btn-primary">About Me</a>
                        <a href="/projects" class="m-1 btn btn-primary">My Projects</a>
                        <a target="_blank" href="mailto:nate@natelevison.com" class="m-1 btn btn-primary">Email</a>
                        <a target="_blank" href="https://github.com" class="m-1 btn btn-primary">GitHub Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

    @media screen and (max-width: 900px) {
        .widgetrow {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .widget-cont {
            padding: 0;
        }

        .card-body > .btn {
            width: 100%;
            margin-bottom: 10px;
        }

        .floatyletterpre {
            font-size: 2.5rem;
        }
        .floatyletter {
            font-size: 2.5rem;
        }
    }

    .card-body {
        /* border: 2px solid var(--color-101); */
        background: var(--color-111);
    }
    
    .card-header {
        background: var(--color-112);
    }

    .home-title {
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .floatyletterpre {
        margin-right: 5px;
    }
    
    .floatyletter {
        opacity: 0.75;
        margin-left: 0.75px;
    }
</style>
