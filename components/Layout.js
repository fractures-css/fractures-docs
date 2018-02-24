import { Component, Fragment } from "react"
import { initGA, logPageView } from "../utils/analytics"
import Head from "next/head"
import Link from "next/link"
import Nav from "./Nav"
import meta from "../utils/meta.js"

export default class Layout extends Component {

	// Init GA on mount
	componentDidMount() {
		if(!window.GA_INITIALIZED) {
			initGA()
			window.GA_INITIALIZED = true
		}

		logPageView()
	}

	render() {
		return (
			<Fragment>
				<Head>
					<title>{this.props.title || meta.title}</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content={ meta.description } />
					<meta name="og-url" property="og:url" content={ meta.url } />
					<meta name="og-type" property="og:type" content="website" />
					<meta name="og-title" property="og:title" content={ meta.title } />
					<meta name="og-description" property="og:description" content={ meta.description } />
					<meta
						name="og-image"
						property="og:image"
						content="https://fractures.space/static/images/share.png"
					/>
					<meta name="og-image-width" property="og:image:width" content="200" />
					<meta name="og-image-height" property="og:image:height" content="200" />
					<meta name="google-site-verification" content="zOr1hPUy598X8UrDiYZLK20AkpuhWw0PYKcdOJ-NzPU" />
					<link rel="icon" href="/static/favicon.ico" />
					<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700" rel="stylesheet" />
					<link href={ meta.cdn } rel="stylesheet" />
				</Head>
				<Nav />
				<main style={ { marginTop: "4rem" } }>{this.props.children}</main>
				<style jsx global>{`
					:root {
						--color-green: #219f73;
						--color-high: #e5fedd;
						--color-red: #db5454;

						--fr-ground: #ffffff;
						--fr-100: #f2f2f7;
						--fr-300: #bccfe8;
						--fr-500: #445695;
						--fr-700: #3d3f71;
						--fr-900: #262633;
						--fr-focus: rgba(61, 63, 113, 0.25);
					}

					*::selection {
						background-color: var(--color-high);
					}

					html {
						background-color: var(--fr-100);
					}

					body {
						background-color: var(--fr-ground);
						color: var(--fr-700);

						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
							"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
						font-size: 16px;
						line-height: 1.5;
					}

					a {
						color: var(--color-green);

						cursor: pointer;
						font-weight: 500;
					}

					h1 {
						font-size: 3em;
					}

					h2 {
						font-size: 2.5em;
					}

					h3 {
						font-size: 2em;
					}

					h4 {
						font-size: 1.75em;
					}

					h5 {
						font-size: 1.5em;
					}

					p,
					h6 {
						font-size: 1em;
					}

					.source-code-pro {
						font-family: "Source Code Pro", monospace;
						font-weight: 400;
					}

					.fr-bg-silver {
						background-color: var(--fr-100);
					}

					pre {
						font-size: 0.75rem;
						font-family: "Source Code Pro", monospace;
						line-height: 1.5;
					}

					pre::selection,
					pre *::selection {
						background-color: var(--fr-100);
					}

					pre span em {
						color: var(--color-red);

						font-style: normal;
					}

					pre span {
						display: block;
					}

					pre a {
						color: var(--fr-900);

						font-weight: bold;
					}
				`}</style>
			</Fragment>
		)
	}
}
