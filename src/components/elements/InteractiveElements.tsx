'use client';

import React, { useRef } from 'react';
import ComponentDisplay from '../ComponentDisplay/ComponentDisplay';

const InteractiveElements: React.FC = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	return (
		<section id='interactive-elements'>
			<h2 className='text-2xl font-bold mb-6 pb-2 border-b'>
				Interactive Elements
			</h2>

			<ComponentDisplay
				id='details-summary'
				title='Details & Summary'
				codeExample={`<details>
  <summary>Click to expand</summary>
  <p>This is the hidden content that appears when the summary is clicked.</p>
</details>`}>
				<details>
					<summary>Click to expand</summary>
					<p>
						This is the hidden content that appears when the summary
						is clicked.
					</p>
				</details>
			</ComponentDisplay>

			<ComponentDisplay
				id='dialog'
				title='Dialog'
				codeExample={`<button onclick="document.getElementById('demo-dialog').showModal()">Open Dialog</button>
<dialog id="demo-dialog">
  <h4>Dialog Title</h4>
  <p>This is a dialog window. Press Escape to close or click the button below.</p>
  <button onclick="document.getElementById('demo-dialog').close()">Close</button>
</dialog>`}>
				<div>
					<button onClick={() => dialogRef.current?.showModal()}>
						Open Dialog
					</button>
					<dialog ref={dialogRef}>
						<h4>Dialog Title</h4>
						<p>
							This is a dialog window. Press Escape to close or
							click the button below.
						</p>
						<button onClick={() => dialogRef.current?.close()}>
							Close
						</button>
					</dialog>
				</div>
			</ComponentDisplay>
		</section>
	);
};

export default InteractiveElements;
