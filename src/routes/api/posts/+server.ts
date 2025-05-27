import { json } from '@sveltejs/kit';

async function getPosts() {
	const paths = import.meta.glob('$lib/posts/*.md', { eager: true });
	console.log('---------- paths:', paths);

	const posts = Object.entries(paths)
		.map(([path, file]) => {
			const slug = path.split('/').at(-1)?.replace('.md', '');
			console.log('---------- slug:', slug);

			if (!file || typeof file !== 'object' || !('metadata' in file) || !slug) {
				return null;
			}

			const post = file.metadata;
			console.log('---------- post:', post);

			return post.published ? { ...post, slug } : null;
		})
		.filter((post): typeof post => post !== null)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	console.log('---------- posts:', posts);
	return posts;
}

export const GET = async () => {
	return json({
		test: 'hi im test',
		mario: "Me i'm a mario",
		posts: await getPosts()
	});
};
