//@ts-nocheck
// import { GraphQLClient, gql } from 'graphql-request';
// import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import xss from 'xss';
import type { PageLoad } from './$types';
export const prerender = false;

const WPQL_QUERY = (language) => ({
	query: `
    query posts($language: LanguageCodeFilterEnum!) {
      posts(where: {language: $language}) {
        edges {
          node {
            id
            excerpt
            title
            slug
			date
			databaseId
			featuredImage {
					node {
						sourceUrl
					}
				}
            language {
              code
              locale
            }
          }
        }
      }
      generalSettings {
        title
        description
      }
    }
  `,
	variables: {
		language: language
	}
});

const sanitizePost = (post) => {
	return {
		...post.node, // Ensure you're accessing the `node` property here
		title: post.node.title // Example sanitization
	};
};

// export const load: PageLoad = async ({ params, url }) => {
// 	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
// 	let language;
// 	language = url.pathname === '/pt-BR/v1/blog/' ? 'PT' : 'EN';

// try {
// const response = await fetch(endpoint, {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json'
// 	},
// 	body: JSON.stringify(WPQL_QUERY(language))
// });
// 	const { data } = await response.json();
// 	const sanitizedPosts = data.posts.edges.map((post) => sanitizePost(post));
// 	// console.log(sanitizedPosts);
// 	return { posts: sanitizedPosts };
// } catch (error) {
// 	console.error('Error fetching posts:', error);
// 	return { posts: [] };
// }
// };

export const load = (async ({ fetch, url }) => {
	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
	const language = url.pathname === '/pt-BR/v1/blog/' ? 'PT' : 'EN';

	// Create a promise for the fetch request
	const promise = fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(WPQL_QUERY(language))
	})
		.then(async (res) => {
			if (!res.ok) throw new Error('Failed to fetch data');
			const { data } = await res.json(); // Destructure `data` from the response
			// console.log(res);
			// console.log(data.posts.edges);
			const sanitizedPosts = data.posts.edges.map((post) => sanitizePost(post));
			return sanitizedPosts;
		})
		.catch((err) => {
			console.error('Fetch error:', err);
			return [];
		});

	// Return the streamed promise for the `+page.svelte` to consume
	return {
		streamed: {
			lazyCritical: browser ? promise : await promise
		}
	};
}) satisfies PageLoad;
