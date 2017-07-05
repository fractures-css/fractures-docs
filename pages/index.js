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
		const exampleGrid = (
			<div className="flex flex-xcenter flex-gap-3">
				<div>
					<img
						src="/static/images/browser--grid.svg"
						className="skeleton-item"
					/>
				</div>
				<div className="flex flex-ycenter">
					<pre className="source-code-pro">
						<span className="color-gray">
							// Basic grid with horizontal and vertical gap
						</span>
						<br />
						&lt;div class="<span className="color-red">
							grid grid-cols-3 gap-2
						</span>"&gt;<br />
						&emsp;&emsp;&lt;div&gt;&lt;/div&gt;<br />
						&emsp;&emsp;&lt;div&gt;&lt;/div&gt;<br />
						&lt;/div&gt;
					</pre>
				</div>
			</div>
		)

		const exampleFlex = (
			<div className="flex flex-xcenter flex-gap-3">
				<div>
					<img
						src="/static/images/browser--flex.svg"
						className="skeleton-item"
					/>
				</div>
				<div className="flex flex-ycenter">
					<pre className="source-code-pro">
						<span className="color--orange">
							// Centered flex content
						</span>
						<br />
						&lt;div class="<span className="color--green">
							<br />
							flex flex--center<br />
						</span>"&gt; &emsp;&lt;div&gt;&lt;/div&gt; &lt;/div&gt;
					</pre>
				</div>
			</div>
		)

		const exampleSticky = (
			<div className="flex flex-xcenter flex-gap-3">
				<div>
					<img
						src="/static/images/browser--sticky.svg"
						className="skeleton-item"
					/>
				</div>
				<div className="flex flex-ycenter">
					<pre className="source-code-pro">
						<span className="color--orange">
							// Sticky footer with minimum element height
						</span>
						<br />
						&lt;div class="<span className="color--green">
							<br />
							flex flex--column minvh-100<br />
						</span>"&gt; &emsp;&lt;div class="<span className="color--green">grow-1</span>"&gt;&lt;/div&gt;<br />
						&emsp;&lt;footer&gt;&lt;/footer&gt; &lt;/div&gt;
					</pre>
				</div>
			</div>
		)

		const examplePrint = (
			<div className="flex flex-xcenter flex-gap-3">
				<div>
					<img
						src="/static/images/browser--print.svg"
						className="skeleton-item"
					/>
				</div>
				<div className="flex flex-ycenter">
					<pre className="source-code-pro">
						<span class="color--orange">// Working examples</span>
						<br />
						<a
							href="http://fractures.github.io/fractures/"
							class="color--orange"
						>
							// fractures.github.io/fractures
						</a>
					</pre>
				</div>
			</div>
		)

		return (
			<Layout title="Index">
				<header className="flex flex-gap-4 py-6 fr-container">
					<div className="h-6 w-6">
						<img
							src="/static/images/fractures.svg"
							alt="fractures"
						/>
					</div>
					<div>
						<h1 title="fractures">fr&middot;ctures</h1>
						<b className="source-code-pro">
							Baseline atomic CSS toolkit.
						</b>
						<p className="my-3">
							Fractures helps you bootstrap design-systems and
							prototypes by providing a set of non-blocking,
							atomic, utility classes.{" "}
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
				<div className="py-5 bg-color-gray">
					<div className="fr-container">
						<div>
							{this.state.example === 0 && exampleFlex}
							{this.state.example === 1 && exampleGrid}
							{this.state.example === 2 && exampleSticky}
							{this.state.example === 3 && examplePrint}
						</div>

						{/* Switcher */}
						<ul className="skeleton__nav flex flex-xcenter flex-gap-4 mt-5">
							<li
								className={this.state.example === 0 && "active"}
								onClick={e => this.showExample(e, 0)}
							>
								<a>Basics</a>
							</li>
							<li
								className={this.state.example === 1 && "active"}
								onClick={e => this.showExample(e, 1)}
							>
								<a>Grid</a>
							</li>
							<li
								className={this.state.example === 2 && "active"}
								onClick={e => this.showExample(e, 2)}
							>
								<div className="flex flex-column flex-gap-2">
									<a>Flex</a>
								</div>
							</li>
							<li
								className={this.state.example === 3 && "active"}
								onClick={e => this.showExample(e, 3)}
							>
								<a>Extend</a>
							</li>
						</ul>
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
									&lt;link
									href="https://unpkg.com/fractures@1.0.0/dist/fractures.prefixed.min.css"
									rel="stylesheet" /&gt;
								</li>
								<li>
									This is not great for production, but great
									for prototypes or lazy people.
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
									fractures.css file through your build
									process.
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
		)
	}
}

export default Index
