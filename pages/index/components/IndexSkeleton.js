import { Component, Fragment } from "react"
import { Container } from "fractures-ui"
import Link from "next/link"

class IndexSkeleton extends Component {
	constructor(props) {
		super(props)

		this.state = {
			example: 0
		}
	}

	// Switches between quick examples
	showExample(e, example) {
		e.preventDefault()

		this.setState({ example: example })
	}

	render() {
		const exampleIntro = (
			<pre>
				<span className="color-gray mb-3">Use atomic, self-explanatory classes with ease.</span>
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
				<span className="color-gray mb-3">Have a default size-scale for persevering layouts.</span>
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
			<Fragment>
				<div className="skeleton__nav">
					<Container>
						<ul className="flex flex-gap-4">
							<li className={ this.state.example === 0 && "active" } onClick={ e => this.showExample(e, 0) }>
								Basics
							</li>
							<li className={ this.state.example === 1 && "active" } onClick={ e => this.showExample(e, 1) }>
								Sizes
							</li>
							<li className={ this.state.example === 2 && "active" } onClick={ e => this.showExample(e, 2) }>
								Complex
							</li>
							<li className={ this.state.example === 3 && "active" } onClick={ e => this.showExample(e, 3) }>
								Extend
							</li>
						</ul>
					</Container>
					<style jsx global>{`
						.skeleton__nav {
							font-size: 0.875rem;
						}

						.skeleton__nav li {
							position: relative;

							padding: 1rem 0;

							cursor: pointer;
							color: var(--fr-700);

							font-weight: 500;
						}

						.skeleton__nav .active {
							box-shadow: 0 1px 0 0 var(--fr-500);
						}

						.skeleton__nav .active:before {
							background-color: var(--color-green);
						}
					`}</style>
				</div>
				<div className="py-5 fr-bg-silver">
					<Container>
						<div className="flex flex-xcenter flex-gap-4 flex-wrap">
							<div className="skeleton-item mb-4">
								<img
									src={ ` /static/images/browser-${ this.state.example }.svg ` }
									className="float-left"
								/>
							</div>
							<div className="grow-1">
								{this.state.example === 0 && exampleIntro}
								{this.state.example === 1 && exampleBoxes}
								{this.state.example === 2 && exampleSticky}
								{this.state.example === 3 && exampleOwn}
							</div>
							<style jsx global>{`
								.skeleton-item {
									height: 7.5rem;
									width: 7.5rem;
								}

								.skeleton-item img {
									border-radius: 0.5rem;
									box-shadow: 0 0.25rem 1.5rem 0 rgba(0, 0, 0, 0.1);
								}
							`}</style>
						</div>
					</Container>
				</div>
			</Fragment>
		)
	}
}

export default IndexSkeleton
