const createMarkup = line => ({ __html: line ? line : ` ` })

const Pre = props => (
	<pre>
		{props.lines.map((line, key) => (
			<code key={ key } dangerouslySetInnerHTML={ createMarkup(line) } />
		))}
		<style jsx global>{`
			@media (max-width: 640px) {
				pre {
					border-left-width: 0px !important;
				}

				pre code {
					overflow: hidden;
					padding: 0 0.75rem !important;

					text-overflow: ellipsis;
				}
			}

			pre {
				min-height: 10.5rem;

				background-color: white;
				background-size: 1px 1.5rem;
				background-image: linear-gradient(to bottom, var(--color-light) 1px, transparent 1px);
				box-shadow: inset 0 0 0 1px var(--color-gray);
				border-left: 1.5rem solid var(--color-gray);
				border-radius: 0.25rem;

				font-size: 0.75rem;
				font-family: "Source Code Pro", monospace;
				counter-reset: line;
				line-height: 1.5rem;
			}

			pre code {
				position: relative;

				display: block;
				padding: 0 1rem;
			}

			pre code:before {
				position: absolute;
				left: -1.5rem;

				opacity: 0.5;
				width: 1.5rem;

				counter-increment: line;
				content: counter(line);
				text-align: center;
			}

			pre code em {
				color: var(--color-red);

				font-style: normal;
			}
		`}</style>
	</pre>
)

export default Pre
