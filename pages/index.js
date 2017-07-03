import Link from "next/link";
import Head from "../components/head";

export default () =>
	<div>
		<Head title="Home" />
		<main id="app">
			{/* <!-- Hero --> */}
			<div className="fr-container flex flex--rsp-l gutter-4 py-6">
				<div>
					<img src="/static/images/fractures.svg" alt="fractures" />
				</div>
				<div className="grow-2">
					<h1 title="fractures">fr&middot;ctures</h1>
					<b className="source-code-pro">
						Baseline atomic CSS toolkit.
					</b>
					<p className="my-3">
						Fractures helps you bootstrap design-systems and
						prototypes by providing a set of non-blocking, atomic,
						utility classes.
					</p>

					{/* <a onClick="document.getElementById('getting-started').scrollIntoView(true);" className="btn btn-primary">Getting started</a> */}
					<a
						href="https://github.com/fractures/fractures"
						className="btn btn-default ml-1"
					>
						GitHub
					</a>
					<div className="mt-3 silver source-code-pro">
						<small>
							version: 0.5.0<br />size: ~3kb gzipped
						</small>
					</div>
				</div>
			</div>

			{/* <!-- Skeletons --> */}
			<div className="skeleton py-5">
				<div className="fr-container">
					{/* <!-- Cases --> */}
					<ul className="flex flex--around gutter-3">
						<li
							data-after="grid"
							className="skeleton-item skeleton-item--grid"
						/>
						<li
							data-after="flex"
							className="skeleton-item skeleton-item--flex"
						/>
						<li
							data-after="container"
							className="skeleton-item skeleton-item--container"
						/>
						<li
							data-after="sticky"
							className="skeleton-item skeleton-item--sticky"
						/>
						<li
							data-after="more"
							className="skeleton-item skeleton-item--print"
						/>
					</ul>

					{/* <!-- Codes --> */}
					<div className="relative mt-4 py-4">
						{/* <!-- Grid --> */}
						<pre className="pre-line">
							<span className="color--orange">
								// Basic grid with horizontal and vertical gap
							</span>
							&lt;div className="<span className="color--green">
								grid grid-cols-3 gap-2
							</span>"&gt; &emsp;&lt;div&gt;&lt;/div&gt;
							&emsp;&lt;div&gt;&lt;/div&gt; &lt;/div&gt;
						</pre>

						{/* <!-- Flex --> */}
						<pre className="pre-line">
							<span className="color--orange">
								// Centered flex content
							</span>
							&lt;div className="<span className="color--green">
								flex flex--center
							</span>"&gt; &emsp;&lt;div&gt;&lt;/div&gt;
							&lt;/div&gt;
						</pre>

						{/* <!-- Container --> */}
						<pre className="pre-line">
							<span className="color--orange">
								// Responsive containers based on material
								design breakpoints
							</span>
							&lt;div className="<span className="color--green">
								fr-container-small
							</span>"&gt;&lt;/div&gt; &lt;div className="<span className="color--green">fr-container</span>"&gt;&lt;/div&gt;
							&lt;div className="<span className="color--green">
								fr-container-large
							</span>"&gt;&lt;/div&gt;
						</pre>

						{/* <!-- Sticky --> */}
						<pre className="pre-line">
							<span className="color--orange">
								// Sticky footer with minimum element height
							</span>
							&lt;div className="<span className="color--green">
								flex flex--column minvh-100
							</span>"&gt; &emsp;&lt;div className="<span className="color--green">grow-1</span>"&gt;&lt;/div&gt;
							&emsp;&lt;footer&gt;&lt;/footer&gt; &lt;/div&gt;
						</pre>

						{/* <!-- Print --> */}
						<pre className="pre-line">
							<span className="color--orange">
								// Working examples
							</span>
							<a
								href="http://fractures.github.io/fractures/"
								className="color--orange"
							>
								// fractures.github.io/fractures
							</a>
						</pre>
					</div>
				</div>
			</div>

			{/* <!-- Content --> */}
			<div className="fr-container py-5" id="getting-started">
				{/* <!-- Getting started --> */}
				<h2 className="regular mb-1">Getting started</h2>
				<ul className="list-disc mb-4 ml-3">
					<li>npm install fractures</li>
					<li>
						download vanilla &rarr;{" "}
						<a href="https://unpkg.com/fractures/dist/fractures.min.css">
							fractures.min.css
						</a>
					</li>
					<li>
						download prefixed for latest 2 browser version &rarr;{" "}
						<a href="https://unpkg.com/fractures/dist/fractures.prefixed.min.css">
							fractures.prefixed.min.css
						</a>
					</li>
					<li>
						use{" "}
						<a href="https://unpkg.com/fractures/dist/fractures.prefixed.min.css">
							unpkg
						</a>{" "}
						cdn
					</li>
				</ul>

				{/* <!-- Goals --> */}
				<h2 className="regular mb-1">Goals</h2>
				<ul className="list-disc mb-4 ml-3">
					<li>
						You can design with &mdash; not around it. Leaves UI
						untouched.
					</li>
					<li>Atomic, non blocking.</li>
					<li>Managable cognitive load, with a small footprint.</li>
					<li>Fast in every way.</li>
				</ul>

				{/* <!-- Docs --> */}
				<h2 className="regular mb-1">List of classes</h2>
				<ul className="docs list-disc ml-3">
					{/* <!-- Blocks --> */}
					<li className="mb-2">
						{/* <!-- Sets --> */}
						<p />
						<div>
							<div className="flex flex--wrap gutter-2">
								<div className="docs-class silver" />
								<div className="class" />
							</div>
						</div>
					</li>
				</ul>
			</div>
		</main>
	</div>;
