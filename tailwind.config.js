/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,postcss}'],
	theme: {
		// extend: {}
		extend: {
			fontFamily: {
				exo: ['Exo Variable', 'sans-serif'],
				archivo: ['Archivo Variable', 'sans-serif']
			},
			fontWeight: {
				regular: 400,
				semibold: 600,
				bold: 700
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	safelist: [
		// Add any classes that are dynamically created and might be missed by the purge process
	]
};

// export default {
// 	content: ['./src/**/*.{html,js,ts,svelte}'],
// 	plugins: [require('@tailwindcss/typography')],
// 	// safelist: [{ pattern: /(font|text|bg|border|hover|focus)-./ }],
// 	theme: {
// 		// extend: {}
// 		extend: {
// 			fontFamily: {
// 				exo: ['Exo Variable', 'sans-serif'],
// 				archivo: ['Archivo Variable', 'sans-serif']
// 			},
// 			fontWeight: {
// 				regular: 400,
// 				semibold: 600,
// 				bold: 700
// 			}
// 		}
// 	}
// };
