import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

let base_path = ""
if (process.env.SEMAPHORE) {
	base_path = "/svelte-awesome"
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		paths: {
			base: base_path
		},
		vite: {
		    optimizeDeps: {
		      include: ["highlight.js/lib/core"],
		    },
		},
	}
};

export default config;