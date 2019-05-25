import { Component, Fragment } from 'react'
import Container from '../../components/Container'
import IconBoxes from '../images/IconBoxes'
import IconIntro from '../images/IconIntro'
import IconOwn from '../images/IconOwn'
import IconSticky from '../images/IconSticky'
import Pre from '../../components/Pre'

const examples = [
	[
		'Use atomic, self-explanatory classes with ease.',
		null,
		`&lt;div class="<em>flex flex-center</em>"&gt;`,
		`&#9;&lt;div /&gt;`,
		`&#9;&lt;div /&gt;`,
		`&lt;/div&gt;`
	],
	[
		`Have a default size-scale for persevering layouts.`,
		null,
		`&lt;header class="<em>fixed w-100 py-2</em>" /&gt;`,
		`&lt;article class="<em>mx-auto py-4</em>" /&gt;`
	],
	[
		`Achieve more complex layout with just a few classes.`,
		`Eg.: sticky footer with minimum element height`,
		null,
		`&lt;div class="<em>flex flex-column minh-viewport</em>"&gt;`,
		`&#9;&lt;div class="<em>grow-1</em>" /&gt;`,
		`&#9;&lt;footer /"&gt;`,
		`&lt;/div&gt;`
	],
	[
		`Mix and match with your own css.`,
		`Checkout the documentation for a complete overview.`,
		null,
		`&lt;div class="your-container <em>grid grid-gap-2</em>"&gt;`,
		`&#9;&lt;div class="your-container__el <em>py-3</em>" /&gt;`,
		`&lt;/div&gt;`
	]
]

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
		const skeletonItems = ['Basics', 'Sizes', 'Complex', 'Extend']
		const selectedCode = examples[this.state.example]

		return (
			<Fragment>
				<div className="index-skeleton py-5">
					<Container>
						<div className="fr-skeleton flex flex-xcenter flex-gap-4">
							<div className="skeleton-item">
								{this.state.example === 0 && <IconIntro />}
								{this.state.example === 1 && <IconBoxes />}
								{this.state.example === 2 && <IconSticky />}
								{this.state.example === 3 && <IconOwn />}
							</div>
							<div className="grow-1">
								<div className="skeleton__nav unselectable mb-3">
									<ol className="flex flex-gap-1">
										{skeletonItems.map((item, key) =>

											// prettier-ignore
											<li
												key={ key }
												className={ this.state.example === key && 'active' }
												onClick={ e => this.showExample(e, key) }>
												{item}
											</li>
										)}
									</ol>
								</div>
								<Pre lines={ selectedCode } lineCount={ 7 } />
							</div>
							<style jsx global>{`
								@media (max-width: 640px) {
									.fr-skeleton {
										flex-direction: column;
									}

									.skeleton-item {
										margin-top: 0 !important;
										margin-bottom: 2.5rem !important;
									}
								}

								.index-skeleton {
									background-color: var(--color-light);
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
