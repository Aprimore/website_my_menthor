// @ts-ignore
import xss from 'xss';

export const WPQL_QUERY = (language: string) => ({
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
		language
	}
});

export const sanitizePost = (post) => {
	return {
		...post.node,
		title: xss(post.node.title),
		excerpt: xss(post.node.excerpt)

		// Example sanitization
	};
};

export const sanitizeHtml = (html: string): string => {
	return xss(html);
};
