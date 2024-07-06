// import { partytownVite } from '@builder.io/partytown/utils';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		paraglide({
			project: './project.inlang',
			// outdir: './src/lib/paraglide'
			outdir: './src/paraglide'
		}),
		sveltekit(),
		// partytownVite({
		// 	dest: join(__dirname, 'static', '~partytown')
		// })
	],
	// build: {
	// 	rollupOptions: {
	// 		input: {
	// 			'service-worker': './src/service-worker.js' // Include service worker file here
	// 		}
	// 	}
	// },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	}
});
