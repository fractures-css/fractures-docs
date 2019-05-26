import { Component } from 'react'
import GitHub from './images/GitHub'
import Container from './Container'
import Fractures from './images/Fractures'
import Link from 'next/link'

class Nav extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	componentDidMount() {
		const pathname = window.location.pathname

		this.setState({ pathname: pathname })
	}

	render() {
		const headerLinks = [{ icon: 'info', name: 'Documentation', url: '/docs' }, { icon: 'favorite', name: 'About', url: '/about' }]

		const headerRender = headerLinks.map((item, key) => (
			<li className={ this.state.pathname === item.url ? 'active' : '' } key={ key }>
				<Link href={ item.url } prefetch>
					<a className="flex flex-ycenter flex-gap-1 relative">
						<span>{item.name}</span>
					</a>
				</Link>
			</li>
		))

		return (
			<div className="fr-header fixed z-2 top-0 w-100">
				<Container className="flex flex-between">
					<ol className="flex flex-gap-1">
						<li className={ this.state.pathname === '/' ? 'active' : '' }>
							<Link href={ '/' } prefetch>
								<a className="flex flex-ycenter flex-gap-1">
									<span className="flex flex-ycenter fr-hide-on-small">
										<Fractures />
									</span>
									<span>fr·ctures</span>
								</a>
							</Link>
						</li>
					</ol>
					<ol className="flex flex-gap-2">
						{headerRender}
						<li className="fr-hide-on-medium flex flex-ycenter">
							<a href="https://github.com/fractures/fractures" className="flex flex-center">
								<GitHub />
							</a>
						</li>
					</ol>
				</Container>
				<style jsx global>{`
					.fr-header {
						height: 4rem;

						background-color: var(--color-dark);
						/* background-color: white; */
						/* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15); */
					}

					.fr-header li a {
						padding: 0 0.5rem;

						/* color: var(--color-blue); */
						color: var(--color-dim);

						font-weight: 500;
						line-height: 4rem;
					}

					.fr-header li.active {
						/* background-color: var(--color-light); */
						/* box-shadow: inset 0 1px 0 0 var(--color-blue); */
					}

					.fr-header li.active a {
						color: white;
						/* color: var(--color-blue); */
					}
				`}</style>
			</div>
		)
	}
}

export default Nav
