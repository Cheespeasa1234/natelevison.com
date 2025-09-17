import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://docs.google.com/forms/d/e/1FAIpQLSc4eUTN2cLMkzXKJ_8ey0-fBU-KebmuUaGnjp6hVPCVnWxdzw/viewform?usp=dialog'); // Replace with your target URL
}
