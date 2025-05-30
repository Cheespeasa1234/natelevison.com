<script lang="ts">
    import { sanitize } from "$lib/util";
    let searchQuery = $state("");
    function search() {
        window.location.href = "/blog/?name=" + sanitize(searchQuery);
    }
</script>

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
                <li class="nav-item">
                    <a class="nav-link" href="/projects">Projects</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/projects/spinners">Spinners</a></li>
                        <li><a class="dropdown-item" href="/progress">Progress Updates</a></li>
                        <li><a class="dropdown-item" href="https://status.natelevison.com">Status Page</a></li>
                        <li><a class="dropdown-item" href="https://static.natelevison.com/old">Old Website <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                        <li><a class="dropdown-item" href="https://github.com/Cheespeasa1234/natelevison.com">GitHub Repository <i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input bind:value={searchQuery} class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button onclick={search} class="btn btn-outline-secondary" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>