import Link from "next/link"
import Layout from "../components/layout"

export default () =>
	<Layout title="Docs">
		<div className="container">
			<header className="py-5">
				<h1>Docs</h1>
				<p>Lorem ipsum dolor sit amet.</p>
			</header>

			{/* <!-- Border --> */}
			<article className="py-5">
				<h3>Border</h3>
				<p className="mb-4">Border radius is important.</p>
				<div className="grid grid-cols-7 gap-1">
					<div className="bg-smoke radius-0 h-6 w-6 flex flex-center">
						radius-0
					</div>
					<div className="bg-light radius-1 h-6 w-6 flex flex-center">
						radius-1
					</div>
					<div className="bg-light radius-2 h-6 w-6 flex flex-center">
						radius-2
					</div>
					<div className="bg-light radius-3 h-6 w-6 flex flex-center">
						radius-3
					</div>
					<div className="bg-black smoke radius-100 h-6 w-6 flex flex-center">
						radius-100
					</div>
				</div>
			</article>

			{/* <!-- Color --> */}
			<article className="py-5">
				<h3>Color</h3>
				<p className="mb-4">
					Basic monochrome color scheme from CSS defaults.<br />
					You can overwrite these, but don't.
				</p>
				<div className="grid grid-cols-7 gap-1">
					<div className="bg-white p-1">bg-white</div>
					<div className="bg-smoke p-1">bg-smoke</div>
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

			{/* <!-- Display --> */}
			<article className="py-5">
				<h3>Display</h3>
				<p className="mb-4">CSS display properties.</p>
				<div className="grid grid-cols-6 gap-1">
					<div className="bg-smoke p-1">block</div>
					<div className="bg-smoke p-1">
						clearfix<sup>*</sup>
					</div>
					<div className="bg-smoke p-1">flex</div>
					<div className="bg-smoke p-1">float-left</div>
					<div className="bg-smoke p-1">float-right</div>
					<div className="bg-smoke p-1">grid</div>
					<div className="bg-smoke p-1">inline-block</div>
					<div className="bg-smoke p-1">inline-flex</div>
					<div className="bg-smoke p-1">inline-table</div>
					<div className="bg-smoke p-1">inline</div>
					<div className="bg-smoke p-1">none</div>
					<div className="bg-smoke p-1">
						table<sup>*</sup>
					</div>
					<div className="bg-smoke p-1">table-cell</div>
					<div className="bg-smoke p-1">table-column</div>
					<div className="bg-smoke p-1">table-row</div>
				</div>
				<small className="block mt-4">
					<b>clearfix</b> is an after-before-content hack for clearing
					floats.<br />
					<b>table</b> has an extra attribute, layout: fixed.
				</small>
			</article>

			{/* <!-- Flex --> */}
			<article className="py-5">
				<h3>Flex</h3>
				<p className="mb-4">Flexbox related properties.</p>
				<div className="grid grid-cols-8 gap-1">
					<div className="bg-smoke p-1">flex-wrap</div>
					<div className="bg-smoke p-1">flex-wrap-reverse</div>
					<div className="bg-smoke p-1">flex-reverse</div>
					<div className="bg-smoke p-1">flex-column</div>
					<div className="bg-smoke p-1">flex-around</div>
					<div className="bg-smoke p-1">flex-between</div>
					<div className="bg-smoke p-1">flex-right</div>
					<div className="bg-smoke p-1">flex-baseline</div>
					<div className="bg-smoke p-1">flex-end</div>
					<div className="bg-smoke p-1">flex-start</div>
					<div className="bg-smoke p-1">flex-gap-1</div>
					<div className="bg-smoke p-1">flex-gap-2</div>
					<div className="bg-smoke p-1">flex-gap-3</div>
					<div className="bg-smoke p-1">flex-gap-4</div>
					<div className="bg-smoke p-1">flex-gap-5</div>
					<div className="bg-smoke p-1">flex-gap-6</div>
					<div className="bg-smoke p-1">
						flex-center<sup>*</sup>
					</div>
					<div className="bg-smoke p-1">
						flex-xcenter<sup>*</sup>
					</div>
					<div className="bg-smoke p-1">
						flex-ycenter<sup>*</sup>
					</div>
					<div className="bg-smoke p-1">grow-1</div>
					<div className="bg-smoke p-1">grow-2</div>
					<div className="bg-smoke p-1">grow-3</div>
					<div className="bg-smoke p-1">grow-4</div>
					<div className="bg-smoke p-1">grow-5</div>
					<div className="bg-smoke p-1">grow-6</div>
					<div className="bg-smoke p-1">self-center</div>
					<div className="bg-smoke p-1">self-start</div>
					<div className="bg-smoke p-1">self-end</div>
					<div className="bg-smoke p-1">self-baseline</div>
				</div>
				<small className="block mt-4">
					<b>flex-(x|y)center</b> does what is say. x-y is axis.<br />
					<b>grow-x</b> also resets flex-basis to 0. Should be used on
					flex children.<br />
					<b>self-x</b> is align-self. Should be used on flex
					children.
				</small>
			</article>

			{/* <!-- Grid --> */}
			<article className="py-5">
				<h3>Grid</h3>
				<p className="mb-4">WIP.</p>
				<div className="grid grid-cols-6 gap-1">
					<div className="bg-smoke p-1">gap-1</div>
					<div className="bg-smoke p-1">gap-2</div>
					<div className="bg-smoke p-1">gap-3</div>
					<div className="bg-smoke p-1">gap-4</div>
					<div className="bg-smoke p-1">gap-5</div>
					<div className="bg-smoke p-1">gap-6</div>
					<div className="bg-smoke p-1">gap-x-1</div>
					<div className="bg-smoke p-1">gap-x-2</div>
					<div className="bg-smoke p-1">gap-x-3</div>
					<div className="bg-smoke p-1">gap-x-4</div>
					<div className="bg-smoke p-1">gap-x-5</div>
					<div className="bg-smoke p-1">gap-x-6</div>
					<div className="bg-smoke p-1">gap-y-1</div>
					<div className="bg-smoke p-1">gap-y-2</div>
					<div className="bg-smoke p-1">gap-y-3</div>
					<div className="bg-smoke p-1">gap-y-4</div>
					<div className="bg-smoke p-1">gap-y-5</div>
					<div className="bg-smoke p-1">gap-y-6</div>
					<div className="bg-smoke p-1">grid-cols</div>
					<div className="bg-smoke p-1">grid-cols-2</div>
					<div className="bg-smoke p-1">grid-cols-3</div>
					<div className="bg-smoke p-1">grid-cols-4</div>
					<div className="bg-smoke p-1">grid-cols-5</div>
					<div className="bg-smoke p-1">grid-cols-6</div>
					<div className="bg-smoke p-1">grid-cols-7</div>
					<div className="bg-smoke p-1">grid-cols-8</div>
					<div className="bg-smoke p-1">grid-rows</div>
					<div className="bg-smoke p-1">grid-rows-2</div>
					<div className="bg-smoke p-1">grid-rows-3</div>
					<div className="bg-smoke p-1">grid-rows-4</div>
					<div className="bg-smoke p-1">grid-rows-5</div>
					<div className="bg-smoke p-1">grid-rows-6</div>
					<div className="bg-smoke p-1">grid-rows-7</div>
					<div className="bg-smoke p-1">grid-rows-8</div>
				</div>
				<small className="block mt-4">
					<b>grid-(rows|cols)-x</b> are splitted with fr units.<br />
					<b>grid-(rows|cols)-x</b> has a .dense class modifier
				</small>
			</article>

			{/* <!-- Height --> */}
			<article className="py-5">
				<h3>Height</h3>
				<p className="mb-4">Common height options.</p>
				<div className="grid grid-cols-7 gap-1">
					<div className="bg-light h-0">h-0</div>
					<div className="bg-light h-1">h-1</div>
					<div className="bg-light h-2">h-2</div>
					<div className="bg-light h-3">h-3</div>
					<div className="bg-light h-4">h-4</div>
					<div className="bg-light h-5">h-5</div>
					<div className="bg-light h-6">h-6</div>
					<div className="bg-smoke p-1">h-25</div>
					<div className="bg-smoke p-1">h-33</div>
					<div className="bg-smoke p-1">h-50</div>
					<div className="bg-smoke p-1">h-66</div>
					<div className="bg-smoke p-1">h-75</div>
					<div className="bg-smoke p-1">h-100</div>
					<div className="bg-smoke p-1">minvh-25</div>
					<div className="bg-smoke p-1">minvh-33</div>
					<div className="bg-smoke p-1">minvh-50</div>
					<div className="bg-smoke p-1">minvh-66</div>
					<div className="bg-smoke p-1">minvh-75</div>
					<div className="bg-smoke p-1">minvh-100</div>
				</div>
				<small className="block mt-4">
					<b>minvh-x</b> is minimum height in viewport height
					percentage.<br />
				</small>
			</article>

			{/* <!-- List --> */}
			<article className="py-5">
				<h3>List</h3>
				<p className="mb-4">Common list styles for ul, ol.</p>
				<div className="grid grid-cols-7 gap-1">
					<div className="bg-smoke p-1">list-circle</div>
					<div className="bg-smoke p-1">list-disc</div>
					<div className="bg-smoke p-1">list-square</div>
					<div className="bg-smoke p-1">list-none</div>
					<div className="bg-smoke p-1">list-lower-latin</div>
					<div className="bg-smoke p-1">list-lower-roman</div>
					<div className="bg-smoke p-1">list-upper-latin</div>
					<div className="bg-smoke p-1">list-upper-roman</div>
					<div className="bg-smoke p-1">
						list-comma<sup>*</sup>
					</div>
				</div>
				<small className="block mt-4">
					<b>list-comma</b> is turning its content into a comma
					separated inline list.<br />
				</small>
			</article>

			{/* <!-- Margin --> */}
			<article className="py-5">
				<h3>Margin</h3>
				<p className="mb-4">
					Margins based on overwriteable box sizes.
				</p>
				<div className="grid grid-cols-7 gap-1">
					<div className="bg-light m-0">m-0</div>
					<div className="bg-light m-1">m-1</div>
					<div className="bg-light m-2">m-2</div>
					<div className="bg-light m-3">m-3</div>
					<div className="bg-light m-4">m-4</div>
					<div className="bg-light m-5">m-5</div>
					<div className="bg-light m-6">m-6</div>
					<div className="bg-smoke p-1">mb-0</div>
					<div className="bg-smoke p-1">mb-1</div>
					<div className="bg-smoke p-1">mb-2</div>
					<div className="bg-smoke p-1">mb-3</div>
					<div className="bg-smoke p-1">mb-4</div>
					<div className="bg-smoke p-1">mb-5</div>
					<div className="bg-smoke p-1">mb-6</div>
					<div className="bg-smoke p-1">ml-0</div>
					<div className="bg-smoke p-1">ml-1</div>
					<div className="bg-smoke p-1">ml-2</div>
					<div className="bg-smoke p-1">ml-3</div>
					<div className="bg-smoke p-1">ml-4</div>
					<div className="bg-smoke p-1">ml-5</div>
					<div className="bg-smoke p-1">ml-6</div>
					<div className="bg-smoke p-1">mr-0</div>
					<div className="bg-smoke p-1">mr-1</div>
					<div className="bg-smoke p-1">mr-2</div>
					<div className="bg-smoke p-1">mr-3</div>
					<div className="bg-smoke p-1">mr-4</div>
					<div className="bg-smoke p-1">mr-5</div>
					<div className="bg-smoke p-1">mr-6</div>
					<div className="bg-smoke p-1">mt-0</div>
					<div className="bg-smoke p-1">mt-1</div>
					<div className="bg-smoke p-1">mt-2</div>
					<div className="bg-smoke p-1">mt-3</div>
					<div className="bg-smoke p-1">mt-4</div>
					<div className="bg-smoke p-1">mt-5</div>
					<div className="bg-smoke p-1">mt-6</div>
					<div className="bg-smoke p-1">my-0</div>
					<div className="bg-smoke p-1">my-1</div>
					<div className="bg-smoke p-1">my-2</div>
					<div className="bg-smoke p-1">my-3</div>
					<div className="bg-smoke p-1">my-4</div>
					<div className="bg-smoke p-1">my-5</div>
					<div className="bg-smoke p-1">my-6</div>
					<div className="bg-smoke p-1">mx-0</div>
					<div className="bg-smoke p-1">mx-1</div>
					<div className="bg-smoke p-1">mx-2</div>
					<div className="bg-smoke p-1">mx-3</div>
					<div className="bg-smoke p-1">mx-4</div>
					<div className="bg-smoke p-1">mx-5</div>
					<div className="bg-smoke p-1">mx-6</div>
					<div className="bg-smoke p-1">mx-auto</div>
				</div>
				<small className="block mt-4">
					<b>mx-x</b> is margin on X axis.<br />
					<b>my-x</b> is margin on Y axis.<br />
				</small>
			</article>

			{/* <!-- Opacity --> */}
			<article className="py-5">
				<h3>Opacity</h3>
				<p className="mb-4">Opacity by decimal steps.</p>
				<div className="grid grid-cols-3 gap-1">
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

			{/* <!-- Padding --> */}
			<article className="py-5">
				<h3>Padding</h3>
				<p className="mb-4">
					Paddings based on overwriteable box sizes.
				</p>
				<div className="grid grid-cols-7 gap-1">
					<div className="bg-light p-0">p-0</div>
					<div className="bg-light p-1">p-1</div>
					<div className="bg-light p-2">p-2</div>
					<div className="bg-light p-3">p-3</div>
					<div className="bg-light p-4">p-4</div>
					<div className="bg-light p-5">p-5</div>
					<div className="bg-light p-6">p-6</div>
					<div className="bg-smoke p-1">pb-0</div>
					<div className="bg-smoke p-1">pb-1</div>
					<div className="bg-smoke p-1">pb-2</div>
					<div className="bg-smoke p-1">pb-3</div>
					<div className="bg-smoke p-1">pb-4</div>
					<div className="bg-smoke p-1">pb-5</div>
					<div className="bg-smoke p-1">pb-6</div>
					<div className="bg-smoke p-1">pl-0</div>
					<div className="bg-smoke p-1">pl-1</div>
					<div className="bg-smoke p-1">pl-2</div>
					<div className="bg-smoke p-1">pl-3</div>
					<div className="bg-smoke p-1">pl-4</div>
					<div className="bg-smoke p-1">pl-5</div>
					<div className="bg-smoke p-1">pl-6</div>
					<div className="bg-smoke p-1">pr-0</div>
					<div className="bg-smoke p-1">pr-1</div>
					<div className="bg-smoke p-1">pr-2</div>
					<div className="bg-smoke p-1">pr-3</div>
					<div className="bg-smoke p-1">pr-4</div>
					<div className="bg-smoke p-1">pr-5</div>
					<div className="bg-smoke p-1">pr-6</div>
					<div className="bg-smoke p-1">pt-0</div>
					<div className="bg-smoke p-1">pt-1</div>
					<div className="bg-smoke p-1">pt-2</div>
					<div className="bg-smoke p-1">pt-3</div>
					<div className="bg-smoke p-1">pt-4</div>
					<div className="bg-smoke p-1">pt-5</div>
					<div className="bg-smoke p-1">pt-6</div>
					<div className="bg-smoke p-1">py-0</div>
					<div className="bg-smoke p-1">py-1</div>
					<div className="bg-smoke p-1">py-2</div>
					<div className="bg-smoke p-1">py-3</div>
					<div className="bg-smoke p-1">py-4</div>
					<div className="bg-smoke p-1">py-5</div>
					<div className="bg-smoke p-1">py-6</div>
					<div className="bg-smoke p-1">px-0</div>
					<div className="bg-smoke p-1">px-1</div>
					<div className="bg-smoke p-1">px-2</div>
					<div className="bg-smoke p-1">px-3</div>
					<div className="bg-smoke p-1">px-4</div>
					<div className="bg-smoke p-1">px-5</div>
					<div className="bg-smoke p-1">px-6</div>
				</div>
				<small className="block mt-4">
					<b>px-x</b> is padding on X axis.<br />
					<b>py-x</b> is padding on Y axis.<br />
				</small>
			</article>

			{/* <!-- Position --> */}
			<article className="py-5">
				<h3>Position</h3>
				<p className="mb-4">Position related classes.</p>
				<div className="grid grid-cols-8 gap-1">
					<div className="bg-smoke p-1">absolute</div>
					<div className="bg-smoke p-1">fixed</div>
					<div className="bg-smoke p-1">relative</div>
					<div className="bg-smoke p-1">sticky</div>
					<div className="bg-smoke p-1">bottom-0</div>
					<div className="bg-smoke p-1">left-0</div>
					<div className="bg-smoke p-1">right-0</div>
					<div className="bg-smoke p-1">top-0</div>
					<div className="bg-smoke p-1">z-0</div>
					<div className="bg-smoke p-1">z-1</div>
					<div className="bg-smoke p-1">z-2</div>
					<div className="bg-smoke p-1">z-3</div>
					<div className="bg-smoke p-1">z-4</div>
					<div className="bg-smoke p-1">z-5</div>
					<div className="bg-smoke p-1">z-6</div>
					<div className="bg-smoke p-1">z-7</div>
					<div className="bg-smoke p-1">z-9</div>
					<div className="bg-smoke p-1">z-10</div>
				</div>
				<small className="block mt-4">
					<b>z-x</b> is a z-index scale from 0-100, so it has some
					extra room.<br />
				</small>
			</article>

			{/* <!-- Type --> */}
			<article className="py-5">
				<h3>Typo</h3>
				<p className="mb-4">This is WIP.</p>
				<div className="grid grid-cols-3 gap-2">
					<h1>
						Sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</h1>
					<h2>
						Sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</h2>
					<h3>
						Sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</h3>
					<h4>
						Sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</h4>
					<h5>
						Sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</h5>
					<h6>
						Sunt in culpa qui officia deserunt mollit anim id est
						laborum.
					</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<small>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</small>
				</div>
			</article>

			{/* <!-- Width --> */}
			<article className="py-5">
				<h3>Width</h3>
				<p className="mb-4">Common width options.</p>
				<div className="grid grid-cols-7 gap-1">
					<div className="bg-light w-0">W-0</div>
					<div className="bg-light w-1">w-1</div>
					<div className="bg-light w-2">w-2</div>
					<div className="bg-light w-3">w-3</div>
					<div className="bg-light w-4">w-4</div>
					<div className="bg-light w-5">w-5</div>
					<div className="bg-light w-6">w-6</div>
					<div className="bg-smoke p-1">w-25</div>
					<div className="bg-smoke p-1">w-33</div>
					<div className="bg-smoke p-1">w-50</div>
					<div className="bg-smoke p-1">w-66</div>
					<div className="bg-smoke p-1">w-75</div>
					<div className="bg-smoke p-1">w-100</div>
					<div className="bg-smoke p-1">minvw-25</div>
					<div className="bg-smoke p-1">minvw-33</div>
					<div className="bg-smoke p-1">minvw-50</div>
					<div className="bg-smoke p-1">minvw-66</div>
					<div className="bg-smoke p-1">minvw-75</div>
					<div className="bg-smoke p-1">minvw-100</div>
				</div>
				<small className="block mt-4">
					<b>minvw-x</b> is minimum width in viewport width
					percentage.<br />
				</small>
			</article>
		</div>
	</Layout>
