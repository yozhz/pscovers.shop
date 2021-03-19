const strapiBaseUri = 'https://apicovers.xyz';

export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	env: {
		strapiBaseUri,
	},
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'pscovers.shop',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
        { src: '@/assets/app.css' }
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/strapi'
	],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	},

	strapi: {
		url: strapiBaseUri
	}
}
