import Link from "next/link"
import Layout from "../components/layout"

const Index = () =>
	<Layout title="Index">
		{/* Hero */}
		<header className="flex flex-gap-4 py-6 container">
			<div className="h-6 w-6">
				<img src="/static/images/fractures.svg" alt="fractures" />
			</div>
			<div>
				<h1 title="fractures">fr&middot;ctures</h1>
				<b className="source-code-pro">Baseline atomic CSS toolkit.</b>
				<p className="my-3">
					Fractures helps you bootstrap design-systems and prototypes
					by providing a set of non-blocking, atomic, utility classes.{" "}
					<Link href="/about">
						<a className="underline">Learn more.</a>
					</Link>
				</p>
				<div className="flex flex-gap-1">
					<a
						onClick={e => Index.scrollG(e)}
						className="btn btn-primary"
					>
						Getting started
					</a>
					<a
						href="https://github.com/fractures/fractures"
						className="btn btn-default"
					>
						GitHub
					</a>
				</div>
				<div className="mt-3 source-code-pro">
					<small>
						version: 1.0.0-beta.10<br />
						size: &lt;3kb gzipped
					</small>
				</div>
			</div>
		</header>

		{/* Skeletons */}
		<div className="py-5 bg-fractures-gray">
			<div className="container">
				<div className="fractures-skeleton flex flex-gap-2 flex-around">
					<div className="skeleton-item">
						<img src="/static/images/browser--container.png" alt />
						<a>Basics</a>
					</div>
					<div className="skeleton-item active">
						<img src="/static/images/browser--flex.png" alt />
						<a>Basics</a>
					</div>
					<div className="skeleton-item">
						<img src="/static/images/browser--print.png" alt />
						<a>Basics</a>
					</div>
					<div className="skeleton-item">
						<img src="/static/images/browser--grid.png" alt />
						<a>Basics</a>
					</div>
					<div className="skeleton-item">
						<img src="/static/images/browser--sticky.png" alt />
						<a>Basics</a>
					</div>
				</div>
			</div>
		</div>

		{/* Getting started */}
		<div className="container py-5" id="getting-started">
			<h2>Getting started</h2>
			<ul className="flex flex-column flex-gap-4 my-4">
				<li>
					<b>Use unpkg cdn</b>
					<ul className="list-disc ml-4">
						<li>
							&lt;link
							href="https://unpkg.com/fractures@1.0.0/dist/fractures.prefixed.min.css"
							rel="stylesheet" /&gt;
						</li>
						<li>
							This is not great for production, but great for
							prototypes or lazy people.
						</li>
					</ul>
				</li>
				<li>
					<b>npm i fractures</b>
					<ul className="list-disc ml-4">
						<li>
							Then you can 🦄{" "}
							<em>
								import fractures from
								fractures/dist/fractures.css
							</em>
						</li>
						<li>
							For production use, I recommend running the
							fractures.css file through your build process.
						</li>
						<li>
							<span className="line-through">
								Here is an example repo with React.
							</span>
						</li>
					</ul>
				</li>
				<li>
					<b>Download with your hands</b>
					<ul className="list-disc ml-4">
						<li>
							🐹 from{" "}
							<a
								href="https://github.com/fractures/fractures/releases"
								className="underline"
							>
								GitHub
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</Layout>

Index.scrollG = e => {
	e.preventDefault()

	if (typeof window === "undefined") return false

	return document.getElementById("getting-started").scrollIntoView(true)
}

export default Index
