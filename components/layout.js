import Link from "next/link"
import Head from "next/head"
import Nav from "./nav.js"
import { Component } from "react"
import { initGA, logPageView } from "../utils/analytics"

export default class Layout extends Component {
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
						{this.props.title || "Fractures"}
					</title>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content="xxxx" />
					<link rel="icon" href="/static/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
						rel="stylesheet"
					/>
					<link
						href="https://unpkg.com/fractures@1.0.0-beta.12/dist/fractures.prefixed.min.css"
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
