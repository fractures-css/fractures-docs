import { Fractures } from "fractures-ui"
import { ServerStyleSheet } from "styled-components"
import Document, { Head, Main, NextScript } from "next/document"
import flush from "styled-jsx/server"

class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage()
		const styles = flush()
		const sheet = new ServerStyleSheet()

		renderPage(App => props => sheet.collectStyles(<App { ...props } />))

		const styleTags = sheet.getStyleElement()

		return {
			chunks,
			errorHtml,
			head,
			html,
			styles,
			styleTags
		}
	}

	render() {
		return (
			<html lang="en">
				<Fractures />
				<Head>
					<link rel="stylesheet" href="/_next/static/style.css" />
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default MyDocument
