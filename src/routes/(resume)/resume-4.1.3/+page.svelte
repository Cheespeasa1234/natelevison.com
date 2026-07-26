<script lang="ts">
    import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { onMount } from 'svelte';

    let mounted = $state(false);
    onMount(() => mounted = true);
</script>

{#if mounted}
    <nav class="no-print">
        <button onclick={() => window.print()}>Print</button>
        <a href="/natelevison_resume_4.1.3.pdf" target="_blank"><button>PDF version</button></a>
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
                <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div class="col">
                <a href="mailto:natelevison@gmail.com">natelevison@gmail.com</a>
                <a href="https://github.com/Cheespeasa1234">github.com/Cheespeasa1234</a>
                <a href="https://linkedin.com/in/natelevison">linkedin.com/in/natelevison</a>
                <a href="https://natelevison.com">natelevison.com</a>
            </div>
        </div>

        <h3>Summary</h3>
        <p>
            Computer Science &amp; Engineering Student at The Ohio State University
            2029, with a passion in software development and web development, and hobbyist writer. Eager
            to gain experience in the field.
        </p>

        <h3>Skills</h3>
        <p>
            Experienced in Java, SvelteKit, Microsoft Excel and TypeScript. Proficient in Python, MySQL, and MatLab.
            Frequent user of Git, GitHub, VSCode, and Google Sheets.
        </p>

        <h3>Experience</h3>
        <ul>
            <li>
                <h4>
                    Teacher Assistant &bullet; Honors Computer Science &bullet;
                    <span class="nobold">September 2024 - June 2025</span>
                </h4>
                Graded assignments, assisted in instruction, and completed a full-stack testing program for quizzes, with Google OAuth, SQLite, and a custom backend.
            </li>
            <li>
                <h4>
                    InfoTech Member &bullet; FRC Team 1676 &bullet; <span class="nobold">September 2023 - June 2025</span>
                </h4>
                Built user interfaces for scouting infrastructure used by the entire team, designed UI for FRCTree, assisted in backend server management, collaborating with 3-4 team members.
            </li>
            <li>
                <h4>
                    Intern &bullet; Gottheimer for Congress &bullet; <span class="nobold">May 2024 -
                    November 2024</span>
                </h4>
                Helped organize documents, conducted voter outreach through phone banking, and managed contact information with spreadsheets.
            </li>
        </ul>

        <h3>Projects</h3>
        <ul>
            <li>
                <h4>
                    <a href="https://natelevison.com">natelevison.com</a> &bullet; Developer &bullet; <span class="nobold">March 2022
                    - Present</span>
                </h4>
                Built a personal blog, portfolio, and homepage as a passion project.
                While making and maintaining it, gained skills in full-stack web development,
                multiple web development technologies, and a passion for writing.
            </li>
            <li>
                <h4>
                    <a href="https://FRCTree.team1676.com">FRCTree.team1676.com</a> &bullet; Developer &bullet;
                    <span class="nobold">December 2024 - April 2025</span>
                </h4>
                Designed user authentication system and API for a social platform for FRC Robotics Teams. Collaborated with team members to optimize user design and codebase.
            </li>
        </ul>

        <h3>Education</h3>
        <ul>
            <li>
                <h4>B.S. in Computer Science &amp; Engineering <span class="nobold">(Expected 2029)</span></h4>
                <i>The Ohio State University</i>, Columbus, OH<br>
            </li>
            <li>
                <h4>High School Diploma <span class="nobold">(2025)</span></h4>
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
