const Container = props => (
	<div className={ `container mx-auto ${ props.className ? props.className : `` }` }>
		{props.children}
		<style jsx>{`
			@media (max-width: 1020px) {
				.container {
					margin-left: 1.5rem !important;
					margin-right: 1.5rem !important;

					max-width: calc(100% - 3rem) !important;
				}
			}

			.container {
				max-width: 100%;
				width: 960px;
			}
		`}</style>
	</div>
)

export default Container
