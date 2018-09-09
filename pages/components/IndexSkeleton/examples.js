import { Fragment } from "react"
import Link from "next/link"

const exampleIntro = (
	<Fragment>
		<span>Use atomic, self-explanatory classes with ease.</span>
		<span>{` `}</span>
		<span>
			&lt;div class="
			<em>flex flex-center</em>
			"&gt;
		</span>
		<span>&emsp;&lt;div&gt;&lt;/div&gt;</span>
		<span>&emsp;&lt;div&gt;&lt;/div&gt;</span>
		<span>&lt;/div&gt;</span>
	</Fragment>
)

const exampleBoxes = (
	<Fragment>
		<span>Have a default size-scale for persevering layouts.</span>
		<span>{` `}</span>
		<span>
			&lt;header class="
			<em>fixed w-100 py-2</em>" /&gt;
		</span>
		<span>
			&lt;article class="
			<em>mx-auto py-4</em>" /&gt;
		</span>
	</Fragment>
)

const exampleSticky = (
	<Fragment>
		<span>Achieve more complex layout with just a few classes.</span>
		<span>Eg.: sticky footer with minimum element height</span>
		<span>{` `}</span>
		<span>
			&lt;div class="
			<em>flex flex-column minh-viewport</em>
			"&gt;
		</span>
		<span>
			&emsp;&lt;div class="
			<em>grow-1</em>" /&gt;
		</span>
		<span>&emsp;&lt;footer /"&gt;</span>
		<span>&lt;/div&gt;</span>
	</Fragment>
)

const exampleOwn = (
	<Fragment>
		<span>Mix and match with your own css.</span>
		<span>
			Checkout{" "}
			<Link href="/docs">
				<a>docs</a>
			</Link>{" "}
			for a complete overview.
		</span>
		<span>{` `}</span>
		<span>
			&lt;div class="your-container <em>grid grid-gap-2</em>
			"&gt;
		</span>
		<span>
			&emsp;&lt;div class="your-container__el <em>py-3</em>" /&gt;
		</span>
		<span>&lt;/div&gt;</span>
	</Fragment>
)

export { exampleOwn, exampleBoxes, exampleIntro, exampleSticky }
