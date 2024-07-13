// import { GraphQLClient, gql } from 'graphql-request';
// import { writable } from 'svelte/store';
export const prerender = false;

import type { PageLoad } from './$types';

// Import the environment variable
import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;

const WPQL_QUERY = {
	query: `{
		posts {
			nodes {
				id
				postId
				title
				content
				date
			}
		}
	}
`
};

export const load: PageLoad = async () => {
	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
	// console.log(endpoint);
	// console.log('endpoint: ', endpoint);

	try {
		// fetch(endpoint, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(WPQL_QUERY)
		// })
		// 	.then((res) => res.json())
		// 	.then((res) => console.log(res.data.posts.nodes));
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY)
		});

		const posts = await response.json();
		// console.log(posts);
		return { posts }; // Return the posts data
	} catch (error) {
		console.error('Error fetching posts:', error);
		return {}; // Return an empty object in case of error
	}
};

