import { Button, Container } from "fractures-ui"
import Link from "next/link"
import meta from "../../../utils/meta.js"

const IndexHero = () => (
	<Container className="flex flex-gap-4 flex-wrap py-6">
		<div className="h-6 w-6">
			<img src="/static/images/fractures.svg" alt="fractures" className="h-6 w-6" />
		</div>
		<div className="grow-1">
			<h1 title="fractures">fr&middot;ctures</h1>
			<b className="source-code-pro">Baseline atomic CSS toolkit.</b>
			<p className="my-3">
				<b>fractures</b> helps you bootstrap design-systems and prototypes by providing a set of non-blocking,
				atomic, utility classes.{" "}
				<Link href="/about">
					<a>Learn more.</a>
				</Link>
			</p>
			<div className="flex flex-gap-1">
				<Button
					action={ e => {
						document.getElementById("getting-started").scrollIntoView(true)
					} }
					isRounded={ false }
					type="primary"
					value="Getting started"
				/>
				<Button
					action={ () => (window.location = "https://github.com/fractures/fractures") }
					isRounded={ false }
					type="secondary"
					value="GitHub"
				/>
			</div>
			<div className="mt-3 source-code-pro">
				<small>
					version: {meta.version}
					<br />
					size: {meta.size}b gzipped
				</small>
			</div>
		</div>
	</Container>
)

export default IndexHero
