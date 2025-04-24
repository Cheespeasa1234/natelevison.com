import { onMount } from "svelte";

const glossary: Map<string | string[], string> = new Map();
glossary.set("API", "Short for Application Programming Interface- a method for two aspects of a complex program, or even separate programs, to communicate.");
glossary.set("CSS", "Cascading Style Sheets is a programming language on the web for styling and designing web pages, like fonts and colors.");
glossary.set(["JS", "JavaScript"], "JavaScript is a programming language for defining the behavior of web pages, like buttons or videos.");
glossary.set("HTML", "HyperText Markup Language is a markup language for defining the structure of a web page, like making articles, paragraphs, and headers.");

export function glossarizeParagraph(element: HTMLParagraphElement) {
    // For every glossary entry
    glossary.forEach((value, key) => {
        if (Array.isArray(key)) {
            for (const k of key) {
                if (element.innerHTML.indexOf(k) !== -1) {
                    element.innerHTML = element.innerHTML.replace(k, `<span class="gloss" data-tippy-content="${value}">${k}</span>`);
                    break;
                }
            }
        } else {
            element.innerHTML = element.innerHTML.replace(key, `<span class="gloss" data-tippy-content="${value}">${key}</span>`);
        }
    });
}