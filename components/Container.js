export default props => (
	<div className={ `fr-container mx-auto ${ props.className ? `${ props.className }` : `` }` }>
		{props.children}
		<style jsx global>{`
			@media screen and (max-width: 1024px) {
				.fr-container {
					width: 760px !important;
				}
			}

			@media screen and (max-width: 800px) {
				.fr-container {
					padding-left: 1.5rem;
					padding-right: 1.5rem;
					width: 100% !important;
				}
			}

			.fr-container {
				width: 960px;
			}
		`}</style>
	</div>
)
