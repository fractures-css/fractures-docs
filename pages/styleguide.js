import Container from "../components/Container"
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
			<h4 className="my-2">Typo</h4>
			<div className="grid grid-cols-3 grid-gap-2 mb-3">
				<h1>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
				<h2>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
				<h3>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
				<h4>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
				<h5>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
				<h6>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
					in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<small>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
					in culpa qui officia deserunt mollit anim id est laborum.
				</small>
			</div>
		</Container>
	</Layout>
)

export default StyleGuide
