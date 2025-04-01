<script lang="ts">
    const { selected = -1 } = $props();
    import "./style.css";
</script>

<nav>
    <div class="main-links">
        <img class="small-logo" alt="logo" src="/img/logo.png" />
        <a class="first-link nav-link" href="/">Home</a>
        <a class="first-link nav-link" href="/about">About</a>
        <a class="first-link nav-link" href="/blog">Blog</a>
        <a class="first-link nav-link" href="/projects">Projects</a>
    </div>
    <div class="social-links">
        <a
            aria-label="GitHub"
            class="nav-link scl"
            href="https://www.github.com/Cheespeasa1234"
            target="_blank"
        >
            <i class="fa-brands fa-github"></i>
        </a>
        <a
            aria-label="Email"
            class="nav-link scl"
            href="mailto:nate@natelevison.com"
            target="_blank"
        >
            <i class="fa-solid fa-envelope"></i>
        </a>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-content: sticky;
        background-color: var(--prim-color);
        height: 45px;
        padding: 5px;
    }

    .main-links, .social-links {
        display: flex;
    }

    .nav-link:hover {
        background-color: var(--secondary-color);
    }

    .nav-link {
        background-color: var(--prim-color);
        padding: 5px 10px;
        border-radius: 5px;
        color: black;
        text-decoration: none;
        transition: background-color 0.25s;
        font-size: 24px;
    }

    .nav-link:hover:not(.scl) {
        background-color: var(--secondary-color);
    }

    .scl {
        transition: transform 0.2s;
        background-color: transparent;
    }
    .scl:hover {
        transform: scale(1.2, 1.2);
        background-color: transparent;
    }

    /* if the screen is smaller than 600 px width */
    @media only screen and (max-width: 600px) {
        .small-logo {
            width: 30px;
            height: max-content;
            z-index: 3;
            padding-top: 2px;
            transition: transform 0.4s;
        }
        .social-links {
            display: none;
        }
        .main-links {
            width: 100%;
            display: flex;
            /* make content take up whole width */
            justify-content: center;
        }
        .main-links > a {
            width: 100%;
            text-align: center;
        }
    }
</style>
