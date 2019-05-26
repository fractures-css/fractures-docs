const Pre = props => {
	const createMarkup = line => ({ __html: line ? line : ` ` })
	const maxHeight = props.lineCount ? props.lineCount * 1.5 : props.lines.length * 1.5

	return (
		<pre className="fr-pre">
			{props.lines.map((line, key) => (
				<code key={ key } dangerouslySetInnerHTML={ createMarkup(line) } />
			))}
			<style jsx>{`
				@media (max-width: 820px) {
					.fr-pre {
						border-left-width: 0px !important;
					}

					.fr-pre code {
						overflow: hidden;
						padding: 0 0.75rem !important;

						text-overflow: ellipsis;
					}
				}

				.fr-pre {
					min-height: ${ maxHeight }rem;

					background-color: var(--color-dark);
					background-size: 1px 1.5rem;
					box-shadow: inset 0 0 0 1px var(--color-gray-900);
					border-left: 1.5rem solid var(--color-gray-700);
					border-radius: 0.25rem;
					color: var(--color-gray-300);

					font-size: 0.75rem;
					font-family: var(--font-monospace);
					counter-reset: line;
					line-height: 1.5rem;
					tab-size: 4;
				}

				.fr-pre code {
					position: relative;

					display: block;
					padding: 0 1rem;
				}

				.fr-pre code:before {
					position: absolute;
					left: -1.5rem;

					width: 1.5rem;

					color: var(--color-gray-300);

					counter-increment: line;
					content: counter(line);
					text-align: center;
				}
			`}</style>
		</pre>
	)
}

export default Pre
