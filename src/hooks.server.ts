import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type, path }) => type === "font" || path.includes("bootstrap")
	});

	return response;
};