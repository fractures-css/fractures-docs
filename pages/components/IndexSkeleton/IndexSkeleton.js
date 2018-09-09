import { Component, Fragment } from "react"
import { Container } from "fractures-ui"
import { exampleIntro, exampleBoxes, exampleSticky, exampleOwn } from "./examples"
import IconBoxes from "./images/IconBoxes"
import IconIntro from "./images/IconIntro"
import IconOwn from "./images/IconOwn"
import IconSticky from "./images/IconSticky"

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
		const skeletonItems = ["Basics", "Sizes", "Complex", "Extend"]

		return (
			<Fragment>
				<div className="skeleton__nav ">
					<Container>
						<ul className="flex flex-gap-1">
							{skeletonItems.map((item, key) => (
								<li key={ key } className={ this.state.example === key && "active" } onClick={ e => this.showExample(e, key) }>
									{item}
								</li>
							))}
						</ul>
					</Container>
					<style jsx global>{`
						.skeleton__nav {
							font-size: 0.875rem;
						}

						.skeleton__nav li {
							position: relative;

							padding: 0.75rem 1rem;

							cursor: pointer;
							color: var(--fr-700);

							font-weight: 500;
						}

						.skeleton__nav .active {
							/* background-color: var(--fr-300); */
							/* background: white; */
							box-shadow: inset 0 0 0 1px var(--fr-300);
							border-radius: 0.25rem;
							color: var(--color-red);
						}
					`}</style>
				</div>
				<div className="py-5">
					<Container>
						<div className="flex flex-xcenter flex-gap-4 flex-wrap">
							<div className="skeleton-item mb-4">
								{this.state.example === 0 && <IconIntro />}
								{this.state.example === 1 && <IconBoxes />}
								{this.state.example === 2 && <IconSticky />}
								{this.state.example === 3 && <IconOwn />}
							</div>
							<pre className="skeleton-pre grow-1">
								{this.state.example === 0 && exampleIntro}
								{this.state.example === 1 && exampleBoxes}
								{this.state.example === 2 && exampleSticky}
								{this.state.example === 3 && exampleOwn}
							</pre>
							<style jsx global>{`
								.skeleton-item {
									height: 7.5rem;
									width: 7.5rem;
								}

								.skeleton-item svg {
									height: 7.5rem;
									width: 7.5rem;

									border-radius: 0.25rem;
								}

								.skeleton-pre {
									min-height: 10.5rem;

									background-color: white;
									background-size: 1px 1.5rem;
									background-image: linear-gradient(to bottom, var(--fr-100) 1px, transparent 1px);
									box-shadow: inset 0 0 0 1px var(--fr-300);
									border-left: 1.5rem solid var(--fr-300);
									border-radius: 0.25rem;

									counter-reset: line;
									line-height: 1.5rem;
								}

								.skeleton-pre span {
									position: relative;

									padding-left: 1rem;
								}

								.skeleton-pre span:before {
									position: absolute;
									left: -1.5rem;

									opacity: 0.5;
									width: 1.5rem;

									counter-increment: line;
									content: counter(line);
									text-align: center;
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
