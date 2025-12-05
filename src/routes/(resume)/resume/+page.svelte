<script lang="ts">
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { onMount } from 'svelte';

    let mounted = $state(false);
    onMount(() => mounted = true);
</script>

{#if mounted}
    <nav class="no-print">
        <button onclick={() => window.print()}>Print</button>
        <a href="/resume.pdf" target="_blank"><button>PDF version</button></a>
        <a href="https://natelevison.com"><button>Back to my website</button></a>
    </nav>
    <main>
        <h1 style="margin-top: 0; margin-bottom: 5px;">Nathaniel Levison</h1>
        <h2 style="margin-top: 5px; font-size: 1.2em;">OSU 2029 &bullet; Computer Science &amp; Engineering</h2>

        <div class="row">
            <div class="col">
                <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
                <img class="handshake" src="https://osu.joinhandshake.com/favicon.png" alt="handshake">
            </div>
            <div class="col">
                <a href="mailto:natelevison@gmail.com">natelevison@gmail.com</a>
                <a href="https://github.com/Cheespeasa1234">github.com/Cheespeasa1234</a>
                <a href="https://linkedin.com/in/natelevison">linkedin.com/in/natelevison</a>
                <a href="https://osu.joinhandshake.com/profiles/natelevison">osu.joinhandshake.com/profiles/natelevison</a>
            </div>
        </div>

        <h3>Summary</h3>
        <p>
            Computer Science &amp; Engineering Student at The Ohio State University
            2029, with a passion in software development and web development. Eager
            to gain experience in the field.
        </p>

        <h3>Skills</h3>
        <p>
            Experienced in Java, SvelteKit, Microsoft Excel, TypeScript, and other
            web development technologies. Proficient in Python, MySQL, and MatLab.
            Frequent user of Git, GitHub, VSCode, and Google Sheets.
        </p>

        <h3>Experience</h3>
        <ul>
            <li>
                <h4>
                    Gottheimer for Congress &bullet; Intern &bullet; May 2024 -
                    November 2024
                </h4>
                Helped organize documents, conducted voter outreach through phone banking,
                and managed contact information with spreadsheets.
            </li>
            <li>
                <h4>
                    Honors Computer Science &bullet; Teacher Assistant &bullet;
                    September 2024 - June 2025
                </h4>
                Graded assignments, assisted in instruction, and completed a full-stack
                custom testing program.
            </li>
            <li>
                <h4>
                    FRC Team 1676 &bullet; InfoTech &bullet; September 2023 - June
                    2025
                </h4>
                Built user interfaces for scouting infrastructure used by the entire
                team, designed UI for FRCTree, assisted in backend server management.
            </li>
        </ul>

        <h3>Projects</h3>
        <ul>
            <li>
                <h4>
                    <a href="https://natelevison.com">natelevison.com</a> &bullet; Developer &bullet; March 2022
                    - Present
                </h4>
                Built a personal blog, portfolio, and homepage as a passion project.
                While making and maintaining it, gained skills in full-stack web development,
                multiple web development technologies, and a passion for writing.
            </li>
            <li>
                <h4>
                    <a href="https://FRCTree.team1676.com">FRCTree.team1676.com</a> &bullet; Developer &bullet;
                    December 2024 - April 2025
                </h4>
                Worked with teammates to design and build Linktree-like websites for
                FIRST Robotics Competition teams to share their social media platforms.
                Designed user experience around predicted audience metrics and created
                an authentication system from scratch.
            </li>
        </ul>

        <h3>Education</h3>
        <ul>
            <li>
                <h4>B.S. in Computer Science &amp; Engineering (Expected 2029)</h4>
                <i>The Ohio State University</i>, Columbus, OH<br>
            </li>
            <li>
                <h4>High School Diploma (2025)</h4>
                <i>Pascack Hills High School</i>, Montvale, NJ<br>
                Teacher Assistant for Honors Computer Science
            </li>
        </ul>
    </main>
{:else}
    Loading...
{/if}

<style>

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
        height: 11in;
        font-family: sans-serif;
        padding: 10px;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Roboto Slab", serif;
    }

    li {
        margin-bottom: 5px;
    }

    h4 {
        margin-bottom: 0;
    }

    h3 {
        margin-bottom: 0;
    }
    
    .handshake {
        width: 1em;
        filter: grayscale(1);
    }

    @media print {
        .no-print {
            display: none !important;
        }

        .yes-print {
            display: block !important;
        }
    }
</style>
