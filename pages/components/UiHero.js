import { Fragment } from "react"
import Link from "next/link"

const UiHero = () => (
	<Fragment>
		<header className="pb-4">
			<h1>UI</h1>
			<p className="mb-2">
				Remember when I said framework agnostic?
				<br />
				Fractures UI is a small-but-nice, stateless component library for <b>React</b>, built on top of{" "}
				<Link href="/">
					<a>fractures</a>
				</Link>
				.
			</p>
			<p>
				This is really just an experimental implementation; not included in fractures.css.
				<br />
				Open an <a href="https://github.com/fractures/fractures-ui">issue</a>, and tell me what you think.
			</p>
		</header>
		<div className="pb-4">
			<h3>Let me try</h3>
			<ul className="list-disc ml-4 mt-1">
				<li>
					<code>npm i fractures</code>
				</li>
				<li>
					<code>npm i fractures-ui</code>
				</li>
				<li>
					<code>import "fractures/dist/fractures.css"</code>
				</li>
				<li>
					<code>
						import {`{`} Button {`}`} from "fractures-ui"
					</code>
				</li>
			</ul>
		</div>
		<div className="pb-4">
			<h3>Goals</h3>
			<ul className="list-disc ml-4 mt-1">
				<li>Minimum viable design</li>
				<li>Functional prototypes</li>
			</ul>
		</div>
	</Fragment>
)

export default UiHero
