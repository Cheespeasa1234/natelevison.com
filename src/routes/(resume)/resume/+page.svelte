<script lang="ts">
    // 4.1.9
    import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { onMount } from 'svelte';
    import "bootstrap/dist/css/bootstrap.min.css";
    import Nav from '../../../Nav.svelte';

    const expMajor = [
        "Java",
        "Microsoft Excel", // move this higher if data also
        "SvelteKit",
        "TypeScript"
    ];

    const expMinor = [
        "Python",
        "MySQL", // move this higher if its a job with data being important
        "C",
        "GCC",
        "GDB",
        "MatLab"
    ];

    const expUser = [
        "Git",
        "Vim",
        "Linux" // move this higher if its a low-level programming
    ];

    function beforeprint() {
        document.title = "natelevison_resume_4.1.8";
    }

    // formats a list
    function listOfItems(list: string[]): string {
        let output: string = "";
        for (let i = 0; i < list.length - 1; i++) {
            output += list[i] + ", ";
        }
        // output += list[list.length - 2] + " and ";
        output += " and " + list[list.length - 1];
        return output;
    }

    let mounted = $state(false);
    onMount(() => {
        window.addEventListener("beforeprint", beforeprint);

        window.addEventListener("afterprint", () => {
            document.title = "Resume | Nate Levison";
        });
        mounted = true;
    });
</script>

{#if mounted}
    <div class="no-print">
        <Nav />
        <div style="width: 100%; padding: 10px 20px; background-color: #f1f1f1; display: flex; gap: 20px;">
            <button class="btn btn-dark" onclick={() => {
                beforeprint();
                window.print();
            }}>Print</button>
            <!-- <a href="/natelevison_resume_4.1.3.pdf" target="_blank"><button>PDF version</button></a> -->
            <a href="/natelevison_resume_4.1.8.pdf" download>
                <button class="btn btn-primary">Download</button>
            </a>
        </div>
    </div>
    <!-- <nav class="nav no-print">
        <button class="btn btn-dark" onclick={() => window.print()}>Print</button>
        <a href="/natelevison_resume_4.1.3.pdf" target="_blank"><button>PDF version</button></a>
        <button class="btn btn-primary" onclick={() => {
            window.location.href = "/";
        }}>Back to my website</button>
    </nav> -->
    <main>
        <div class="header">
            <h1 style="margin-top: 0; margin-bottom: 5px;">Nathaniel Levison</h1>
            <h2 style="margin-top: 5px; font-size: 1.2em;">OSU 2029 &bullet; Computer Science &amp; Engineering</h2>
    
            <div style="display: flex; gap: 20px; margin-bottom: 10px;">
                <div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:natelevison@gmail.com">natelevison@gmail.com</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGlobe} />
                        <a href="https://natelevison.com">https://natelevison.com</a>
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <a href="https://linkedin.com/in/natelevison">linkedin.com/in/natelevison</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <a href="https://github.com/Cheespeasa1234">github.com/Cheespeasa1234</a>
                    </div>
                </div>
            </div>
        </div>
        <hr>

        <h3>Summary</h3>
        <p>
            Computer Science &amp; Engineering Student at The Ohio State University 2029, with a passion in software development and web development, and hobbyist writer and game developer. Eager to gain experience in the industry.
        </p>
        <!-- <hr> -->

        <h3>Skills</h3>
        <p>
            <!-- Experienced in Java, SvelteKit, Microsoft Excel and TypeScript. Proficient in Python, C, GCC, GDB, MySQL, MatLab. Frequent user of Git, Vim, and Linux. -->
            Experienced in {listOfItems(expMajor)}. Proficient in {listOfItems(expMinor)}. Frequent user of {listOfItems(expUser)}.
        </p>
        <hr>
        <!-- <hr>
        <hr> -->

                <!-- <hr> -->

        <h3>Education</h3>
        <ul>
            <li>
                <h4>B.S. Computer Science &amp; Engineering, <span class="nobold">Minor in Business (Expected 2029)</span></h4>
                <i>The Ohio State University</i>, Columbus, OH<br>
                Completed: CSE 2231 & 2321
                In Progress: CSE 2331 & 2421, ECON 2001 <br>
            </li>
            <li>
                <h4>High School Diploma <span class="nobold">(2025)</span></h4>
                <i>Pascack Hills High School</i>, Montvale, NJ<br>
                Teacher Assistant for Honors Computer Science
            </li>
        </ul>

        <hr>

        <h3>Experience</h3>
        <ul>
            <li>
                <h4>
                    Online Instructor &bullet; iDTech &bullet;
                    <span class="nobold">June 2026 - August 2026</span>
                </h4>
                Taught multiple students in Arduino, Java, and Scratch through private lessons, and virtual tech camp. Communicated with clients, and developed lesson material for each student.
            </li>
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
            <!-- <li>
                <h4>
                    Intern &bullet; Gottheimer for Congress &bullet; <span class="nobold">May 2024 -
                    November 2024</span>
                </h4>
                Helped organize documents, conducted voter outreach through phone banking, and managed contact information with spreadsheets.
            </li> -->
            <!-- <li>
                <h4>
                    Employee &bullet; Dairy Queen, Ridgewood NJ &bullet; <span class="nobold">March 2022 - August 2022</span>
                </h4>
                Prepared product, maintained sanitation, and handled customers during business hours. Worked with coworkers to divide tasks and cover stations during peak hours, ensuring consistent, efficient service.
            </li> -->
        </ul>
        <!-- <hr> -->

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

    </main>
{:else}
    Loading...
{/if}

<svelte:head>
    <title>Resume | Nate Levison</title>
</svelte:head>

<style>

    @media print {
        .no-print {
            display: none !important;
        }

        main {
            padding-bottom: 0px;
        }

        .yes-print {
            display: block !important;
        }

        hr {
            break-inside: avoid;
            break-before: avoid;
            break-after: avoid;
        }
    }

    
    a, a:visited {
        color: rgb(0, 110, 255);
    }
    hr {
        /* display: block; */
        color: transparent;
        border: 0.5px solid gray;
        /* width: 80%; */
        margin: 14px 10px;
    }

    .nobold {
        font-weight: normal;
        /* font-style: italic; */
        color: rgb(78, 78, 78);
    }

    main {
        width: 8.5in;
        height: min-content;
        font-family: sans-serif;
        padding: 15px;
        max-width: 90vw;
        margin: auto;
    }

    p, li {
        font-size: 0.98em;
    }

    ul, p {
        margin-bottom: 0.8em;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "Roboto Slab", serif;
    }

    ul {
        margin-top: 0;
    }

    h1 {
        font-size: 1.7em;
    }

    h2 {
        font-size: 1.5em;
    }

    h3 {
        font-size: 1.1em;
        margin-bottom: 0.2em;
    }
    
    h4 {
        font-size: 1.05em;
        margin-bottom: 0.2em;
        margin-top: 0;
    }

    :global(body) {
        margin: 0;
    }

    :root {
        
    }

    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
</style>
