import PropTypes from 'prop-types'
import DocsNotes from './DocsNotes'
import Pre from '../Pre'

const defaultProps = {
	grid: 6
}

const propTypes = {
	children: PropTypes.node,
	description: PropTypes.string,
	grid: PropTypes.number,
	pre: PropTypes.array,
	title: PropTypes.string.isRequired
}

const DocsSection: React.FC<any> = (props) => {
	const haveNotes = props.notes && props.notes.length

	return (
		<article className="flex flex-column flex-gap-3 py-4">
			<header>
				<h4>{props.title}</h4>
				{props.description && <p className="mt-2">{props.description}</p>}
			</header>
			{props.children && <div className={ `docs-section__grid grid grid-cols-${ props.grid } grid-gap-1` }>{props.children}</div>}
			{props.pre && <Pre lines={ props.pre } />}
			{haveNotes && <DocsNotes { ...props } />}
			<style jsx>{`
				@media (max-width: 1020px) {
					.docs-section__grid {
						grid-template-columns: repeat(${ props.grid / 2 }, 1fr);
					}
				}

				@media (max-width: 640px) {
					.docs-section__grid {
						grid-template-columns: repeat(2, 1fr);
					}
				}
			`}</style>
		</article>
	)
}

DocsSection.defaultProps = defaultProps
DocsSection.propTypes = propTypes

export default DocsSection
