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

export const load: PageServerLoad = ({ params }) => {
	const slug = params.slug;

	if (slug.startsWith("ba")) {
		const articlecode = slug.substring(2);
		if (isNameRealArticle(articlecode)) {
			throw redirect(HTTP.PERMANENT_REDIRECT, "/blog/article/" + articlecode);
		} else {
			error(HTTP.NOT_FOUND);
		}
	}

	const redirectData: RedirectData | undefined = redirects[slug];
	if (redirectData !== undefined) {
		throw redirect(redirectData.status, redirectData.url); // Replace with your target URL
	} else {
		error(404);
	}
}
