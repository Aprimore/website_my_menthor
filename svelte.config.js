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
	onwarn: (warning, handler) => {
		if (warning.filename.includes('@lottiefiles/svelte-lottie-player')) {
			return;
		}

		if (warning.code === 'a11y-click-events-have-key-events') return;
		if (warning.code === 'a11y-no-static-element-interactions') return;
		handler(warning);
	},
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
			fallback: 'error.html',
			precompress: false,
			strict: false
		}),
		prerender: {
			entries: ['*'],
			origin: 'https://mymenthor.com'
		},
		version: {
			name: Date.now().toString()
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
