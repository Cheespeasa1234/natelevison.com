"use strict";

const projects = {
    java: [
        {
            title: "Minecraft StatsViewer",
            date: "January 2024 - Present",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/StatsViewer",
                    text: "GitHub"
                }
            ],
            desc: "I have a Minecraft world that I share with a friend, and whenever I want to view statistics, it is a huge pain. So, I developed a fully-featured java program that parses NBT and JSON data, and displays tons of useful information about Minecraft players, such as statistics, inventory, and even a world map."
        },
        {
            title: "LeviTD",
            date: "April 2023 - June 2023",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/levitd",
                    text: "GitHub"
                },
                {
                    url: "https://sites.google.com/pascack.org/levitd/home?authuser=2",
                    text: "APCS Site"
                }
            ],
            desc: "This project was a school assignment to make any game you want. I chose to make a game based on my favorite game series of all time, Bloons Tower Defense. And by \"based on\", I mean literally the exact same assets. I enjoyed the learning that came along with developing this game."
        },
        {
            title: "LeviAlchemy",
            date: "June 2023 - Present",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/levialchemy",
                    text: "GitHub"
                }
            ],
            desc: "Based on the mobile game Little Alchemy, I made this game in order to display some object oriented methods of coding which I have never really tried out before. It was a struggle to get graphics and physics working efficiently, but I made some pretty cool animations in the game."
        },
        {
            title: "LeviSchedule",
            date: "September 2022 - May 2023",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/levischedule",
                    text: "GitHub"
                },
                {
                    url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
                    text: "License"
                }
            ],
            desc: "Meant to be a succesor to SchedUhler, the scheduling program made by my teacher and used by the school, this program is a visual tracking program. It shows you all the classes / appointments you have that day, and visualizes how far through the day you are. It also has its own extensible file format, which I really like."
        },
        {
            title: "Arrays",
            date: "March 2022 - September 2022",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/Arrays",
                    text: "GitHub"
                },
            ],
            desc: "This is a better Array library for Java. Although the ArrayList class is by all means sufficient for most purposes, I found that it was not as easy to use as I would have liked. This library is meant to be a more user friendly version of ArrayList, with more features and a more intuitive documentation."
        },
        {
            title: "Space Invaders",
            date: "April 2022 - May 2022",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/space-invaders",
                    text: "GitHub"
                }
            ],
            desc: "In my CS1 class, we had to make the space invaders game. I put in a lot of effort so I thought it would be cruel to not put this in my portfolio. I tried my best to make it as similar to the original as possible."
        },
        {
            title: "Boomshine",
            date: "April 2022 - May 2022",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/boomshine",
                    text: "GitHub"
                }
            ],
            desc: "Boomshine is a very satisfying game to play. I coded it from scratch, which meant I had to learn a lot about how to do movement in code. This means I learned how to use sine and cosine, how to calculate movement, and calculating collisions accurately. It was a great learning experience and a great playing experience as well!"
        },
        {
            title: "Flappy Bord",
            date: "January 2022 - February 2022",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/flappybord",
                    text: "GitHub"
                }
            ],
            desc: "My first full game, Flappy Bord is an entirely original game that I made from scratch without any help from my peers. Just kidding, of course. This game helped me learn lots of features of the Java language, and helped me learn how to make games in general. I also made some of my own assets for this project, which was fun!"
        },
        {
            title: "Calculator",
            date: "September 2021 - October 2021",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/calculator",
                    text: "GitHub"
                }
            ],
            desc: "This is my first ever java project. I used it to keep track of my progress over time as I got better with learning Java. It started as a console application, and slowly made the transformation into a fully-fledged Java Swing GUI application. I am very proud of it, even though it doesn't really work anymore. Probably because I updated my Java version."
        },
        {
            title: "Paint",
            date: "March 2022 - April 2022",
            links: [],
            desc: "This is just a simple paint brush app. It helped me learn some efficiency techniques, like storing things as lines and not pixels. It includes an RGB and size slider, so to do this, I stored each point as a point with size and color, drawing lines between each point with the first's data. It was very fun to make."
        },
        {
            title: "Mineswiffer",
            date: "September 1 2023 - Sep 5 2023",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/mineswiffer",
                    text: "Github"
                },
                {
                    url: "https://github.com/Cheespeasa1234/mineswiffer/releases/tagv1.0",
                    text: "Latest Version"
                }
            ],
            desc: "Mineswiffer is a Minesweeper clone / remix that I made in less than four days, and I actually really enjoyed making it. It has new features, such as radar (shows you bombs in a radius), rockets (shoots two rays up and down, flagging the first mine it hits), and fog of war, which is a visual feature that took most of the time to develop, but adds a smooth visual element to the game." 
        }
    ],
    python: [
        {
            title: "CaMuL",
            date: "February 2023 - April 2023",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/CaMuL",
                    text: "GitHub"
                }
            ],
            desc: "This is most definitely NOT a blazingly fast JavaScript framework. It is a object-based DOM replacement that allows you to build repetitive DOMs with less code, in a more readable format. Written in Python, the CaMuL compiler allows you to create HTML, CSS, and JS while using any other Python features you could ever want!"
        },
        {
            title: "FRC Competition Predictor",
            date: "February 2024 - Present",
            links: [],
            desc: "Although private, this project is probably the best neural network I have ever trained. It guesses the outcome of a match in Crescendo, the current robotics competition. I gained some very valuable experience while making this project, using the TheBlueAlliance API, Statbotics API, and with making large collections of training data, and in using Tensorflow and Jupyter Notebooks."
        },
        {
            title: "Membakedbean",
            date: "March 2022, September 2023",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/membakedbean",
                    text: "GitHub"
                }
            ],
            desc: "This python app is a \"trainer\" for membean. It takes in the full text of your word list, parses it, and assists you in making guesses. There is a real problem with the way membean words, where instead of learning words, it rewards rope memorization. Membakedbean is meant to assist the user in getting around these outdated and unjust features, in order to maintain a reasonable vocab level."
        }
    ],
    web: [
        {
            title: "Casa Project (GradCap)",
            date: "February 2023 - April 2023",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/casa-project",
                    text: "GitHub"
                },
                {
                    url: "https://casa.quasardilla.com",
                    text: "casa.quasardilla.com"
                }
            ],
            desc: "This project is a utility for guidance counselors to quickly see what requirements students are missing, what classes they take, and more. It was a three month project with two partners, and we made a final product that exceeded expectations. It is actively being used in our guidance department."
        },
        {
            title: "natelevison.com",
            date: "December 2022 - Present",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/natelevison.com",
                    text: "GitHub"
                }
            ],
            desc: "You are on it right now! This website is built on node.js, and express.js. I even host it myself. The blog system especially utilizes backend tech, and is a great example of my node.js skills. There are also some other subdomains to visit, which also utilize node.js technology."
        },
        {
            title: "Recipe Counter",
            date: "October 2023 - November 2023",
            links: [
                {
                    url: "https://github.com/Cheespeasa1234/recipecounter",
                    text: "GitHub"
                }
            ],
            desc: "This is a discord bot interface for a Minecraft recipe counter program I built. It processes multiple CSVS of all the Minecraft recipes and analyzes it at the discretion of the Discord user."
        },
        {
            title: "journal.natelevison.com",
            date: "November 2023 - January 2024",
            links: [
                {
                    url: "https://journal.natelevison.com/signin/",
                    text: "Sign In"
                }
            ],
            desc: "This is a journaling application that (will) utilize AI technology to assist users in writing more mindful and interesting journal entries. Making this project gave me the opportunity to learn how to use SQLite, and how to use it with node.js. I made it with typescript, which I have so far enjoyed quite a bit."
        },
        {
            title: "Team 1676 Scouting Interface",
            date: "December 2023 - February 2024",
            links: [
                {
                    url: "https://github.com/PioneersTeam1676/scouting",
                    text: "GitHub"
                }
            ],
            desc: "This is the frontend interface for the mobile scouting application used during 2024 robotics tournaments. It utilizes Bootstrap and my own frameworks for some components, like 1-5 ratings, and number forms. It also has some (simple) frontend validation, so although useless, it is helpful for users who use mobile."
        }
    ]
};

