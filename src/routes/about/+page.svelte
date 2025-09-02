<script lang="ts">
    import { generalSeoTags, since } from "$lib/frontend_util";
    import Seo from "../../Seo.svelte";
</script>

<svelte:head>
    <Seo
        title="About Me"
        desc="The about me portfolio of Nate Levison. Learn about his passion, his website, and his journey so far. You can also learn about his socials and contact information if necessary."
        keys={[generalSeoTags, "about", "aboutme", "portfolio"]}
        canonUrl="https://natelevison.com/about"
    />
</svelte:head>


<div class="container d-flex main-row" style="gap: 10px; margin-bottom: 10px;">
    <div class="card top-part" style="display: flex; flex-direction: column;">
        <div class="card-body" style="flex: 1;">
            <h1 class="text-center card-title h5">About Nate Levison</h1>
            <h2 class="mb-3 text-center card-subtitle mb-2 text-muted h6">Computer Science && Engineering</h2>
            <p class="card-text">
                I am a Computer Science student with a passion for learning and creating, currently a student at THE Ohio State University, class of 2029, majoring in Computer Science and Engineering. I enjoy simple things, like gardening, cooking, my dog, and writing over-complicated programs to automate things I could do manually in 5 minutes. I enjoy learning new programming skills and methods, and finding cool ways to use them.
            </p>
            <p class="card-text">
                I learned the concepts of programming many years ago, in Elementary School, by starting out in Java, building GUIs and games. I also learned static web development at the same time, where I built <a href="https://static.natelevison.com/old">my first website</a>. I frequently have taken on passion projects, sometimes leading me out of my comfort zone.
            </p>
            <p class="card-text">
                I value giving back, so I volunteer occasionally, in various fields. I couldn't have gotten to where I am without the kindness that my family has shown me, which is why I value and appreciate them so much. It's also why I thank my grandma for reading after every blog.
            </p>
        </div>
        <div class="card-body d-flex flex-column" style="align-items: center">
            <h2 class="card-subtitle mb-2 text-muted h6">Still interested?</h2>
            <div>
                <a href="/blog" style="width: 150px" class="btn btn-primary">Read my blog</a>
                <a href="/projects" style="width: 150px" class="btn btn-primary">View my projects</a>
            </div>
        </div>
    </div>
    <div class="card top-part">
        <img class="card-img-top" src="/img/fit-crop.png" alt="Nate at a debate tournament">
        <div class="card-body">
            <p class="mb-3 card-subtitle mb-2 text-muted h6">Nate at a debate tournament, between rounds, circa 2024</p>
            <p class="card-text">Nate was a member of Junior Varsity Debate in his Sophomore year and his Junior year, participating in the varsity level in his Senior year.</p>
        </div>
    </div>
</div>

{#snippet skill(name: string, year: number, month: string)}
    <div class="list-group-item">
        <div class="fw-bold">{name}</div>
        <div>{since(year, month)}</div>
    </div>
{/snippet}

<div class="container d-flex">
    <div class="card w-100">
        <div class="card-body">
            <h2 class="card-subtitle mb-2 text-muted h6">Skills</h2>
            <div class="d-flex text-center" style="gap: 20px; flex-wrap: wrap">
                {@render skill("Frontend", 2021, "December")}
                {@render skill("Backend", 2022, "December")}
                {@render skill("Java", 2021, "September")}
                {@render skill("Python", 2022, "January")}
            </div>
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 900px) {
        .main-row {
            flex-direction: column-reverse;
        }

        .top-part {
            width: 100%;
        }
    }

    @media screen and not (max-width: 900px) {
        .top-part {
            width: 50%;
        }
    }
</style>