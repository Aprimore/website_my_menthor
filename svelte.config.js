// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		prerender: {
			handleMissingId: 'warn' // or 'ignore' to completely suppress the error
		},
		adapter: adapter(),
		files: {
			serviceWorker: 'src/service-worker.js'
		},

		alias: {
			//You can call this whatever you want
			$paraglide: './src/lib/paraglide'
		}
	}
};

// adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: undefined,
// 			precompress: false,
// 			strict: true
// 		}),

export default config;
