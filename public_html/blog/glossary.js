const glossary = {
    "backend": "The backend is the part of a website that the user does not see. It handles accounts, storage, and other algorithms.",
    "frontend": "The frontend is the part of a website that the user interacts with. It may be a mobile app, a website, or a kiosk.",
    "hosting": "Whoever is hosting a website is the person/computer running the code and operating the services.",
    "port forwarding": "Port Forwarding allows those with personal computers to respond to public internet traffic, bypassing their firewall restrictions.",
    "server": "A server is the physical machine / computer that executes backend code and is responsible for site traffic. It may or may not be running with server software.",
    "domain": "A domain name is the human-readable text associated with a website, like natelevison.com or google.com.",
    "dns": "DNS, or Domain Name Service, is a nonprofit organization that has a phone book of IP addresses, allowing users to type in a website domain instead of an IP every time.",
    "ssh": "SSH, or Secure Shell Protocol, lets people securely operate a computer from far away, using another computer and the internet.",
    "printer": "A printer is a fragile and mysterious work of magic, its inner functions far too complex for any form of life on Earth to grasp.",
    "encryption": "Encryption is the process of modifying plaintext, so that only the intended recipient can read the original message.",
    "homebrewed": "A homebrewed project is like a DIY project, but for programmers. It typically emphasizes lack of reliance on big companies.",
    "authorization": "Authorization is the process of ensuring sensitive data is only sent to the intended recipient, like payment details, shopping carts, and other data.",
    "nginx": "Nginx is a server software that puts itself in between the internet and the rest of the software, making it easy to route requests, geoblock, and secure the connection.",
    "express": "Express is a simple server software that responds to simple requests and routes operations.",
    "debugging": "Debugging is the process of identifying and resolving issues in code when it does not perform as intended.",
    "ssd": "An SSD, or Solid-State Drive, is a storage device that uses semiconductor technology, offering faster data access and durability compared to traditional HDDs.",
    "boids simulation": "A boids simulation is a computer simulation of flocking creatures, like birds, fish, or flies.",
    "fizzbuzz": "FizzBuzz is where numbers from 1 to 100 are printed, with 'fizz' for multiples of 3 and 'buzz' for multiples of 5, similar to the classic children's game.",
    "syntax": "Syntax is the rules behind structure and formatting that are required in a programming language.",
    "applets": "Applets were small programs that ran within web browsers, but were phased out due to security concerns, as they could execute code on the user's device.",
    "api": "An API, or Application Programming Interface, is a web server that manages data and performs complex tasks, and allows servers to communicate.",
    "css": "CSS, or Cascading Style Sheets, is a programming language that defines the visuals of a web page.",
    "javascript": "Javascript, in the browser, is used to define behavior and interactions of a web page.",
    "js": "Javascript, in the browser, is used to define behavior and interactions of a web page.",
    "html": "HTML, or HyperText Markup Language, is a markup that defines the actual content of a web page.",
    "tech stack": "A tech stack is the set of server softwares and tools in use by a website. A tech stack includes frontend softwares, databases, and compilers as well.",
    "java swing": "Swing is a GUI library in the Java programming language, that allows for efficient creation of forms, charts, and other basic graphic contexts.",
    "edge cases": "Edge cases are scenarios in a program that are unexpected, and un-accounted for.",
    "nesting": "Nesting is putting multiple conditional statements or loops inside one another. Although an essential element of programming, using too many nested statements can lead to complex, inefficient, and hard-to-read code.",
    "typescript": "Typescript is a language that expands upon JavaScript, adding typing and strict methodology.",
    "node": "Node.js is the program that runs JavaScript, not on websites like usually, but on someone's computer, like many other programming languages.",
    "magic values": "Magic values are values that are used in code without any context to why their value is what it is. It is unprofessional and bad practice to not document the values you use.",
    "iterate": "Iterating is when you step over every entry in a list, performing a task for every single one.",
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
            tippy(replacementEl, { content: glossary[term]});
        }
    });
    const glossaryTerms = element.querySelectorAll("span.glossary");
    glossaryTerms.forEach(term => {
        glossaryTerms.forEach(term => {
            tippy(term, {
                content: glossary[term.innerHTML.toLowerCase()],
            });
        });
    });
}