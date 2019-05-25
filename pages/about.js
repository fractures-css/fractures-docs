import Container from '../components/Container'
import Layout from '../components/Layout'

const About = () => (
	<Layout title="About — fractures">
		<Container className="py-5">
			<h1 className="mb-2">About</h1>
			<p className="py-2">
				This is a small project, in which I try to simplify my life by abstracting away the complexities
				{` `}
				UI design has to offer 😨. I use fractures for <b>rapid prototyping</b> and building out <b>design systems</b>.
			</p>
			<p className="py-2 mb-2">
				Although it is really just a thin atomic CSS layer, please consider the project opinionated.
				<br />
				Have questions? Open an issue on <a href="https://github.com/fractures/fractures/issues">GitHub</a>.
			</p>
			<div className="grid grid-cols-1 grid-gap-3 mb-4">
				<div>
					<h2 className="mb-1">Goals</h2>
					<ul className="list-disc ml-3">
						<li>You can design with &mdash; not around it. Leaves UI untouched.</li>
						<li>Atomic, non blocking.</li>
						<li>Manageable cognitive load, with a small footprint.</li>
						<li>Fast in every way.</li>
						<li>Framework agnostic.</li>
					</ul>
				</div>
				<div>
					<h2 className="mb-1">Problems</h2>
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
			<h4>Inspiration</h4>
			<p className="my-2">
				I started this prject as my own reset.css when having a reset css was cool.
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
				The concept of functional CSS is not new.
				<br />
				There are quite a few similar projects out there you can choose from:{' '}
				<a href="https://github.com/topics/functional-css">#functional-css</a>.
			</p>
			<h4>Me</h4>
			<p className="my-2">
				I'm a designer who <a href="https://pyx.space/about">codes</a>. Tweet me at 🐈 <a href="https://twitter.com/pyx">@pyx</a>
			</p>
		</Container>
	</Layout>
)

export default About
