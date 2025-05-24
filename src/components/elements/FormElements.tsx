'use client';

import React from 'react';
import ComponentDisplay from '../ComponentDisplay/ComponentDisplay';

const FormElements: React.FC = () => {
	return (
		<section id='form-inputs'>
			<h2 className='text-2xl font-bold mb-6 pb-2 border-b'>
				Form Inputs
			</h2>

			{/* Text Inputs */}
			<div id='text-inputs'>
				<h3 className='text-xl font-semibold mt-8 mb-4'>Text Inputs</h3>

				<ComponentDisplay
					id='text-input'
					title='Text Input'
					codeExample={`<input type="text" placeholder="Text input" />`}>
					<input type='text' placeholder='Text input' />
				</ComponentDisplay>

				<ComponentDisplay
					id='password-input'
					title='Password Input'
					codeExample={`<input type="password" placeholder="Password" />`}>
					<input type='password' placeholder='Password' />
				</ComponentDisplay>

				<ComponentDisplay
					id='email-input'
					title='Email Input'
					codeExample={`<input type="email" placeholder="Email" />`}>
					<input type='email' placeholder='Email' />
				</ComponentDisplay>

				<ComponentDisplay
					id='url-input'
					title='URL Input'
					codeExample={`<input type="url" placeholder="URL" />`}>
					<input type='url' placeholder='URL' />
				</ComponentDisplay>

				<ComponentDisplay
					id='tel-input'
					title='Telephone Input'
					codeExample={`<input type="tel" placeholder="Telephone" />`}>
					<input type='tel' placeholder='Telephone' />
				</ComponentDisplay>

				<ComponentDisplay
					id='search-input'
					title='Search Input'
					codeExample={`<input type="search" placeholder="Search" />`}>
					<input type='search' placeholder='Search' />
				</ComponentDisplay>
			</div>

			{/* Date & Time Inputs */}
			<div id='date-time-inputs'>
				<h3 className='text-xl font-semibold mt-8 mb-4'>
					Date & Time Inputs
				</h3>

				<ComponentDisplay
					id='date-input'
					title='Date Input'
					codeExample={`<input type="date" />`}>
					<input type='date' />
				</ComponentDisplay>

				<ComponentDisplay
					id='time-input'
					title='Time Input'
					codeExample={`<input type="time" />`}>
					<input type='time' />
				</ComponentDisplay>

				<ComponentDisplay
					id='datetime-local-input'
					title='DateTime-Local Input'
					codeExample={`<input type="datetime-local" />`}>
					<input type='datetime-local' />
				</ComponentDisplay>

				<ComponentDisplay
					id='month-input'
					title='Month Input'
					codeExample={`<input type="month" />`}>
					<input type='month' />
				</ComponentDisplay>

				<ComponentDisplay
					id='week-input'
					title='Week Input'
					codeExample={`<input type="week" />`}>
					<input type='week' />
				</ComponentDisplay>
			</div>

			{/* Other Inputs */}
			<div id='other-inputs'>
				<h3 className='text-xl font-semibold mt-8 mb-4'>
					Other Inputs
				</h3>

				<ComponentDisplay
					id='number-input'
					title='Number Input'
					codeExample={`<input type="number" min="0" max="10" />`}>
					<input type='number' min='0' max='10' />
				</ComponentDisplay>

				<ComponentDisplay
					id='range-input'
					title='Range Input'
					codeExample={`<input type="range" min="0" max="10" />`}>
					<input type='range' min='0' max='10' />
				</ComponentDisplay>

				<ComponentDisplay
					id='color-input'
					title='Color Input'
					codeExample={`<input type="color" />`}>
					<input type='color' />
				</ComponentDisplay>

				<ComponentDisplay
					id='file-input'
					title='File Input'
					codeExample={`<input type="file" />`}>
					<input type='file' />
				</ComponentDisplay>

				<ComponentDisplay
					id='checkbox-input'
					title='Checkbox Input'
					codeExample={`<input type="checkbox" id="check1" />
<label for="check1">Checkbox label</label>`}>
					<input type='checkbox' id='check1' />
					<label htmlFor='check1'>Checkbox label</label>
				</ComponentDisplay>

				<ComponentDisplay
					id='radio-input'
					title='Radio Input'
					codeExample={`<input type="radio" id="radio1" name="radios" />
<label for="radio1">Option 1</label>
<input type="radio" id="radio2" name="radios" />
<label for="radio2">Option 2</label>`}>
					<input type='radio' id='radio1' name='radios' />
					<label htmlFor='radio1'>Option 1</label>
					<input type='radio' id='radio2' name='radios' />
					<label htmlFor='radio2'>Option 2</label>
				</ComponentDisplay>

				<ComponentDisplay
					id='textarea'
					title='Textarea'
					codeExample={`<textarea placeholder="Textarea"></textarea>`}>
					<textarea placeholder='Textarea'></textarea>
				</ComponentDisplay>

				<ComponentDisplay
					id='select'
					title='Select'
					codeExample={`<select>
  <option value="">Choose...</option>
  <option>One</option>
  <option>Two</option>
</select>`}>
					<select>
						<option value=''>Choose...</option>
						<option>One</option>
						<option>Two</option>
					</select>
				</ComponentDisplay>

				<ComponentDisplay
					id='datalist'
					title='Datalist'
					codeExample={`<input list="browsers" placeholder="Enter a browser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>`}>
					<input list='browsers' placeholder='Enter a browser' />
					<datalist id='browsers'>
						<option value='Chrome' />
						<option value='Firefox' />
						<option value='Safari' />
						<option value='Edge' />
					</datalist>
				</ComponentDisplay>

				<ComponentDisplay
					id='output'
					title='Output'
					codeExample={`<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50" />
  +
  <input type="number" id="b" value="50" />
  =
  <output name="result" for="a b">100</output>
</form>`}>
					<form
						onInput={e => {
							const form = e.currentTarget;
							const a =
								form.querySelector<HTMLInputElement>('#a');
							const b =
								form.querySelector<HTMLInputElement>('#b');
							const result =
								form.querySelector<HTMLOutputElement>('output');
							if (a && b && result) {
								result.value = String(
									parseInt(a.value) + parseInt(b.value),
								);
							}
						}}>
						<input type='range' id='a' defaultValue='50' />
						+
						<input type='number' id='b' defaultValue='50' />=
						<output name='result' htmlFor='a b'>
							100
						</output>
					</form>
				</ComponentDisplay>
			</div>

			{/* Buttons */}
			<div id='buttons'>
				<h3 className='text-xl font-semibold mt-8 mb-4'>Buttons</h3>

				<ComponentDisplay
					id='submit-input'
					title='Submit Button'
					codeExample={`<input type="submit" value="Submit" />`}>
					<input type='submit' value='Submit' />
				</ComponentDisplay>

				<ComponentDisplay
					id='reset-input'
					title='Reset Button'
					codeExample={`<input type="reset" value="Reset" />`}>
					<input type='reset' value='Reset' />
				</ComponentDisplay>

				<ComponentDisplay
					id='button-element'
					title='Button Element'
					codeExample={`<button>Button</button>`}>
					<button>Button</button>
				</ComponentDisplay>
			</div>

			{/* Progress & Meter */}
			<div id='progress-meter'>
				<h3 className='text-xl font-semibold mt-8 mb-4'>
					Progress & Meter
				</h3>

				<ComponentDisplay
					id='progress'
					title='Progress'
					codeExample={`<progress value="70" max="100"></progress>`}>
					<progress value='70' max='100'></progress>
				</ComponentDisplay>

				<ComponentDisplay
					id='meter'
					title='Meter'
					codeExample={`<meter value="0.6">60%</meter>`}>
					<meter value='0.6'>60%</meter>
				</ComponentDisplay>
			</div>

			{/* Fieldset */}
			<div id='fieldset'>
				<h3 className='text-xl font-semibold mt-8 mb-4'>Fieldset</h3>

				<ComponentDisplay
					id='fieldset-legend'
					title='Fieldset with Legend'
					codeExample={`<fieldset>
  <legend>Legend</legend>
  <label for="f1">Label</label>
  <input id="f1" type="text" />
</fieldset>`}>
					<fieldset>
						<legend>Legend</legend>
						<label htmlFor='f1'>Label</label>
						<input id='f1' type='text' />
					</fieldset>
				</ComponentDisplay>
			</div>
		</section>
	);
};

export default FormElements;
