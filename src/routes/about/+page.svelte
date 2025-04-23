<script lang="ts">
    import { generalSeoTags, since } from "$lib/frontend_util";
    import { onMount } from "svelte";

    const seoTitle = "About Me | Nate Levison";
    const seoDesc = "The about me portfolio of Nate Levison. Learn about his passion, his website, and his journey so far. You can also learn about his socials and contact information if necessary.";
    const seoKeys = generalSeoTags + ",about,aboutme,porfolio";
    const seoAuthor = "Nate Levison";
</script>

<svelte:head>
    <title>{seoTitle}</title>
    <link rel="canonical" href="https://natelevison.com/about">
    <meta name="description" content={seoDesc} />
    <meta name="keywords" content={seoKeys} />
    <meta property="og:title" content={seoTitle} />
    <meta property="og:description" content={seoDesc} />
    <meta property="og:url" content="https://natelevison.com/about" />
    <meta name="twitter:title" content={seoTitle} />
    <meta name="twitter:description" content={seoDesc} />
</svelte:head>

<div class="container d-flex" style="gap: 10px; margin-bottom: 10px;">
    <div class="card w-50" style="display: flex; flex-direction: column;">
        <div class="card-body" style="flex: 1;">
            <h1 class="text-center card-title h5">About Nate Levison</h1>
            <h2 class="mb-3 text-center card-subtitle mb-2 text-muted h6">Computer Science, Data Science, Web Development</h2>
            <p class="card-text">
                I am a Computer Science student with a passion for learning and creating, currently a student at Pascack Hills High School. I will be attending The Ohio State University in the class of 2029. I enjoy simple things, like gardening, cooking, my dog, and writing over-complicated programs to automate things I could do manually in 5 minutes. I enjoy learning new programming skills and methods, with the help of my friends.
            </p>
            <p class="card-text">
                I learned the concepts of programming many years ago, in Elementary School. But I have only formally programmed for {since(2022, "September")}, by starting out in Java, building GUIs and games. I also learned static web development at the same time, where I built <a href="https://static.natelevison.com/old">my first website</a>. I frequently have taken on passion projects, sometimes leading me out of my comfort zone.
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
    <div class="card w-50">
        <img class="card-img-top" src="/img/fit-crop.png" alt="Nate at a debate tournament">
        <div class="card-body">
            <p class="mb-3 card-subtitle mb-2 text-muted h6">Nate at a debate tournament, between rounds, circa 2024</p>
            <p class="card-text">Nate was a member of Junior Varsity Debate in his Sophomore year and his Junior year, participating in the varsity level in his Senior year.</p>
        </div>
    </div>
</div>

<div class="container d-flex">
    <div class="card w-100">
        <div class="card-body">
            <h2 class="card-subtitle mb-2 text-muted h6">Skills</h2>
            <ul class="list-group list-group-horizontal">
                <li class="list-group-item">
                    <div class="fw-bold">Frontend Webdev</div>
                    {since(2022, "December")}
                </li>
                <li class="list-group-item">
                    <div class="fw-bold">Backend Webdev</div>
                    {since(2022, "December")}
                </li>
                <li class="list-group-item">
                    <div class="fw-bold">Java</div>
                    {since(2022, "September")}
                </li>
                <li class="list-group-item">
                    <div class="fw-bold">Python</div>
                    {since(2023, "January")}
                </li>
            </ul>
        </div>
    </div>
</div>

<style>
</style>