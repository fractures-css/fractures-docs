import GitHub from "./GitHub"
import PropTypes from "prop-types"

const defaultProps = {
	label: "",
	count: 300
}

const propTypes = {
	label: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired
}

const Button = props => (
	<span className="btn flex flex-ycenter unselectable relative flex-gap-1">
		<GitHub />
		<span>{props.label}</span>
		<span className="btn__count">{props.count}</span>
		<style jsx global>{`
			.btn {
				position: relative;
				display: inline-flex;
				padding: 0 0.5rem 0 0.5rem;

				border: 0;
				border-radius: 0.25rem;
				outline: none;
				transition: background-color 100ms ease;

				font-size: 0.875rem;
				font-weight: 700;
				line-height: 2.5rem;
				cursor: pointer;
			}

			.btn {
				background-color: white;
				box-shadow: inset 0 0 0 1px var(--color-gray);
				color: var(--color-blue);
			}

			.btn:hover {
				background-color: var(--color-light);
			}

			.btn .btn__count {
				padding: 0 0.25rem;

				border-radius: 0.25rem;
				box-shadow: inset 0 0 0 1px var(--color-gray);
				color: var(--color-dim);

				font-size: 0.75rem;
				line-height: 1.5rem;
			}
		`}</style>
	</span>
)

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
