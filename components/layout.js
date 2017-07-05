import Link from "next/link"
import Head from "next/head"
import Nav from "./nav.js"

export default ({ children, title = "Fractures" }) =>
	<div>
		<Head>
			<title>
				{title}
			</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
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
			{/* <script type="text/javascript">
				(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
				ga("create", "UA-17037942-5", "auto");
				ga("send", "pageview");
			</script> */}
		</Head>
		<main>
			<Nav />
			<div className="fr-content">
				{children}
			</div>
		</main>
	</div>
