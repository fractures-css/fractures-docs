import Container from '../components/Container'
import DocsElement from '../components/pages/DocsElement'
import DocsSection from '../components/pages/DocsSection'
import Layout from '../components/Layout'
import Link from 'next/link'
import Repeater from '../components/Repeater'

// Basic scales
const baseScale = [1, 2, 3, 4, 5, 6]
const baseScaleZero = [0, ...baseScale]
const shallowScale = baseScaleZero.slice(0, 4)

// Specific scale for heights and width slices
const scaleSpace = [10, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, 100]

// Z space scale
const zScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Decimal scale
const decimalScale = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]

// Column scales
const columnScale = [2, 3, 4, 5, 6, 7, 8]

const Docs = () => (
	<Layout title="Documentation — fractures">
		<Container>
			<header className="pt-5">
				<h1>Documentation</h1>
				<p className="py-1">
					Core concept is ~atomic classes, that makes sense.{' '}
					<Link href="/about">
						<a>Learn more</a>
					</Link>
					.
				</p>
			</header>
			<DocsSection
				title="Customization"
				description="fractures is CSS only, meaning you can customize it by using CSS variables."
				notes={ [
					{
						note: `Keep in mind that you have to include the unminified
						fractures.css version in order to have access to :root.`
					},
					{
						note: `You also have to handle browser prefixes and possible fallbacks.
						CSS variables are supported by only 86.73% of current browsers.`
					}
				] }
				pre={ [
					`Overwrite the default building blocks by setting --box-(1-6).`,
					`This will affect every utility where there is a box-scale.`,
					null,
					`:root {`,
					`&#9;<em>--box-1</em>: 8px;`,
					`&#9;<em>--box-2</em>: 16px;`,
					`&#9;<em>--box-3</em>: 24px;`,
					`&#9;<em>--box-4</em>: 32px;`,
					`&#9;<em>--box-5</em>: 64px;`,
					`&#9;<em>--box-6</em>: 128px;`,
					`}`
				] }
			/>
			<DocsSection
				title="Opinionated reset"
				notes={ [
					{ note: 'Every element is set to border-box.' },
					{ note: 'Html y-scroll is always on, so pages won\'t jump.' },
					{ note: `Change my mind—open an issue.` }
				] }
			/>
			<DocsSection
				title="Border radius"
				description="Border radius is important."
				notes={ [{ name: '.radius-max', note: 'is rounding border with a large pixel value. Creates tube.' }] }
			>
				<Repeater component={ DocsElement } label="radius-$" scale={ shallowScale } showClass />
				<DocsElement label="radius-max" showClass className="bg-color-dark white" disableBackground isMarked />
				<DocsElement label="radius-100" showClass className="bg-color-dark white" disableBackground />
			</DocsSection>
			<DocsSection
				title="Colors"
				description="Basic monochrome color scheme from CSS defaults."
				grid={ 8 }
				pre={ [
					`You can overwrite these, but probably shouldn&apos;t.`,
					null,
					`<em>--white</em>: white;`,
					`<em>--whitesmoke</em>: whitesmoke;`,
					`<em>--lightgray</em>: lightgray;`,
					`<em>--silver</em>: silver;`,
					`<em>--darkgray</em>: darkgray;`,
					`<em>--gray</em>: gray;`,
					`<em>--dimgray</em>: dimgray;`,
					`<em>--black</em>: black;`
				] }
			>
				<DocsElement label="bg-white" showClass disableBackground className="bg-white black" />
				<DocsElement label="bg-smoke" showClass disableBackground className="bg-smoke dim" />
				<DocsElement label="bg-light" showClass disableBackground className="bg-light gray" />
				<DocsElement label="bg-silver" showClass disableBackground className="bg-silver dark" />
				<DocsElement label="bg-dark" showClass disableBackground className="bg-dark silver" />
				<DocsElement label="bg-gray" showClass disableBackground className="bg-gray light" />
				<DocsElement label="bg-dim" showClass disableBackground className="bg-dim smoke" />
				<DocsElement label="bg-black" showClass disableBackground className="bg-black white" />
				<DocsElement label="black" showClass disableBackground className="bg-white" />
				<DocsElement label="dim" showClass disableBackground className="bg-smoke" />
				<DocsElement label="gray" showClass disableBackground className="bg-light" />
				<DocsElement label="dark" showClass disableBackground className="bg-silver" />
				<DocsElement label="silver" showClass disableBackground className="bg-dark" />
				<DocsElement label="light" showClass disableBackground className="bg-gray" />
				<DocsElement label="smoke" showClass disableBackground className="bg-dim" />
				<DocsElement label="white" showClass disableBackground className="bg-black" />
			</DocsSection>
			<DocsSection title="Cursor" description="Most common cursors.">
				<DocsElement label="cursor-grab" showClass />
				<DocsElement label="cursor-grabbing" showClass />
				<DocsElement label="cursor-help" showClass />
				<DocsElement label="cursor-move" showClass />
				<DocsElement label="cursor-pointer" showClass />
				<DocsElement label="cursor-progress" showClass />
				<DocsElement label="cursor-row-resize" showClass />
				<DocsElement label="cursor-text" showClass />
				<DocsElement label="cursor-zoom-in" showClass />
				<DocsElement label="cursor-zoom-out" showClass />
			</DocsSection>
			<DocsSection
				title="Display"
				description="CSS display properties."
				notes={ [
					{ name: '.clearfix', note: 'is an after-before-content hack for clearing floats.' },
					{ name: '.table', note: 'has an extra attribute, layout: fixed.' }
				] }
			>
				<DocsElement label="block" />
				<DocsElement label="clearfix" isMarked />
				<DocsElement label="flex" />
				<DocsElement label="float-left" />
				<DocsElement label="float-right" />
				<DocsElement label="grid" />
				<DocsElement label="inline-block" />
				<DocsElement label="inline-flex" />
				<DocsElement label="inline-table" />
				<DocsElement label="inline" />
				<DocsElement label="none" />
				<DocsElement label="table" isMarked />
				<DocsElement label="table-cell" />
				<DocsElement label="table-column" />
				<DocsElement label="table-row" />
			</DocsSection>
			<DocsSection
				title="Flex"
				description="Flexbox related properties."
				notes={ [
					{ name: '.flex-(x|y)center', note: 'does what is say. x-y is axis.' },
					{ name: '.grow-x', note: 'also resets flex-basis to 0. Should be used on flex children.' },
					{ name: '.self-x', note: 'is align-self. Should be used on flex children.' }
				] }
			>
				<DocsElement label="flex-wrap" />
				<DocsElement label="flex-wrap-reverse" />
				<DocsElement label="flex-column" />
				<DocsElement label="flex-around" />
				<DocsElement label="flex-between" />
				<DocsElement label="flex-right" />
				<DocsElement label="flex-baseline" />
				<DocsElement label="flex-end" />
				<DocsElement label="flex-start" />
				<Repeater component={ DocsElement } label="flex-gap-$" scale={ baseScale } />
				<DocsElement label="flex-center" isMarked />
				<DocsElement label="flex-xcenter" isMarked />
				<DocsElement label="flex-ycenter" isMarked />
				<Repeater component={ DocsElement } label="grow-$" scale={ baseScale } />
				<DocsElement label="self-center" />
				<DocsElement label="self-start" />
				<DocsElement label="self-end" />
				<DocsElement label="self-baseline" />
			</DocsSection>
			<DocsSection
				title="Grid"
				description="WIP, expect non-breaking updates."
				notes={ [
					{ name: '.grid-(rows|cols)-x', note: 'are splitted with fr units.' },
					{ name: '.grid-(rows|cols)-x', note: 'has a .dense class modifier' }
				] }
			>
				<Repeater component={ DocsElement } label="grid-gap-$" scale={ baseScale } />
				<Repeater component={ DocsElement } label="grid-gap-x-$" scale={ baseScale } />
				<Repeater component={ DocsElement } label="grid-gap-y-$" scale={ baseScale } />
				<DocsElement label="grid-cols" />
				<Repeater component={ DocsElement } label="grid-cols-$" scale={ columnScale } />
				<DocsElement label="grid-rows" />
				<Repeater component={ DocsElement } label="grid-rows-$" scale={ columnScale } />
			</DocsSection>
			<DocsSection
				title="Height"
				description="Common height options."
				notes={ [
					{ name: '.minh-x', note: 'is minimum height as percentage.' },
					{ name: '.maxh-x', note: 'is maximum height as percentage.' },
					{ name: '.maxh-viewport', note: 'is maximum height set to current viewport height.' },
					{ name: '.minh-viewport', note: 'is mininum height set to current viewport height.' }
				] }
			>
				<Repeater component={ DocsElement } label="h-$" scale={ [...baseScaleZero, ...scaleSpace] } />
				<Repeater component={ DocsElement } label="maxh-$" scale={ [...scaleSpace, 'viewport'] } />
				<Repeater component={ DocsElement } label="minh-$" scale={ [...scaleSpace, 'viewport'] } />
			</DocsSection>
			<DocsSection
				title="List"
				description="Common list styles for ul, ol."
				notes={ [{ name: '.list-comma', note: 'is turning its content into a comma separated inline list.' }] }
			>
				<DocsElement label="list-circle" />
				<DocsElement label="list-decimal-leading-zero" />
				<DocsElement label="list-decimal" />
				<DocsElement label="list-disc" />
				<DocsElement label="list-greek" />
				<DocsElement label="list-lower-latin" />
				<DocsElement label="list-lower-roman" />
				<DocsElement label="list-none" />
				<DocsElement label="list-square" />
				<DocsElement label="list-upper-latin" />
				<DocsElement label="list-upper-roman" />
				<DocsElement label="list-comma" isMarked />
			</DocsSection>
			<DocsSection
				title="Margin"
				description="Common margin options."
				notes={ [
					{ name: '.mx-x', note: 'is margin on X axis.' },
					{ name: '.mx-y', note: 'is margin on Y axis.' }
				] }
			>
				<Repeater component={ DocsElement } label="m-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="mb-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="mr-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="ml-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="mt-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="my-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="mx-$" scale={ [...baseScaleZero, 'auto'] } />
			</DocsSection>
			<DocsSection title="Opacity" description="Opacity by decimal steps.">
				<Repeater component={ DocsElement } label="opacity-$" scale={ decimalScale } showClass />
			</DocsSection>
			<DocsSection title="Overflow" description="Content overflows.">
				<DocsElement label="overflow-visible" showClass />
				<DocsElement label="overflow-hidden" showClass />
				<DocsElement label="overflow-scroll" showClass />
			</DocsSection>
			<DocsSection
				title="Padding"
				description="Paddings based on overwriteable box sizes."
				notes={ [
					{ name: '.py-x', note: 'is padding on X axis.' },
					{ name: '.py-y', note: 'is padding on Y axis.' }
				] }
			>
				<Repeater component={ DocsElement } label="p-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="pb-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="pr-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="pl-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="pt-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="py-$" scale={ baseScaleZero } />
				<Repeater component={ DocsElement } label="px-$" scale={ baseScaleZero } />
			</DocsSection>
			<DocsSection
				title="Position"
				description="Position related classes."
				notes={ [{ name: '.z-x', note: 'is a z-index scale from 0-100, so it has some extra room.' }] }
			>
				<DocsElement label="absolute" />
				<DocsElement label="fixed" />
				<DocsElement label="relative" />
				<DocsElement label="sticky" />
				<Repeater component={ DocsElement } label="bottom-$" scale={ shallowScale } />
				<Repeater component={ DocsElement } label="left-$" scale={ shallowScale } />
				<Repeater component={ DocsElement } label="right-$" scale={ shallowScale } />
				<Repeater component={ DocsElement } label="top-$" scale={ shallowScale } />
				<Repeater component={ DocsElement } label="z-$" scale={ zScale } />
			</DocsSection>
			<DocsSection
				title="Typography"
				description="Helper classes for typography."
				notes={ [
					{ name: '.ellipsis', note: 'is non-atomic - makes text-overflow ellipsis possible.' },
					{ name: '.unselectable', note: 'makes the element unselectable with user-select: none.' },
					{ name: '.no-events', note: 'makes the element <em>uneventable</em> with pointer-events: none.' }
				] }
				pre={ [
					`Overwriteable font-weight options on :root.`,
					`.regular class uses <em>--normal</em>, as it is more descriptive and could conflict with font-style.`,
					null,
					`<em>--normal</em>: normal;`,
					`<em>--bold</em>: bold;`
				] }
			>
				<DocsElement label="ellipsis" isMarked />
				<DocsElement label="italic" showClass />
				<DocsElement label="normal" />
				<DocsElement label="oblique" showClass />
				<DocsElement label="regular" isMarked showClass />
				<DocsElement label="bold" isMarked showClass />
				<DocsElement label="center" />
				<DocsElement label="justify" />
				<DocsElement label="left" />
				<DocsElement label="right" />
				<DocsElement label="line-through" showClass />
				<DocsElement label="overline" showClass />
				<DocsElement label="underline" showClass />
				<DocsElement label="capitalize" />
				<DocsElement label="lowercase" />
				<DocsElement label="uppercase" showClass />
				<DocsElement label="pre" />
				<DocsElement label="pre-line" />
				<DocsElement label="pre-wrap" />
				<DocsElement label="nowrap" />
				<DocsElement label="break-word" />
			</DocsSection>
			<DocsSection
				title="Width"
				description="Common width options."
				notes={ [
					{ name: '.minw-x', note: 'is minimum width as percentage.' },
					{ name: '.maxw-x', note: 'is maximum width as percentage.' },
					{ name: '.maxw-viewport', note: 'is maximum width set to current viewport width.' },
					{ name: '.minw-viewport', note: 'is minimum width set to current viewport width.' }
				] }
			>
				<Repeater component={ DocsElement } label="w-$" scale={ [...baseScaleZero, ...scaleSpace] } />
				<Repeater component={ DocsElement } label="maxw-$" scale={ [...scaleSpace, 'viewport'] } />
				<Repeater component={ DocsElement } label="minw-$" scale={ [...scaleSpace, 'viewport'] } />
			</DocsSection>
		</Container>
	</Layout>
)

export default Docs
