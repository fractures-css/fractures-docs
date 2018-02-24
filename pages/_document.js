import Document, { Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
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
