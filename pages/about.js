import Link from "next/link"
import Layout from "../components/layout"

export default () =>
	<Layout title="about — fractures">
		<div className="fr-container py-5">
			<h1 className="mb-2">About</h1>
			<p className="mb-5">
				This is a small project, in which I try to simplify my life by abstracting away the
				complexities UI design has to offer 😨. I use this for quick prototyping; and in
				some cases, for production 🙈 where I build a design system on top of it.
				<br />
				<br />
				That do sound hacky, so please consider this opinionated.<br />
				Have questions? Open an issue on{" "}
				<a href="https://github.com/fractures/fractures/issues">GitHub</a>.
			</p>
			<div className="grid grid-cols-2 grid-gap-3 mb-5">
				<div>
					<h3 className="regular">Goals</h3>
					<ul className="list-disc ml-3">
						<li>You can design with &mdash; not around it. Leaves UI untouched.</li>
						<li>Atomic, non blocking.</li>
						<li>Managable cognitive load, with a small footprint.</li>
						<li>Fast in every way.</li>
						<li>Framework agnostic.</li>
					</ul>
				</div>
				<div>
					<h3 className="regular">Problems</h3>
					<ul className="list-disc ml-3">
						<li>
							I don't think percentage based CSS breakpoint are universal enough, so
							you have to handle <b>responsive</b> states yourself.
						</li>
						<li>
							You can use it in production, but you have to create your own{" "}
							<b>fallbacks</b>. The{" "}
							<a
								target="_new"
								href="https://unpkg.com/fractures/dist/fractures.prefixed.min.css"
							>
								prefixed
							</a>{" "}
							version handles some, but not everything. This{" "}
							<a href="https://rachelandrew.co.uk/archives/2017/07/04/is-it-really-safe-to-start-using-css-grid-layout/">
								article
							</a>{" "}
							might help you.
						</li>
					</ul>
				</div>
			</div>

			<h3 className="regular">Inspiration</h3>
			<p className="my-2">
				I started this as my own reset.css when having a reset css was cool. It was grown
				into a common.css, then a tools.css. Now is somewhat atomic.
			</p>
			<p className="my-2">I've also learned some tricks from these smart people:</p>
			<ul className="list-disc mb-5 ml-3">
				<li>
					<a href="https://twitter.com/brad_frost">@brad_frost</a> &mdash; and his classic{" "}
					<a href="http://atomicdesign.bradfrost.com/">book</a>.
				</li>
				<li>
					<a href="https://twitter.com/rachelandrew">@rachelandrew</a> &mdash; grid 101 at{" "}
					<a href="https://gridbyexample.com/">gridbyexample</a>.
				</li>
				<li>
					<a href="https://twitter.com/mrmrs_">@mrmrs_</a> &mdash; with the great{" "}
					<a href="http://tachyons.io">tachyons</a>.
				</li>
				<li>
					<a href="https://twitter.com/jxnblk">@jxnblk</a> &mdash; doing God's work with
					all these <a href="https://github.com/jxnblk?tab=repositories">projects</a>.
				</li>
				<li>...and so much more.</li>
			</ul>

			<h3 className="regular">Me</h3>
			<p className="my-2">
				I'm just a designer who codes. 🐈 <a href="https://twitter.com/pyx">@pyx</a>
			</p>
		</div>
	</Layout>
