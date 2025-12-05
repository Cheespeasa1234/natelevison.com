<script lang="ts">
    import moment from "moment";
    import tippy from "tippy.js";

    import "@fortawesome/fontawesome-free/css/all.min.css";
    import "tippy.js/dist/tippy.css";
    import "tippy.js/animations/scale.css";
    import "bootstrap/dist/css/bootstrap.min.css";
    // import "bootstrap/dist/js/bootstrap.bundle.min.js";
    import "../../style.css";

    import Nav from "../../Nav.svelte";
    import { onMount } from "svelte";

    const { children } = $props();

    onMount(() => {
        tippy("[data-tippy-content]", {
            appendTo: document.body,
            inertia: true,
            animation: "scale",
        });

        // function createRipple(event) {
        //     const button = event.currentTarget;

        //     const circle = document.createElement("span");
        //     const diameter = Math.max(button.clientWidth, button.clientHeight);
        //     const radius = diameter / 2;

        //     circle.style.width = circle.style.height = `${diameter}px`;
        //     circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        //     circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        //     circle.classList.add("ripple");

        //     const ripple = button.getElementsByClassName("ripple")[0];

        //     if (ripple) {
        //         ripple.remove();
        //     }

        //     button.appendChild(circle);
        // }

        // const buttons = document.getElementsByTagName("button");
        // for (const button of buttons) {
        //     button.addEventListener("click", createRipple);
        // }
    });

    moment().format();
</script>

<svelte:head>
    <!-- <link href="/bootstrap-5.3.6-dist/css/bootstrap.min.css" rel="stylesheet" /> -->
    <script src="/bootstrap-5.3.6-dist/js/bootstrap.bundle.min.js" async></script>
    <meta name="author" content="Nate Levison" />

    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://natelevison.com/favicon.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://natelevison.com/favicon.png" />
</svelte:head>

<Nav></Nav>

<main>
    {@render children()}
</main>

<style>
    :global(html),
    :global(body) {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    main {
        padding: 10px;
    }
</style>
