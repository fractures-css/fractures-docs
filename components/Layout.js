import "./Layout.css"
import "fractures"
import { Component, Fragment } from "react"
import { initGA, logPageView } from "../utils/analytics"
import Head from "next/head"
import Link from "next/link"
import meta from "../utils/meta.js"
import Nav from "./Nav"
import NProgress from "nprogress"
import Router from "next/router"

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends Component {

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
				</Head>
				<Nav />
				<main style={ { marginTop: "4rem" } }>{this.props.children}</main>
			</Fragment>
		)
	}
}

export default Layout
