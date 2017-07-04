import Link from "next/link"
import Layout from "../components/layout"

export default () =>
	<Layout title="Index">
		{/* Hero */}
		<header className="flex flex-gap-2 py-6 container">
			<div className="h-6 w-6">
				<img src="/static/images/fractures.svg" alt="fractures" />
			</div>
			<div>
				<h1 title="fractures">fr&middot;ctures</h1>
				<b className="source-code-pro">Baseline atomic CSS toolkit.</b>
				<p className="my-3">
					Fractures helps you bootstrap design-systems and prototypes
					by providing a set of non-blocking, atomic, utility classes.
				</p>
				<a
					href="https://github.com/fractures/fractures"
					className="btn btn-default">
					GitHub
				</a>
				<div className="mt-3 source-code-pro">
					<small>
						version: 1.0.0-beta.10<br />size: &lt;3kb gzipped
					</small>
				</div>
			</div>
		</header>

		{/* Skeletons */}
		<div className="py-5 bg-smoke">
			<div className="flex flex-gap-2 container">
				<div className="h-6 w-6">
					<img src="/static/images/browser--grid.png" />
				</div>
				<div className="flex flex-ycenter">
					<pre className="pre-line">
						<div>1</div>
						<div>2</div>
						<div>3</div>
					</pre>
				</div>
			</div>
		</div>

		{/* Getting started */}
		<div className="container py-5">
			<h2 className="regular mb-1">Getting started</h2>
			<ul className="list-disc mb-4 ml-3">
				<li>npm install fractures</li>
				<li>
					download vanilla &rarr;{" "}
					<a href="https://unpkg.com/fractures/dist/fractures.min.css">
						fractures.min.css
					</a>
				</li>
				<li>
					download prefixed for latest 2 browser version &rarr;{" "}
					<a href="https://unpkg.com/fractures/dist/fractures.prefixed.min.css">
						fractures.prefixed.min.css
					</a>
				</li>
				<li>
					use{" "}
					<a href="https://unpkg.com/fractures/dist/fractures.prefixed.min.css">
						unpkg
					</a>{" "}
					cdn
				</li>
			</ul>


		</div>
	</Layout>
