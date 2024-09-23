export const load = async ({ url, params }: any) => {
	// const { pathname } = url;
	// let lang = pathname.match(/\w+?(?=\/|$)/)?.[0] || '';
	// if (lang.startsWith('pt')) {
	// lang = 'pt-BR';
	// } else {
	// lang = 'en'; // Default to PT
	// }
	// const route = pathname.replace(new RegExp(`^/${lang}`), '');
	// Set locale and route
	// await setLocale(lang);
	// await setRoute(route);
	// return { url, slug: params, route, lang, pathname };

	return {
		url: url,
		slug: params
	};
};

