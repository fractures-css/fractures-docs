import Link from "next/link"
import { Component } from "react"

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
		console.log(this.state)

		return (
			<div className="fractures-header fixed z-2 top-0 w-100">
				<div className="container">
					<ul className="flex flex-gap-2">
						<li className={this.state.pathname === "/" && "active"}>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li
							className={
								this.state.pathname === "/docs" && "active"
							}>
							<Link href="/docs">
								<a>Docs</a>
							</Link>
						</li>
						<li
							className={
								this.state.pathname === "/about" && "active"
							}>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
					</ul>
				</div>
				<style jsx>{`
					.fractures-header {
						height: 4rem;

						background-color: white;
						box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .15);

						/*font-weight: bold;*/
						line-height: 4rem;
					}

					.fractures-header a {
						display: block;
						padding: 0 .5rem;
					}

					.fractures-header .active {
						box-shadow: 0 2px 0 0 var(--color-dark);
						box-shadow: 0 1px 0 0 black;
					}
				`}</style>
			</div>
		)
	}
}

export default Nav
