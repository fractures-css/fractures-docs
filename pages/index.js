import { Component } from "react"
import Link from "next/link"
import Layout from "../components/layout"

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = { example: 0 }
		this.scrollG = this.scrollG.bind(this)
		this.showExample = this.showExample.bind(this)
	}

	// Scroll to getting started section without hashchange
	scrollG = e => {
		e.preventDefault()

		if (typeof window === "undefined") return false

		return document.getElementById("getting-started").scrollIntoView(true)
	}

	// Switches between quick examples
	showExample(e, example) {
		e.preventDefault()

		this.setState({ example: example })
	}

	render() {
		const exampleIntro = (
			<pre>
				<span className="color-gray mb-3">
					Use atomic, self-explanatory classes with ease.
				</span>
				<span>
					&lt;div class="<em>flex flex-center</em>"&gt;
				</span>
				<span>&emsp;&lt;div&gt;&lt;/div&gt;</span>
				<span>&emsp;&lt;div&gt;&lt;/div&gt;</span>
				<span>&lt;/div&gt;</span>
			</pre>
		)

		const exampleBoxes = (
			<pre>
				<span className="color-gray mb-3">
					Have a default size-scale for persevering layouts.
				</span>
				<span>
					&lt;header class="<em>fixed w-100 py-2</em>" /&gt;
				</span>
				<span>
					&lt;article class="<em>mx-auto py-4</em>" /&gt;
				</span>
			</pre>
		)

		const exampleSticky = (
			<pre className="source-code-pro">
				<span className="mb-3">
					Achieve more complex layout with just a few classes.<br />
					Eg.: sticky footer with minimum element height
				</span>
				<span>
					&lt;div class="<em>flex flex-column minvh-100</em>"&gt;
				</span>
				<span>
					&emsp;&lt;div class="<em>grow-1</em>" /&gt;
				</span>
				<span>&emsp;&lt;footer /"&gt;</span>
				<span>&lt;/div&gt;</span>
			</pre>
		)

		const exampleOwn = (
			<pre>
				<span className="mb-3">
					Mix and match with your own css.<br />
					Checkout{" "}
					<Link href="/docs">
						<a>docs</a>
					</Link>{" "}
					for a complete overview.
				</span>
				<span>
					&lt;div class="your-container <em>grid grid-gap-2</em>"&gt;
				</span>
				<span>
					&emsp;&lt;div class="your-container__el <em>py-3</em>" /&gt;
				</span>
				<span>&lt;/div&gt;</span>
			</pre>
		)

		return (
			<Layout title="Index">
				<header className="flex flex-gap-4 flex-wrap py-6 fr-container">
					<div className="h-6 w-6">
						<img
							src="/static/images/fractures.svg"
							alt="fractures"
							className="h-6 w-6"
						/>
					</div>
					<div className="grow-1">
						<h1 title="fractures">fr&middot;ctures</h1>
						<b className="source-code-pro">Baseline atomic CSS toolkit.</b>
						<p className="my-3">
							Fractures helps you bootstrap design-systems and prototypes by providing
							a set of non-blocking, atomic, utility classes.{" "}
							<Link href="/about">
								<a className="underline">Learn more.</a>
							</Link>
						</p>
						<div className="flex flex-gap-1">
							<a
								onClick={e => this.scrollG(e)}
								className="btn btn-primary radius-max"
							>
								Getting started
							</a>
							<a
								href="https://github.com/fractures/fractures"
								className="btn btn-default radius-max"
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
				<div className="skeleton__nav">
					<ul className="fr-container flex flex-gap-4">
						<li
							className={this.state.example === 0 && "active"}
							onClick={e => this.showExample(e, 0)}
						>
							Basics
						</li>
						<li
							className={this.state.example === 1 && "active"}
							onClick={e => this.showExample(e, 1)}
						>
							Sizes
						</li>
						<li
							className={this.state.example === 2 && "active"}
							onClick={e => this.showExample(e, 2)}
						>
							Complex
						</li>
						<li
							className={this.state.example === 3 && "active"}
							onClick={e => this.showExample(e, 3)}
						>
							Extend
						</li>
					</ul>
				</div>
				<div className="py-5 fr-skeleton">
					<div className="fr-container">
						<div className="flex flex-xcenter flex-gap-4 flex-wrap">
							<div className="skeleton-item mb-4">
								<img
									src={` /static/images/browser-${this.state.example}.svg `}
									className="float-left"
								/>
							</div>
							<div className="grow-1">
								{this.state.example === 0 && exampleIntro}
								{this.state.example === 1 && exampleBoxes}
								{this.state.example === 2 && exampleSticky}
								{this.state.example === 3 && exampleOwn}
							</div>
						</div>
					</div>
				</div>

				{/* Getting started */}
				<div className="fr-container py-5" id="getting-started">
					<h2>Getting started</h2>
					<ul className="flex flex-column flex-gap-4 my-4">
						<li>
							<b>Use unpkg cdn</b>
							<ul className="list-disc ml-4">
								<li>
									<div className="float-left ellipsis">
										&lt;link
										href="https://unpkg.com/fractures@1.0.0/dist/fractures.prefixed.min.css"
										rel="stylesheet" /&gt;
									</div>
								</li>
								<li>
									This is not great for production, but great for prototypes or
									lazy people.
								</li>
							</ul>
						</li>
						<li>
							<b>npm i fractures</b>
							<ul className="list-disc ml-4">
								<li>
									Then you can 🦄{" "}
									<em>import fractures from fractures/dist/fractures.css</em>
								</li>
								<li>
									For production use, I recommend running the fractures.css file
									through your build process.
								</li>
								<li>
									Here is an example repo{" "}
									<a href="https://github.com/fractures/fractures-react">
										with React
									</a>.
								</li>
							</ul>
						</li>
						<li>
							<b>Download with your hands</b>
							<ul className="list-disc ml-4">
								<li>
									🐹 from{" "}
									<a href="https://github.com/fractures/fractures/releases">
										GitHub
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</Layout>
		)
	}
}

export default Index