const projectGroupNames = ["java", "python", "web"];
for (let i = 0; i < projectGroupNames.length; i++) {
    const projectGroupName = projectGroupNames[i];
    const projectsContent = projects[projectGroupName];
    const projectsElement = document.getElementById(`projects-${projectGroupName}`);
    const projectCountElement = document.querySelector(`.project-count-${projectGroupName}`);
    projectCountElement.innerText = `${projectsContent.length} projects`;

    for (let j = 0; j < projectsContent.length; j++) {
        const project = projectsContent[j];
        const projectElement = document.createElement("div");
        projectElement.className = "project-container";
        projectElement.innerHTML = `
            <span class="project-title">${project.title}</span>
            <div class="project-date">${project.date}</div>
        `;

        const linksElement = document.createElement("div");
        linksElement.className = "project-links";
        if (project.links.length > 0) {
            for (let k = 0; k < project.links.length; k++) {
                const link = project.links[k];
                const linkElement = document.createElement("a");
                linkElement.className = "project-lnk";
                linkElement.href = link.url;
                linkElement.innerText = link.text;
                linksElement.appendChild(linkElement);
            }
            projectElement.appendChild(linksElement);
        }

        const descElement = document.createElement("div");
        descElement.className = "project-desc";
        descElement.innerText = project.desc;
        projectElement.appendChild(descElement);

        projectsElement.appendChild(projectElement);
    }
}

// for every project container
const containers = document.getElementsByClassName("project-container");
for (let i = 0; i < containers.length; i++) {
    const container = containers.item(i);
    const title = container.querySelector(".project-title").innerText.toLowerCase().replaceAll(" ", "");
    const titlecrop = title.substring(0, Math.min(title.length, 6));
    const image = document.createElement("img");
    image.src = `https://static.natelevison.com/proj/proj_java_${titlecrop}.png`;
    // make the image fade to transparent from right to left
    image.classList.add("project-background-image");
    if(titlecrop == "boomsh" || titlecrop == "calcul") image.classList.add("bg-smaller");
    // make it the first child
    container.insertBefore(image, container.firstChild);
}