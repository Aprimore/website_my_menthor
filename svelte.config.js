// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const dev = process.argv.includes('dev');
// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// prerender: {
		// 	handleMissingId: 'warn', // or 'ignore' to completely suppress the error
		// 	entries: ['*']
		// },
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: false
		}),
		prerender: {
			entries: ['*']
		},

		// files: {
		// 	serviceWorker: 'src/service-worker.js'
		// },

		// paths: {
		// 	base: '', // Set this to '' if your site is at the root of the domain
		// 	assets: '' // Set this if your assets are served from a different URL
		// },

		alias: {
			$paraglide: './src/paraglide'
		}
	}
};

export default config;
