import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch('/api/posts');
		const data = await res.json();

		return {
			api: data
		};
	} catch (err) {
		error(404, `Page not found - Error: ${err}`);
	}
};
