// import { partytownVite } from '@builder.io/partytown/utils';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		enhancedImages()
		// partytownVite({
		// 	dest: join(__dirname, 'static', '~partytown')
		// })
	],
	build: {
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						if (id.includes('@inlang/paraglide')) {
							return 'vendor-paraglide';
						}
						return 'vendor';
					}
				}
			}
		}
	},
	optimizeDeps: {
		include: ['@inlang/paraglide-js', '@inlang/paraglide-sveltekit']
	},

	// for easier debugging, don't minify
	// build: {
	// 	minify: false
	// },

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
