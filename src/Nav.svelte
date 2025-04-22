<script lang="ts">
    let searchQuery = $state("");
    function search() {
        
    }
</script>

<!-- <script lang="ts">
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
</style> -->

<nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img width="30" height="30" alt="logo" src="/img/logo.png" />
            natelevison.com
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/blog">Blog</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/projects">Gallery</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="/projects/spinners">Spinners</a></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input bind:value={searchQuery} class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button onclick={search} class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>