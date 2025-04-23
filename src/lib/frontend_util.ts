import { onMount } from "svelte";

export function setTitle(message: string, template: string = " | Nate Levison") {
    onMount(() => {
        document.title = message + template;
    });
}

export function since(year: number, month: string): string {
    const monthNumber = new Date(Date.parse(month + " 1, 1971")).getMonth();
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const yearsSince = currentYear - year;
    const monthsSince = currentMonth - monthNumber;
    const totalMonths = yearsSince*12 - monthsSince;

    const years = (totalMonths / 12);

    return `${Math.round(years / 0.25) * 0.25} years`;
}