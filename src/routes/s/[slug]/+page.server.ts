import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { isNameRealArticle } from "$lib/blog";
import { HTTP } from '$lib/apis';

type RedirectData = {
	status: number,
	url: string,
}

// List of constant redirects. There are also some manually programmed ones.
const redirects: {[id: string]: RedirectData} = {
	'election': {
		status: HTTP.PERMANENT_REDIRECT,
		url: 'https://docs.google.com/forms/d/e/1FAIpQLSc4eUTN2cLMkzXKJ_8ey0-fBU-KebmuUaGnjp6hVPCVnWxdzw/viewform?usp=dialog'
	}
}

/**
 * On /s/[slug] load, see if slug is a valid shortlink, and if so, go there.
 */
export const load: PageServerLoad = ({ params }) => {
	const slug = params.slug;

	if (isNameRealArticle(slug)) {
		throw redirect(HTTP.PERMANENT_REDIRECT, "/blog/article/" + slug);
	}

	const redirectData: RedirectData | undefined = redirects[slug];
	if (redirectData !== undefined) {
		throw redirect(redirectData.status, redirectData.url); // Replace with your target URL
	} else {
		error(HTTP.NOT_FOUND);
	}
}
