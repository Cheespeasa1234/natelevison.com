<script lang="ts">
    import { setTitle } from "$lib/frontend_util";
    import { onMount } from "svelte";

    setTitle("About");
</script>

<div class="container">
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
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    .about-img {
        border: 1px solid var(--gray-1);
        width: 50%;
        margin: 5px;
        border-radius: 5px;
    }

    .about-area {
        border: 1px solid var(--gray-1);
        max-width: 40%;
        margin: 5px;
        border-radius: 5px;
        padding: 20px;
    }

    .about-title > .divider {
        border-bottom: 2px solid var(--gray-1);
        width: 80%;
        /* align center */
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
    }

    .about-title {
        text-align: center;
    }

    h1, h3, h4 {
        margin: 0;
    }

    .about-more {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-lnk:link,
    .about-lnk:visited {
        color: var(--gray-2);
    }

    .about-lnk:hover,
    .about-lnk:active {
        color: var(--prim-color);
    }

    .about-more-button {
        background-color: var(--prim-color);
        border: 1px solid var(--prim-color);
        color: white;
        border-radius: 5px;
        padding: 0.5em 1em;
        width: fit-content;
        margin: 5px;
        cursor: pointer;
        transition: background-color 0.25s;
        font-size: 1em;
    }

    .about-more-button:hover {
        background-color: var(--secondary-color);
    }

    .about-content {
        padding-left: 1em;
        padding-right: 1em;
        font-size: 1em;
    }

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-5px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>
