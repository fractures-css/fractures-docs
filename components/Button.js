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
	<span className="btn-container unselectable relative inline-block">
		<span className="btn flex flex-gap-1">
			<span>{props.label}</span>
			<span className="btn__count">{props.count}</span>
		</span>
		<style jsx global>{`
			.btn-container {
				border-radius: 0.25rem;
			}

			.btn {
				position: relative;
				display: inline-block;
				padding: 0.375rem 0.375rem 0.375rem 0.75rem;

				border: 0;
				border-radius: 0.25rem;
				outline: none;
				transition: background-color 120ms ease;

				font-size: 0.875rem;
				font-weight: 700;
				line-height: 28px;
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

			.btn span {
				display: inline-flex;
			}

			.btn .btn__count {
				padding: 0 0.5rem;

				background: var(--color-light);
				border-radius: 0.25rem;
				box-shadow: inset 0 0 0 1px var(--color-gray);
			}
		`}</style>
	</span>
)

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
