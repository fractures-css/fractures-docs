import NextHead from "next/head"
import { string } from "prop-types"

const defaultDescription = ""
const defaultOGURL = ""
const defaultOGImage = ""

const Head = (props) => (
	<NextHead>
		<meta charset="UTF-8" />
		<title>{props.title || ""}</title>
		<meta name="description" content={props.description || defaultDescription} />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/static/favicon.ico" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ""} />
		<meta property="og:description" content={props.description || defaultDescription} />
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />

		<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
		<link href="https://unpkg.com/fractures@0.4.35/dist/fractures.prefixed.min.css" rel="stylesheet" />
		<link href="/static/style.css" rel="stylesheet" />
		{/* <script type="text/javascript">
			(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
			ga("create", "UA-17037942-5", "auto");
			ga("send", "pageview");
		</script> */}
	</NextHead>
)

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string
}

export default Head
