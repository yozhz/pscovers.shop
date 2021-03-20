export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	env: {},
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
        '@nuxtjs/google-analytics'
    ],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},

    googleAnalytics: {
        id: 'G-4P6HNKCS39',
        dev: false
    }
}
