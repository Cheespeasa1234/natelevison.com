<script lang="ts">
    import { generalSeoTags } from "$lib/frontend_util";
    import { onMount } from "svelte";

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
    const seoTitle = "Home | Nate Levison";
    const seoDesc = "Nate Levison's official website homepage. Find socials, projects, blog, and read more about Nate.";
    const seoKeys = generalSeoTags;
</script>

<svelte:head>
    <title>{seoTitle}</title>
    <link rel="canonical" href="https://natelevison.com">
    <meta name="description" content={seoDesc} />
    <meta name="keywords" content={seoKeys} />
    <meta property="og:title" content={seoTitle} />
    <meta property="og:description" content={seoDesc} />
    <meta property="og:url" content="https://natelevison.com" />
    <meta name="twitter:title" content={seoTitle} />
    <meta name="twitter:description" content={seoDesc} />
</svelte:head>

<div class="home-title">
    <h1 class="home-h1" style="white-space: pre">
        <div class="floatyletterpre">Welcome to&nbsp;</div>
        {#each letters as letter, i}
            <div class="floatyletter" data-float-wait={i}>{letter}</div>
        {/each}
    </h1>
</div>

<!-- <div class="d-none widgets">
    <div class="widget">
        <div class="widget-title">Currently Coding</div>
        <div class="widget-date">9/26/2024</div>
        <div class="widget-content">
            <div class="widget-book-text">
                <div>
                    <div class="widget-book-title">This Website (frontend</div>
                    <div class="widget-book-author">
                        <a href="natelevison.com">natelevison.com</a>
                    </div>
                </div>
                <div class="widget-book-opinion">
                    Big changes are coming to the design philosophy of my
                    website. I am taking a Graphic Design course in school, and
                    so far I've made a whole logo and everything.
                </div>
            </div>
        </div>
    </div>
    <div class="widget">
        <div class="widget-title">Currently Coding</div>
        <div class="widget-date">11/13/2024</div>
        <div class="widget-content">
            <div class="widget-book-text">
                <div>
                    <div class="widget-book-title">This Website (backend)</div>
                    <div class="widget-book-author">
                        <a href="natelevison.com">natelevison.com</a>
                    </div>
                </div>
                <div class="widget-book-opinion">
                    I have converted the server running this website from
                    Windows Nodejs to WSL deno. Performance should go up, as
                    should security. It is much easier to maintain remotely.
                </div>
            </div>
        </div>
    </div>
    <div class="widget">
        <div class="widget-title">Quick Links</div>
        <div
            class="widget-content"
            style="display: flex;flex-direction: column;width: 100%;height:100%;justify-content:center;"
        >
            <a href="/about">
                <button class="widget-button">About</button>
            </a>
            <a href="/blog">
                <button class="widget-button">Blog</button>
            </a>
            <a href="/projects">
                <button class="widget-button">Projects</button>
            </a>
            <a href="/blog/updates">
                <button class="widget-button">Updates</button>
            </a>
        </div>
    </div>
</div> -->

<div class="container">
    <div class="row d-flex align-items-stretch">
        <div class="col">
            <div class="card h-100">
                <h2 class="h6 card-header">
                    Currently Coding
                </h2>
                <div class="card-body">
                    <h3 class="h5 card-title">Uhl Testing Program</h3>
                    <h4 class="h6 card-subtitle mb-2 text-body-secondary">Since September 2024</h4>
                    <p class="card-text">A testing program that administers dynamically generated programming questions, and provides plenty of teacher features to grade and assess students.</p>
                    <a href="https://github.com/Cheespeasa1234/uhl_tests" class="btn btn-primary">GitHub Repo</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <h2 class="h6 card-header">
                    Currently Coding
                </h2>
                <div class="card-body">
                    <h3 class="h5 card-title">This Website</h3>
                    <h4 class="h6 card-subtitle mb-2 text-body-secondary">Since November 2024</h4>
                    <p class="card-text">I am currently reworking this website to use svelte, and a better blog system. I also moved over to DigitalOcean, which has been great so far. The old system served me well!</p>
                    <a href="https://github.com/Cheespeasa1234/natelevison.com/tree/svelte-migration" class="btn btn-primary">GitHub Branch</a>
                    <a href="https://digitalocean.com" class="btn btn-primary">DigitalOcean</a>
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

    .home-h1 {
        font-size: 2.5em;
        font-weight: 600;
        display: flex;
    }

    .floatyletterpre {
        margin-right: 5px;
    }

    .floatyletter {
        opacity: 0.75;
        margin-left: 0.75px;
    }
</style>
