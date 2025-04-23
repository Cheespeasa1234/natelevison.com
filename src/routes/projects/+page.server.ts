import type { PageServerLoad } from './$types';
import { error } from "@sveltejs/kit";
import { projects } from "$lib/project";
import { HTTP } from '$lib/apis';

export const load: PageServerLoad = ({ params }) => {
    return {
        projects
    }
}