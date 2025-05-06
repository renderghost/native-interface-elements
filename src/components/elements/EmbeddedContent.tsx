'use client';

import React from 'react';
import ComponentDisplay from '../ComponentDisplay/ComponentDisplay';

const EmbeddedContent: React.FC = () => {
	return (
		<section id='embedded-content'>
			<h2 className='text-2xl font-bold mb-6 pb-2 border-b'>
				Embedded Content
			</h2>

			<ComponentDisplay
				id='iframe'
				title='IFrame'
				codeExample={`<iframe src="https://example.com" width="300" height="200"></iframe>`}>
				<iframe
					src='https://example.com'
					width='300'
					height='200'></iframe>
			</ComponentDisplay>

			<ComponentDisplay
				id='embed'
				title='Embed'
				codeExample={`<embed type="image/svg+xml" src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/butterfly.svg" width="300" height="200">`}>
				<embed
					type='image/svg+xml'
					src='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/butterfly.svg'
					width='300'
					height='200'
				/>
			</ComponentDisplay>

			<ComponentDisplay
				id='object'
				title='Object'
				codeExample={`<object data="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/android.svg" type="image/svg+xml" width="300" height="200"></object>`}>
				<object
					data='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/android.svg'
					type='image/svg+xml'
					width='300'
					height='200'></object>
			</ComponentDisplay>
		</section>
	);
};

export default EmbeddedContent;
