//@ts-nocheck
// import { GraphQLClient, gql } from 'graphql-request';
// import { writable } from 'svelte/store';
export const prerender = false;
import xss from 'xss';
import type { PageLoad } from './$types';

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

export const load: PageLoad = async ({ params, url }) => {
	const endpoint = `${import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL}`;
	let language;
	language = url.pathname === '/pt-br/v1/blog/' ? 'PT' : 'EN';

	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(WPQL_QUERY(language))
		});

		const { data } = await response.json();
		const sanitizedPosts = data.posts.edges.map((post) => sanitizePost(post));
		// console.log(sanitizedPosts);
		return { posts: sanitizedPosts };
	} catch (error) {
		console.error('Error fetching posts:', error);
		return {};
	}
};
