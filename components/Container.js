const Container = props => (
	<div className={ `container mx-auto ${ props.className ? `${ props.className }` : `` }` }>
		{props.children}
		<style jsx>{`
			@media (max-width: ${ props.width ? props.width + 60 : 1020 }px) {
				.container {
					margin-left: 1.5rem !important;
					margin-right: 1.5rem !important;

					max-width: calc(100% - 3rem) !important;
				}
			}

			.container {
				max-width: 100%;
				width: ${ props.width ? props.width : 960 }px;
			}
		`}</style>
	</div>
)

export default Container
