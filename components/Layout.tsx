import './Layout.css'
import 'fractures/dist/fractures.css'
import { Component, Fragment } from 'react'
import Head from 'next/head'
import meta from '../utils/meta'
import Nav from './Nav'

class Layout extends Component<any, any> {
	constructor(props) {
		super(props)
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
					<meta name="og-image" property="og:image" content="https://fractures.space/static/images/share.png" />
					<meta name="og-image-width" property="og:image:width" content="200" />
					<meta name="og-image-height" property="og:image:height" content="200" />
					<link rel="icon" href="/static/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,600,600i|Roboto+Mono:400,700&display=swap"
						rel="stylesheet"
					/>
					<script
						dangerouslySetInnerHTML={ {
							__html: `
								(function(f, a, t, h, o, m){
								a[h]=a[h]||function(){
								(a[h].q=a[h].q||[]).push(arguments)
								};
								o=f.createElement('script'),
								m=f.getElementsByTagName('script')[0];
								o.async=1; o.src=t; o.id='fathom-script';
								m.parentNode.insertBefore(o,m)
								})(document, window, 'https://cdn.usefathom.com/tracker.js', 'fathom');
								fathom('set', 'siteId', '${ process.env.FATHOM_FRACTURES_SPACE }');
								fathom('trackPageview');
							`
						} }
					/>
				</Head>
				<Nav />
				<main className="pb-5" style={ { marginTop: '4rem' } }>
					{this.props.children}
				</main>
			</Fragment>
		)
	}
}

export default Layout
