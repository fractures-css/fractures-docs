import Container from "../components/Container"
import Layout from "../components/Layout"
import Link from "next/link"

const docsDefaultClass = "bg-smoke p-1"

export default () => (
	<Layout title="docs — fractures">
		<Container>
			<header className="py-5">
				<h1>Docs</h1>
				<p>
					Core concept is ~atomic classes, that makes sense.<br />
					<Link href="/about">
						<a>Learn more</a>
					</Link>.
				</p>
				<ul className="list-disc ml-4 mt-3">
					<li>You can overwrite default building blocks by setting --box-(1-6) on :root.</li>
					<li>Every element is set to border-box.</li>
					<li>Html y-scroll is always on, so pages won't jump.</li>
				</ul>
			</header>

			{/* Border */}
			<article className="py-4">
				<h3>Border</h3>
				<p className="mb-4">Border radius is important.</p>
				<div className="flex flex-gap-1">
					<div className="bg-smoke radius-0 h-6 w-6 flex flex-center">radius-0</div>
					<div className="bg-light radius-1 h-6 w-6 flex flex-center">radius-1</div>
					<div className="bg-light radius-2 h-6 w-6 flex flex-center">radius-2</div>
					<div className="bg-light radius-3 h-6 w-6 flex flex-center">radius-3</div>
					<div className="bg-black smoke radius-max px-5 nowrap h-6 flex flex-center">radius-max</div>
					<div className="bg-black smoke radius-100 h-6 w-6 flex flex-center">radius-100</div>
				</div>
				<small className="block mt-4">
					<b>.radius-max</b> is rounding border with a large pixel value. Creates tube.
				</small>
			</article>

			{/* Color */}
			<article className="py-4">
				<h3>Color</h3>
				<p className="mb-4">
					Basic monochrome color scheme from CSS defaults.<br />
					You can overwrite these, but don't.
				</p>
				<div className="grid grid-cols-7 grid-gap-1">
					<div className="bg-white p-1">bg-white</div>
					<div className={ docsDefaultClass }>bg-smoke</div>
					<div className="bg-light p-1">bg-light</div>
					<div className="bg-silver p-1">bg-silver</div>
					<div className="bg-dark p-1">bg-dark</div>
					<div className="bg-gray p-1">bg-gray</div>
					<div className="bg-black p-1">bg-black</div>
					<div className="white p-1">white</div>
					<div className="smoke p-1">smoke</div>
					<div className="light p-1">light</div>
					<div className="silver p-1">silver</div>
					<div className="dark p-1">dark</div>
					<div className="gray p-1">gray</div>
					<div className="black p-1">black</div>
				</div>
			</article>

			{/* Display */}
			<article className="py-4">
				<h3>Display</h3>
				<p className="mb-4">CSS display properties.</p>
				<div className="grid grid-cols-6 grid-gap-1">
					<div className={ docsDefaultClass }>block</div>
					<div className={ docsDefaultClass }>
						clearfix<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>flex</div>
					<div className={ docsDefaultClass }>float-left</div>
					<div className={ docsDefaultClass }>float-right</div>
					<div className={ docsDefaultClass }>grid</div>
					<div className={ docsDefaultClass }>inline-block</div>
					<div className={ docsDefaultClass }>inline-flex</div>
					<div className={ docsDefaultClass }>inline-table</div>
					<div className={ docsDefaultClass }>inline</div>
					<div className={ docsDefaultClass }>none</div>
					<div className={ docsDefaultClass }>
						table<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>table-cell</div>
					<div className={ docsDefaultClass }>table-column</div>
					<div className={ docsDefaultClass }>table-row</div>
				</div>
				<small className="block mt-4">
					<b>.clearfix</b> is an after-before-content hack for clearing floats.<br />
					<b>.table</b> has an extra attribute, layout: fixed.
				</small>
			</article>

			{/* Flex */}
			<article className="py-4">
				<h3>Flex</h3>
				<p className="mb-4">Flexbox related properties.</p>
				<div className="grid grid-cols-8 grid-gap-1">
					<div className={ docsDefaultClass }>flex-wrap</div>
					<div className={ docsDefaultClass }>flex-wrap-reverse</div>
					<div className={ docsDefaultClass }>flex-reverse</div>
					<div className={ docsDefaultClass }>flex-column</div>
					<div className={ docsDefaultClass }>flex-around</div>
					<div className={ docsDefaultClass }>flex-between</div>
					<div className={ docsDefaultClass }>flex-right</div>
					<div className={ docsDefaultClass }>flex-baseline</div>
					<div className={ docsDefaultClass }>flex-end</div>
					<div className={ docsDefaultClass }>flex-start</div>
					<div className={ docsDefaultClass }>flex-gap-1</div>
					<div className={ docsDefaultClass }>flex-gap-2</div>
					<div className={ docsDefaultClass }>flex-gap-3</div>
					<div className={ docsDefaultClass }>flex-gap-4</div>
					<div className={ docsDefaultClass }>flex-gap-5</div>
					<div className={ docsDefaultClass }>flex-gap-6</div>
					<div className={ docsDefaultClass }>
						flex-center<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>
						flex-xcenter<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>
						flex-ycenter<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>grow-1</div>
					<div className={ docsDefaultClass }>grow-2</div>
					<div className={ docsDefaultClass }>grow-3</div>
					<div className={ docsDefaultClass }>grow-4</div>
					<div className={ docsDefaultClass }>grow-5</div>
					<div className={ docsDefaultClass }>grow-6</div>
					<div className={ docsDefaultClass }>self-center</div>
					<div className={ docsDefaultClass }>self-start</div>
					<div className={ docsDefaultClass }>self-end</div>
					<div className={ docsDefaultClass }>self-baseline</div>
				</div>
				<small className="block mt-4">
					<b>.flex-(x|y)center</b> does what is say. x-y is axis.<br />
					<b>.grow-x</b> also resets flex-basis to 0. Should be used on flex children.<br />
					<b>.self-x</b> is align-self. Should be used on flex children.
				</small>
			</article>

			{/* Grid */}
			<article className="py-4">
				<h3>Grid</h3>
				<p className="mb-4">WIP, expect non-breaking updates.</p>
				<div className="grid grid-cols-6 grid-gap-1">
					<div className={ docsDefaultClass }>grid-gap-1</div>
					<div className={ docsDefaultClass }>grid-gap-2</div>
					<div className={ docsDefaultClass }>grid-gap-3</div>
					<div className={ docsDefaultClass }>grid-gap-4</div>
					<div className={ docsDefaultClass }>grid-gap-5</div>
					<div className={ docsDefaultClass }>grid-gap-6</div>
					<div className={ docsDefaultClass }>grid-gap-x-1</div>
					<div className={ docsDefaultClass }>grid-gap-x-2</div>
					<div className={ docsDefaultClass }>grid-gap-x-3</div>
					<div className={ docsDefaultClass }>grid-gap-x-4</div>
					<div className={ docsDefaultClass }>grid-gap-x-5</div>
					<div className={ docsDefaultClass }>grid-gap-x-6</div>
					<div className={ docsDefaultClass }>grid-gap-y-1</div>
					<div className={ docsDefaultClass }>grid-gap-y-2</div>
					<div className={ docsDefaultClass }>grid-gap-y-3</div>
					<div className={ docsDefaultClass }>grid-gap-y-4</div>
					<div className={ docsDefaultClass }>grid-gap-y-5</div>
					<div className={ docsDefaultClass }>grid-gap-y-6</div>
					<div className={ docsDefaultClass }>grid-cols</div>
					<div className={ docsDefaultClass }>grid-cols-2</div>
					<div className={ docsDefaultClass }>grid-cols-3</div>
					<div className={ docsDefaultClass }>grid-cols-4</div>
					<div className={ docsDefaultClass }>grid-cols-5</div>
					<div className={ docsDefaultClass }>grid-cols-6</div>
					<div className={ docsDefaultClass }>grid-cols-7</div>
					<div className={ docsDefaultClass }>grid-cols-8</div>
					<div className={ docsDefaultClass }>grid-rows</div>
					<div className={ docsDefaultClass }>grid-rows-2</div>
					<div className={ docsDefaultClass }>grid-rows-3</div>
					<div className={ docsDefaultClass }>grid-rows-4</div>
					<div className={ docsDefaultClass }>grid-rows-5</div>
					<div className={ docsDefaultClass }>grid-rows-6</div>
					<div className={ docsDefaultClass }>grid-rows-7</div>
					<div className={ docsDefaultClass }>grid-rows-8</div>
				</div>
				<small className="block mt-4">
					<b>.grid-(rows|cols)-x</b> are splitted with fr units.<br />
					<b>.grid-(rows|cols)-x</b> has a .dense class modifier
				</small>
			</article>

			{/* Height */}
			<article className="py-4">
				<h3>Height</h3>
				<p className="mb-4">Common height options.</p>
				<div className="grid grid-cols-7 grid-gap-1">
					<div className="bg-light h-0">h-0</div>
					<div className="bg-light h-1">h-1</div>
					<div className="bg-light h-2">h-2</div>
					<div className="bg-light h-3">h-3</div>
					<div className="bg-light h-4">h-4</div>
					<div className="bg-light h-5">h-5</div>
					<div className="bg-light h-6">h-6</div>
					<div className={ docsDefaultClass }>h-25</div>
					<div className={ docsDefaultClass }>h-33</div>
					<div className={ docsDefaultClass }>h-50</div>
					<div className={ docsDefaultClass }>h-66</div>
					<div className={ docsDefaultClass }>h-75</div>
					<div className={ docsDefaultClass }>h-100</div>
					<div className={ docsDefaultClass }>minvh-25</div>
					<div className={ docsDefaultClass }>minvh-33</div>
					<div className={ docsDefaultClass }>minvh-50</div>
					<div className={ docsDefaultClass }>minvh-66</div>
					<div className={ docsDefaultClass }>minvh-75</div>
					<div className={ docsDefaultClass }>minvh-100</div>
				</div>
				<small className="block mt-4">
					<b>.minvh-x</b> is minimum height in viewport height percentage.<br />
				</small>
			</article>

			{/* List */}
			<article className="py-4">
				<h3>List</h3>
				<p className="mb-4">Common list styles for ul, ol.</p>
				<div className="grid grid-cols-7 grid-gap-1">
					<div className={ docsDefaultClass }>list-circle</div>
					<div className={ docsDefaultClass }>list-decimal-leading-zero</div>
					<div className={ docsDefaultClass }>list-decimal</div>
					<div className={ docsDefaultClass }>list-disc</div>
					<div className={ docsDefaultClass }>list-greek</div>
					<div className={ docsDefaultClass }>list-lower-latin</div>
					<div className={ docsDefaultClass }>list-lower-roman</div>
					<div className={ docsDefaultClass }>list-none</div>
					<div className={ docsDefaultClass }>list-square</div>
					<div className={ docsDefaultClass }>list-upper-latin</div>
					<div className={ docsDefaultClass }>list-upper-roman</div>
					<div className={ docsDefaultClass }>
						list-comma<sup>*</sup>
					</div>
				</div>
				<small className="block mt-4">
					<b>.list-comma</b> is turning its content into a comma separated inline list.<br />
				</small>
			</article>

			{/* Margin */}
			<article className="py-4">
				<h3>Margin</h3>
				<p className="mb-4">Margins based on overwriteable box sizes.</p>
				<div className="grid grid-cols-7 grid-gap-1">
					<div className="bg-light m-0">m-0</div>
					<div className="bg-light m-1">m-1</div>
					<div className="bg-light m-2">m-2</div>
					<div className="bg-light m-3">m-3</div>
					<div className="bg-light m-4">m-4</div>
					<div className="bg-light m-5">m-5</div>
					<div className="bg-light m-6">m-6</div>
					<div className={ docsDefaultClass }>mb-0</div>
					<div className={ docsDefaultClass }>mb-1</div>
					<div className={ docsDefaultClass }>mb-2</div>
					<div className={ docsDefaultClass }>mb-3</div>
					<div className={ docsDefaultClass }>mb-4</div>
					<div className={ docsDefaultClass }>mb-5</div>
					<div className={ docsDefaultClass }>mb-6</div>
					<div className={ docsDefaultClass }>ml-0</div>
					<div className={ docsDefaultClass }>ml-1</div>
					<div className={ docsDefaultClass }>ml-2</div>
					<div className={ docsDefaultClass }>ml-3</div>
					<div className={ docsDefaultClass }>ml-4</div>
					<div className={ docsDefaultClass }>ml-5</div>
					<div className={ docsDefaultClass }>ml-6</div>
					<div className={ docsDefaultClass }>mr-0</div>
					<div className={ docsDefaultClass }>mr-1</div>
					<div className={ docsDefaultClass }>mr-2</div>
					<div className={ docsDefaultClass }>mr-3</div>
					<div className={ docsDefaultClass }>mr-4</div>
					<div className={ docsDefaultClass }>mr-5</div>
					<div className={ docsDefaultClass }>mr-6</div>
					<div className={ docsDefaultClass }>mt-0</div>
					<div className={ docsDefaultClass }>mt-1</div>
					<div className={ docsDefaultClass }>mt-2</div>
					<div className={ docsDefaultClass }>mt-3</div>
					<div className={ docsDefaultClass }>mt-4</div>
					<div className={ docsDefaultClass }>mt-5</div>
					<div className={ docsDefaultClass }>mt-6</div>
					<div className={ docsDefaultClass }>my-0</div>
					<div className={ docsDefaultClass }>my-1</div>
					<div className={ docsDefaultClass }>my-2</div>
					<div className={ docsDefaultClass }>my-3</div>
					<div className={ docsDefaultClass }>my-4</div>
					<div className={ docsDefaultClass }>my-5</div>
					<div className={ docsDefaultClass }>my-6</div>
					<div className={ docsDefaultClass }>mx-0</div>
					<div className={ docsDefaultClass }>mx-1</div>
					<div className={ docsDefaultClass }>mx-2</div>
					<div className={ docsDefaultClass }>mx-3</div>
					<div className={ docsDefaultClass }>mx-4</div>
					<div className={ docsDefaultClass }>mx-5</div>
					<div className={ docsDefaultClass }>mx-6</div>
					<div className={ docsDefaultClass }>mx-auto</div>
				</div>
				<small className="block mt-4">
					<b>.mx-x</b> is margin on X axis.<br />
					<b>.my-x</b> is margin on Y axis.<br />
				</small>
			</article>

			{/* Opacity */}
			<article className="py-4">
				<h3>Opacity</h3>
				<p className="mb-4">Opacity by decimal steps.</p>
				<div className="grid grid-cols-5 grid-gap-1">
					<div className="bg-gray p-1 opacity-100">opacity-100</div>
					<div className="bg-gray p-1 opacity-90">opacity-90</div>
					<div className="bg-gray p-1 opacity-80">opacity-80</div>
					<div className="bg-gray p-1 opacity-70">opacity-70</div>
					<div className="bg-gray p-1 opacity-60">opacity-60</div>
					<div className="bg-gray p-1 opacity-50">opacity-50</div>
					<div className="bg-gray p-1 opacity-40">opacity-40</div>
					<div className="bg-gray p-1 opacity-30">opacity-30</div>
					<div className="bg-gray p-1 opacity-20">opacity-20</div>
					<div className="bg-gray p-1 opacity-10">opacity-10</div>
					<div className="bg-gray p-1 opacity-0">opacity-0</div>
				</div>
			</article>

			{/* Overflow */}
			<article className="py-4">
				<h3>Overflow</h3>
				<p className="mb-4">Content overflows.</p>
				<div className="grid grid-cols-5 grid-gap-1">
					<div className="bg-light p-1 overflow-hidden nowrap">
						overflow-hidden overflow-hidden...overflow-hidden
					</div>
					<div className="bg-light p-1 overflow-scroll nowrap">overflow-scroll ... overflow-scroll</div>
				</div>
			</article>

			{/* Padding */}
			<article className="py-4">
				<h3>Padding</h3>
				<p className="mb-4">Paddings based on overwriteable box sizes.</p>
				<div className="grid grid-cols-7 grid-gap-1">
					<div className="bg-light p-0">p-0</div>
					<div className="bg-light p-1">p-1</div>
					<div className="bg-light p-2">p-2</div>
					<div className="bg-light p-3">p-3</div>
					<div className="bg-light p-4">p-4</div>
					<div className="bg-light p-5">p-5</div>
					<div className="bg-light p-6">p-6</div>
					<div className={ docsDefaultClass }>pb-0</div>
					<div className={ docsDefaultClass }>pb-1</div>
					<div className={ docsDefaultClass }>pb-2</div>
					<div className={ docsDefaultClass }>pb-3</div>
					<div className={ docsDefaultClass }>pb-4</div>
					<div className={ docsDefaultClass }>pb-5</div>
					<div className={ docsDefaultClass }>pb-6</div>
					<div className={ docsDefaultClass }>pl-0</div>
					<div className={ docsDefaultClass }>pl-1</div>
					<div className={ docsDefaultClass }>pl-2</div>
					<div className={ docsDefaultClass }>pl-3</div>
					<div className={ docsDefaultClass }>pl-4</div>
					<div className={ docsDefaultClass }>pl-5</div>
					<div className={ docsDefaultClass }>pl-6</div>
					<div className={ docsDefaultClass }>pr-0</div>
					<div className={ docsDefaultClass }>pr-1</div>
					<div className={ docsDefaultClass }>pr-2</div>
					<div className={ docsDefaultClass }>pr-3</div>
					<div className={ docsDefaultClass }>pr-4</div>
					<div className={ docsDefaultClass }>pr-5</div>
					<div className={ docsDefaultClass }>pr-6</div>
					<div className={ docsDefaultClass }>pt-0</div>
					<div className={ docsDefaultClass }>pt-1</div>
					<div className={ docsDefaultClass }>pt-2</div>
					<div className={ docsDefaultClass }>pt-3</div>
					<div className={ docsDefaultClass }>pt-4</div>
					<div className={ docsDefaultClass }>pt-5</div>
					<div className={ docsDefaultClass }>pt-6</div>
					<div className={ docsDefaultClass }>py-0</div>
					<div className={ docsDefaultClass }>py-1</div>
					<div className={ docsDefaultClass }>py-2</div>
					<div className={ docsDefaultClass }>py-3</div>
					<div className={ docsDefaultClass }>py-4</div>
					<div className={ docsDefaultClass }>py-5</div>
					<div className={ docsDefaultClass }>py-6</div>
					<div className={ docsDefaultClass }>px-0</div>
					<div className={ docsDefaultClass }>px-1</div>
					<div className={ docsDefaultClass }>px-2</div>
					<div className={ docsDefaultClass }>px-3</div>
					<div className={ docsDefaultClass }>px-4</div>
					<div className={ docsDefaultClass }>px-5</div>
					<div className={ docsDefaultClass }>px-6</div>
				</div>
				<small className="block mt-4">
					<b>.px-x</b> is padding on X axis.<br />
					<b>.py-x</b> is padding on Y axis.<br />
				</small>
			</article>

			{/* Position */}
			<article className="py-4">
				<h3>Position</h3>
				<p className="mb-4">Position related classes.</p>
				<div className="grid grid-cols-8 grid-gap-1">
					<div className={ docsDefaultClass }>absolute</div>
					<div className={ docsDefaultClass }>fixed</div>
					<div className={ docsDefaultClass }>relative</div>
					<div className={ docsDefaultClass }>sticky</div>
					<div className={ docsDefaultClass }>bottom-0</div>
					<div className={ docsDefaultClass }>left-0</div>
					<div className={ docsDefaultClass }>right-0</div>
					<div className={ docsDefaultClass }>top-0</div>
					<div className={ docsDefaultClass }>z-0</div>
					<div className={ docsDefaultClass }>z-1</div>
					<div className={ docsDefaultClass }>z-2</div>
					<div className={ docsDefaultClass }>z-3</div>
					<div className={ docsDefaultClass }>z-4</div>
					<div className={ docsDefaultClass }>z-5</div>
					<div className={ docsDefaultClass }>z-6</div>
					<div className={ docsDefaultClass }>z-7</div>
					<div className={ docsDefaultClass }>z-9</div>
					<div className={ docsDefaultClass }>z-10</div>
				</div>
				<small className="block mt-4">
					<b>.z-x</b> is a z-index scale from 0-100, so it has some extra room.<br />
				</small>
			</article>

			{/* Type */}
			<article className="py-4">
				<h3>Typo</h3>
				<p className="mb-4">
					Typescale is WIP, and most likely will change.<br />
				</p>
				<div className="grid grid-cols-3 grid-gap-2 mb-3">
					<h1>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
					<h2>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
					<h3>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
					<h4>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
					<h5>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
					<h6>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<small>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</small>
				</div>
				<div className="grid grid-cols-8 grid-gap-1">
					<div className={ docsDefaultClass }>
						ellipsis<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>italic</div>
					<div className={ docsDefaultClass }>normal</div>
					<div className={ docsDefaultClass }>oblique</div>
					<div className={ docsDefaultClass }>
						regular<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>
						bold<sup>*</sup>
					</div>
					<div className={ docsDefaultClass }>center</div>
					<div className={ docsDefaultClass }>justify</div>
					<div className={ docsDefaultClass }>left</div>
					<div className={ docsDefaultClass }>right</div>
					<div className={ docsDefaultClass }>line-through</div>
					<div className={ docsDefaultClass }>overline</div>
					<div className={ docsDefaultClass }>underline</div>
					<div className={ docsDefaultClass }>capitalize</div>
					<div className={ docsDefaultClass }>lowercase</div>
					<div className={ docsDefaultClass }>uppercase</div>
					<div className={ docsDefaultClass }>pre</div>
					<div className={ docsDefaultClass }>pre-line</div>
					<div className={ docsDefaultClass }>pre-wrap</div>
					<div className={ docsDefaultClass }>nowrap</div>
					<div className={ docsDefaultClass }>break-word</div>
				</div>
				<small className="block mt-4">
					<b>typescale</b> are defined by em units (body, h1, h2, h3, h4, h5, p, h6, small). Body takes root
					variables --basefont and --baseline. Defaults are 16/1.6.<br />
					<b>.regular</b> takes a root variable, --regular. Default is 400.<br />
					<b>.bold</b> takes a root variable, --bold. Default is 700.<br />
					<b>.ellipsis</b> is non-atomic - makes text-overflow ellipsis possible.
				</small>
			</article>

			{/* Width */}
			<article className="py-4">
				<h3>Width</h3>
				<p className="mb-4">Common width options.</p>
				<div className="grid grid-cols-7 grid-gap-1">
					<div className="bg-light w-0">W-0</div>
					<div className="bg-light w-1">w-1</div>
					<div className="bg-light w-2">w-2</div>
					<div className="bg-light w-3">w-3</div>
					<div className="bg-light w-4">w-4</div>
					<div className="bg-light w-5">w-5</div>
					<div className="bg-light w-6">w-6</div>
					<div className={ docsDefaultClass }>w-25</div>
					<div className={ docsDefaultClass }>w-33</div>
					<div className={ docsDefaultClass }>w-50</div>
					<div className={ docsDefaultClass }>w-66</div>
					<div className={ docsDefaultClass }>w-75</div>
					<div className={ docsDefaultClass }>w-100</div>
					<div className={ docsDefaultClass }>minvw-25</div>
					<div className={ docsDefaultClass }>minvw-33</div>
					<div className={ docsDefaultClass }>minvw-50</div>
					<div className={ docsDefaultClass }>minvw-66</div>
					<div className={ docsDefaultClass }>minvw-75</div>
					<div className={ docsDefaultClass }>minvw-100</div>
				</div>
				<small className="block mt-4">
					<b>.minvw-x</b> is minimum width in viewport width percentage.<br />
				</small>
			</article>
		</Container>
	</Layout>
)
