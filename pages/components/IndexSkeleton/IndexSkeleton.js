import { Component, Fragment } from "react"
import Container from "../../../components/Container"
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
				<div className="my-5">
					<Container>
						<div className="flex flex-xcenter flex-gap-4 flex-wrap">
							<div className="skeleton-item">
								{this.state.example === 0 && <IconIntro />}
								{this.state.example === 1 && <IconBoxes />}
								{this.state.example === 2 && <IconSticky />}
								{this.state.example === 3 && <IconOwn />}
							</div>
							<div className="grow-1">
								<div className="skeleton__nav mb-3">
									<ul className="flex flex-gap-1">
										{skeletonItems.map((item, key) => (
											<li key={ key } className={ this.state.example === key && "active" } onClick={ e => this.showExample(e, key) }>
												{item}
											</li>
										))}
									</ul>
								</div>
								<pre className="skeleton-pre grow-1">
									{this.state.example === 0 && exampleIntro}
									{this.state.example === 1 && exampleBoxes}
									{this.state.example === 2 && exampleSticky}
									{this.state.example === 3 && exampleOwn}
								</pre>
							</div>

							<style jsx global>{`
								@media (max-width: 580px) {
									.skeleton-item {
										margin-top: 0 !important;
										margin-bottom: 4rem !important;
									}
								}

								.skeleton__nav {
									font-size: 0.875rem;
								}

								.skeleton__nav li {
									position: relative;

									padding: 0 1rem;

									cursor: pointer;
									color: var(--color-blue-dark);

									line-height: 3rem;
									font-weight: 500;
								}

								.skeleton__nav .active {
									box-shadow: inset 0 0 0 1px var(--color-gray);
									border-radius: 0.25rem;
									color: var(--color-red);
								}

								.skeleton-item {
									height: 7.5rem;
									margin-top: 4.5rem;
									width: 7.5rem;
								}

								.skeleton-item svg {
									height: 7.5rem;
									opacity: 0;
									width: 7.5rem;

									animation: fadeInImage 160ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms 1 forwards;
									border-radius: 0.25rem;
									transform: scale(0.95) translateY(0.25rem);
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

								@keyframes fadeInImage {
									from {
										opacity: 0;

										transform: scale(0.95) translateY(0.25rem);
									}

									to {
										opacity: 1;

										transform: scale(1) translateX(0);
									}
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
