// import { partytownVite } from '@builder.io/partytown/utils';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		})
		// partytownVite({
		// 	dest: join(__dirname, 'static', '~partytown')
		// })
	],
	// for easier debugging, don't minify
	build: {
		minify: false
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
	// optimizeDeps: {
	// 	include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	// }
});
