export type Project = {
    name: string;
    desc: string,
    tags: string[];
    links: { url: string; name: string }[];
    start: string;
    end: string;
};

export const projects: Project[] = [
    {
        name: "natelevison.com",
        desc: `
            This website has been my passion project for more than THREE YEARS now. I wrote my college essay about it, I wrote blog articles on it, and some of my writing here has been published in the school magazine! I am so proud of the work I have done for this website. The CSS is far from decent- but I hate CSS, so it's fine.

            It is currently on its fourth major iteration- first was a static 000webhost page, second was a better (still static) github.io page, third was a simple node.js / deno backend system, and fourth is a SvelteKit app. I have tended to redesign my website whenever I have completely replaced my skills with better skills, like when I learned backend development, when I improved in server administration, and recently, when I decided to brush off the css cobwebs and start from the ground up.
        `,
        tags: ["web", "personal"],
        links: [
            { url: "https://github.com/Cheespeasa1234/natelevison.com", name: "GitHub" },
            { url: "https://natelevison.com", name: "Home" },
        ],
        start: "December 2022",
        end: "Present",
    },
    {
        name: "Team 1676 Scouting Interface",
        desc: `
            In the 2024 Robotics season, Crescendo, I built the frontend of the scouting interface. In robotics, teams will scout one another in order to determine what teams would make for a good parter in the playoffs. It is essential to collect lots of data about play style, skill level, speed, and strategy, in order to make a good decision.
            
            I componentized all my work and made it extendible, and my components and organization are still being used today. It includes paginated forms, a full validation system, and integrates smoothly with the form collection system.
        `,
        tags: ["web", "robotics"],
        links: [
            { url: "https://github.com/PioneersTeam1676/scouting", name: "GitHub" },
        ],
        start: "December 2023",
        end: "January 2025",
    },
    {
        name: "FRTree",
        desc: `
            FRTree, heavily inspired by Linktree, is meant to solve a problem we deal with in robotics. There is no standardized method of communication or collaboration with other teams. This means, if you find a team number or a team name you want to know about, there is no website or social media platform where EVERY team can be found.

            I built a lot of the frontend and most of the backend, utilizing MySQL, SvelteKit, and other backend technologies. Collaborating with my friends, we built a fully-functional application with sign ups, administrator access, and a great user experience. It is absolutely my best backend work.
        `,
        tags: ["web", "robotics"],
        links: [
            { url: "https://github.com/PioneersTeam1676/FrTree", name: "GitHub" },
            { url: "frtree.team1676.com", name: "Website" },
        ],
        start: "December 2024",
        end: "April 2025",
    },
    {
        name: "Minecraft StatsViewer",
        desc: `
            I have a Minecraft world that I share with a friend, and whenever I want to view statistics, it is a huge pain. So, I developed a fully-featured java program that parses NBT and JSON data, and displays tons of useful information about Minecraft players, such as statistics, inventory, and even a world map.
        `,
        tags: ["java"],
        links: [
            { url: "https://github.com/Cheespeasa1234/statsviewer", name: "GitHub" }
        ],
        start: "January 2024",
        end: "June 2024"
    }
];