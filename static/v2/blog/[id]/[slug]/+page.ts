// <!-- /blog/[id]/[slug]/+page.svelte -->
//@ts-nocheck
// [postid]/+page.ts
// Import the environment variable
// export const prerender = false;
import type { Load } from '@sveltejs/kit';
import xss from 'xss';

export const load: Load = async ({ params }) => {
	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
	const slug = params.slug;
	// const postId = params.postId as string;

	const WPQL_QUERY = {
		query: `{
            post(id: "${slug}", idType: SLUG) {
                id
                title
                content
                slug
                postId
                date
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }`
	};

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY)
		});

		const { data } = await response.json();

		// Sanitize HTML content using xss library
		if (data.post && data.post.content) {
			data.post.content = xss(data.post.content);
		}

		return {
			post: data.post
		};
	} catch (error) {
		console.error('Error loading post:', error);
		return {
			error: 'Failed to load post'
		};
	}
};
