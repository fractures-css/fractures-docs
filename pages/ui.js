import { Button, ButtonGroup, Checkbox, Color, Container, Radio, Range, Progress, Toggle, Input } from "fractures-ui"
import { Component } from "react"
import Layout from "../components/Layout"
import UiHero from "./components/UiHero"

class fUI extends Component {
	constructor(props) {
		super(props)

		this.state = {
			buttonLoading: false,
			checkbox: false,
			radio: 1,
			range: 0
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
		this.setState({ range: parseInt(value) })
	}

	// Mock input change
	inputChange(value) {
		console.log(value)
	}

	render() {
		return (
			<Layout title="UI — fractures">
				<Container className="py-4">
					<UiHero />
					<div className="my-4">
						<h4 className="my-2">Buttons</h4>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Default" action={ () => this.mockClick() } />
							<Button type="primary" value="Active" isActive={ true } />
							<Button type="primary" value="Disabled" isDisabled={ true } />
							<Button type="primary" value="Rounded" isRounded={ true } />
							<Button type="primary" value="Small" small={ true } />
							<Button type="primary" value="Small Rounded" small={ true } isRounded={ true } />
						</div>
						<div className="flex flex-gap-1 my-1">
							<Button type="secondary" value="Default" />
							<Button type="secondary" value="Active" isActive={ true } />
							<Button type="secondary" value="Disabled" isDisabled={ true } />
							<Button type="secondary" value="Rounded" isRounded={ true } />
							<Button type="secondary" value="Small" small={ true } />
							<Button type="secondary" value="Small Rounded" small={ true } isRounded={ true } />
						</div>
						<div className="flex flex-gap-1 my-1">
							<Button type="primary" value="Activate" isLoading={ !this.state.buttonLoading } action={ () => this.mockClick() } />
							<Button type="secondary" value="Activate" isLoading={ !this.state.buttonLoading } action={ () => this.mockClick() } />
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
								<Button type="primary" value="Disabled" isDisabled={ true } />
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
							<Checkbox label="Checkbox, hmm" isChecked={ this.state.checkbox } check={ () => this.toggleCheckbox() } />
							<Checkbox label="This is disabled, checked" isChecked={ true } isDisabled={ true } />
							<Checkbox label="This is disabled, unchecked" isChecked={ false } isDisabled={ true } />
							<Toggle label="This is a toggle" isChecked={ false } isDisabled={ false } />
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
