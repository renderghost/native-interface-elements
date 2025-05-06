// formElements.ts
import { ComponentProps } from '../types/Component';

export const formElements: ComponentProps[] = [
	{
		id: 'text-input',
		title: 'Text Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="text" placeholder="Text input" />`,
	},
	{
		id: 'password-input',
		title: 'Password Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="password" placeholder="Password" />`,
	},
	{
		id: 'email-input',
		title: 'Email Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="email" placeholder="Email" />`,
	},
	{
		id: 'tel-input',
		title: 'Telephone Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="tel" placeholder="Telephone" />`,
	},
	{
		id: 'url-input',
		title: 'URL Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="url" placeholder="https://renderg.host" />`,
	},
	{
		id: 'search-input',
		title: 'Search Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="search" placeholder="Search" />`,
	},
	{
		id: 'date-input',
		title: 'Date Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="date" />`,
	},
	{
		id: 'time-input',
		title: 'Time Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="time" />`,
	},
	{
		id: 'month-input',
		title: 'Month Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="month" />`,
	},
	{
		id: 'week-input',
		title: 'Week Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="week" />`,
	},
	{
		id: 'number-input',
		title: 'Number Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="number" min="0" max="10" />`,
	},
	{
		id: 'range-input',
		title: 'Range Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="range" min="0" max="100" />`,
	},
	{
		id: 'color-input',
		title: 'Colour Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="color" />`,
	},
	{
		id: 'checkbox-input',
		title: 'Checkbox Input',
		category: 'Form Inputs',
		description: '',

		codeSample: `<input type="checkbox" id="check1" /><label for="check1">Checkbox label</label>`,
	},
	{
		id: 'radio-input',
		title: 'Radio Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `
            <input type='radio' id='radio1' name='radios' />
            <label htmlFor='radio1'>Option 1</label>
            <input type='radio' id='radio2' name='radios' />
            <label htmlFor='radio2'>Option 2</label>
                `,
	},
	{
		id: 'file-input',
		title: 'File Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="file" />`,
	},
	{
		id: 'datalist-input',
		title: 'Datalist Input',
		category: 'Form Inputs',
		description: '',
		codeSample: `
            <input list='browsers' placeholder='Enter a browser' />
				<datalist id='browsers'>
					<option value='Chrome' />
					<option value='Firefox' />
					<option value='Safari' />
					<option value='Edge' />
				</datalist>`,
	},
	{
		id: 'output',
		title: 'Output',
		category: 'Form Inputs',
		description: '',
		codeSample: `<form oninput="result.value=parseInt(a.value)+parseInt(b.value)"><input type="range" id="a" value="50" />+<input type="number" id="b" value="50" />=<output name="result" for="a b">100</output></form>`,
	},
	{
		id: 'reset-input',
		title: 'Reset Button',
		category: 'Form Inputs',
		description: '',
		codeSample: `<input type="reset" value="Reset" />`,
	},
	{
		id: 'button-element',
		title: 'Button Element',
		category: 'Form Inputs',
		description: '',
		codeSample: `<button>Button</button>`,
	},
	{
		id: 'progress',
		title: 'Progress',
		category: 'Form Inputs',
		description: '',
		codeSample: `<progress value="70" max="100"></progress>`,
	},
	{
		id: 'meter',
		title: 'Meter',
		category: 'Form Inputs',
		description: '',
		codeSample: `<meter value="0.6">60%</meter>`,
	},
	{
		id: 'fieldset-legend',
		title: 'Fieldset with Legend',
		category: 'Form Inputs',
		description: '',
		codeSample: `<fieldset><legend>Legend</legend><label for="f1">Label</label><input id="f1" type="text" /></fieldset>`,
	},
];
