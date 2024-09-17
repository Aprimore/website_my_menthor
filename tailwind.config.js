/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	plugins: [require('@tailwindcss/typography')],
	safelist: [{ pattern: /(font|text|bg|border|hover|focus)-./ }],
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
	}
};
