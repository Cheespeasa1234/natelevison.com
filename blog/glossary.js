const glossary = {
    "backend": "The backend is the part of a website that the user does not see. It may handle payments, emails, and authorization.",
    "frontend": "The frontend is the part of a website that the user interacts with. It may be a mobile app, a website, or a web app.",
    "hosting": "Hosting is a service that runs backend code, relieving users of server management and often utilizing cloud technology for efficiency.",
    "port forwarding": "Port Forwarding allows those with personal computers to respond to public internet traffic, bypassing their firewall restrictions.",
    "server": "A server is the physical machine / computer that executes backend code and is responsible for site traffic. It may or may not be running with server software.",
    "domain": "A domain name is the human-readable text associated with a website, representing the full IP address of the server where the site is hosted.",
    "dns": "DNS, or Domain Name Service, is a nonprofit organization that has a phone book of IP addresses, allowing users to type in a website domain instead of an IP every time.",
    "ssh": "SSH, or Secure Shell Protocol, enables remote server access through a secure command-line interface, providing a secure way to manage servers.",
    "printer": "A printer is a fragile and mysterious work of magic, its inner functions far too complex for any form of life on Earth to grasp.",
    "encryption": "Encryption is a method of securing data during transmission over the internet, rendering it unreadable to anyone without the decryption key.",
    "homebrewed": "Homebrewed refers to creating something without relying on external services or libraries, often implying a DIY or custom-made approach.",
    "authorization": "Authorization involves confirming a user's identity through encryption methods, including verification, passwords, and two-factor authentication (2FA).",
    "nginx": "Nginx is a versatile server software that efficiently manages multiple backends on a single server, suitable for various tasks, including reverse proxying.",
    "express": "Express is a simple server software that allows routing and middleware connections to be made much easier.",
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
    "html": "HTML, or HyperText Markup Language, defines the structure and content of web pages, serving as the foundation for web document rendering in browsers.",
    "tech stack": "A tech stack is the set of server softwares and tools in use by a website. A tech stack includes frontend softwares, databases, and compilers as well.",
    "java swing": "A GUI library in the Java programming language, that allows for efficient creation of forms, charts, and other basic graphic contexts.",
    "edge cases": "Edge cases are scenarios that fall outside the normal range of operation, often overlooked in testing and leading to unexpected behavior in software.",
    "nesting": "Nesting is putting multiple conditional statements or loops inside one another. Although an essential element of programming, using too many nested statements can lead to complex, inefficient, and hard-to-read code.",
    "typescript": "TypeScript is a superset of JavaScript that adds static typing and other features to the language, providing better error checking and code completion.",
    "node": "Node.js is the program that runs JavaScript, not on websites like usually, but on someone's computer, like any old app.",
    "magic values": "Magic values are hard-coded constants in code that lack context or explanation, making it difficult to understand their purpose or significance.",
    "iterate": "Iterating is the process of repeating a set of instructions or operations multiple times, often used in loops to traverse data structures or perform repetitive tasks.",
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