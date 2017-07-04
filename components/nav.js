import Link from "next/link"

export default () =>
	<div className="fractures-header fixed z-2 top-0 w-100">
		<div className="container">
			<ul className="flex flex-gap-3">
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/docs">
						<a>Docs</a>
					</Link>
				</li>
				<li>
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

				line-height: 4rem;
			}

			.fractures-header a {
				display: block;
			}
		`}</style>
	</div>
