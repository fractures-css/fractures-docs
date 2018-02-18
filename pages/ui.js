import { Component } from "react"
import chroma from "chroma-js"
import { Button, ButtonGroup, Checkbox, Color, Container, Radio, Range, Progress, Input } from "fractures-ui"
import Layout from "../components/Layout"

const themes = [
	[
		"white",
		...chroma
			.scale(["#e8f2fd", "#3482da", "#102a45"])
			.mode("lch")
			.colors(7)
	],
	[
		"white",
		...chroma
			.scale(["#eee", "#666", "#111"])
			.mode("lch")
			.colors(7)
	],
	[
		"#111",
		...chroma
			.scale(["#303030", "#888", "#eee"])
			.mode("lch")
			.colors(7)
	],
	[
		...chroma
			.scale(["#CAFFB8", "#1D1D1F"])
			.mode("lch")
			.colors(8)
	]
]

class Index extends Component {
	constructor(props) {
		super(props)

		this.state = {
			buttonLoading: false,
			checkbox: false,
			radio: 1,
			range: 0,
			theme: 0
		}
	}

	// Mock checkbox change
	toggleCheckbox() {
		this.setState({ checkbox: !this.state.checkbox })
	}

	// Mock radio change
	setRadio(value) {
		this.setState({ radio: value })
	}

	// Mock button click
	mockClick() {
		this.setState({ buttonLoading: !this.state.buttonLoading })
	}

	// Mock range change
	setRange(value) {
		console.log(value)

		this.setState({ range: value })
	}

	// Mock input change
	inputChange(value) {
		console.log(value)
	}

	render() {
		const themeList = [{ name: "blue" }, { name: "black" }, { name: "invert" }, { name: "test" }]

		return (
			<Layout title="UI — fractures">
				<div className="minvh-100" style={ { backgroundColor: themes[this.state.theme][0] } }>
					<div className="flex">
						{themes[this.state.theme].map((color, key) => <Color key={ key } hex={ color } name={ key } />)}
					</div>
					<aside className="sticky right-0 flex flex-right flex-gap-1 p-2" style={ { top: "4rem" } }>
						{themeList.map((theme, key) => (
							<Button
								action={ () => this.setState({ theme: key }) }
								isActive={ this.state.theme === key && true }
								key={ key }
								small={ true }
								type="primary"
								value={ theme.name }
							/>
						))}
					</aside>
					<Container className="py-4">
						<div className="my-4">
							<h4 className="my-2">Buttons</h4>
							<div className="flex flex-gap-1 my-1">
								<Button type="primary" value="Default" action={ () => this.mockClick() } />
								<Button type="primary" value="Active" isActive={ true } />
								<Button type="primary" value="Disabled" disabled={ true } />
								<Button type="primary" value="Rounded" isRounded={ true } />
								<Button type="primary" value="Small" small={ true } />
								<Button type="primary" value="Small Rounded" small={ true } isRounded={ true } />
							</div>
							<div className="flex flex-gap-1 my-1">
								<Button type="secondary" value="Default" />
								<Button type="secondary" value="Active" isActive={ true } />
								<Button type="secondary" value="Disabled" disabled={ true } />
								<Button type="secondary" value="Rounded" isRounded={ true } />
								<Button type="secondary" value="Small" small={ true } />
								<Button type="secondary" value="Small Rounded" small={ true } isRounded={ true } />
							</div>
							<div className="flex flex-gap-1 my-1">
								<Button
									type="primary"
									value="Activate"
									isLoading={ !this.state.buttonLoading }
									action={ () => this.mockClick() }
								/>
								<Button
									type="secondary"
									value="Activate"
									isLoading={ !this.state.buttonLoading }
									action={ () => this.mockClick() }
								/>
								<Button
									type="primary"
									value="Activate"
									isRounded={ true }
									isLoading={ !this.state.buttonLoading }
									action={ () => this.mockClick() }
								/>
								<Button
									type="secondary"
									value="Activate"
									isRounded={ true }
									isLoading={ !this.state.buttonLoading }
									action={ () => this.mockClick() }
								/>
							</div>
						</div>
						<div className="my-4">
							<h4 className="my-2">ButtonGroup</h4>
							<div className="flex flex-gap-1 my-1">
								<ButtonGroup>
									<Button type="primary" value="Active" isActive={ true } />
									<Button type="primary" value="Second" />
									<Button type="primary" value="Disabled" disabled={ true } />
								</ButtonGroup>
								<ButtonGroup>
									<Button type="secondary" value="Active" isActive={ true } />
									<Button type="secondary" value="Second" />
								</ButtonGroup>
								<ButtonGroup>
									<Button type="secondary" value="First" isRounded={ true } />
									<Button type="secondary" value="Active" isActive={ true } isRounded={ true } />
								</ButtonGroup>
							</div>
						</div>
						<div className="my-4">
							<h4 className="my-2">Checkbox</h4>
							<div className="flex flex-gap-1 flex-column my-1">
								<Checkbox
									label="Checkbox, hmm"
									isChecked={ this.state.checkbox }
									check={ () => this.toggleCheckbox() }
								/>
								<Checkbox label="This is disabled, checked" isChecked={ true } isDisabled={ true } />
								<Checkbox label="This is disabled, unchecked" isChecked={ false } isDisabled={ true } />
							</div>
						</div>
						<div className="my-4">
							<h4 className="my-2">Radio</h4>
							<div className="flex flex-gap-1 flex-column my-1">
								<Radio label="Val 1" value={ 0 } state={ this.state.radio } set={ e => this.setRadio(e) } />
								<Radio label="Val 2" value={ 1 } state={ this.state.radio } set={ e => this.setRadio(e) } />
								<Radio label="Disabled" value={ 4 } state={ this.state.radio } isDisabled={ true } />
							</div>
						</div>
						<div className="my-4">
							<h4 className="my-2">Range {this.state.range}</h4>
							<div className="flex flex-gap-1 flex-column my-1">
								<Range value={ this.state.range } set={ e => this.setRange(e) } />
							</div>
						</div>
						<div className="my-4">
							<h4 className="my-2">Progress</h4>
							<div className="flex flex-gap-1 flex-column my-1">
								<Progress value={ this.state.range } />
								<Progress value={ 34 } max={ 60 } />
								<Progress value={ 100 } />
							</div>
						</div>
						<div className="my-4">
							<h4 className="my-2">Input</h4>
							<div className="flex flex-gap-1 flex-column my-1">
								<Input change={ e => this.inputChange(e) } label="With label" placeholder="https://" />
								<Input change={ e => this.inputChange(e) } value="Without label, with value" />
								<Input change={ e => this.inputChange(e) } label="Number type" type="number" />
								<Input change={ e => this.inputChange(e) } label="Password type" type="password" />
								<Input change={ e => this.inputChange(e) } label="Date type" type="date" />
								<Input change={ e => this.inputChange(e) } label="Textarea type" type="textarea" />
							</div>
						</div>
					</Container>
					<style jsx global>{`
						:root {
							--shade-0: ${ themes[this.state.theme][0] };
							--shade-1: ${ themes[this.state.theme][1] };
							--shade-2: ${ themes[this.state.theme][2] };
							--shade-3: ${ themes[this.state.theme][3] };
							--shade-4: ${ themes[this.state.theme][4] };
							--shade-5: ${ themes[this.state.theme][5] };
							--shade-6: ${ themes[this.state.theme][6] };
							--shade-7: ${ themes[this.state.theme][7] };
						}

						body,
						input {
							font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
								"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
						}
					`}</style>
				</div>
			</Layout>
		)
	}
}

export default Index
