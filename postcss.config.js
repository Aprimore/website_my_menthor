// export default {
// 	plugins: {
// 		tailwindcss: {},
// 		autoprefixer: {}
// 	}
// };

import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
	plugins: [
		tailwindcss,
		autoprefixer,
		process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null
	].filter(Boolean)
};
