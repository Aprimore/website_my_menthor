import type { PageServerLoad } from './$types';
import { WPQL_QUERY, sanitizePost } from './utils';

export const prerender = true;

export const load: PageServerLoad = async ({ fetch, url }) => {
	const endpoint = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
	const language = url.pathname.includes('/pt-BR/') ? 'PT' : 'EN';

	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(WPQL_QUERY(language))
	});

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const { data } = await response.json();
	const sanitizedPosts = data.posts.edges.map((post) => sanitizePost(post));

	return {
		slug: { lang: language === 'PT' ? 'pt-BR' : 'en' },
		posts: sanitizedPosts
	};
};
