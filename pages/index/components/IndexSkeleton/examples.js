import Link from "next/link"

const exampleIntro = (
	<pre>
		<span className="color-gray mb-3">Use atomic, self-explanatory classes with ease.</span>
		<span>
			&lt;div class="<em>flex flex-center</em>"&gt;
		</span>
		<span>&emsp;&lt;div&gt;&lt;/div&gt;</span>
		<span>&emsp;&lt;div&gt;&lt;/div&gt;</span>
		<span>&lt;/div&gt;</span>
	</pre>
)

const exampleBoxes = (
	<pre>
		<span className="color-gray mb-3">Have a default size-scale for persevering layouts.</span>
		<span>
			&lt;header class="<em>fixed w-100 py-2</em>" /&gt;
		</span>
		<span>
			&lt;article class="<em>mx-auto py-4</em>" /&gt;
		</span>
	</pre>
)

const exampleSticky = (
	<pre className="source-code-pro">
		<span className="mb-3">
			Achieve more complex layout with just a few classes.<br />
			Eg.: sticky footer with minimum element height
		</span>
		<span>
			&lt;div class="<em>flex flex-column minvh-100</em>"&gt;
		</span>
		<span>
			&emsp;&lt;div class="<em>grow-1</em>" /&gt;
		</span>
		<span>&emsp;&lt;footer /"&gt;</span>
		<span>&lt;/div&gt;</span>
	</pre>
)

const exampleOwn = (
	<pre>
		<span className="mb-3">
			Mix and match with your own css.<br />
			Checkout{" "}
			<Link href="/docs">
				<a>docs</a>
			</Link>{" "}
			for a complete overview.
		</span>
		<span>
			&lt;div class="your-container <em>grid grid-gap-2</em>"&gt;
		</span>
		<span>
			&emsp;&lt;div class="your-container__el <em>py-3</em>" /&gt;
		</span>
		<span>&lt;/div&gt;</span>
	</pre>
)

export { exampleOwn, exampleBoxes, exampleIntro, exampleSticky }
