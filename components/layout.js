import Link from "next/link"
import Head from "next/head"
import Nav from "./nav.js"
import { Component } from "react"
import { initGA, logPageView } from "../utils/analytics"

export default class Layout extends Component {

	const description = "Baseline atomic CSS toolkit."
	const title = "fractures"
	const url = "https://fractures.space"

	// Init GA on mount
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA()
			window.GA_INITIALIZED = true
		}

		logPageView()
	}

	render() {
		return (
			<main>
				<Head>
					<title>
						{this.props.title || title}
					</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content={ description } />
					<meta name="og-url" property="og:url" content={ url } />
					<meta name="og-type" property="og:type" content="website" />
					<meta name="og-title" property="og:title" content={ title } />
					<meta name="og-description" property="og:description" content={ description } />
					<meta name="og-image" property="og:image"
						content="https://fractures.space/static/images/share.png" />
					<meta name="og-image-width" property="og:image:width" content="200" />
					<meta name="og-image-height" property="og:image:height" content="200" />
					<meta name="google-site-verification" content="zOr1hPUy598X8UrDiYZLK20AkpuhWw0PYKcdOJ-NzPU" />
					<link rel="icon" href="/static/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700"
						rel="stylesheet"
					/>
					<link
						href="https://unpkg.com/fractures@1.0.0/dist/fractures.prefixed.min.css"
						rel="stylesheet"
					/>
					<link href="/static/css/style.css" rel="stylesheet" />
				</Head>
				<Nav />
				<div className="fr-content">
					{this.props.children}
				</div>
			</main>
		)
	}
}
