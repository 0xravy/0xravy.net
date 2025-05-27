import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`$lib/posts/${params.slug}.md`);
		console.log(post);

		return {
			slug: params.slug,
			meta: post.metadata,
			content: post.default
		};
	} catch (err) {
		error(404, `Page not found - Error: ${err}`);
	}
};
