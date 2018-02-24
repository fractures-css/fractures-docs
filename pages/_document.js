import Document, { Head, Main, NextScript } from "next/document"
import flush from "styled-jsx/server"

class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage()
		const styles = flush()

		return { html, head, errorHtml, chunks, styles }
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<link rel="stylesheet" href="/_next/static/style.css" />
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
