import GitHub from './images/GitHub'

const Button = props => (
	<span className="btn flex flex-ycenter unselectable relative flex-gap-1">
		<GitHub />
		<span>{props.label}</span>
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
				background-color: var(--color-dark);
				color: var(--color-light);
			}

			.btn:hover {
				background-color: var(--color-green);
			}
		`}</style>
	</span>
)

export default Button
