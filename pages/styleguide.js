import { Container } from "fractures-ui"
import Layout from "../components/Layout"

const colors = [
	{ name: "light", hex: "light" },
	{ name: "gray", hex: "gray" },
	{ name: "dark", hex: "dark" },
	{ name: "blue", hex: "blue" },
	{ name: "green", hex: "green" },
	{ name: "mint", hex: "mint" },
	{ name: "red", hex: "red" }
]

const Color = props => (
	<div className="flex flex-gap-2">
		<span className={ `w-3 h-3 bg-color-${ props.hex }` } />
		<span>{props.name}</span>
		<style />
	</div>
)

const StyleGuide = () => (
	<Layout title="UI — fractures">
		<Container className="py-4">
			<h4 className="my-2">Colors</h4>
			<div className="flex flex-gap-1 flex-column my-1">
				{colors.map((color, key) => (
					<Color key={ key } { ...color } />
				))}
			</div>
		</Container>
	</Layout>
)

export default StyleGuide
