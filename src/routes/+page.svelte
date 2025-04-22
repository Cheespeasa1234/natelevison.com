<script lang="ts">
    import { setTitle } from "$lib/frontend_util";
    import { onMount } from "svelte";
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
    });

    const letters = "natelevison.com!".split("");
    setTitle("Home");
</script>

<div class="home-title">
    <div class="home-h1" style="white-space: pre">
        <div class="floatyletterpre">Welcome to</div>{#each letters as letter, i}<div class="floatyletter" style="animation-delay: {i * 0.1}s">{letter}</div>{/each}
    </div>
</div>

<div class="widgets">
    <!-- <div class="widget">
            <div class="widget-title">Currently Reading</div>
            <div class="widget-date">5/9/2024</div>
            <div class="widget-content">
                <img src="global/img/the-martian.jpeg" class="widget-book-cover zoomable" />
                <div class="widget-book-text">
                    <div>
                        <div class="widget-book-title">The Martian</div>
                        <div class="widget-book-author">Andy Weir</div>
                    </div>
                    <div class="widget-book-opinion">One of the better books I have ever read. It had a good story and seemed- not realistic- but relatable. A tense but good ending. 8/10.</div>
                </div>
            </div>
        </div> -->
    <div class="widget">
        <div class="widget-title">Currently Coding</div>
        <div class="widget-date">9/26/2024</div>
        <div class="widget-content">
            <!-- <img src="favicon.ico" class="widget-book-cover" /> -->
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
            <!-- <img src="favicon.ico" class="widget-book-cover" /> -->
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
            <!-- <a href="/blog/article/wrong-about-free-will">
                    <button class="widget-button"><b>CORRECTION ARTICLE</b></button>
                </a> -->
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
</div>

<style>
    .quick-links {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        text-align: center;
        margin: auto;
        max-width: fit-content;
    }

    .ql-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .quick-link {
        border: 1px solid rgb(85, 85, 85);
        background: var(--fourth-color);
        padding: 5px;
        margin: 5px;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: box-shadow 0.2s ease-in-out;
        width: 350px;
    }

    .quick-link:hover {
        box-shadow: 1px 1px 5px 1px rgba(71, 71, 71, 0.5);
        background: var(--fifth-color);
        cursor: pointer;
    }

    .ql-ttl {
        font-size: 2em;
        font-weight: bold;
        margin: 0;
    }

    .ql-dsc {
        font-size: 1.2em;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .ql-int {
        width: 400px;
        height: 200px;
        border: 1px dashed #838383;
        border-radius: 5px;
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

    .home-h2 {
        font-size: 2.2em;
    }

    .floatyletterpre {
        margin-right: 5px;
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

    /* when home title hovered, style all floatyletters once */
    .floatyletter {
        animation: float 0.5s ease-in-out 1;
    }

    .widgets {
        display: flex;
        justify-content: center;
        height: min-content;
    }

    .widget {
        width: 25%;
        max-height: 10%;
        padding: 10px;
        border: 2px solid black;
        border-radius: 5px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .widget-title {
        font-size: 24px;
        padding: 5px;
    }

    .widget-date {
        font-size: 16px;
        color: #808080;
    }

    .widget-book-cover {
        object-fit: contain;
        max-width: 50%;
        max-height: 100%;
        width: 100%;
        height: auto;
        border-radius: 5px;
        transition:
            translate 0.25s,
            scale 0.25s;
    }

    .widget-content {
        width: fit-content;
        display: flex;
    }

    .widget-book-text {
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .widget-book-title {
        font-size: 20px;
        font-weight: bold;
    }

    .widget-book-author {
        font-size: 18px;
        font-weight: bold;
    }

    .widget-book-opinion {
        font-size: 16px;
        font-style: italic;
    }

    .widget-button {
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
    }

    div.dvd-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    marquee.dvd-vert {
        border: 2px solid black;
        border-radius: 5px;
    }

    marquee.dvd-horiz {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div.dvd {
        text-decoration: underline;
        width: 25px;
        height: 25px;
        font-size: 10px;
    }
</style>
