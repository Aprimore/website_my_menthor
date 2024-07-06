export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({ url, params }: any) => {
	return {
		url: url,
		slug: params
	};
};
