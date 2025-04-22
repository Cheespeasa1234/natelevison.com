<script lang="ts">
    import { setTitle, since } from "$lib/frontend_util";
    import { onMount } from "svelte";

    setTitle("About");
</script>

<!-- <div class="container">
    <div class="about-img">
        <img
            alt="A very handsome young man"
            src="https://i.stack.imgur.com/y9DpT.jpg"
        />
        <p>An image of a very handsome young man</p>
        <i>Sorry I don't really want to show my face</i>
    </div>
    <div class="about-area">
        <div class="about-title">
            <h3>Everything About</h3>
            <h1>Nate Levison</h1>
            <div class="divider"></div>
            <h3>Java - Web & TS - Python</h3>
        </div>
        <div style="display:flex;flex-direction:column;">
            <div class="about-content">
                <p>
                    I am an aspiring software engineer / data analyst with a
                    passion for learning and creating, currently a student at
                    Pascack Hills High School. I enjoy simple things, like
                    gardening, cooking, my dog, and writing over-complicated
                    programs to automate things I could do manually in 5
                    minutes. I enjoy learning new programming skills and
                    methods, with the help of my friends.
                </p>
                <p>
                    I learned the concepts of programming many years ago, in
                    Elementary School. But I have only formally programmed for
                    three years, by starting out in Java, building GUIs and
                    games. I also learned static web development at the same
                    time, where I built <a
                        class="about-lnk"
                        href="https://static.natelevison.com/old"
                        >my first website</a
                    >. I frequently have taken on passion projects, sometimes
                    leading me out of my comfort zone.
                </p>
                <p>
                    I value giving back, so I volunteer occasionally, in various
                    fields. I couldn't have gotten to where I am without the
                    kindness that my family has shown me, which is why I value
                    and appreciate them so much. It's also why I thank my
                    grandma for reading after every blog.
                </p>
            </div>
            <div class="about-more">
                <h4 style="font-size:1.45em;">Still interested?</h4>
                <a href="/blog">
                    <button class="about-more-button">Read my blog</button>
                </a>
                <a href="/my_projects">
                    <button class="about-more-button">View projects</button>
                </a>
            </div>
        </div>
    </div>
</div> -->

<div class="container d-flex" style="gap: 10px; margin-bottom: 10px;">
    <div class="card w-50" style="display: flex; flex-direction: column;">
        <div class="card-body" style="flex: 1;">
            <h5 class="text-center card-title">About Nate Levison</h5>
            <h6 class="mb-3 text-center card-subtitle mb-2 text-muted">Computer Science, Data Science, Web Development</h6>
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
            <h6 class="card-subtitle mb-2 text-muted">Still interested?</h6>
            <div>
                <a href="/blog" style="width: 150px" class="btn btn-primary">Read my blog</a>
                <a href="/projects" style="width: 150px" class="btn btn-primary">View my projects</a>
            </div>
        </div>
    </div>
    <div class="card w-50">
        <img class="card-img-top" src="/img/fit-crop.png" alt="Nate at a debate tournament">
        <div class="card-body">
            <h6 class="mb-3 card-subtitle mb-2 text-muted">Nate at a debate tournament, between rounds, circa 2024</h6>
            <p class="card-text">Nate was a member of Junior Varsity Debate in his Sophomore year and his Junior year, participating in the varsity level in his Senior year.</p>
        </div>
    </div>
</div>

<div class="container d-flex">
    <div class="card w-100">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Skills</h6>
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