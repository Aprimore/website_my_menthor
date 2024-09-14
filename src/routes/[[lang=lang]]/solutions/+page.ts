export const prerender = true;

import type { PageLoad } from './$types';
export const load = (async (params) => {
	// console.log(params);
	return {
		slug: params
	};
}) satisfies PageLoad;

// import type { PageServerLoad } from './$types';

// export const load = (async ({ setHeaders }) => {
// 	setHeaders({
// 		'Cache-Control': `max-age-0, s-maxage=${60 * 60}`
// 	});

// 	return {};
// }) satisfies PageServerLoad;
