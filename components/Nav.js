import { Component } from "react"
import { Container } from "fractures-ui"
import Link from "next/link"

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
		const headerLinks = [
			{ name: "Home", url: "/" },
			{ name: "Docs", url: "/docs" },
			{ name: "About", url: "/about" },
			{ name: "UI", url: "/ui" }
		]

		const headerRender = headerLinks.map((item, key) => (
			<li className={ this.state.pathname === item.url ? "active" : "" } key={ key }>
				<Link href={ item.url } prefetch>
					<a>{item.name}</a>
				</Link>
			</li>
		))

		return (
			<div className="fr-header fixed z-2 top-0 w-100 bg-white">
				<Container>
					<ul className="flex flex-gap-2">{headerRender}</ul>
				</Container>
				<style jsx global>{`
					.fr-header {
						height: 4rem;

						box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);

						line-height: 4rem;
					}

					.fr-header li a {
						display: block;
						padding: 0 0.5rem;

						color: var(--color-dark);
					}

					.fr-header li.active {
						box-shadow: 0 1px 0 0 var(--color-dark);
					}
				`}</style>
			</div>
		)
	}
}

export default Nav
