<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";

    const { children } = $props();
</script>

{@render children()}
<!--
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
    nav {
        background-color: #e5e5e5;
        padding: 10px;
        margin: 0;
    }

    .row {
        display: flex;
        gap: 4px;
    }

    .col {
        display: flex;
        flex-direction: column;
        min-height: 4em;
        justify-content: space-between;
    }

    :global(body) {
        margin: 0;
    }
    
    main {
        width: 8.5in;
        height: min-content;
        font-family: sans-serif;
        padding: 20px;
        max-width: 90vw;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Roboto Slab", serif;
    }

    ul {
        margin-top: 0;
    }

    h3, h4 {
        margin-bottom: 0.2em;
    }
    
    li:not(*:last-child) {
        margin-bottom: 1em;
    }

    p {
        margin-top: 0.2em;
    }

    h4 {
        margin-top: 0;
    }

    @media print {
        .no-print {
            display: none !important;
        }

        .yes-print {
            display: block !important;
        }
    }

    a, a:visited {
        color: rgb(0, 110, 255);
    }

    .nobold {
        font-weight: normal;
        /* font-style: italic; */
        color: rgb(78, 78, 78);
    }
</style>
-->