export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({ url }: any) => {
	return {
		url: url.pathname
	};
};