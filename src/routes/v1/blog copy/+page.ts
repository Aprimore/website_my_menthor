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
		...post,
		title: xss.escapeHtml(post.node.title)
	};
};

// export const load: PageLoad = async ({ params, url }) => {
// 	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
// 	let language;
// 	language = url.pathname === '/pt-br/v1/blog/' ? 'PT' : 'EN';

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

export const load = (async ({ fetch, params, url }) => {
	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
	let language;
	language = url.pathname === '/pt-br/v1/blog/' ? 'PT' : 'EN';
	const promise = new Promise((resolve, reject) => {
		fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY(language))
		})
			// .then((res) => {
			// 	console.log( promise);
			// 	// const { data } = await res.json();
			// 	// const sanitizedPosts = data.posts.edges.map((post) => sanitizePost(post));
			// 	// console.log(data);
			// 	// return { posts: sanitizedPosts };
			// 	resolve(res.json());
			// })
			// .catch((err) => {
			// 	reject(err);
			// 	return { posts: [] };
			// });
			.then(async (res) => {
				if (!res.ok) throw new Error('Failed to fetch data');
				const data = res.json();
				// const sanitizedPosts = await data.posts.edges.map((post) => sanitizePost(post));
				console.log(data);
				// console.log(sanitizedPosts);
				return data;
			})
			.catch((err) => {
				console.error('Fetch error:', err);
				return { posts: [] };
			});
	});

	return {
		streamed: {
			// await the promise if running on server
			lazyCritical: browser ? promise : await promise
		}
	};
}) satisfies PageLoad;
