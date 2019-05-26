import { Fragment } from 'react'

const Repeater = props => {
	const Component = props.component

	return (
		<Fragment>
			{props.scale.map((item, key) => (
				<Component key={ key } { ...props } label={ props.label.replace('$', item) } />
			))}
		</Fragment>
	)
}

export default Repeater
