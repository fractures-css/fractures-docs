import { Button, ButtonGroup, Checkbox, Color, Container, Fractures, Radio, Range, Progress, Input } from "fractures-ui"
import { Component } from "react"
import chroma from "chroma-js"
import Layout from "../../components/Layout"
import Link from "next/link"

class fUI extends Component {
	constructor(props) {
		super(props)

		this.state = {
			buttonLoading: false,
			checkbox: false,
			radio: 1,
			range: 0,
			theme: "blue"
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
				<Fractures meta={ true } theme={ this.state.theme } />
				<aside className="sticky right-0 flex flex-right flex-gap-1 p-2" style={ { top: "4rem" } }>
					{themeList.map((theme, key) => (
						<Button
							action={ () => this.setState({ theme: theme.name }) }
							isActive={ this.state.theme === theme.name && true }
							key={ key }
							small={ true }
							type="primary"
							value={ theme.name }
						/>
					))}
				</aside>
				<Container className="py-4">
					<header className="pb-4">
						<h1>UI</h1>
						<p className="mb-2">
							Remember when I said framework agnostic?<br />Fractures UI is a small-but-nice, stateless
							component library for <b>React</b>, built on top of{" "}
							<Link href="/">
								<a>fractures</a>
							</Link>.
						</p>
						<p>
							This is really just an experimental implementation; not included in fractures.css.<br />
							Open an{" "}
							<a href="https://github.com/fractures/fractures-ui" target="_new">
								issue
							</a>, and tell me what you think.
						</p>
					</header>
					<div className="pb-4">
						<h3>Let me try</h3>
						<ul className="list-disc ml-4 mt-1">
							<li>
								<code>npm i fractures-ui</code>.
							</li>
							<li>
								<code>
									import {`{`} Button {`}`} from "fractures-ui"
								</code>.
							</li>
							<li>
								See code{" "}
								<a href="https://github.com/fractures/fractures-docs/blob/master/pages/ui.js#L69">
									examples
								</a>.
							</li>
							<li>
								Define the following css variables for :root.
								<pre>
									<code>--fr-ground: #ffffff;</code>
									<br />
									<code>--fr-100: #e8f2fd;</code>
									<br />
									<code>--fr-300: #76a7e7;</code>
									<br />
									<code>--fr-500: #3482da;</code>
									<br />
									<code>--fr-700: #2463a5;</code>
									<br />
									<code>--fr-900: #102a45;</code>
									<br />
									<code>--fr-focus: rgba(52, 130, 218, 0.4);</code>
									<br />
								</pre>
							</li>
						</ul>
					</div>
					<div className="pb-4">
						<h3>Goals</h3>
						<ul className="list-disc ml-4 mt-1">
							<li>Minimum viable design</li>
							<li>Functional prototypes</li>
						</ul>
					</div>
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
			</Layout>
		)
	}
}

export default fUI
