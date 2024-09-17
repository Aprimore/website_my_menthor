// export default {
// 	plugins: {
// 		tailwindcss: {},
// 		autoprefixer: {}
// 	}
// };

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		process.env.NODE_ENV === 'production' &&
			require('cssnano')({
				preset: 'default'
			})
	]
};

// import cssnano from 'cssnano';
// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// export default {
// 	plugins: [
// 		tailwindcss,
// 		autoprefixer,
// 		process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null
// 	].filter(Boolean)
// };
