import { onMount } from "svelte";

export function setTitle(message: string, template: string = "natelevison.com | ") {
    onMount(() => {
        document.title = template + message;
    });
}