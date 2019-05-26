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

					background-color: white;
					background-size: 1px 1.5rem;
					background-image: linear-gradient(to bottom, var(--color-light) 1px, transparent 1px);
					box-shadow: inset 0 0 0 1px var(--color-gray);
					border-left: 1.5rem solid var(--color-light);
					border-radius: 0.25rem;

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

					opacity: 0.5;
					width: 1.5rem;

					counter-increment: line;
					content: counter(line);
					text-align: center;
				}
			`}</style>
			<style jsx global>{`
				pre code em {
					color: var(--color-red);

					font-style: normal;
				}
			`}</style>
		</pre>
	)
}

export default Pre
