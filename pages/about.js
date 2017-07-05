import Link from "next/link"
import Layout from "../components/layout"

export default () =>
	<Layout title="About">
		<div className="fr-container py-5">
			<h1>About</h1>
			<p>Lorem ipsum dolor</p>

			{/* Goals */}
			<h2 className="regular mt-5 mb-1">Goals</h2>
			<ul className="list-disc mb-4 ml-3">
				<li>
					You can design with &mdash; not around it. Leaves UI
					untouched.
				</li>
				<li>Atomic, non blocking.</li>
				<li>Managable cognitive load, with a small footprint.</li>
				<li>Fast in every way.</li>
			</ul>

			<h2 className="regular mt-5 mb-1">Questions</h2>
			<ul className="list-disc mb-4 ml-3">
				<li>Production use</li>
				<li>Responsive views</li>
			</ul>

			<h2 className="regular mt-5 mb-1">Inspiration</h2>
			<ul className="list-disc mb-4 ml-3">
				<li>.</li>
			</ul>
		</div>
	</Layout>
