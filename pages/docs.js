import Container from "../components/Container"
import DocsElement from "./components/DocsElement"
import DocsSection from "./components/DocsSection"
import Layout from "../components/Layout"
import Link from "next/link"
import Pre from "../components/Pre"

const Docs = () => (
	<Layout title="Documentation — fractures">
		<Container>
			<header className="pt-5">
				<h1>Documentation</h1>
				<p className="py-1">
					Core concept is ~atomic classes, that makes sense.{" "}
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
			>
				<Pre
					lines={ [
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
			</DocsSection>
			<DocsSection
				title="Opinionated reset"
				notes={ [
					{
						note: `Change my mind.`
					}
				] }
			>
				<ul className="list-disc ml-3">
					<li>Every element is set to border-box.</li>
					<li>Html y-scroll is always on, so pages won&apos;t jump.</li>
				</ul>
			</DocsSection>
			<DocsSection
				title="Border radius"
				description="Border radius is important."
				notes={ [{ name: ".radius-max", note: "is rounding border with a large pixel value. Creates tube." }] }
			>
				<div className="grid grid-cols-8 grid-gap-1">
					<DocsElement label="radius-0" showClass className="bg-white" disableBackground />
					<DocsElement label="radius-1" showClass />
					<DocsElement label="radius-2" showClass />
					<DocsElement label="radius-3" showClass />
					<DocsElement label="radius-max" showClass className="bg-color-dark white" disableBackground isMarked />
					<DocsElement label="radius-100" showClass className="bg-color-dark white" disableBackground />
				</div>
			</DocsSection>
			<DocsSection title="Colors" description="Basic monochrome color scheme from CSS defaults.">
				<div className="grid grid-cols-8 grid-gap-1">
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
				</div>
				<Pre
					lines={ [
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
				/>
			</DocsSection>
			<DocsSection title="Cursor" description="Most common cursors.">
				<div className="grid grid-cols-6 grid-gap-1">
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
				</div>
			</DocsSection>
			<DocsSection
				title="Display"
				description="CSS display properties."
				notes={ [
					{ name: ".clearfix", note: "is an after-before-content hack for clearing floats." },
					{ name: ".table", note: "has an extra attribute, layout: fixed." }
				] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
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
				</div>
			</DocsSection>
			<DocsSection
				title="Flex"
				description="Flexbox related properties."
				notes={ [
					{ name: ".flex-(x|y)center", note: "does what is say. x-y is axis." },
					{ name: ".grow-x", note: "also resets flex-basis to 0. Should be used on flex children." },
					{ name: ".self-x", note: "is align-self. Should be used on flex children." }
				] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="flex-wrap" />
					<DocsElement label="flex-wrap-reverse" />
					<DocsElement label="flex-column" />
					<DocsElement label="flex-around" />
					<DocsElement label="flex-between" />
					<DocsElement label="flex-right" />
					<DocsElement label="flex-baseline" />
					<DocsElement label="flex-end" />
					<DocsElement label="flex-start" />
					<DocsElement label="flex-gap-1" />
					<DocsElement label="flex-gap-2" />
					<DocsElement label="flex-gap-3" />
					<DocsElement label="flex-gap-4" />
					<DocsElement label="flex-gap-5" />
					<DocsElement label="flex-gap-6" />
					<DocsElement label="flex-center" isMarked />
					<DocsElement label="flex-xcenter" isMarked />
					<DocsElement label="flex-ycenter" isMarked />
					<DocsElement label="grow-1" />
					<DocsElement label="grow-2" />
					<DocsElement label="grow-3" />
					<DocsElement label="grow-4" />
					<DocsElement label="grow-5" />
					<DocsElement label="grow-6" />
					<DocsElement label="self-center" />
					<DocsElement label="self-start" />
					<DocsElement label="self-end" />
					<DocsElement label="self-baseline" />
				</div>
			</DocsSection>
			<DocsSection
				title="Grid"
				description="WIP, expect non-breaking updates."
				notes={ [
					{ name: ".grid-(rows|cols)-x", note: "are splitted with fr units." },
					{ name: ".grid-(rows|cols)-x", note: "has a .dense class modifier" }
				] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="grid-gap-1" />
					<DocsElement label="grid-gap-2" />
					<DocsElement label="grid-gap-3" />
					<DocsElement label="grid-gap-4" />
					<DocsElement label="grid-gap-5" />
					<DocsElement label="grid-gap-6" />
					<DocsElement label="grid-gap-x-1" />
					<DocsElement label="grid-gap-x-2" />
					<DocsElement label="grid-gap-x-3" />
					<DocsElement label="grid-gap-x-4" />
					<DocsElement label="grid-gap-x-5" />
					<DocsElement label="grid-gap-x-6" />
					<DocsElement label="grid-gap-y-1" />
					<DocsElement label="grid-gap-y-2" />
					<DocsElement label="grid-gap-y-3" />
					<DocsElement label="grid-gap-y-4" />
					<DocsElement label="grid-gap-y-5" />
					<DocsElement label="grid-gap-y-6" />
					<DocsElement label="grid-cols" />
					<DocsElement label="grid-cols-2" />
					<DocsElement label="grid-cols-3" />
					<DocsElement label="grid-cols-4" />
					<DocsElement label="grid-cols-5" />
					<DocsElement label="grid-cols-6" />
					<DocsElement label="grid-cols-7" />
					<DocsElement label="grid-cols-8" />
					<DocsElement label="grid-rows" />
					<DocsElement label="grid-rows-2" />
					<DocsElement label="grid-rows-3" />
					<DocsElement label="grid-rows-4" />
					<DocsElement label="grid-rows-5" />
					<DocsElement label="grid-rows-6" />
					<DocsElement label="grid-rows-7" />
					<DocsElement label="grid-rows-8" />
				</div>
			</DocsSection>
			<DocsSection
				title="Height"
				description="Common height options."
				notes={ [
					{ name: ".minh-x", note: "is minimum height as percentage." },
					{ name: ".maxh-x", note: "is maximum height as percentage." },
					{ name: ".maxh-viewport", note: "is maximum height set to current viewport height." },
					{ name: ".minh-viewport", note: "is mininum height set to current viewport height." }
				] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="h-0" />
					<DocsElement label="h-1" />
					<DocsElement label="h-2" />
					<DocsElement label="h-3" />
					<DocsElement label="h-4" />
					<DocsElement label="h-5" />
					<DocsElement label="h-6" />
					<DocsElement label="h-10" />
					<DocsElement label="h-20" />
					<DocsElement label="h-25" />
					<DocsElement label="h-30" />
					<DocsElement label="h-33" />
					<DocsElement label="h-40" />
					<DocsElement label="h-50" />
					<DocsElement label="h-60" />
					<DocsElement label="h-66" />
					<DocsElement label="h-70" />
					<DocsElement label="h-75" />
					<DocsElement label="h-80" />
					<DocsElement label="h-90" />
					<DocsElement label="h-100" />
					<DocsElement label="maxh-10" />
					<DocsElement label="maxh-20" />
					<DocsElement label="maxh-25" />
					<DocsElement label="maxh-30" />
					<DocsElement label="maxh-33" />
					<DocsElement label="maxh-40" />
					<DocsElement label="maxh-50" />
					<DocsElement label="maxh-60" />
					<DocsElement label="maxh-66" />
					<DocsElement label="maxh-70" />
					<DocsElement label="maxh-75" />
					<DocsElement label="maxh-80" />
					<DocsElement label="maxh-90" />
					<DocsElement label="maxh-100" />
					<DocsElement label="maxh-viewport" />
					<DocsElement label="minh-10" />
					<DocsElement label="minh-20" />
					<DocsElement label="minh-25" />
					<DocsElement label="minh-30" />
					<DocsElement label="minh-33" />
					<DocsElement label="minh-40" />
					<DocsElement label="minh-50" />
					<DocsElement label="minh-60" />
					<DocsElement label="minh-66" />
					<DocsElement label="minh-70" />
					<DocsElement label="minh-75" />
					<DocsElement label="minh-80" />
					<DocsElement label="minh-90" />
					<DocsElement label="minh-100" />
					<DocsElement label="minh-viewport" />
				</div>
			</DocsSection>
			<DocsSection
				title="List"
				description="Common list styles for ul, ol."
				notes={ [{ name: ".list-comma", note: "is turning its content into a comma separated inline list." }] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
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
				</div>
			</DocsSection>
			<DocsSection
				title="Margin"
				description="Common margin options."
				notes={ [{ name: ".mx-x", note: "is margin on X axis." }, { name: ".mx-y", note: "is margin on Y axis." }] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="m-0" />
					<DocsElement label="m-1" />
					<DocsElement label="m-2" />
					<DocsElement label="m-3" />
					<DocsElement label="m-4" />
					<DocsElement label="m-5" />
					<DocsElement label="m-6" />
					<DocsElement label="mb-0" />
					<DocsElement label="mb-1" />
					<DocsElement label="mb-2" />
					<DocsElement label="mb-3" />
					<DocsElement label="mb-4" />
					<DocsElement label="mb-5" />
					<DocsElement label="mb-6" />
					<DocsElement label="ml-0" />
					<DocsElement label="ml-1" />
					<DocsElement label="ml-2" />
					<DocsElement label="ml-3" />
					<DocsElement label="ml-4" />
					<DocsElement label="ml-5" />
					<DocsElement label="ml-6" />
					<DocsElement label="mt-0" />
					<DocsElement label="mt-1" />
					<DocsElement label="mt-2" />
					<DocsElement label="mt-3" />
					<DocsElement label="mt-4" />
					<DocsElement label="mt-5" />
					<DocsElement label="mt-6" />
					<DocsElement label="mr-0" />
					<DocsElement label="mr-1" />
					<DocsElement label="mr-2" />
					<DocsElement label="mr-3" />
					<DocsElement label="mr-4" />
					<DocsElement label="mr-5" />
					<DocsElement label="mr-6" />
					<DocsElement label="my-0" />
					<DocsElement label="my-1" />
					<DocsElement label="my-2" />
					<DocsElement label="my-3" />
					<DocsElement label="my-4" />
					<DocsElement label="my-5" />
					<DocsElement label="my-6" />
					<DocsElement label="mx-0" />
					<DocsElement label="mx-1" />
					<DocsElement label="mx-2" />
					<DocsElement label="mx-3" />
					<DocsElement label="mx-4" />
					<DocsElement label="mx-5" />
					<DocsElement label="mx-6" />
					<DocsElement label="mx-auto" />
				</div>
			</DocsSection>
			<DocsSection title="Opacity" description="Opacity by decimal steps.">
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="opacity-100" showClass />
					<DocsElement label="opacity-90" showClass />
					<DocsElement label="opacity-80" showClass />
					<DocsElement label="opacity-70" showClass />
					<DocsElement label="opacity-60" showClass />
					<DocsElement label="opacity-50" showClass />
					<DocsElement label="opacity-40" showClass />
					<DocsElement label="opacity-30" showClass />
					<DocsElement label="opacity-20" showClass />
					<DocsElement label="opacity-10" showClass />
					<DocsElement label="opacity-0" showClass />
				</div>
			</DocsSection>
			<DocsSection title="Overflow" description="Content overflows.">
				<div className="grid grid-cols-5 grid-gap-1">
					<DocsElement label="opacity-visible" showClass />
					<DocsElement label="opacity-hidden" showClass />
					<DocsElement label="opacity-scroll" showClass />
				</div>
			</DocsSection>
			<DocsSection
				title="Padding"
				description="Paddings based on overwriteable box sizes."
				notes={ [{ name: ".py-x", note: "is padding on X axis." }, { name: ".py-y", note: "is padding on Y axis." }] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="p-0" />
					<DocsElement label="p-1" />
					<DocsElement label="p-2" />
					<DocsElement label="p-3" />
					<DocsElement label="p-4" />
					<DocsElement label="p-5" />
					<DocsElement label="p-6" />
					<DocsElement label="pb-0" />
					<DocsElement label="pb-1" />
					<DocsElement label="pb-2" />
					<DocsElement label="pb-3" />
					<DocsElement label="pb-4" />
					<DocsElement label="pb-5" />
					<DocsElement label="pb-6" />
					<DocsElement label="pl-0" />
					<DocsElement label="pl-1" />
					<DocsElement label="pl-2" />
					<DocsElement label="pl-3" />
					<DocsElement label="pl-4" />
					<DocsElement label="pl-5" />
					<DocsElement label="pl-6" />
					<DocsElement label="pt-0" />
					<DocsElement label="pt-1" />
					<DocsElement label="pt-2" />
					<DocsElement label="pt-3" />
					<DocsElement label="pt-4" />
					<DocsElement label="pt-5" />
					<DocsElement label="pt-6" />
					<DocsElement label="pr-0" />
					<DocsElement label="pr-1" />
					<DocsElement label="pr-2" />
					<DocsElement label="pr-3" />
					<DocsElement label="pr-4" />
					<DocsElement label="pr-5" />
					<DocsElement label="pr-6" />
					<DocsElement label="py-0" />
					<DocsElement label="py-1" />
					<DocsElement label="py-2" />
					<DocsElement label="py-3" />
					<DocsElement label="py-4" />
					<DocsElement label="py-5" />
					<DocsElement label="py-6" />
					<DocsElement label="px-0" />
					<DocsElement label="px-1" />
					<DocsElement label="px-2" />
					<DocsElement label="px-3" />
					<DocsElement label="px-4" />
					<DocsElement label="px-5" />
					<DocsElement label="px-6" />
				</div>
			</DocsSection>
			<DocsSection
				title="Position"
				description="Position related classes."
				notes={ [{ name: ".z-x", note: "is a z-index scale from 0-100, so it has some extra room." }] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="absolute" />
					<DocsElement label="fixed" />
					<DocsElement label="relative" />
					<DocsElement label="sticky" />
					<DocsElement label="bottom-0" />
					<DocsElement label="bottom-1" />
					<DocsElement label="bottom-2" />
					<DocsElement label="bottom-3" />
					<DocsElement label="left-0" />
					<DocsElement label="left-1" />
					<DocsElement label="left-2" />
					<DocsElement label="left-3" />
					<DocsElement label="right-0" />
					<DocsElement label="right-1" />
					<DocsElement label="right-2" />
					<DocsElement label="right-3" />
					<DocsElement label="top-0" />
					<DocsElement label="top-1" />
					<DocsElement label="top-2" />
					<DocsElement label="top-3" />
					<DocsElement label="z-0" />
					<DocsElement label="z-1" />
					<DocsElement label="z-2" />
					<DocsElement label="z-3" />
					<DocsElement label="z-4" />
					<DocsElement label="z-5" />
					<DocsElement label="z-6" />
					<DocsElement label="z-7" />
					<DocsElement label="z-9" />
					<DocsElement label="z-10" />
				</div>
			</DocsSection>
			<DocsSection
				title="Typography"
				description="Helper classes for typography."
				notes={ [
					{ name: ".ellipsis", note: "is non-atomic - makes text-overflow ellipsis possible." },
					{ name: ".unselectable", note: "makes the element unselectable with user-select: none." },
					{ name: ".no-events", note: "makes the element <em>uneventable</em> with pointer-events: none." }
				] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
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
				</div>
				<Pre
					lines={ [
						`Overwriteable font-weight options on :root.`,
						`.regular class uses <em>--normal</em>, as it is more descriptive and could conflict with font-style.`,
						null,
						`<em>--normal</em>: normal;`,
						`<em>--bold</em>: bold;`
					] }
				/>
			</DocsSection>
			<DocsSection
				title="Width"
				description="Common width options."
				notes={ [
					{ name: ".minw-x", note: "is minimum width as percentage." },
					{ name: ".maxw-x", note: "is maximum width as percentage." },
					{ name: ".maxw-viewport", note: "is maximum width set to current viewport width." },
					{ name: ".minw-viewport", note: "is minimum width set to current viewport width." }
				] }
			>
				<div className="grid grid-cols-6 grid-gap-1">
					<DocsElement label="w-0" />
					<DocsElement label="w-1" />
					<DocsElement label="w-2" />
					<DocsElement label="w-3" />
					<DocsElement label="w-4" />
					<DocsElement label="w-5" />
					<DocsElement label="w-6" />
					<DocsElement label="w-10" />
					<DocsElement label="w-20" />
					<DocsElement label="w-25" />
					<DocsElement label="w-30" />
					<DocsElement label="w-33" />
					<DocsElement label="w-40" />
					<DocsElement label="w-50" />
					<DocsElement label="w-60" />
					<DocsElement label="w-66" />
					<DocsElement label="w-70" />
					<DocsElement label="w-75" />
					<DocsElement label="w-80" />
					<DocsElement label="w-90" />
					<DocsElement label="w-100" />
					<DocsElement label="maxw-10" />
					<DocsElement label="maxw-20" />
					<DocsElement label="maxw-25" />
					<DocsElement label="maxw-30" />
					<DocsElement label="maxw-33" />
					<DocsElement label="maxw-40" />
					<DocsElement label="maxw-50" />
					<DocsElement label="maxw-60" />
					<DocsElement label="maxw-66" />
					<DocsElement label="maxw-70" />
					<DocsElement label="maxw-75" />
					<DocsElement label="maxw-80" />
					<DocsElement label="maxw-90" />
					<DocsElement label="maxw-100" />
					<DocsElement label="maxw-viewport" />
					<DocsElement label="minw-10" />
					<DocsElement label="minw-20" />
					<DocsElement label="minw-25" />
					<DocsElement label="minw-30" />
					<DocsElement label="minw-33" />
					<DocsElement label="minw-40" />
					<DocsElement label="minw-50" />
					<DocsElement label="minw-60" />
					<DocsElement label="minw-66" />
					<DocsElement label="minw-70" />
					<DocsElement label="minw-75" />
					<DocsElement label="minw-80" />
					<DocsElement label="minw-90" />
					<DocsElement label="minw-100" />
					<DocsElement label="minw-viewport" />
				</div>
			</DocsSection>
		</Container>
	</Layout>
)

export default Docs
