import type { PageServerLoad } from './$types';
import { projects } from "$lib/blog";

export const load: PageServerLoad = ({ params }) => {
    return {
        projects
    }
}