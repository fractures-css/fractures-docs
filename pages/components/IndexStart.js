import { Container } from "fractures-ui"
import { Fragment } from "react"
import meta from "../../utils/meta.js"

const IndexStart = () => (
	<Fragment>
		<a id="getting-started" />
		<Container className="py-5">
			<h2>Getting started</h2>
			<ul className="flex flex-column flex-gap-4 my-4">
				<li>
					<b>npm i fractures</b>
					<ul className="list-disc ml-4">
						<li>
							Then you can 🦄{" "}
							<code contentEditable suppressContentEditableWarning={ true }>
								import "fractures/dist/fractures.css"
							</code>
						</li>
						<li>For production use, I recommend running the fractures.css file through your build process.</li>
						<li>
							You can find usage examples under <a href="https://github.com/fractures/fractures-examples">fractures-examples</a> for{" "}
							<b>React</b> and <b>Next.js</b>.
						</li>
					</ul>
				</li>
				<li>
					<b>Use unpkg cdn</b>
					<ul className="list-disc ml-4">
						<li>
							<code suppressContentEditableWarning={ true } contentEditable className="float-left ellipsis">
								&lt;link href="
								{meta.cdn}" rel="stylesheet" /&gt;
							</code>
						</li>
						<li>This is not great for production, but great for prototypes or lazy people.</li>
					</ul>
				</li>

				<li>
					<b>Download with your hands</b>
					<ul className="list-disc ml-4">
						<li>
							🐹 from <a href="https://github.com/fractures/fractures/releases">GitHub</a>
						</li>
					</ul>
				</li>
			</ul>
		</Container>
	</Fragment>
)

export default IndexStart
