import adapter from "@sveltejs/adapter-static";
const dev = process.argv.includes('dev');

// /** @type {import('@sveltejs/kit').Config} */
const config = {
	
	kit: {
		adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true,
	//   trailingSlash: 'always',
		}),
		paths: {
			base: dev ? '' : '',
		  },
		  // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		  // For example, instead of '_app', use 'app_', 'internal', etc.
		  appDir: 'internal',
	}
};

export default config;
