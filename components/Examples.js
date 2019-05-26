import { Component } from 'react'
import Pre from './Pre'

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
			<div className="fr-example grow-1 flex flex-column flex-xcenter">
				<Pre lines={ selectedCode } lineCount={ 7 } />
				<ol className="skeleton__nav flex flex-gap-1">
					{skeletonItems.map((item, key) => (
						<li key={ key } className={ this.state.example === key && 'active' } onClick={ e => this.showExample(e, key) }>
							{item}
						</li>
					))}
				</ol>
				<style jsx global>{`
					.skeleton__nav {
						margin-left: 1.5rem;
						margin-top: -1px;

						font-size: 0.875rem;
					}

					.skeleton__nav li {
						position: relative;

						padding: 0 1rem;

						cursor: pointer;
						font-weight: 500;
						line-height: 3rem;
					}

					.skeleton__nav .active {
						box-shadow: inset 0 2px 0 0 var(--color-red);
						color: var(--color-red);
					}

					@media (max-width: 1020px) {
						.fr-example {
							flex-grow: auto;
						}
					}

					@media (max-width: 640px) {
						.fr-example {
							flex-grow: auto;
						}

						.skeleton__nav {
							flex-direction: column;
							margin-left: 0;
						}
					}
				`}</style>
			</div>
		)
	}
}

export default IndexSkeleton
