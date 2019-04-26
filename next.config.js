const withCSS = require("@zeit/next-css")

module.exports = withCSS({
	exportPathMap: () => {
		return {
			"/": { page: "/" },
			"/about": { page: "/about" },
			"/docs": { page: "/docs" },
			"/styleguide": { page: "/styleguide" }
		}
	}
})
