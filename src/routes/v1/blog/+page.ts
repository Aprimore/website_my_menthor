//@ts-nocheck
// import { GraphQLClient, gql } from 'graphql-request';
// import { writable } from 'svelte/store';
export const prerender = false;
import type { PageLoad } from './$types';

import xss from 'xss';

const WPQL_QUERY = {
	query: `{
		posts {
			nodes {
				id
				postId
				databaseId
				slug
				title
				date
				featuredImage {
					node {
						sourceUrl
					}
				}
			}
		}
	}
`
};

const sanitizePost = (post) => {
	return {
		...post,
		title: xss.escapeHtml(post.title)
	};
};

export const load: PageLoad = async () => {
	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY)
		});

		const { data } = await response.json();
		const sanitizedPosts = data.posts.nodes.map((post) => sanitizePost(post));
		return { posts: sanitizedPosts };
	} catch (error) {
		console.error('Error fetching posts:', error);
		return {};
	}
};
