export const trailingSlash = 'always';
export const ssr = true;
export const csr=true

export const load = async ({ url, params }: any) => {
	return {
		url: url,
		slug: params
	};
};
