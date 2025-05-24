// interactiveElements.ts
import { ComponentProps } from '../types/Component';

export const interactiveElements: ComponentProps[] = [
	{
		id: 'details-summary',
		title: 'Details & Summary',
		category: 'Interactive Elements',
		description: '',

		codeSample: `<details>
  <summary>Click to expand</summary>
  <p>This is the hidden content that appears when the summary is clicked.</p>
</details>`,
	},
	{
		id: 'dialog',
		title: 'Dialog',
		category: 'Interactive Elements',
		description: '',

		codeSample: `<button onclick="document.getElementById('demo-dialog').showModal()">Open Dialog</button>
<dialog id="demo-dialog">
  <h4>Dialog Title</h4>
  <p>This is a dialog window. Press Escape to close or click the button below.</p>
  <button onclick="document.getElementById('demo-dialog').close()">Close</button>
</dialog>`,
	},
];
