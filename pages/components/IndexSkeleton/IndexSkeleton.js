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
				<div className="skeleton__nav">
					<Container>
						<ul className="flex flex-gap-4">
							{skeletonItems.map((item, key) => (
								<li
									key={ key }
									className={ this.state.example === key && "active" }
									onClick={ e => this.showExample(e, key) }
								>
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
								{this.state.example === 0 && <IconIntro />}
								{this.state.example === 1 && <IconBoxes />}
								{this.state.example === 2 && <IconSticky />}
								{this.state.example === 3 && <IconOwn />}
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

								.skeleton-item svg {
									height: 7.5rem;
									width: 7.5rem;

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
