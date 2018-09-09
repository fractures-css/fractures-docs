import { Component } from "react"
import Container from "./Container"
import Link from "next/link"
import Fractures from "./Fractures"

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

		// prettier-ignore
		const headerLinks = [
			{ icon: "info", name: "Documentation", url: "/docs" },
			{ icon: "favorite", name: "About", url: "/about" }
		]

		const headerRender = headerLinks.map((item, key) => (
			<li className={ this.state.pathname === item.url ? "active" : "" } key={ key }>
				<Link href={ item.url } prefetch>
					<a className="flex flex-ycenter flex-gap-1 relative">
						{item.name === "fr·ctures" && <Fractures />}
						<span>{item.name}</span>
					</a>
				</Link>
			</li>
		))

		return (
			<div className="fr-header fixed z-2 top-0 w-100">
				<Container className="flex flex-between">
					<ul>
						<li className={ this.state.pathname === "/" ? "active" : "" }>
							<Link href={ "/" } prefetch>
								<a className="flex flex-ycenter flex-gap-1">
									<Fractures />
									<span>fr·ctures</span>
								</a>
							</Link>
						</li>
					</ul>
					<ol className="flex flex-gap-2">{headerRender}</ol>
				</Container>
				<style jsx global>{`
					.fr-header {
						height: 4rem;

						background-color: white;
						box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
					}

					.fr-header li a {
						padding: 0 0.5rem;

						color: var(--fr-500);

						font-weight: 500;
						line-height: 4rem;
					}

					.fr-header li.active {
						box-shadow: inset 0 -1px 0 0 var(--fr-500);
					}

					.fr-header li.active a {
						color: var(--fr-900);
					}
				`}</style>
			</div>
		)
	}
}

export default Nav
