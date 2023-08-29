const glossary = {
    "backend": "The backend is the non-user-facing part of a website responsible for server-side tasks like data storage, payment processing, and email handling.",
    "frontend": "The frontend is the user-facing part of a website, responsible for displaying content such as text, images, and videos on the user's device.",
    "hosting": "Hosting is a service that runs backend code, relieving users of server management and often utilizing cloud technology for efficiency.",
    "port forwarding": "Port forwarding enables public internet traffic to access a server and establish connections by directing incoming requests to specific ports.",
    "server": "A server is either a physical machine or software that executes backend code, serving data and resources to users, often hosted in homes or the cloud.",
    "domain": "A domain name is the human-readable text associated with a website, representing the full IP address of the server where the site is hosted.",
    "dns": "DNS, or Domain Name Service, is a nonprofit organization that maintains domain name records, allowing browsers to resolve domain names to IP addresses.",
    "ssh": "SSH, or Secure Shell Protocol, enables remote server access through a secure command-line interface, providing a secure way to manage servers.",
    "printer": "A printer is a device that produces printed documents by transferring ink or toner onto paper, though it is notorious for its tendency to malfunction.",
    "encryption": "Encryption is a method of securing data during transmission over the internet, rendering it unreadable to anyone without the decryption key.",
    "homebrewed": "Homebrewed refers to creating something without relying on external services or libraries, often implying a DIY or custom-made approach.",
    "authorization": "Authorization involves confirming a user's identity through encryption methods, including verification, passwords, and two-factor authentication (2FA).",
    "nginx": "Nginx is a versatile server software that efficiently manages multiple backends on a single server, suitable for various tasks, including reverse proxying.",
    "debugging": "Debugging is the process of identifying and resolving issues in code when it does not perform as intended, ensuring it functions correctly.",
    "ssd": "An SSD, or Solid-State Drive, is a storage device that uses semiconductor technology, offering faster data access and durability compared to traditional HDDs.",
    "boids simulation": "A Boids simulation models emergent behavior, demonstrating how simple rules governing individual agents can lead to complex collective behavior, like bird flocking or fish schooling.",
    "fizzbuzz": "FizzBuzz is a classic programming challenge where numbers from 1 to 100 are printed, with 'fizz' for multiples of 3 and 'buzz' for multiples of 5.",
    "syntax": "Syntax defines the rules governing the structure and composition of code in a programming language, analogous to the grammatical rules of a natural language.",
    "applets": "Applets were small programs that ran within web browsers but were phased out due to security concerns, as they could execute code on the user's device.",
    "api": "An API, or Application Programming Interface, consists of functions and protocols that enable one software program or application to interact with another.",
    "css": "CSS, or Cascading Style Sheets, is a widely used language for styling websites, allowing designers to control elements' appearance, including colors, sizes, and layouts.",
    "javascript": "JavaScript is the dominant programming language for web development, enabling interactive features like animations, games, and dynamic content.",
    "js": "JS is a common abbreviation for JavaScript, the scripting language widely used in web development for enhancing website interactivity and functionality.",
    "html": "HTML, or HyperText Markup Language, defines the structure and content of web pages, serving as the foundation for web document rendering in browsers."
}

function glossarize(element) {
    const pTags = element.querySelectorAll("p");
    pTags.forEach(p => {
        // for every glossary entry
        for (const term in glossary) {
            // replace the first instance of the term with a link to the glossary
            const regex = new RegExp(`(${term})`, "i");
            const replacementEl = document.createElement("span");
            replacementEl.classList.add("glossary");
            replacementEl.id = "gloss-" + term.replace(" ", "-");
            replacementEl.textContent = term;

            const replacementStr = replacementEl.outerHTML;
            p.innerHTML = p.innerHTML.replace(regex, (_, match) => {
                return replacementStr.replace(`>${term}<`, `>${match}<`);
            });
        }
    });
    const glossaryTerms = element.querySelectorAll("span.glossary");
    glossaryTerms.forEach(term => {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = glossary[term.innerHTML.toLowerCase()];
        tooltip.style.left = term.offsetLeft + "px";
        term.appendChild(tooltip);
    });
}

const articles = document.querySelectorAll("div.content")
articles.forEach(glossarize);