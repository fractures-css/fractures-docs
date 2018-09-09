import { Fragment } from "react"
import Link from "next/link"

const exampleIntro = [
	"Use atomic, self-explanatory classes with ease.",
	null,
	`&lt;div class="<em>flex flex-center</em>"&gt;`,
	`&emsp;&lt;div&gt;&lt;/div&gt;`,
	`&emsp;&lt;div&gt;&lt;/div&gt;`,
	`&lt;/div&gt;`
]

const exampleBoxes = [
	`Have a default size-scale for persevering layouts.`,
	null,
	`&lt;header class="<em>fixed w-100 py-2</em>" /&gt;`,
	`&lt;article class="<em>mx-auto py-4</em>" /&gt;`
]

const exampleSticky = [
	`Achieve more complex layout with just a few classes.`,
	`Eg.: sticky footer with minimum element height`,
	null,
	`&lt;div class="<em>flex flex-column minh-viewport</em>"&gt;`,
	`&emsp;&lt;div class="<em>grow-1</em>" /&gt;`,
	`&emsp;&lt;footer /"&gt;`,
	`&lt;/div&gt;`
]

const exampleOwn = [
	`Mix and match with your own css.`,
	`Checkout the documentation for a complete overview.`,
	null,
	`&lt;div class="your-container <em>grid grid-gap-2</em>"&gt;`,
	`&emsp;&lt;div class="your-container__el <em>py-3</em>" /&gt;`,
	`&lt;/div&gt;`
]

export { exampleOwn, exampleBoxes, exampleIntro, exampleSticky }
