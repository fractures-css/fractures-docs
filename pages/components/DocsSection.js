const DocsSection = props => {
	const haveNotes = props.notes && props.notes.length

	return (
		<article className="flex flex-column flex-gap-3 py-4">
			<header>
				<h4>{props.title}</h4>
				{props.description && <p className="mt-2">{props.description}</p>}
			</header>
			{props.children}
			{haveNotes && (
				<footer>
					<ol className="docs-section-notes">
						{props.notes.map((note, key) => (
							<li key={ key }>
								<small className="block">
									{note.name && (
										<span>
											<b>{note.name}</b>:{` `}
										</span>
									)}
									{note.note}
								</small>
							</li>
						))}
					</ol>
					<style jsx global>{`
						.docs-section-notes {
							counter-reset: item;
						}

						.docs-section-notes li {
							position: relative;

							padding-left: 1.5rem;

							counter-increment: item;
						}

						.docs-section-notes li:before {
							position: absolute;

							display: block;
							height: 1.25rem;
							margin-left: -1.5rem;
							width: 1.25rem;

							color: var(--color-dim);

							content: counter(item);
							font-size: 0.75rem;
							line-height: 1.25rem;
							text-align: center;
						}
					`}</style>
				</footer>
			)}
		</article>
	)
}

export default DocsSection
