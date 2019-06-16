import Container from '../components/Container'
import Layout from '../components/Layout'

const About = () => (
	<Layout title="About — fractures">
		<Container className="py-5">
			<h1 className="regular">
				<mark>Functional CSS, but only the good parts.</mark>
			</h1>
			<h2>fr&middot;ctures tries to abstract away the complexities UI design has to offer.{` `}</h2>
			<p className="py-2">
				It is really just a thin <a href="https://pyx.space/post/atomic-css-with-fractures/">atomic CSS</a> layer with a small opinionated{' '}
				<a href="https://github.com/fractures/fractures/blob/master/src/reset.css">reset</a>
				.<br />
				Use fractures for <b>rapid prototyping</b> and building out <b>design systems</b>.
			</p>
			<p className="mb-2">
				Have questions? Open an issue on <a href="https://github.com/fractures/fractures/issues">GitHub</a>.
			</p>
			<div className="grid grid-cols-1 grid-gap-3 mb-4">
				<div>
					<h3 className="mb-1">Goals</h3>
					<ul className="list-disc ml-3">
						<li>You can design with &mdash; not around it. Leaves UI untouched.</li>
						<li>Atomic, non blocking.</li>
						<li>Manageable cognitive load with a small footprint.</li>
						<li>Fast in every way.</li>
						<li>Framework agnostic.</li>
					</ul>
				</div>
				<div>
					<h3 className="mb-1">Problems</h3>
					<ul className="list-disc ml-3">
						<li>
							I don't think percentage based CSS breakpoints are universal enough, so you have to handle
							{` `}
							<b>responsive</b> states yourself.
						</li>
						<li>
							You can use it in production, but you have to create your own <b>fallbacks</b>. The{' '}
							<a target="_new" href="https://unpkg.com/fractures/dist/fractures.prefixed.min.css">
								prefixed
							</a>{' '}
							version handles some, but not everything.
						</li>
					</ul>
				</div>
			</div>
			<h3>Inspiration</h3>
			<p className="my-2">
				I started this project as my own reset.css when having a reset css was cool.
				{` `}
				It was grown into a common.css, then a tools.css. Now it's somewhat atomic.
			</p>
			<p className="my-2">I've also learned some tricks from these smart people:</p>
			<ul className="list-disc my-3 ml-3">
				<li>
					<a href="http://atomicdesign.bradfrost.com/">Atomic Design</a> by Brad Frost
				</li>
				<li>
					<a href="http://www.jon.gold/2015/07/functional-css/">Functional Programming, CSS, and your sanity</a> by Jon Gold
				</li>
				<li>
					<a href="http://danmall.me/articles/cooking-with-design-systems/">Cooking with Design Systems</a> by Dan Mall
				</li>
				<li>
					<a href="https://rauchg.com/2015/pure-ui">Pure UI</a> by Guillermo Rauch
				</li>
				<li>
					<a href="https://gridbyexample.com/">Grid by Example</a> by Rachel Andrew
				</li>
			</ul>
			<p className="my-2">
				The concept of functional CSS is not new. There are quite a few similar projects out there you can choose from if you looking for
				something different: <a href="https://github.com/topics/functional-css">#functional-css</a>.
			</p>
		</Container>
	</Layout>
)

export default About
