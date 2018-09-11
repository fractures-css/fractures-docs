const DocsElement = props => {
	const label = props.showClass ? props.label : ``
	const cls = props.className ? props.className : ``
	const background = props.disableBackground ? `` : `docs-element--background`

	return (
		<div className={ `docs-element flex flex-center center p-2 nowrap ${ background } ${ cls } ${ label }` }>
			{props.label}
			{props.isMarked && <sup>*</sup>}
			<style jsx>{`
				.docs-element--background {
					background: var(--color-gray);
				}
			`}</style>
		</div>
	)
}

export default DocsElement
